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
Luzes esstrobocópicas, indo e voltando. 

* [???] O que estou fazendo aqui?
** [Olhar em volta] -> se_ambienta

->END

=== se_ambienta ===
#CLEAR
#IMAGE Assets/cenas/ambienta-se.jpg
Uma multidão ao meu redor.

Consigo distinguir o funk estourado nas caixas de som nas laterais de um grande galpão.

Estou na Lagoinha.

    * [Olhar para a direita] 
    Eu olho para a direita, e vejo {nome_pastor}.
    ~ pessoa_observada = Pastor
    ~ karma += 1
    -> fichas.pastor -> porque_estou_aqui
    
    * [Olhar para a esquerda] 
    Eu olho para a esquerda, e vejo {nome_vereador}.
    ~ pessoa_observada = Vereador
    ~ karma += 1
    -> fichas.vereador -> porque_estou_aqui
    
    * [Olhar para a frente] 
    Eu olho para a direita, e vejo {nome_traficante}.
    ~ pessoa_observada = Traficante
    ~ karma += 1
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

#DELAY: 1.5

-> microfonia
= microfonia
#SOUNDEFFECT Assets/sounds/microfonia.wav

Escuto uma  &&[warning]MICROFONIA&&

#DELAY: 1.5

Olho para o palco e lá está {nome_traficante}...
->opcoes

= opcoes

** [Prestar atenção no palco] -> discurso_traficante

{ not pessoa_observada == Traficante:
** [Quem é {nome_traficante}?] -> fichas.traficante -> opcoes
}


=== discurso_traficante ===
#IMAGE Assets/cenas/Cafuzo.jpg
&&[fala]{nome_traficante}&&:

/it "Graças a Deus e a &&[danger]FIRMA&& esse evento tá sendo  realizado e concretizado!" /it 
/it "Tamo aqui mais um ano familia! VIVÃO E VIVENO!!!" /it

#DELAY 1

/it "Muita coletividade na quebrada, dinheiro no bolso. Sem miséria, e é nóis!!!" /it

#DELAY 1

/it "Vamos brindar o dia de hoje, que o amanhã só pertence a Deus, a vida é loka!" /it

* [...]

&&[fala]{nome_traficante}:&&

/it "RAPAZEADA! Faz barulho pro {nome_pastor} que tem ajudado diariamente a manter a paz aqui no morro. O homi é o brabo! Tá com ele ta com Deus!" /it

{ pessoa_observada != Pastor:
** [Quem é {nome_pastor}?] -> fichas.pastor -> muvuca1
}
** [...] 
-> muvuca1

    =muvuca1
    #SOUNDEFFECT Assets/sounds/muvuca
    O povo ovaciona, batendo nas cadeiras. 
    Estouraram &&[warning]fogos de artificio&& muito perto de onde eu estou.

* [...] -> salve_vereador

= salve_vereador 
    &&[fala]{nome_traficante}:&&
    /it "Faz barulho ae também pro meu chapa, o doutor {nome_vereador}, que olha por nós la da prefeitura! Esse é cria da comunidade, ta se dando bem na vida, exemplo pra nossas criança!" /it

            { pessoa_observada != Vereador:
            * [Quem é {nome_vereador}?] -> fichas.vereador -> salve_geral
            }
            * [...] 
            ->muvuca2

    = muvuca2
    #SOUNDEFFECT Assets/sounds/muvuca2
    O povo grita ainda mais forte. 
    Ouve se uma &&[warning]rajada&&.

    * [...] -> salve_geral

= salve_geral
    /it "E faz barulho também pra todo mundo que compareceu ai no role, e tá fechado com a &&[danger]FIRMA&&!/it 
    #DELAY 0.5
    /it Salve pros irmão pego fora de posição, lili vai cantar!!!  /it
    #DELAY 0.5
    /it E pra todo mundo que já partiu, que teja no céu olhando por nós!" /it
    
    #DELAY 0.5
*[...] 
-> muvuca3
    = muvuca3
    #SOUNDEFFECT Assets/sounds/muvuca3
    A comunidade vai ao caos, barulho de tiro pro alto, rajadas de metralhadora, muita gritaria e fogos de artificio.
    

**** [O que é isso?] -> pira
->END

