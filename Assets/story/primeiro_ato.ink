INCLUDE fichas.ink


VAR karma =  0

VAR conhece_a_soc_sec = false

VAR soc_sec_existe = true

VAR favoravel_a_soc_sec = true

LIST causa_da_pira = Droga, Ambiente, Trauma

LIST minha_reacao = Boa, Ruim

LIST pessoa_observada = (Traficante), Vereador, Pastor 

// -> a_soc_sec
-> acordou

=== acordou ===
#IMAGE Assets/cenas/acorda.jpg
Vultos.
Som alto. 
Luzes estrobocópicas, indo e voltando. 


* [???] O que estou fazendo aqui?
** [Olhar em volta] -> se_ambienta

->END

=== se_ambienta ===
#CLEAR
#IMAGE Assets/cenas/ambienta-se.jpg
Uma multidão ao meu redor.

Consigo distinguir o funk estourado nas caixas de som nas laterais de um grande galpão.

Estou na Lagoinha.
    
    * [Olhar para a esquerda] 
    Eu olho para a esquerda, e vejo {nome_vereador}...
    ~ pessoa_observada = Vereador
    ~ karma -= 1
    -> fichas.vereador -> porque_estou_aqui
    
    * [Olhar para a direita] 
    Eu olho para a direita, e vejo {nome_pastor}...
    ~ pessoa_observada = Pastor
    ~ karma += 0.75
    -> fichas.pastor -> porque_estou_aqui
    

    * [Olhar para a frente] 
    Eu olho para a frente, e perto vejo {nome_traficante} subindo no palco
    ~ pessoa_observada = Traficante
    ~ karma += 0.5
    -> fichas.traficante -> porque_estou_aqui


=== porque_estou_aqui ===
* ...[]

{pessoa_observada:
- Pastor:
Lembrei me do presságio que o pastor me deu da ultima vez que o encontrei.

- Vereador:
Hoje esse pilantra não sai daqui sem dar satisfação para esse povo todo.

- Traficante:
Vou precisar da ajuda dele em breve. 
}

#DELAY: 1
Acho que é hoje o dia!

** Então...[] é por isso que estou aqui!

#DELAY: 1

-> microfonia
= microfonia
#SOUNDEFFECT Assets/sounds/microfonia.wav

Escuto uma  &&[warning]MICROFONIA&&

#DELAY: 1.5

Olho para o palco e lá está {nome_traficante}...


** [Prestar atenção no palco] -> discurso_traficante



=== discurso_traficante ===
#IMAGE Assets/cenas/Cafuzo.jpg
&&[fala]{nome_traficante}&&:

/it "Graças a Deus e a &&[danger]FIRMA&& esse evento tá sendo  realizado e concretizado!" /it 
/it "Tamo aqui mais um ano familia! VIVÃO E VIVENO!!!" /it

#DELAY 0.7

/it "Muita coletividade na quebrada, dinheiro no bolso. Sem miséria, e é nóis!!!" /it

#DELAY 0.8

/it "Vamos brindar o dia de hoje, que o amanhã só pertence a Deus, a vida é loka!" /it

#DELAY 0.6

{pessoa_observada != Traficante:
* [Quem é {nome_traficante}?] -> fichas.traficante -> salve_pastor
}
* [Continuar ouvindo o discurso]->salve_pastor


=salve_pastor
&&[fala]{nome_traficante}:&&

/it "RAPAZEADA! Faz barulho pro {nome_pastor} que tem ajudado diariamente a manter a paz aqui no morro. O homi é o brabo! Tá com ele ta com Deus!" /it

#DELAY 1.2
#SOUNDEFFECT Assets/sounds/muvuca
O povo ovaciona, batendo nas cadeiras. 
#DELAY 0.7
Estouraram &&[warning]fogos de artificio&& muito perto de onde eu estou.

