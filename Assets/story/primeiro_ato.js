var storyContent = {
    "inkVersion": 19,
    "root": [
        [{
                "->": "discurso_traficante"
            },
            ["done", {
                "#f": 5,
                "#n": "g-0"
            }], null
        ], "done", {
            "acordou": [
                [{
                    "#": "IMAGE /Assets/cenas/acorda.jpg"
                }, "^Vultos.", "\n", "^Som alto.", "\n", "^Luzes indo e voltando.", "\n", "ev", "str", "^???", "/str", "/ev", {
                    "*": ".^.c-0",
                    "flg": 20
                }, {
                    "c-0": ["^ O que estou fazendo aqui?", "\n", ["ev", "str", "^Olhar em volta", "/str", "/ev", {
                        "*": ".^.c-0",
                        "flg": 20
                    }, {
                        "c-0": ["^ ", {
                            "->": "se_ambienta"
                        }, "\n", "end", {
                            "#f": 5
                        }]
                    }], {
                        "#f": 5
                    }]
                }], {
                    "#f": 1
                }
            ],
            "se_ambienta": [
                [{
                    "#": "CLEAR"
                }, {
                    "#": "IMAGE /Assets/cenas/ambienta-se.jpg"
                }, "^Uma multidão ao meu redor.", "\n", "^Percebo o funk estourando nas caixas de som nas laterais de um grande galpão.", "\n", "^Estou na lagoinha.", "\n", "ev", "str", "^Olhar para a direita", "/str", "/ev", {
                    "*": ".^.c-0",
                    "flg": 20
                }, "ev", "str", "^Olhar para a esquerda", "/str", "/ev", {
                    "*": ".^.c-1",
                    "flg": 20
                }, "ev", "str", "^Olhar para a frente", "/str", "/ev", {
                    "*": ".^.c-2",
                    "flg": 20
                }, {
                    "c-0": ["^ ", "\n", "^Eu olho para a direita, e vejo o Pastor.", "\n", "ev", {
                        "VAR?": "Pastor"
                    }, "/ev", {
                        "VAR=": "pessoa_observada",
                        "re": true
                    }, "ev", {
                        "VAR?": "karma"
                    }, 1, "+", {
                        "VAR=": "karma",
                        "re": true
                    }, "/ev", {
                        "->t->": "fichas.pastor"
                    }, {
                        "->": "porque_estou_aqui"
                    }, {
                        "#f": 5
                    }],
                    "c-1": ["^ ", "\n", "^Eu olho para a esquerda, e vejo o Vereador.", "\n", "ev", {
                        "VAR?": "Vereador"
                    }, "/ev", {
                        "VAR=": "pessoa_observada",
                        "re": true
                    }, "ev", {
                        "VAR?": "karma"
                    }, 1, "+", {
                        "VAR=": "karma",
                        "re": true
                    }, "/ev", {
                        "->t->": "fichas.vereador"
                    }, {
                        "->": "porque_estou_aqui"
                    }, {
                        "#f": 5
                    }],
                    "c-2": ["^ ", "\n", "^Eu olho para a direita, e vejo o Traficante.", "\n", "ev", {
                        "VAR?": "Traficante"
                    }, "/ev", {
                        "VAR=": "pessoa_observada",
                        "re": true
                    }, "ev", {
                        "VAR?": "karma"
                    }, 1, "+", {
                        "VAR=": "karma",
                        "re": true
                    }, "/ev", {
                        "->t->": "fichas.traficante"
                    }, {
                        "->": "porque_estou_aqui"
                    }, {
                        "#f": 5
                    }]
                }], {
                    "#f": 1
                }
            ],
            "porque_estou_aqui": [
                ["ev", {
                        "VAR?": "pessoa_observada"
                    }, "/ev", ["du", "ev", {
                        "VAR?": "Pastor"
                    }, "==", "/ev", {
                        "->": ".^.b",
                        "c": true
                    }, {
                        "b": ["pop", "\n", "^Lembrei me do presságio que o pastor me deu da ultima vez que o encontrei.", "\n", {
                            "->": ".^.^.^.7"
                        }, null]
                    }],
                    ["du", "ev", {
                        "VAR?": "Vereador"
                    }, "==", "/ev", {
                        "->": ".^.b",
                        "c": true
                    }, {
                        "b": ["pop", "\n", "^a", "\n", {
                            "->": ".^.^.^.7"
                        }, null]
                    }],
                    ["du", "ev", {
                        "VAR?": "Traficante"
                    }, "==", "/ev", {
                        "->": ".^.b",
                        "c": true
                    }, {
                        "b": ["pop", "\n", "^a", "\n", {
                            "->": ".^.^.^.7"
                        }, null]
                    }], "pop", "nop", "\n", ["ev", {
                            "^->": "porque_estou_aqui.0.9.$r1"
                        }, {
                            "temp=": "$r"
                        }, "str", {
                            "->": ".^.s"
                        },
                        [{
                            "#n": "$r1"
                        }], "/str", "/ev", {
                            "*": ".^.^.c-0",
                            "flg": 18
                        }, {
                            "s": ["^Então...", {
                                "->": "$r",
                                "var": true
                            }, null]
                        }
                    ], {
                        "c-0": ["ev", {
                                "^->": "porque_estou_aqui.0.c-0.$r2"
                            }, "/ev", {
                                "temp=": "$r"
                            }, {
                                "->": ".^.^.9.s"
                            },
                            [{
                                "#n": "$r2"
                            }], "^ é por isso que estou aqui!", "\n", {
                                "#": "DELAY 1.5"
                            }, {
                                "#": "SOUNDEFFECT /Assets/sounds/microfonia.wav"
                            }, "^Escuto uma  &&[warning]MICROFONIA&&", "\n", {
                                "#": "DELAY 1.5"
                            }, "^Olho para o palco e lá está Cafuzo...", "\n", {
                                "->": ".^.^.^.opcoes"
                            }, {
                                "#f": 5
                            }
                        ]
                    }
                ], {
                    "opcoes": [
                        ["ev", "str", "^Prestar atenção", "/str", "/ev", {
                            "*": ".^.c-0",
                            "flg": 20
                        }, "ev", "str", "^Quem é Cafuzo?", "/str", "/ev", {
                            "*": ".^.c-1",
                            "flg": 20
                        }, {
                            "c-0": ["^ ", {
                                "->": "discurso_traficante"
                            }, "\n", {
                                "#f": 5
                            }],
                            "c-1": ["^ ", {
                                "->t->": "fichas.traficante"
                            }, {
                                "->": ".^.^.^"
                            }, "\n", {
                                "#f": 5
                            }]
                        }], {
                            "#f": 1
                        }
                    ],
                    "#f": 1
                }
            ],
            "fichas": [{
                "->": ".^.traficante"
            }, {
                "traficante": [{
                    "#": "IMAGE /Assets/cenas/cafuzo.jpg"
                }, "^Cafuzo é o comandante do tráfico na região. Também é chamado de Manda-Chuva por alguns.", "\n", "^Já matou muito.", "\n", "ev", {
                    "VAR?": "conhece_a_soc_sec"
                }, "/ev", [{
                    "->": ".^.b",
                    "c": true
                }, {
                    "b": ["\n", "^Ele está reparando um exercito. Muitas armas", "\n", {
                        "->": ".^.^.^.9"
                    }, null]
                }], "nop", "\n", "ev", "void", "/ev", "->->", {
                    "#f": 1
                }],
                "vereador": [{
                    "#": "IMAGE /Assets/cenas/edvaldo.jpg"
                }, "^Edvaldo Rondon", "\n", "ev", {
                    "VAR?": "conhece_a_soc_sec"
                }, "/ev", [{
                    "->": ".^.b",
                    "c": true
                }, {
                    "b": ["\n", "^Desvia dinhero da prefeitura, direciona para a comunidade", "\n", {
                        "->": ".^.^.^.7"
                    }, null]
                }], "nop", "\n", "ev", "void", "/ev", "->->", {
                    "#f": 1
                }],
                "pastor": ["^Seu Jaci", "\n", {
                    "#": "IMAGE /Assets/cenas/pastor.jpg"
                }, "ev", {
                    "VAR?": "conhece_a_soc_sec"
                }, "/ev", [{
                    "->": ".^.b",
                    "c": true
                }, {
                    "b": ["\n", "^Tem poder pra influenciar grande parte da comunidade", "\n", {
                        "->": ".^.^.^.7"
                    }, null]
                }], "nop", "\n", "ev", "void", "/ev", "->->", {
                    "#f": 1
                }],
                "parteira": ["^Dona Néia", "\n", {
                    "#": "IMAGE /Assets/cenas/parteira.jpg"
                }, "ev", {
                    "VAR?": "conhece_a_soc_sec"
                }, "/ev", [{
                    "->": ".^.b",
                    "c": true
                }, {
                    "b": ["\n", "^Conselheira, conhece todas as mães. As crianças a respeitam.", "\n", {
                        "->": ".^.^.^.7"
                    }, null]
                }], "nop", "\n", "ev", "void", "/ev", "->->", {
                    "->": "percebe_a_pira"
                }, {
                    "#f": 1
                }],
                "#f": 1
            }],
            "percebe_a_pira": [
                [{
                    "#": "IMAGE /Assets/cenas/percebe_pira.jpg"
                }, "^MEU DEUS TO PARANOICO SOCORO", "\n", "ev", "str", "^olhar para o palco", "/str", "/ev", {
                    "*": ".^.c-0",
                    "flg": 20
                }, {
                    "c-0": ["^ ", {
                        "->": "discurso_traficante"
                    }, "\n", {
                        "#f": 5
                    }]
                }], {
                    "#f": 1
                }
            ],
            "discurso_traficante": [
                [{
                    "#": "IMAGE /Assets/cenas/cafuzo.jpg"
                }, "^CAFUZO:", "\n", "^/it \"Graças a Deus e a &&[danger]FIRMA&& esse evento tá sendo  realizado e concretizado! Tamo aqui mais um ano familia!\" /it", "\n", {
                    "#": "DELAY 1"
                }, "^/it \"Muita coletividade na quebrada, dinheiro no bolso. Sem miséria, e é nóis!!!\" /it", "\n", {
                    "#": "DELAY 1"
                }, "^/it \"Vamos brindar o dia de hoje, que o amanhã só pertence a Deus, a vida é loka!\" /it", "\n", "ev", "str", "^entao é isso?", "/str", "/ev", {
                    "*": ".^.c-0",
                    "flg": 20
                }, {
                    "c-0": ["^ ", {
                        "->": "pira_ativada"
                    }, "\n", "end", {
                        "#f": 5
                    }]
                }], {
                    "#f": 1
                }
            ],
            "pira_ativada": [
                [{
                        "#": "IMAGE /Assets/cenas/pira_ativada.jpg"
                    }, "^Okay, estou começando a ficar paranoico", "\n", "^Por que estou assim?", "\n", ["ev", {
                            "^->": "pira_ativada.0.5.$r1"
                        }, {
                            "temp=": "$r"
                        }, "str", {
                            "->": ".^.s"
                        },
                        [{
                            "#n": "$r1"
                        }], "/str", "/ev", {
                            "*": ".^.^.c-0",
                            "flg": 18
                        }, {
                            "s": ["^Usei uma droga", {
                                "->": "$r",
                                "var": true
                            }, null]
                        }
                    ],
                    ["ev", {
                            "^->": "pira_ativada.0.6.$r1"
                        }, {
                            "temp=": "$r"
                        }, "str", {
                            "->": ".^.s"
                        },
                        [{
                            "#n": "$r1"
                        }], "/str", "/ev", {
                            "*": ".^.^.c-1",
                            "flg": 18
                        }, {
                            "s": ["^A volta de um trauma", {
                                "->": "$r",
                                "var": true
                            }, null]
                        }
                    ],
                    ["ev", {
                            "^->": "pira_ativada.0.7.$r1"
                        }, {
                            "temp=": "$r"
                        }, "str", {
                            "->": ".^.s"
                        },
                        [{
                            "#n": "$r1"
                        }], "/str", "/ev", {
                            "*": ".^.^.c-2",
                            "flg": 18
                        }, {
                            "s": ["^A influencia da musica", {
                                "->": "$r",
                                "var": true
                            }, null]
                        }
                    ], {
                        "c-0": ["ev", {
                                "^->": "pira_ativada.0.c-0.$r2"
                            }, "/ev", {
                                "temp=": "$r"
                            }, {
                                "->": ".^.^.5.s"
                            },
                            [{
                                "#n": "$r2"
                            }], "\n", "ev", {
                                "VAR?": "Droga"
                            }, "/ev", {
                                "VAR=": "causa_da_pira",
                                "re": true
                            }, "ev", {
                                "VAR?": "karma"
                            },
                            0.5, "+", {
                                "VAR=": "karma",
                                "re": true
                            }, "/ev", {
                                "->": ".^.^.g-0"
                            }, {
                                "#f": 5
                            }
                        ],
                        "c-1": ["ev", {
                                "^->": "pira_ativada.0.c-1.$r2"
                            }, "/ev", {
                                "temp=": "$r"
                            }, {
                                "->": ".^.^.6.s"
                            },
                            [{
                                "#n": "$r2"
                            }], "\n", "ev", {
                                "VAR?": "Trauma"
                            }, "/ev", {
                                "VAR=": "causa_da_pira",
                                "re": true
                            }, "ev", {
                                "VAR?": "karma"
                            },
                            1, "+", {
                                "VAR=": "karma",
                                "re": true
                            }, "/ev", {
                                "->": ".^.^.g-0"
                            }, {
                                "#f": 5
                            }
                        ],
                        "c-2": ["ev", {
                                "^->": "pira_ativada.0.c-2.$r2"
                            }, "/ev", {
                                "temp=": "$r"
                            }, {
                                "->": ".^.^.7.s"
                            },
                            [{
                                "#n": "$r2"
                            }], "\n", "ev", {
                                "VAR?": "Musica"
                            }, "/ev", {
                                "VAR=": "causa_da_pira",
                                "re": true
                            }, "ev", {
                                "VAR?": "karma"
                            },
                            0.75, "-", {
                                "VAR=": "karma",
                                "re": true
                            }, "/ev", {
                                "->": ".^.^.g-0"
                            }, {
                                "#f": 5
                            }
                        ],
                        "g-0": ["^Então é isso", "\n", ["ev", {
                                "^->": "pira_ativada.0.g-0.2.$r1"
                            }, {
                                "temp=": "$r"
                            }, "str", {
                                "->": ".^.s"
                            },
                            [{
                                "#n": "$r1"
                            }], "/str", "/ev", {
                                "*": ".^.^.c-3",
                                "flg": 18
                            }, {
                                "s": ["^Prestar atenção no discurso de Cafuzo ", {
                                    "->": "$r",
                                    "var": true
                                }, null]
                            }
                        ], {
                            "c-3": ["ev", {
                                    "^->": "pira_ativada.0.g-0.c-3.$r2"
                                }, "/ev", {
                                    "temp=": "$r"
                                }, {
                                    "->": ".^.^.2.s"
                                },
                                [{
                                    "#n": "$r2"
                                }], "\n", {
                                    "->": "ressoa"
                                }, {
                                    "#f": 5
                                }
                            ],
                            "#f": 5
                        }]
                    }
                ], {
                    "#f": 1
                }
            ],
            "ressoa": ["^RESSOA FRASE", "\n", "ev", {
                    "VAR?": "causa_da_pira"
                }, "/ev", ["du", "ev", {
                    "VAR?": "Trauma"
                }, "==", "/ev", {
                    "->": ".^.b",
                    "c": true
                }, {
                    "b": ["pop", "\n", "^trauma comigo? ", {
                        "->": "ressoa.trauma"
                    }, "\n", {
                        "->": "ressoa.9"
                    }, null]
                }],
                ["du", "ev", {
                    "VAR?": "Droga"
                }, "==", "/ev", {
                    "->": ".^.b",
                    "c": true
                }, {
                    "b": ["pop", "\n", "^droga usei sim porra ", {
                        "->": "ressoa.droga"
                    }, "\n", {
                        "->": "ressoa.9"
                    }, null]
                }],
                ["du", "ev", {
                    "VAR?": "Musica"
                }, "==", "/ev", {
                    "->": ".^.b",
                    "c": true
                }, {
                    "b": ["pop", "\n", "^musica daora? ", {
                        "->": "ressoa.musica"
                    }, "\n", {
                        "->": "ressoa.9"
                    }, null]
                }], "pop", "nop", "\n", {
                    "trauma": [
                        [
                            ["ev", {
                                    "^->": "ressoa.trauma.0.0.$r1"
                                }, {
                                    "temp=": "$r"
                                }, "str", {
                                    "->": ".^.s"
                                },
                                [{
                                    "#n": "$r1"
                                }], "/str", "/ev", {
                                    "*": ".^.^.c-0",
                                    "flg": 18
                                }, {
                                    "s": ["^reflexão sobre trauma", {
                                        "->": "$r",
                                        "var": true
                                    }, null]
                                }
                            ], {
                                "c-0": ["ev", {
                                        "^->": "ressoa.trauma.0.c-0.$r2"
                                    }, "/ev", {
                                        "temp=": "$r"
                                    }, {
                                        "->": ".^.^.0.s"
                                    },
                                    [{
                                        "#n": "$r2"
                                    }], "\n", {
                                        "->": "a_chegada_dos_bico"
                                    }, {
                                        "#f": 5
                                    }
                                ]
                            }
                        ], {
                            "#f": 1
                        }
                    ],
                    "droga": [
                        [
                            ["ev", {
                                    "^->": "ressoa.droga.0.0.$r1"
                                }, {
                                    "temp=": "$r"
                                }, "str", {
                                    "->": ".^.s"
                                },
                                [{
                                    "#n": "$r1"
                                }], "/str", "/ev", {
                                    "*": ".^.^.c-0",
                                    "flg": 18
                                }, {
                                    "s": ["^reflexão sobre droga", {
                                        "->": "$r",
                                        "var": true
                                    }, null]
                                }
                            ], {
                                "c-0": ["ev", {
                                        "^->": "ressoa.droga.0.c-0.$r2"
                                    }, "/ev", {
                                        "temp=": "$r"
                                    }, {
                                        "->": ".^.^.0.s"
                                    },
                                    [{
                                        "#n": "$r2"
                                    }], "\n", {
                                        "->": "a_chegada_dos_bico"
                                    }, {
                                        "#f": 5
                                    }
                                ]
                            }
                        ], {
                            "#f": 1
                        }
                    ],
                    "musica": [
                        [
                            ["ev", {
                                    "^->": "ressoa.musica.0.0.$r1"
                                }, {
                                    "temp=": "$r"
                                }, "str", {
                                    "->": ".^.s"
                                },
                                [{
                                    "#n": "$r1"
                                }], "/str", "/ev", {
                                    "*": ".^.^.c-0",
                                    "flg": 18
                                }, {
                                    "s": ["^reflexão sobre musica", {
                                        "->": "$r",
                                        "var": true
                                    }, null]
                                }
                            ], {
                                "c-0": ["ev", {
                                        "^->": "ressoa.musica.0.c-0.$r2"
                                    }, "/ev", {
                                        "temp=": "$r"
                                    }, {
                                        "->": ".^.^.0.s"
                                    },
                                    [{
                                        "#n": "$r2"
                                    }], "\n", {
                                        "->": "a_chegada_dos_bico"
                                    }, {
                                        "#f": 5
                                    }
                                ]
                            }
                        ], {
                            "#f": 1
                        }
                    ],
                    "#f": 1
                }
            ],
            "a_chegada_dos_bico": [
                [{
                    "#": "IMAGE /Assets/cenas/bicos.jpg"
                }, "^Ouço uma sirene", "\n", ["ev", {
                        "^->": "a_chegada_dos_bico.0.3.$r1"
                    }, {
                        "temp=": "$r"
                    }, "str", {
                        "->": ".^.s"
                    },
                    [{
                        "#n": "$r1"
                    }], "/str", "/ev", {
                        "*": ".^.^.c-0",
                        "flg": 18
                    }, {
                        "s": ["^a chegada dos bico", {
                            "->": "$r",
                            "var": true
                        }, null]
                    }
                ], {
                    "c-0": ["ev", {
                            "^->": "a_chegada_dos_bico.0.c-0.$r2"
                        }, "/ev", {
                            "temp=": "$r"
                        }, {
                            "->": ".^.^.3.s"
                        },
                        [{
                            "#n": "$r2"
                        }], "\n", "ev", {
                            "VAR?": "causa_da_pira"
                        }, "/ev", ["du", "ev", {
                            "VAR?": "Trauma"
                        }, "==", "/ev", {
                            "->": ".^.b",
                            "c": true
                        }, {
                            "b": ["pop", "\n", {
                                "->": "dialogo_bico.trauma"
                            }, {
                                "->": ".^.^.^.14"
                            }, null]
                        }],
                        ["du", "ev", {
                            "VAR?": "Droga"
                        }, "==", "/ev", {
                            "->": ".^.b",
                            "c": true
                        }, {
                            "b": ["pop", "\n", {
                                "->": "dialogo_bico.droga"
                            }, {
                                "->": ".^.^.^.14"
                            }, null]
                        }],
                        ["du", "ev", {
                            "VAR?": "Musica"
                        }, "==", "/ev", {
                            "->": ".^.b",
                            "c": true
                        }, {
                            "b": ["pop", "\n", {
                                "->": "dialogo_bico.musica"
                            }, {
                                "->": ".^.^.^.14"
                            }, null]
                        }], "pop", "nop", "\n", [
                            ["ev", {
                                    "^->": "a_chegada_dos_bico.0.c-0.16.0.$r1"
                                }, {
                                    "temp=": "$r"
                                }, "str", {
                                    "->": ".^.s"
                                },
                                [{
                                    "#n": "$r1"
                                }], "/str", "/ev", {
                                    "*": ".^.^.c-0",
                                    "flg": 18
                                }, {
                                    "s": ["^reage ruim", {
                                        "->": "$r",
                                        "var": true
                                    }, null]
                                }
                            ],
                            ["ev", {
                                    "^->": "a_chegada_dos_bico.0.c-0.16.1.$r1"
                                }, {
                                    "temp=": "$r"
                                }, "str", {
                                    "->": ".^.s"
                                },
                                [{
                                    "#n": "$r1"
                                }], "/str", "/ev", {
                                    "*": ".^.^.c-1",
                                    "flg": 18
                                }, {
                                    "s": ["^reage bem", {
                                        "->": "$r",
                                        "var": true
                                    }, null]
                                }
                            ], {
                                "c-0": ["ev", {
                                        "^->": "a_chegada_dos_bico.0.c-0.16.c-0.$r2"
                                    }, "/ev", {
                                        "temp=": "$r"
                                    }, {
                                        "->": ".^.^.0.s"
                                    },
                                    [{
                                        "#n": "$r2"
                                    }], "\n", "ev", {
                                        "VAR?": "karma"
                                    },
                                    1, "-", {
                                        "VAR=": "karma",
                                        "re": true
                                    }, "/ev", {
                                        "->": ".^.^.^.^.g-0"
                                    }, {
                                        "#f": 5
                                    }
                                ],
                                "c-1": ["ev", {
                                        "^->": "a_chegada_dos_bico.0.c-0.16.c-1.$r2"
                                    }, "/ev", {
                                        "temp=": "$r"
                                    }, {
                                        "->": ".^.^.1.s"
                                    },
                                    [{
                                        "#n": "$r2"
                                    }], "\n", "ev", {
                                        "VAR?": "karma"
                                    },
                                    1, "+", {
                                        "VAR=": "karma",
                                        "re": true
                                    }, "/ev", {
                                        "->": ".^.^.^.^.g-0"
                                    }, {
                                        "#f": 5
                                    }
                                ]
                            }
                        ], {
                            "#f": 5
                        }
                    ],
                    "g-0": ["^os bico vão embora", "\n", {
                        "->": "o_plano"
                    }, "end", {
                        "#f": 5
                    }]
                }], {
                    "#f": 1
                }
            ],
            "dialogo_bico": [{
                "->": ".^.trauma"
            }, {
                "trauma": [
                    [
                        ["ev", {
                                "^->": "dialogo_bico.trauma.0.0.$r1"
                            }, {
                                "temp=": "$r"
                            }, "str", {
                                "->": ".^.s"
                            },
                            [{
                                "#n": "$r1"
                            }], "/str", "/ev", {
                                "*": ".^.^.c-0",
                                "flg": 18
                            }, {
                                "s": ["^dialogo bico trauma", {
                                    "->": "$r",
                                    "var": true
                                }, null]
                            }
                        ], {
                            "c-0": ["ev", {
                                    "^->": "dialogo_bico.trauma.0.c-0.$r2"
                                }, "/ev", {
                                    "temp=": "$r"
                                }, {
                                    "->": ".^.^.0.s"
                                },
                                [{
                                    "#n": "$r2"
                                }], "\n", {
                                    "->": "reflexao_pos_bico"
                                }, {
                                    "#f": 5
                                }
                            ]
                        }
                    ], {
                        "#f": 1
                    }
                ],
                "droga": [
                    [
                        ["ev", {
                                "^->": "dialogo_bico.droga.0.0.$r1"
                            }, {
                                "temp=": "$r"
                            }, "str", {
                                "->": ".^.s"
                            },
                            [{
                                "#n": "$r1"
                            }], "/str", "/ev", {
                                "*": ".^.^.c-0",
                                "flg": 18
                            }, {
                                "s": ["^dialogo bico droga ", {
                                    "->": "$r",
                                    "var": true
                                }, null]
                            }
                        ], {
                            "c-0": ["ev", {
                                    "^->": "dialogo_bico.droga.0.c-0.$r2"
                                }, "/ev", {
                                    "temp=": "$r"
                                }, {
                                    "->": ".^.^.0.s"
                                },
                                [{
                                    "#n": "$r2"
                                }], "\n", {
                                    "->": "reflexao_pos_bico"
                                }, {
                                    "#f": 5
                                }
                            ]
                        }
                    ], {
                        "#f": 1
                    }
                ],
                "musica": [
                    [
                        ["ev", {
                                "^->": "dialogo_bico.musica.0.0.$r1"
                            }, {
                                "temp=": "$r"
                            }, "str", {
                                "->": ".^.s"
                            },
                            [{
                                "#n": "$r1"
                            }], "/str", "/ev", {
                                "*": ".^.^.c-0",
                                "flg": 18
                            }, {
                                "s": ["^dialogo bico musica ", {
                                    "->": "$r",
                                    "var": true
                                }, null]
                            }
                        ], {
                            "c-0": ["ev", {
                                    "^->": "dialogo_bico.musica.0.c-0.$r2"
                                }, "/ev", {
                                    "temp=": "$r"
                                }, {
                                    "->": ".^.^.0.s"
                                },
                                [{
                                    "#n": "$r2"
                                }], "\n", {
                                    "->": "reflexao_pos_bico"
                                }, {
                                    "#f": 5
                                }
                            ]
                        }
                    ], {
                        "#f": 1
                    }
                ],
                "#f": 1
            }],
            "reflexao_pos_bico": [
                ["^varia de acordo com a causa da pira", "\n", "ev", {
                        "VAR?": "causa_da_pira"
                    }, "/ev", ["du", "ev", {
                        "VAR?": "Trauma"
                    }, "==", "/ev", {
                        "->": ".^.b",
                        "c": true
                    }, {
                        "b": ["pop", "\n", "^REFLEXAO Trauma", "\n", {
                            "->": ".^.^.^.9"
                        }, null]
                    }],
                    ["du", "ev", {
                        "VAR?": "Droga"
                    }, "==", "/ev", {
                        "->": ".^.b",
                        "c": true
                    }, {
                        "b": ["pop", "\n", "^REFLEXAO droga", "\n", {
                            "->": ".^.^.^.9"
                        }, null]
                    }],
                    ["du", "ev", {
                        "VAR?": "Musica"
                    }, "==", "/ev", {
                        "->": ".^.b",
                        "c": true
                    }, {
                        "b": ["pop", "\n", "^REFLEXAO musica", "\n", {
                            "->": ".^.^.^.9"
                        }, null]
                    }], "pop", "nop", "\n", ["ev", {
                            "^->": "reflexao_pos_bico.0.11.$r1"
                        }, {
                            "temp=": "$r"
                        }, "str", {
                            "->": ".^.s"
                        },
                        [{
                            "#n": "$r1"
                        }], "/str", "/ev", {
                            "*": ".^.^.c-0",
                            "flg": 18
                        }, {
                            "s": ["^terminar", {
                                "->": "$r",
                                "var": true
                            }, null]
                        }
                    ], {
                        "c-0": ["ev", {
                                "^->": "reflexao_pos_bico.0.c-0.$r2"
                            }, "/ev", {
                                "temp=": "$r"
                            }, {
                                "->": ".^.^.11.s"
                            },
                            [{
                                "#n": "$r2"
                            }], "\n", "end", {
                                "#f": 5
                            }
                        ]
                    }
                ], {
                    "#f": 1
                }
            ],
            "o_plano": ["ev", {
                    "VAR?": "karma"
                }, 3, ">", "/ev", [{
                    "->": ".^.b",
                    "c": true
                }, {
                    "b": ["\n", "^reagir bem", "\n", {
                        "->": "discurso_contra_soc_sec"
                    }, {
                        "->": ".^.^.^.7"
                    }, null]
                }],
                [{
                    "->": ".^.b"
                }, {
                    "b": ["\n", "^reagir mal", "\n", {
                        "->": "discurso_a_favor_soc_sec"
                    }, {
                        "->": ".^.^.^.7"
                    }, null]
                }], "nop", "\n", {
                    "#f": 1
                }
            ],
            "discurso_contra_soc_sec": ["^a", "\n", {
                "->": "a_soc_sec"
            }, {
                "#f": 1
            }],
            "discurso_a_favor_soc_sec": ["^b", "\n", {
                "->": "a_soc_sec"
            }, {
                "#f": 1
            }],
            "a_soc_sec": [{
                    "#": "IMAGE /Assets/cenas/cena_comum.jpg"
                },
                ["ev", "visit", 2, "seq", "/ev", "ev", "du", 0, "==", "/ev", {
                    "->": ".^.s0",
                    "c": true
                }, "ev", "du", 1, "==", "/ev", {
                    "->": ".^.s1",
                    "c": true
                }, "nop", {
                    "s0": ["pop", "\n", {
                        "->": ".^.^.^.existe"
                    }, {
                        "->": ".^.^.17"
                    }, null],
                    "s1": ["pop", "\n", {
                        "->": ".^.^.^.nao_existe"
                    }, {
                        "->": ".^.^.17"
                    }, null],
                    "#f": 5
                }], "\n", {
                    "existe": ["^ela existe", "\n", "end", {
                        "#f": 1
                    }],
                    "nao_existe": ["^viagem", "\n", "end", {
                        "#f": 1
                    }],
                    "#f": 1
                }
            ],
            "um_grito_na_multidao": ["^quem é vocÊ", "\n", {
                "#": "INPUT TRUE"
            }, "end", {
                "#f": 1
            }],
            "prologo": ["^prologo", "\n", "end", {
                "#f": 1
            }],
            "global decl": ["ev", 0, {
                "VAR=": "karma"
            }, 0, {
                "VAR=": "conhece_a_soc_sec"
            }, 1, {
                "VAR=": "soc_sec_existe"
            }, 1, {
                "VAR=": "favoravel_a_soc_sec"
            }, {
                "list": {},
                "origins": ["causa_da_pira"]
            }, {
                "VAR=": "causa_da_pira"
            }, {
                "list": {},
                "origins": ["pessoa_observada"]
            }, {
                "VAR=": "pessoa_observada"
            }, "/ev", "end", null],
            "#f": 1
        }
    ],
    "listDefs": {
        "causa_da_pira": {
            "Droga": 1,
            "Musica": 2,
            "Trauma": 3
        },
        "pessoa_observada": {
            "Traficante": 1,
            "Vereador": 2,
            "Pastor": 3
        }
    }
};