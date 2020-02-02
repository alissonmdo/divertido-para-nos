INCLUDE fichas.ink


VAR karma =  0

VAR conhece_a_soc_sec = false

VAR soc_sec_existe = true

VAR favoravel_a_soc_sec = true

LIST causa_da_pira = Droga, Ambiente, Trauma

LIST pessoa_observada = Traficante, Vereador, Pastor 

// -> a_soc_sec
-> pira_ativada

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
Ele namorava minha irmaVou precisar da ajuda dele em breve. 
}

#DELAY: 1
Acho que é hoje o dia.

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

** [Prestar atenção] -> discurso_traficante

{ not pessoa_observada == Traficante:
** [Quem é {nome_traficante}?] -> fichas.traficante -> opcoes
}


-> percebe_a_pira

=== percebe_a_pira ===
#IMAGE Assets/cenas/percebe_pira.jpg
MEU DEUS TO PARANOICO SOCORO


* [olhar para o palco] -> discurso_traficante

=== discurso_traficante ===
#IMAGE Assets/cenas/{nome_traficante}.jpg
{nome_traficante}:

/it "Graças a Deus e a &&[danger]FIRMA&& esse evento tá sendo  realizado e concretizado!" /it 
/it "Tamo aqui mais um ano familia! VIVÃO E VIVENO!!!" /it

#DELAY 1

/it "Muita coletividade na quebrada, dinheiro no bolso. Sem miséria, e é nóis!!!" /it


#DELAY 1

/it "Vamos brindar o dia de hoje, que o amanhã só pertence a Deus, a vida é loka!" /it

* ...[]

/it "RAPAZEADA! Faz barulho pro {nome_pastor} que tem ajudado diariamente a manter a paz aqui no morro. O homi é o brabo! Tá com ele ta com Deus!"

** ...[]

/it "Faz barulho ae também pro meu chapa, o doutor {nome_vereador}, que olha por nós la da prefeitura! Esse é cria da comunidade, ta se dando bem na vida, exemplo pra nossas criança!"

*** ...[]
/it "E faz barulho também pra todo mundo que compareceu ai no role, e tá fechado com a &&[danger]FIRMA&&!" /it
// mencionar personagens da sociedade vereador pastor


**** [O que é isso?] -> pira
->END

=== pira ===
#ANIMATION pira.gif
#IMAGE Assets/cenas/pira_ativada.jpg

???
#DELAY 5

Porquê tá todo mundo me olhando?

*?????[]

Sinto a espinha gelar.

#DELAY 1
Tem alguém me perseguindo!

#DELAY 1

Esse lugar nunca esteve tão pesado.
#DELAY 1

->noia

=noia
Tá, to numa noia.
#DELAY 1
De volta na fissura.

->porque
= porque

Por que estou assim?
    
    * [Olhar para a mão] -> noia_droga -> pos_pira
    
    * [Olhar para o {nome_traficante}] -> noia_trauma  -> pos_pira
    
    * [Olhar ao redor] -> noia_ambiente -> pos_pira


= noia_droga
    ~ causa_da_pira = Droga
    ~ karma +=0.5
Vejo a ponta do baseado que estava fumando há alguns minutos.
#ANIMATION: psicodelia   
->->

= noia_trauma
    ~ causa_da_pira = Trauma
    ~ karma +=1
No braço de Cafuso da pra enxergar o nome da minha irmã. 

#ANIMATION: memorias
->->

= noia_ambiente
    ~ causa_da_pira = Ambiente
    ~ karma -=0.75
Nunca vi tanta gente nesse lugar. Estou ficando sem ar.

#ANIMATION: sufocado

->->

"quer agua?"

Não Deve estar 


= pos_pira
Então é isso 


* Prestar atenção no discurso de {nome_traficante} 
->ressoa 


=== ressoa ===

RESSOA FRASE

{causa_da_pira:
- Trauma: trauma comigo? -> trauma
- Droga: droga usei sim porra -> droga
- Ambiente: Ambiente daora? -> ambiente
}

= trauma
* reflexão sobre trauma[]
->a_chegada_dos_bico

= droga
* reflexão sobre droga[]
->a_chegada_dos_bico

= ambiente
* reflexão sobre ambiente[]
->a_chegada_dos_bico


=== a_chegada_dos_bico ===
#IMAGE Assets/cenas/bicos.jpg
Ouço uma sirene
* a chegada dos bico[]

{causa_da_pira:
- Trauma: -> dialogo_bico.trauma
- Droga: -> dialogo_bico.droga
- Ambiente: -> dialogo_bico.ambiente
}

** reage ruim
~ karma-=1
** reage bem
~ karma+=1


- os bico vão embora

-> o_plano
->END 

=== dialogo_bico

= trauma
* dialogo bico trauma[]
->reflexao_pos_bico 

= droga 
* dialogo bico droga []
->reflexao_pos_bico 

= ambiente 
* dialogo bico Ambiente []
->reflexao_pos_bico 

=== reflexao_pos_bico ===
varia de acordo com a causa da pira

{causa_da_pira:
- Trauma: REFLEXAO Trauma
- Droga: REFLEXAO droga
- Ambiente: REFLEXAO Ambiente
}

* terminar[]
->END 

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