{ pessoa_observada != Pastor:
** [Quem é {nome_pastor}?] -> fichas.pastor -> salve_vereador
}
** [Continuar ouvindo o discurso...] -> salve_vereador



= salve_vereador 
&&[fala]{nome_traficante}:&&
/it "Faz barulho ae também pro meu chapa, o doutor {nome_vereador}, que olha por nós la da prefeitura! Esse é cria da comunidade, ta se dando bem na vida, exemplo pra nossas criança!" /it

#DELAY 1.2
#SOUNDEFFECT Assets/sounds/muvuca2
O povo grita ainda mais forte. 
#DELAY 0.7
Ouve se uma &&[warning]rajada&&.

{ pessoa_observada != Vereador:
* [Quem é {nome_vereador}?] -> fichas.vereador -> salve_geral
}
* [Continuar ouvindo o discurso ...] -> salve_geral

= salve_geral
/it "E faz barulho também pra todo mundo que compareceu ai no role, e tá fechado com a &&[danger]FIRMA&&!/it 
#DELAY 1
/it Salve pros irmão pego fora de posição, lili vai cantar!!!  /it
#DELAY 1.5
/it E pra todo mundo que já partiu, que teja no céu olhando por nós!" /it

* [...]
#SOUNDEFFECT Assets/sounds/muvuca3
A comunidade vai ao caos, barulho de tiro pro alto, rajadas de metralhadora, muita gritaria e fogos de artificio.


**** [O que é isso?] -> pira
->END

=== pira ===
#ANIMATION pira
#IMAGE Assets/cenas/pira_ativada.jpg

Esse discurso... por que será que.. ele... 
#DELAY 0.7
Nossa... que estranho....

#DELAY 0.8
Até parece que tá todo mundo me olhando...

#DELAY 0.9
Porquê tá todo mundo me olhando?

*?????[]

Começo a sentir calafrios subindo pela espinha. 

#DELAY 0.7
Será... Tem alguém me perseguindo!

#DELAY 0.7

Esse lugar nunca esteve tão pesado. 
#DELAY 0.7

Esse discurso do {nome_traficante}... 

#DELAY 0.8
Por que ele mencionou &&[danger]A FIRMA&&?

**[...]->noia

=noia
Não, não, não, isso não é comum. 

Eu devo estar entrando em alguma paranóia... 
Tá, é só uma noia.
#DELAY 1
Respire fundo. Se acalme. Tente entender a situação.

* [Por quê?]->porque
= porque

Por que estou assim?
    
    * [Olhar para a mão] -> noia_droga -> oferta
    
    * [Olhar para o {nome_traficante}] -> noia_trauma  -> pos_pira
    
    * [Olhar ao redor] -> noia_ambiente -> pos_pira


= noia_droga
    ~ causa_da_pira = Droga
    ~ karma +=0.5
Vejo o pedaço de aluminio onde estava um papel amargo que tomei mais ou menos 1h30 atrás...
Talvez isso esteja influenciando um pouco dos meus pensamentos...
A ultima vez que tomei quase enloqueci. Quase perdi a minha cabeça.
#ANIMATION: psicodelia   
->->

= noia_trauma
    ~ causa_da_pira = Trauma
    ~ karma +=1
No braço de Cafuso da pra enxergar o nome da minha irmã. A tatuagem com o tempo já deu uma desbotada.

#ANIMATION: memorias

As memórias vem lentamente preenchendo minha cabeça. Lembro de tudo que aconteceu alguns meses atrás. 

#DELAY 0.5
O &&[warning]corpo&& sangrando no chão da cozinha.
#DELAY 1

->->

= noia_ambiente
    ~ causa_da_pira = Ambiente
    ~ karma -=0.5

Mesmo vindo aqui sempre as pessoas estão agindo diferente. Aqui sempre foi muito confortável. Não gosto disso, estão e olhando e me julgando.

* Não...[]
O ar simplesmente não entra nos meus pulmões independente do quanto eu tente... Estou ficando sem ar.

