(function(storyContent) {

    backgroundMusicSrc = "Assets/sounds/racha.mp3"
    nome = "protagonista";
    // Create ink story from the content using inkjs
    story = new inkjs.Story(storyContent);

    // Global tags - those at the top of the ink file
    // We support:
    //  # theme: dark
    //  # author: Your Name
    globalTags = story.globalTags;



    if( globalTags ) {
        for(var i=0; i<story.globalTags.length; i++) {
            var globalTag = story.globalTags[i];
            var splitTag = splitPropertyTag(globalTag);

            // THEME: dark
            if( splitTag && splitTag.property == "theme" ) {
                document.body.classList.add(splitTag.val);
            }

            // author: Your Name
            else if( splitTag && splitTag.property == "author" ) {
                var byline = document.querySelector('.byline');
                byline.innerHTML = "by "+splitTag.val;
            }
        }
    }

    storyContainer = document.querySelector('#gameContainer');
    timelineContainer = document.querySelector('#timelineContainer');
    choicesContainer = document.querySelector('#choicesContainer');
    outerScrollContainer = document.querySelector('.outerContainer');


    // Kick off the start of the story!
//    continueStory(true);
})(storyContent);

    // Main story processing function. Each time this is called it generates
    // all the next content up as far as the next set of choices.
    function continueStory(firstTime) {

        if(firstTime){
            var soundDiv = document.getElementById('backgroundMusic');
            soundDiv.src = backgroundMusicSrc;
            soundDiv.play();
            soundDiv.loop = true;
        }

        var paragraphIndex = 0;
        var delay = 0.0;

        // Don't over-scroll past new content
//        var previousBottomEdge = firstTime ? 0 : contentBottomEdgeY();

        // Generate story text - loop through available content
        while(story.canContinue) {
            var actualDelay = 200;

            // Get ink to generate the next paragraph
            var paragraphText = story.Continue();
            var tags = story.currentTags;
            // Any special tags included with this line
            var customClasses = [];
            for(var i=0; i<tags.length; i++) {
                var tag = tags[i];
                // Detect tags of the form "X: Y". Currently used for IMAGE and CLASS but could be
                // customised to be used for other things too.
                var splitTag = splitPropertyTag(tag);

                if( splitTag && splitTag.property == "DELAY") {
                    delay += (splitTag.val * 1000) - 200;
                    actualDelay = (splitTag.val * 1000) - 200;
                }

                if (splitTag && splitTag.property == "SOUNDEFFECT") {
                    var soundSrc = document.getElementById('soundEffects');
                    soundSrc.src = splitTag.val;
                    console.log(`VOU TOCAR A MÚSICA ${soundSrc} com delay de ${actualDelay}`);
                    
                    setTimeout(() => {
                        soundSrc.play()
                        console.log(`TOQUEI A ${soundSrc}`)
                    }, actualDelay);
                }
                // IMAGE: src
                if( splitTag && splitTag.property == "IMAGE" ) {
                    var cena = document.getElementById('cena');
                    //Pega sempre o indice do fundo, é único que tem essa classe.
                    cena.style.backgroundImage = "url('"+splitTag.val+"')";
                }

                if( splitTag && splitTag.property == "INPUT"){
                    var p = document.createElement('p');
                    p.id = "generico";
                    //Cria input
                    var inputElement = document.createElement('input');
                    inputElement.type = "text";
                    inputElement.id = "name";
                    inputElement.classList.add('input-text');
                    p.appendChild(inputElement);
                    timelineContainer.appendChild(p);
                }

                
                if( splitTag && splitTag.property == "ANIMATION"){
                    debugger;
                    if (splitTag.val == "pira") {
                        var cena = document.getElementById('cena');
                        cena.classList.add('bg-glitch');
                    }
                    if (splitTag == "para") {
                        var cenas = document.getElementsByClassName('bg-glitch');
                        cenas.forEach(cena => {
                            cena.classList.remove('bg-glitch');
                        });
                    }
                }

                // CLASS: className
                else if( splitTag && splitTag.property == "CLASS" ) {
                    customClasses.push(splitTag.val);
                }

                // CLEAR - removes all existing content.
                // RESTART - clears everything and restarts the story from the beginning
                else if( tag == "CLEAR" || tag == "RESTART" ) {
                    removeAll("p");
                    removeAll("a");
                    removeAll("img");

                    if( tag == "RESTART" ) {
                        restart();
                        return;
                    }
                }
            }

            actualDelay = 200;
            // Create paragraph element (initially hidden)
            var paragraphElement = document.createElement('p');
            // Parse and replace

            console.log(paragraphText);
            paragraphElement.innerHTML = replaceInternalTags(paragraphText)
            timelineContainer.appendChild(paragraphElement);

            customClasses.push("texto-historia");
            // Add any custom classes derived from ink tags
            for(var i=0; i<customClasses.length; i++)
                paragraphElement.classList.add(customClasses[i]);


            // Fade in paragraph after a short delay
            showAfter(delay, paragraphElement);
            delay += 200.0;
        }


        // Create HTML choices from ink choices
        story.currentChoices.forEach(function(choice) {

            // Create paragraph with choice text
            var paragraphInsideChoice = document.createElement('p');
            paragraphInsideChoice.innerHTML = `${choice.text}`;
            paragraphInsideChoice.classList.add("choice-p");
            // Create paragraph with anchor element
            var choiceAnchorElement = document.createElement('a');
            choiceAnchorElement.innerText = ``
            choiceAnchorElement.classList.add("choice-a");
            choiceAnchorElement.href = '#';

            choiceAnchorElement.innerHTML = paragraphInsideChoice.outerHTML;
            choicesContainer.appendChild(choiceAnchorElement);

            // Fade choice in after a short delay
            showAfter(delay, choiceAnchorElement);
            delay += 200.0;

            // Click on choice
            var choiceAnchorEl = choiceAnchorElement.querySelectorAll("p")[0];
            choiceAnchorEl.addEventListener("click", function(event) {
                setNome();

                // Don't follow <a> link
                event.preventDefault();

                // Remove all existing choices
                //Limpa texto após a escolha
                removeAll("p");
                removeAll("a");
                removeAll("p.choice");

                // Tell the story where to go next
                story.ChooseChoiceIndex(choice.index);


                // Aaand loop
                continueStory();
            });
        });

        // Extend height to fit
        // We do this manually so that removing elements and creating new ones doesn't
        // cause the height (and therefore scroll) to jump backwards temporarily.
//        storyContainer.style.height = contentBottomEdgeY()+"px";

//        if( !firstTime )
//            scrollDown(previousBottomEdge);
    }

    function restart() {
        story.ResetState();

        setVisible(".header", true);

        continueStory(true);

        outerScrollContainer.scrollTo(0, 0);
    }

    // -----------------------------------
    // Various Helper functions
    // -----------------------------------

    // Fades in an element after a specified delay
    function showAfter(delay, el) {
        el.classList.add("hide");
        setTimeout(function() { el.classList.remove("hide") }, delay);
    }
    // The Y coordinate of the bottom end of all the story content, used
    // for growing the container, and deciding how far to scroll.
    function contentBottomEdgeY() {
        var bottomElement = timelineContainer.lastElementChild;
        if(bottomElement){
            console.log(bottomElement.offsetTop + bottomElement.offsetHeight);
        }
//        return bottomElement ? bottomElement.offsetTop + bottomElement.offsetHeight : 0;
        return 0;
    }

    // Remove all elements that match the given selector. Used for removing choices after
    // you've picked one, as well as for the CLEAR and RESTART tags.
    function removeAll(selector)
    {
        var allElements = timelineContainer.querySelectorAll(selector);
        for(var i=0; i<allElements.length; i++) {
            var el = allElements[i];
            el.parentNode.removeChild(el);
        }
        allElements = choicesContainer.querySelectorAll(selector);
        for(var i=0; i<allElements.length; i++) {
            var el = allElements[i];
            el.parentNode.removeChild(el);
        }
    }

    // Used for hiding and showing the header when you CLEAR or RESTART the story respectively.
    function setVisible(selector, visible)
    {
        var allElements = timelineContainer.querySelectorAll(selector);
        for(var i=0; i<allElements.length; i++) {
            var el = allElements[i];
            if( !visible )
                el.classList.add("invisible");
            else
                el.classList.remove("invisible");
        }
        var allElements = choicesContainer.querySelectorAll(selector);
        for(var i=0; i<allElements.length; i++) {
            var el = allElements[i];
            if( !visible )
                el.classList.add("invisible");
            else
                el.classList.remove("invisible");
        }
    }

    // Helper for parsing out tags of the form:
    //  # PROPERTY: value
    // e.g. IMAGE: source path
    function splitPropertyTag(tag) {
        var propertySplitIdx = tag.indexOf(" ");
        if( propertySplitIdx != null ) {
            var property = tag.substr(0, propertySplitIdx).trim();
            var val = tag.substr(propertySplitIdx+1).trim();
            return {
                property: property,
                val: val
            };
        }

        return null;
    }

    function replaceInternalTags(paragraph){
        var newP;
        newP = paragraph.replace(/&&\[(.*)\](.*)&&/i,"<span class='chip $1'>$2</span>");
        newP = newP.replace(/\/it(.*)\/it/i,"<i>$1</i>");
        newP = newP.replace(/%nome%/i,nome);
        return newP;
    }

    function setNome(){
        if(document.getElementById("name") != null){
            nome = document.getElementById("name").value;
            if(nome.length <= 0){
                nome = 'Protagonista';
            }
            document.getElementById('generico').style.display = 'none';
        }
    }