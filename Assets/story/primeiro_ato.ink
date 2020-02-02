
VAR karma =  0

VAR conhece_a_soc_sec = false

VAR soc_sec_existe = true

VAR favoravel_a_soc_sec = true

LIST causa_da_pira = Droga, Musica, Trauma

LIST pessoa_observada = Traficante, Vereador, Pastor 

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

Estou na lagoinha.

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

==== fichas ===
    = traficante
    #IMAGE Assets/cenas/{nome_traficante}.jpg
    VAR nome_traficante = "Cafuzo"
    
    {nome_traficante} é o comandante do tráfico na região. Também é chamado de Manda-Chuva por alguns. É respeitado pela comunidade, e temido por seus inimigos.
    Já matou muito. Neguinho deveria pensar duas vezes antes de mexer com ele.
    
    {nome_traficante}
     
    {conhece_a_soc_sec:
    Ele está reparando um exercito. Muitas armas
    }
    ->->
    

    = vereador
    #IMAGE Assets/cenas/edvaldo.jpg
    VAR nome_vereador = "Edvaldo Candeia"
    
    {nome_vereador}
    
    {conhece_a_soc_sec:
    Porco safado! Descobri esses dias que está desviando dinhero da prefeitura! 
    Nada que uma sova não resolva...
    }
    ->->

    = pastor
    VAR nome_pastor = "Seu Jaci"
    
    {nome_pastor}
    #IMAGE Assets/cenas/pastor.jpg
    {conhece_a_soc_sec:
    O homem é a imagem da boa conduta... Tem muita influência sobre grande parte da comunidade
    }
    ->->

    // = parteira
    // Dona Néia
    // #IMAGE Assets/cenas/parteira.jpg
    
    // {conhece_a_soc_sec:
    // Conselheira, conhece todas as mães. As crianças a respeitam.
    // }
    // ->->


=== porque_estou_aqui ===

{pessoa_observada:
- Pastor:
Lembrei me do presságio que o pastor me deu da ultima vez que o encontrei.

- Vereador:
a

- Traficante:
Ele namorava minha irmã.
}

* Então...[] é por isso que estou aqui!

#DELAY: 1.5

#SOUNDEFFECT Assets/sounds/microfonia.wav

Escuto uma  &&[warning]MICROFONIA&&

#DELAY: 1.5

Olho para o palco e lá está {nome_traficante}...
->opcoes

= opcoes

** [Prestar atenção] -> discurso_traficante

** [Quem é {nome_traficante}?] -> fichas.traficante -> opcoes



-> percebe_a_pira

=== percebe_a_pira ===
#IMAGE Assets/cenas/percebe_pira.jpg
MEU DEUS TO PARANOICO SOCORO


* [olhar para o palco] -> discurso_traficante

=== discurso_traficante ===
#IMAGE Assets/cenas/{nome_traficante}.jpg
{nome_traficante}:

/it "Graças a Deus e a &&[danger]FIRMA&& esse evento tá sendo  realizado e concretizado! Tamo aqui mais um ano familia!" /it

#DELAY 1

/it "Muita coletividade na quebrada, dinheiro no bolso. Sem miséria, e é nóis!!!" /it


#DELAY 1

/it "Vamos brindar o dia de hoje, que o amanhã só pertence a Deus, a vida é loka!" /it


// mencionar personagens da sociedade vereador pastor

* [entao é isso?] -> pira_ativada
->END

=== pira_ativada ===
#IMAGE Assets/cenas/pira_ativada.jpg
Okay, estou começando a ficar paranoico

Por que estou assim?
* Usei uma droga
    ~ causa_da_pira = Droga
    ~ karma +=0.5
* A volta de um trauma
    ~ causa_da_pira = Trauma
    ~ karma +=1
* A influencia da musica
    ~ causa_da_pira = Musica
    ~ karma -=0.75
- Então é isso 

* Prestar atenção no discurso de {nome_traficante} 
->ressoa 


=== ressoa ===

RESSOA FRASE
{causa_da_pira:
- Trauma: trauma comigo? -> trauma
- Droga: droga usei sim porra -> droga
- Musica: musica daora? -> musica
}

= trauma
* reflexão sobre trauma[]
->a_chegada_dos_bico

= droga
* reflexão sobre droga[]
->a_chegada_dos_bico

= musica
* reflexão sobre musica[]
->a_chegada_dos_bico


=== a_chegada_dos_bico ===
#IMAGE Assets/cenas/bicos.jpg
Ouço uma sirene
* a chegada dos bico[]

{causa_da_pira:
- Trauma: -> dialogo_bico.trauma
- Droga: -> dialogo_bico.droga
- Musica: -> dialogo_bico.musica
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

= musica 
* dialogo bico musica []
->reflexao_pos_bico 

=== reflexao_pos_bico ===
varia de acordo com a causa da pira

{causa_da_pira:
- Trauma: REFLEXAO Trauma
- Droga: REFLEXAO droga
- Musica: REFLEXAO musica
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

