var storyContent = ﻿{"inkVersion":19,"root":[[{"->":"acorda"},["done",{"#f":5,"#n":"g-0"}],null],"done",{"acorda":[["^Vultos.","\n","^Som alto.","\n","^Luzes indo e voltando.","\n","ev","str","^???","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["^ O que estou fazendo aqui?","\n",["ev","str","^Olhar em volta","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["^ ",{"->":"se_ambienta"},"\n","end",{"#f":5}]}],{"#f":5}]}],{"#f":1}],"se_ambienta":[[{"#":"CLEAR"},"^Uma multidão ao meu redor.","\n","^Percebo o funk estourando nas caixas de som nas laterais de um grande galpão.","\n","^Estou na lagoinha.","\n","ev","str","^Concentrar","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^Lembrei!","\n","^É o aniversário de Cafuzo.","\n",["ev","str","^Quem é Cafuzo?","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["^ ",{"->t->":"fichas.traficante"},{"->":".^.^.^.^.^.conhece_cafuzo"},"\n",{"#f":5}]}],{"#f":5}]}],{"conhece_cafuzo":[[["ev",{"^->":"se_ambienta.conhece_cafuzo.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^okay esse é cafuzo....",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"se_ambienta.conhece_cafuzo.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"->":"percebe_a_pira"},{"#f":5}]}],{"#f":1}],"#f":1}],"fichas":[{"->":".^.traficante"},{"traficante":["^Cafuzo é o comandante do tráfico na região. Também é chamado de Manda-Chuva por alguns.","\n","^Já matou muito.","\n","ev",{"VAR?":"conhece_a_soc_sec"},"/ev",[{"->":".^.b","c":true},{"b":["\n","^Ele está reparando um exercito. Muitas armas","\n",{"->":".^.^.^.8"},null]}],"nop","\n","ev","void","/ev","->->",{"#f":1}],"vereador":["^Edvaldo Rondon","\n","ev",{"VAR?":"conhece_a_soc_sec"},"/ev",[{"->":".^.b","c":true},{"b":["\n","^Desvia dinhero da prefeitura, direciona para a comunidade","\n",{"->":".^.^.^.6"},null]}],"nop","\n","ev","void","/ev","->->",{"#f":1}],"pastor":["^Seu Jaci","\n","ev",{"VAR?":"conhece_a_soc_sec"},"/ev",[{"->":".^.b","c":true},{"b":["\n","^Tem poder pra influenciar grande parte da comunidade","\n",{"->":".^.^.^.6"},null]}],"nop","\n","ev","void","/ev","->->",{"#f":1}],"parteira":["^Dona Néia","\n","ev",{"VAR?":"conhece_a_soc_sec"},"/ev",[{"->":".^.b","c":true},{"b":["\n","^Conselheira, conhece todas as mães. As crianças a respeitam.","\n",{"->":".^.^.^.6"},null]}],"nop","\n","ev","void","/ev","->->",{"->":"percebe_a_pira"},{"#f":1}],"#f":1}],"percebe_a_pira":[["^MEU DEUS TO PARANOICO SOCORO","\n","^ESCUTO NO PALCO UMA MICROFONIA","\n","ev","str","^olhar para o palco","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["^ ",{"->":"discurso_traficante"},"\n",{"#f":5}]}],{"#f":1}],"discurso_traficante":[["^CAFUZO:","\n","^\"Graças a Deus e a FIRMA esse evento tá sendo realizado e concretizado! Tamo aqui mais um ano familia!\"","\n","^\"Muita coletividade na quebrada, dinheiro no bolso. Sem miséria, e é nóis!!!","\n","^Vamos brindar o dia de hoje, que o amanhã só pertence a Deus, a vida é loka!\"","\n","ev","str","^entao é isso?","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["^ ",{"->":"pira_ativada"},"\n","end",{"#f":5}]}],{"#f":1}],"pira_ativada":[["^Okay, estou começando a ficar paranoico","\n","^Por que estou assim?","\n",["ev",{"^->":"pira_ativada.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^Usei uma droga",{"->":"$r","var":true},null]}],["ev",{"^->":"pira_ativada.0.5.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^A volta de um trauma",{"->":"$r","var":true},null]}],["ev",{"^->":"pira_ativada.0.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":18},{"s":["^A influencia da musica",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"pira_ativada.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n","ev",1,"/ev",{"VAR=":"causa_da_pira","re":true},"ev",{"VAR?":"karma"},0.5,"+",{"VAR=":"karma","re":true},"/ev",{"->":".^.^.g-0"},{"#f":5}],"c-1":["ev",{"^->":"pira_ativada.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.5.s"},[{"#n":"$r2"}],"\n","ev",2,"/ev",{"VAR=":"causa_da_pira","re":true},"ev",{"VAR?":"karma"},1,"+",{"VAR=":"karma","re":true},"/ev",{"->":".^.^.g-0"},{"#f":5}],"c-2":["ev",{"^->":"pira_ativada.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],"\n","ev",3,"/ev",{"VAR=":"causa_da_pira","re":true},"ev",{"VAR?":"karma"},0.75,"-",{"VAR=":"karma","re":true},"/ev",{"->":".^.^.g-0"},{"#f":5}],"g-0":["^Então é isso","\n",["ev",{"^->":"pira_ativada.0.g-0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-3","flg":18},{"s":["^Prestar atenção no discurso de Cafuzo ",{"->":"$r","var":true},null]}],{"c-3":["ev",{"^->":"pira_ativada.0.g-0.c-3.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n",{"->":"ressoa"},{"#f":5}],"#f":5}]}],{"#f":1}],"ressoa":["^RESSOA FRASE","\n","ev",{"VAR?":"causa_da_pira"},"/ev",["du","ev",2,"==","/ev",{"->":".^.b","c":true},{"b":["pop","\n","^trauma comigo? ",{"->":"ressoa.trauma"},"\n",{"->":"ressoa.9"},null]}],["du","ev",1,"==","/ev",{"->":".^.b","c":true},{"b":["pop","\n","^droga usei sim porra ",{"->":"ressoa.droga"},"\n",{"->":"ressoa.9"},null]}],["du","ev",3,"==","/ev",{"->":".^.b","c":true},{"b":["pop","\n","^musica daora? ",{"->":"ressoa.musica"},"\n",{"->":"ressoa.9"},null]}],"pop","nop","\n",{"trauma":[[["ev",{"^->":"ressoa.trauma.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^reflexão sobre trauma",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"ressoa.trauma.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"->":"a_soc_sec"},{"#f":5}]}],{"#f":1}],"droga":[[["ev",{"^->":"ressoa.droga.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^reflexão sobre droga",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"ressoa.droga.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"->":"a_soc_sec"},{"#f":5}]}],{"#f":1}],"musica":[[["ev",{"^->":"ressoa.musica.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^reflexão sobre musica",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"ressoa.musica.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"->":"a_soc_sec"},{"->":"a_soc_sec"},{"#f":5}]}],{"#f":1}],"#f":1}],"a_soc_sec":["^Então essa é a sociedade secreta.","\n","ev",1,"/ev",{"VAR=":"conhece_a_soc_sec","re":true},"ev",{"VAR?":"soc_sec_existe"},"/ev",[{"->":".^.b","c":true},{"b":["\n","^a soc sec existe","\n",["ev","visit",3,"seq","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"ev","du",2,"==","/ev",{"->":".^.s2","c":true},"nop",{"s0":["pop","\n","^karma +.25","\n","ev",{"VAR?":"karma"},0.25,"+",{"VAR=":"karma","re":true},"/ev",{"->":".^.^.23"},null],"s1":["pop","\n","^karma +.75","\n","ev",{"VAR?":"karma"},0.75,"+",{"VAR=":"karma","re":true},"/ev",{"->":".^.^.23"},null],"s2":["pop","\n","^karma +.85","\n","^'da pra colocar mais coisa em baixo.","\n","ev",{"VAR?":"karma"},0.85,"+",{"VAR=":"karma","re":true},"/ev",{"->":".^.^.23"},null],"#f":5}],"\n",{"->":".^.^.^.11"},null]}],[{"->":".^.b"},{"b":["\n","^não existe a soc sec","\n",{"->":".^.^.^.11"},null]}],"nop","\n","^sera que aparece cafuzo diferente","\n",["ev","str","^Cafuzo","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["^ ",{"->t->":"fichas.traficante"},{"->":"o_plano"},"\n","^karma ","ev",{"VAR?":"karma"},"out","/ev","\n","end",{"#f":5}]}],{"#f":1}],"o_plano":[["^outra vez","\n",["ev",{"^->":"o_plano.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^então é isso",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"o_plano.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n","^bibib bobobo","\n",[["ev",{"^->":"o_plano.0.c-0.9.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^o plano",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"o_plano.0.c-0.9.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"->":"a_chegada_dos_bico"},"end",{"#f":5}]}],{"#f":5}]}],{"#f":1}],"a_chegada_dos_bico":[[["ev",{"^->":"a_chegada_dos_bico.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^a chegada dos bico",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"a_chegada_dos_bico.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"causa_da_pira"},"/ev",["du","ev",2,"==","/ev",{"->":".^.b","c":true},{"b":["pop","\n",{"->":"dialogo_bico.trauma"},{"->":".^.^.^.14"},null]}],["du","ev",1,"==","/ev",{"->":".^.b","c":true},{"b":["pop","\n",{"->":"dialogo_bico.droga"},{"->":".^.^.^.14"},null]}],["du","ev",3,"==","/ev",{"->":".^.b","c":true},{"b":["pop","\n",{"->":"dialogo_bico.musica"},{"->":".^.^.^.14"},null]}],"pop","nop","\n","end",{"#f":5}]}],{"#f":1}],"dialogo_bico":[{"->":".^.trauma"},{"trauma":[[["ev",{"^->":"dialogo_bico.trauma.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^dialogo bico trauma",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"dialogo_bico.trauma.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"->":"reflexao_pos_bico"},{"#f":5}]}],{"#f":1}],"droga":[[["ev",{"^->":"dialogo_bico.droga.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^dialogo bico droga ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"dialogo_bico.droga.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"->":"reflexao_pos_bico"},{"#f":5}]}],{"#f":1}],"musica":[[["ev",{"^->":"dialogo_bico.musica.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^dialogo bico musica ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"dialogo_bico.musica.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"->":"reflexao_pos_bico"},{"#f":5}]}],{"#f":1}],"#f":1}],"reflexao_pos_bico":[["^varia de acordo com a causa da pira","\n","ev",{"VAR?":"causa_da_pira"},"/ev",["du","ev",2,"==","/ev",{"->":".^.b","c":true},{"b":["pop","\n","^REFLEXAO TRAUMA","\n",{"->":".^.^.^.9"},null]}],["du","ev",1,"==","/ev",{"->":".^.b","c":true},{"b":["pop","\n","^REFLEXAO droga","\n",{"->":".^.^.^.9"},null]}],["du","ev",3,"==","/ev",{"->":".^.b","c":true},{"b":["pop","\n","^REFLEXAO musica","\n",{"->":".^.^.^.9"},null]}],"pop","nop","\n",["ev",{"^->":"reflexao_pos_bico.0.11.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^terminar",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"reflexao_pos_bico.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.11.s"},[{"#n":"$r2"}],"\n","end",{"#f":5}]}],{"#f":1}],"novo_lider":["^varia de acordo com a causa da pira","\n","end",{"#f":1}],"novo_lider_contra_socsec":["^varia de acordo com a causa da pira","\n","end",{"#f":1}],"novo_lider_da_socsec":["^varia de acordo com a causa da pira","\n","end",{"#f":1}],"pergunta_do_pastor":[["^pergunta do pastor","\n","^2 opções karma+ karma","\n",["end",{"#f":5,"#n":"g-0"}],null],{"#f":1}],"discurso_randomico":["^varia de acordo com a causa da pira","\n","end",{"#f":1}],"um_grito_na_multidao":["^varia de acordo com a causa da pira","\n","end",{"#f":1}],"global decl":["ev",0,{"VAR=":"causa_da_pira"},0,{"VAR=":"karma"},0,{"VAR=":"conhece_a_soc_sec"},1,{"VAR=":"soc_sec_existe"},1,{"VAR=":"favoravel_a_soc_sec"},{"list":{},"origins":["Characters"]},{"VAR=":"Characters"},"/ev","end",null],"#f":1}],"listDefs":{"Characters":{"Traficante":1,"Parteira":2,"Vereador":3,"Pastor":4}}};