#ANIMATION: sufocado
->->


= oferta
&&[fala]{nome_conhecido}:&&
/it "Ce tá de boa parça? Ta moscando ae" /it
/it "Toma essa agua! Tu vai melhorar!" /it
Falou com um sorriso suspeito.

Pra mim é tentação do Diabo. Não preciso disso.
Mas to desidratando.
Preciso.

Não Deve estar....
*[....]

-> pos_pira

= pos_pira
#ANIMATION para
Não.
#DELAY 0.5

Não deveria estar aqui. 

A voz de Cafuzo volta a ficar mais alto que da multidão 
* [Voltar a prestar atenção em {nome_traficante}] 
->ressoa 


=== ressoa ===

&&[fala]{nome_traficante}:&&

/it "E digo mais!" /it

#DELAY 1

->a_chegada_dos_bico

=== a_chegada_dos_bico ===
#IMAGE Assets/cenas/bicos.jpg
#SOUNDEFFECT Assets/sounds/sirene
Ouço uma sirene
* [Olho para trás]

Esses caras, sempre aparecendo aqui para encher o nosso saco.. mesmo a gente não fazendo nada. 
Dizem que é para isso que eles servem, a lei, quando na verdade só fazem o que bem entendem...
**[...]
{causa_da_pira:
- Trauma: -> dialogo_bico.trauma
- Droga: -> dialogo_bico.droga
- Ambiente: -> dialogo_bico.ambiente
}

= reacao
** [Meu sangue começa a ferver só olhando para eles] -> reacao_bico.ruim -> saida_dos_bico
** [Tenta se acalmar, eu sei que eles fazem isso, mas nem todos são assim...] -> reacao_bico.boa -> saida_dos_bico

= saida_dos_bico

- Antes de eu poder fazer alguma coisa, já os vejo dando meia volta e sendo democraticamente expulsos.
-> reflexao_pos_bico

=== reacao_bico ===
= boa 
~ minha_reacao = Boa
~ karma-=1.25

->->
= ruim
~ minha_reacao = Ruim
~ karma+=1

->->

=== dialogo_bico

= trauma
    Esses filhas da puta que levaram a minha irmã de mim. Invadiram a minha casa para conseguir mais informações sobre {nome_traficante} e quando ela não quis entregar a mataram...
-> a_chegada_dos_bico.reacao

= droga 
    Esses filha da puta que não me deixam nem andar na rua calmamente, que vem embaçar comigo. Algumas pessoas só querem sair um pouco da situação onde estão, por que é a unica opção que eles tem.
-> a_chegada_dos_bico.reacao

= ambiente 
    Esses filha da puta sempre enquadrando a galera, não podem nem ver gente da vila, que já nos separam, nos agridem, para o bem maior.
-> a_chegada_dos_bico.reacao

=== reflexao_pos_bico ===
// varia de acordo com a minha reacao

{minha_reacao:
- Boa: Viu, no fim eles só vieram checar o que estava acontecendo. Prestando serviço eu imagino.
- Ruim: Ainda bem que eles já foram tocados daqui, se não eu mesmo faria algo.
}


*[...]
Uma criança passou correndo com um brinquedo que foi dado pelo Seu Jaci na igreja. Parece praga esses brinquedos, todas as crianças ricas da cidade tem. 
**[...]
Espera, como que o pastor conseguiu o dinheiro para financiar isso? Que simbolo é esse? É uma piramide invertida?

***[...] ->o_plano 

