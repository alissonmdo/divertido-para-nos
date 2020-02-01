CONST NADA = 0
CONST DROGA = 1 
CONST TRAUMA = 2
CONST MUSICA = 3

VAR causa_da_pira = NADA

VAR karma =  0

VAR conhece_a_soc_sec = false
VAR soc_sec_existe = true
VAR favoravel_a_soc_sec = true

LIST Characters = Traficante, Parteira, Vereador, Pastor 

-> a_soc_sec

=== acorda ===
Vultos.
Som alto. 
Luzes indo e voltando. 
* [???] O que estou fazendo aqui?
** [Olhar em volta] -> se_ambienta

->END

=== se_ambienta ===
# CLEAR
Uma multidão ao meu redor.

Percebo o funk estourando nas caixas de som nas laterais de um grande galpão.

Estou na lagoinha.

* [Concentrar]
Lembrei! 
É o aniversário de Cafuzo. 


** [Quem é Cafuzo?] -> fichas.traficante -> conhece_cafuzo

= conhece_cafuzo

* okay esse é cafuzo....[]

->percebe_a_pira

// **  [Quem é Dona Néia?] -> fichas.parteira
// **  [Quem é Seu Jaci?] -> fichas.pastor
// **  [Quem é Edvaldo Candeia?] -> fichas.vereador

==== fichas ===
    = traficante
    Cafuzo é o comandante do tráfico na região. Também é chamado de Manda-Chuva por alguns.
    Já matou muito. 
    
    {conhece_a_soc_sec:
    Ele está reparando um exercito. Muitas armas
    }
    ->->
    

    = vereador
    Edvaldo Rondon
    
    {conhece_a_soc_sec:
    Desvia dinhero da prefeitura, direciona para a comunidade
    }
    ->->

    = pastor
    Seu Jaci
    
    {conhece_a_soc_sec:
    Tem poder pra influenciar grande parte da comunidade
    }
    ->->

    = parteira
    Dona Néia
    
    {conhece_a_soc_sec:
    Conselheira, conhece todas as mães. As crianças a respeitam.
    }
    ->->
-> percebe_a_pira

=== percebe_a_pira ===
MEU DEUS TO PARANOICO SOCORO

ESCUTO NO PALCO UMA MICROFONIA

* [olhar para o palco] -> discurso_traficante

=== discurso_traficante ===
CAFUZO:

"Graças a Deus e a FIRMA esse evento tá sendo realizado e concretizado! Tamo aqui mais um ano familia!"

"Muita coletividade na quebrada, dinheiro no bolso. Sem miséria, e é nóis!!!
Vamos brindar o dia de hoje, que o amanhã só pertence a Deus, a vida é loka!"

* [entao é isso?] -> pira_ativada

->END

=== pira_ativada ===
Okay, estou começando a ficar paranoico

Por que estou assim?
* Usei uma droga
    ~ causa_da_pira = DROGA
    ~ karma +=0.5
* A volta de um trauma
    ~ causa_da_pira = TRAUMA
    ~ karma +=1
* A influencia da musica
    ~ causa_da_pira = MUSICA
    ~ karma -=0.75
- Então é isso 
* Prestar atenção no discurso de Cafuzo 
->ressoa 


=== ressoa ===

RESSOA FRASE
{causa_da_pira:
- TRAUMA: trauma comigo? -> trauma
- DROGA: droga usei sim porra -> droga
- MUSICA: musica daora? -> musica
}

= trauma
* reflexão sobre trauma[]
->a_soc_sec

= droga
* reflexão sobre droga[]
->a_soc_sec

= musica
* reflexão sobre musica[]
->a_soc_sec


-> a_soc_sec

=== a_soc_sec ===
// cena comum
Então essa é a sociedade secreta.
~ conhece_a_soc_sec = true

{soc_sec_existe:
 a soc sec existe
    { shuffle:
    	- 	karma \+.25 
    	~ karma += 0.25
    	- 	karma \+.75 
    	~ karma += 0.75
    	- karma +.85 
    		'da pra colocar mais coisa em baixo. 
    	~ karma += 0.85
    }
- else:
não existe a soc sec
}

sera que aparece cafuzo diferente 

**  [Cafuzo] -> fichas.traficante ->

karma {karma}


->END
=== o_plano ===

outra vez 
* então é isso[]
bibib bobobo

** o plano[]

-> a_chegada_dos_bico
->END 

=== a_chegada_dos_bico ===
* a chegada dos bico[]

{causa_da_pira:
- TRAUMA: -> dialogo_bico.trauma
- DROGA: -> dialogo_bico.droga
- MUSICA: -> dialogo_bico.musica
}
->END 

=== dialogo_bico

= trauma
* dialogo bico trauma[]
->reflexao_pos_bico 

= droga 
* dialogo bico droga []
->reflexao_pos_bico 

= musica 
* dialogo bico musica []
->reflexao_pos_bico 

=== reflexao_pos_bico ===
varia de acordo com a causa da pira

{causa_da_pira:
- TRAUMA: REFLEXAO TRAUMA
- DROGA: REFLEXAO droga
- MUSICA: REFLEXAO musica
}

* terminar[]
->END 

=== novo_lider ===
varia de acordo com a causa da pira
->END 

=== novo_lider_contra_socsec ===
varia de acordo com a causa da pira
->END 

=== novo_lider_da_socsec ===
varia de acordo com a causa da pira
->END 

=== pergunta_do_pastor ===
pergunta do pastor
2 opções karma+ karma
-
->END 

=== discurso_randomico ===
varia de acordo com a causa da pira
->END 

=== um_grito_na_multidao ===
varia de acordo com a causa da pira
->END 

