var gameMenu = document.getElementById('gameMenu');
var gameContainer = document.getElementById('gameContainer');
var timelineContainer = document.getElementById('timelineContainer');
var choicesContainer = document.getElementById('choicesContainer');

function startGame() {
  gameMenu.classList.add(['opacity-zero']);
  setTimeout(() => {
    gameMenu.style.display = 'none';
    timelineContainer.classList.remove(['hidden']);
    choicesContainer.classList.remove(['hidden']);
    choicesContainer.classList.remove('opacity-zero');
    timelineContainer.classList.remove('opacity-zero');
    continueStory(true);
  }, 1000);
}