=== o_plano ===
As crianças com brinquedos, os 'soldados' do Cafuzo estão todas com as armas mais novas. 
As armas... elas também estão com esse simbolo? 
* [...]
Peguei o brinquedo de uma das crianças que passava, e passei o dedo sobre o simbolo. De onde está vindo esse dinheiro ? 
No entanto para que? Qual é o objetivo disso ?
Parando para pensar o Cafuzo tinha mencionado o pastor e o vereador, será que eles realmente...?
** [...]
Se antes já achava que estava entrando em uma paranoia agora tenho certeza, mas parece a única opção.
Eles fizeram uma aliança entre eles.
Tendo conversado bastante com eles, sei exatamente o que estão pensando.
*** [...]
Edvaldo tem estado na política a algum tempo, e nunca consegue o reconhecimento desejado.
Seu Jaci acabou de chegar na vila, mas já é aclamado por muitos, mas antes de cair aqui era um homem muito mais rico e vivia uma situação diferente.
Cafuzo nasceu e cresceu aqui e sempre buscou ser o melhor.
**** [...]
Eles  queriam inverter a atual piramide social.
***** [...]


{ karma > 0:
-> discurso_contra_soc_sec
- else:
-> discurso_a_favor_soc_sec
}

=== discurso_contra_soc_sec ===
Eu nunca imaginaria que eles iriam se unir desse jeito, para um fim tão fútil. Status são somente péssimos rótulos. 
Completamente desnecessário, fico feliz pelas crianças, no entanto se usassem esse dinheiro para melhorar a situação que temos hoje.
*[...]
Estufei o peito e segui até o palco. 
Peguei o microfone.
**[...]
/it Pessoas, eu não quero atrapalhar esse rolê que estamos tendo aqui, no entanto acho que a descoberta que eu acabei de ter é muito interessante e vocês vão querer saber./it
#DELAY 0.7
Respiro fundo
***[...]
/it Nosso querido anfitrião aqui. /it Aponto para Cafuzo.
/it se uniu com o Vereador, vocês devem ter se perguntando por que os projetos de retirada de lixo das ruas pararam. /it
/it Acredito que a falta do dinheiro para pagarem essa empresa realmente desmotivou eles a continuar a trabalhar. /it
****[...]
Olhando para o Vereador direciono minha atenção para Seu Jaci.
/it Dinheiro que foi direcionado para a igreja e gastos 'necessários' /it
/it A não muito tempo Seu Jaci, o homem de Deus, disse que eu iria fazer muito bem para muitas pessoas no futuro, e talvez /it
/it Impedir que eles tentem inverter a piramide social, pois na cabeça deles, essa é a solução. Quando na verdade estão colocando um alvo gigante no nosso peito. /it
*****[...]
/it Isso vai piorar uma relação já conturbada com o resto da sociedade. /it
******[...]-> a_soc_sec


=== discurso_a_favor_soc_sec ===
...
Parando para pensar isso não é uma ideia tão terrível assim. 
Considerando a quantidade de batidas que nós sofremos, simples por estarmos cozinhando para nosssas familias com som um pouco mais alto.
Aparentemente não podemos nem mais nos divertir, sempre sendo julgados, enquanto não fazemos nada diferente do resto da sociedade.
*[...]
Consigo ouvir meus passos no fundo da música, quando me dou conta estou caminhando até o palco.
Isso precisa ser compartilhado, podemos mudar a situação da vida de muitos, no fim, estaremos todos juntos.
Pego um microfone no chão e bato duas vezes nele para chamar atenção.
**[...]
/it Dae galera! /it
Caminhei para o outro lado do palco calmamente.
/it Eu sei, que estou impedindo vocês de ouvir a nossa tão querida música. /it
***[...]
/it Deixa eu explicar melhor. Nós aqui sempre somos injustiçados, julgados e deixado de lado, mas graças ao plano que a nossa querida sociedade secreta desenvolveu... /it
/it Sim, sim. Nosso querido anfitrião, que nos trouxe hoje aqui para essa maravilhosa festa, tem se unido ao pastor e ao vereador para. Inverter essa nossa situação. /it
****[...]
/it Mudaremos! Juntos! Para uma melhor situação! /it

-> a_soc_sec



=== a_soc_sec ===
Enquanto ainda no palco 