=== pira ===
#ANIMATION pira.gif
#IMAGE Assets/cenas/pira_ativada.jpg

Esse discurso... por que será que.. ele... 
#DELAY 0.7
Nossa... que estranho....

Até parece que tá todo mundo me olhando...

Porquê tá todo mundo me olhando?

*?????[]

Começo a sentir calafrios subindo pela espinha. 

#DELAY 0.7
Será... Tem alguém me perseguindo!

#DELAY 0.7

Esse lugar nunca esteve tão pesado. Esse discurso do Cafuso... por que ele mencionou &&[danger]A FIRMA&&?

**[...]->noia

=noia
Não, não, não, isso não é comum. Eu devo estar entrando em alguma paranóia... Tá, é só uma noia.
#DELAY 1
Respire fundo. Se acalme. Tente entender a situação.

[porque?]->porque
= porque

Por que estou assim?
    
    * [Olhar para a mão] -> noia_droga -> pos_pira
    
    * [Olhar para o {nome_traficante}] -> noia_trauma  -> pos_pira
    
    * [Olhar ao redor] -> noia_ambiente -> pos_pira


= noia_droga
    ~ causa_da_pira = Droga
    ~ karma +=0.5
Vejo o pedaço de aluminio onde estava um papel amargo que tomei mais ou menos 1h30 atrás...
Quase me enlouqueci. Perdi a cabeça. Fritei.
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
    ~ karma -=0.75

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

Não Deve estar

-> pos_pira

= pos_pira
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

Esses caras, sempre aparecendo aqui para encher o nosso saco.. mesmo a gente não fazendo nada. Dizem que é para isso que eles servem, a lei, quando na verdade só fazem o que bem entendem...

{causa_da_pira:
- Trauma: -> dialogo_bico.trauma
- Droga: -> dialogo_bico.droga
- Ambiente: -> dialogo_bico.ambiente
}

= reacao
** Meu sangue começa a ferver só olhando para eles -> reacao_bico.ruim -> saida_dos_bico
~ karma-=1
** Tenta se acalmar, eu sei que eles fazem isso, mas nem todos são assim... -> reacao_bico.boa -> saida_dos_bico
~ karma+=1


= saida_dos_bico

- Antes de eu poder fazer alguma coisa, já os vejo dando meia volta e sendo democraticamente expulsos.
-> reflexao_pos_bico

=== reacao_bico ===
= boa 
~ minha_reacao = Boa

boa

->->
= ruim
~ minha_reacao = Ruim

ruim
->->

=== dialogo_bico

= trauma
* [dialogo bico trauma]
    Esses filhas da puta que levaram a minha irmã de mim. Invadiram a minha casa para conseguir mais informações sobre {nome_traficante} e quando ela não quis entregar a mataram...
-> a_chegada_dos_bico.reacao

= droga 
* [dialogo bico droga]
    Esses filha da puta que não me deixam nem andar na rua calmamente, que vem embaçar comigo. Algumas pessoas só querem sair um pouco da situação onde estão, por que é a unica opção que eles tem.
-> a_chegada_dos_bico.reacao

= ambiente 
* [dialogo bico Ambiente]
    Esses filha da puta sempre enquadrando a galera, não podem nem ver gente da vila, que já nos separam, nos agridem, para o bem maior.
-> a_chegada_dos_bico.reacao

=== reflexao_pos_bico ===
// varia de acordo com a minha reacao

{minha_reacao:
- Boa: 
- Ruim: 
}

* [Prosseguir]
->o_plano 

=== o_plano ===
{ karma > 3:
 reagir bem 
-> discurso_contra_soc_sec
- else:

reagir mal
-> discurso_a_favor_soc_sec
}

=== discurso_contra_soc_sec ===

a
-> a_soc_sec
=== discurso_a_favor_soc_sec ===
b
-> a_soc_sec



=== a_soc_sec ===
// cena comum
#IMAGE Assets/cenas/cena_comum.jpg

{ shuffle:
	- ->existe
	- ->nao_existe 
}

= existe

ela existe
->END
= nao_existe

viagem
->END

=== um_grito_na_multidao ====

quem é vocÊ 

#INPUT nome

* É esse meu nome[]
%nome% isso é...

->END 

=== prologo ===
prologo
-> END