#IMAGE Assets/cenas/cena_comum.jpg

{ shuffle:
	- ->existe
	~ soc_sec_existe = true
	- ->nao_existe 
	~ soc_sec_existe = false
}

=== existe === 
Cafuzo chama a minha atenção de onde está, no meio da multidão que estava confusa diante do meu discurso.
*[...]

{karma > 0:
-> a_favor
- else: 
-> contra
}


    = a_favor
        Todo o medo e paranóia que estava sentindo antes desapareceriam do meu corpo. 
        Estava enfim em um lugar de confiança.
        **[...]
        /it Fico feliz que nosso companheiro pensa assim do nosso plano. Não tinhamos compartilhado com vocês esse plano ainda, pois estava sendo lentamente implementado./it
        /it Afinal não queriamos lhes dar esperanças que podiam não se concretizar, mas o vendo falar percebo como erramos. Pois unidos somos muito mais fortes! /it
        ***[...]
        -> um_grito_na_multidao


    = contra
        Os olhos de Cafuzo me fuzilavam de onde eu estava. Talvez essa não tenha sido uma das minhas melhores decisões. 
        **[...]
        As pessoas estavam animadas e apoiavam a minha ideia, que temos outras maneiras de corrigir os problemas que enfrentamos.
        O sentimentos que antes gritavam dentro do meu corpo voltaram a ressoar. 
        ***[...]
        Antes de ser removido de lá Seu Jaci aparece perto do palco irritado, falava sobre como eu iria me arrepender de ter feito aquilo, que o presságio que ele previa não iria mais acontecer por ter feito isso.
        ****[...]

        -> um_grito_na_multidao

==== nao_existe ===

As pessoas que eu tinha mencionado começaram a me olhar de maneira esquisita, como se não entendesse o que eu estava falando.
*[...]

{karma > 0:
-> a_favor
- else:
-> contra
}

    = a_favor
        Edvaldo, completamente irritado, dava para perceber olhando seu rosto, começou a subir no palco e tomou o microfone da minha mão.
        *[...]
        /it Essa, não é a situação mais apropriada para isso, no entanto diante do discurso desse inutil tive que fazer algo a respeito. /it
        **[...]
        /it Não tem tido o tal desvio de dinheiro para poder bancar essa tal sociedade secreta louca que ele está falando. Jamais encostaria no dinheiro do povo. /it
        /it Vim aqui para participar da festa do meu grande amigo Cafuzo, no entanto venho e além não poder aproveitar a situação sou ofendido de estar participando de uma ideia louca e paranoica dele. /it
        ***[...]

        -> um_grito_na_multidao
    
    =contra 
        Seu Jaci se aproximou do palco, e levantou os braços chamando atenção das pessoas diante da confusão.
        *[...]
        /it Eu a algum tempo, previ que essa pessoa iria fazer uma boa ação diante da nossa vila, por mais que seus pensamentos estavam errados em termos uma... como ele disse? /it
        uma sociedade secreta. /it
        **[...]
        /it Por mais que seu modo tenha sido confuso, ele vem aqui hoje para nos influenciar a sermos pessoas melhores, e nos por na situação melhor, por que nós merecemos /it
        /it Somos todos filhos de Deus! Assim todos merecem uma vida boa! /it
        ***[...]

        -> um_grito_na_multidao


=== um_grito_na_multidao ====

{soc_sec_existe:
-> grito_existe
- else:
-> grito_nao_existe
}

= grito_existe
    Alguém na multidão ergue a voz de jeito que era para todos ouvirem.
    *[...]
    ->quem_e_voce
    
= grito_nao_existe
    Após eu descer do palco, alguém me chama para o canto verificando se eu estava bem.
    *[...]
    ->quem_e_voce


==== quem_e_voce

Quem é você?

#INPUT nome

* É esse meu nome[]

%nome%
->DONE
*[...]

->prologo

=== prologo ===

prologo

-> END
