/* Catálogo do PixelNest. Para adicionar um jogo: veja "Como adicionar um jogo" no README. */
window.PIXELNEST_GAMES = [
  {
    slug: "pixel-hook",
    titulo: "Pixel Hook",
    categoria: "Plataforma",
    descricao: "Suba por cavernas neon usando um gancho: mire, prenda, balance e escape.",
    sobre: "Pixel Hook é um jogo de plataforma vertical em pixel art em que você escala cavernas brilhantes com um gancho. Prenda a corda, balance, ajuste o comprimento e use o laser contra monstros enquanto sobe o mais alto que conseguir.",
    controles: [
      ["Andar", "A / D"],
      ["Pular", "Espaço"],
      ["Mirar e lançar o gancho", "Mouse: clique para atirar (clique em outra âncora para trocar)"],
      ["Soltar a corda", "Espaço ou E"],
      ["Encolher / soltar corda", "W / S"],
      ["Laser", "K"],
      ["Pausar", "Esc"]
    ],
    arquivo: "game.html",
    proporcao: null,
    cor: 190
  },
  {
    slug: "fuga-noturna",
    titulo: "Fuga Noturna",
    categoria: "Ação",
    descricao: "Você acabou de assaltar um banco: despiste a polícia e guarde a grana no esconderijo.",
    sobre: "Fuga Noturna é um jogo de perseguição policial em pixel art. Pegue as malas de dinheiro, leve até o esconderijo para guardá-las, destrua viaturas e evite bloqueios. Se for preso ou destruído, você perde o que estava na mala. O recorde fica salvo no navegador.",
    controles: [
      ["Dirigir", "W A S D ou setas"],
      ["Freio de mão (derrapar)", "Espaço"],
      ["Nitro", "Shift"],
      ["Celular", "Botões na tela"],
      ["Pausar", "Esc"]
    ],
    arquivo: "game.html",
    proporcao: "16/9",
    cor: 300
  },
  {
    slug: "skate-session",
    titulo: "Skate Session",
    categoria: "Esportes",
    descricao: "Explore uma pista de skate em pixel art, faça manobras, grinds e combos.",
    sobre: "Skate Session é um jogo de skate em pixel art com uma pista grande para explorar, skatistas com quem conversar, desafios, missões, moedas e personalização do personagem e do skate.",
    controles: [
      ["Mover", "WASD ou setas"],
      ["Pular", "Espaço (segure para pular mais alto)"],
      ["Manobras", "J: kickflip · K: shove-it · J + K: varial flip · H: heelflip"],
      ["Grind", "A / D para equilibrar"],
      ["Power slide", "Shift"],
      ["Deitar / levantar", "C / Espaço"],
      ["Pausar", "Esc, P ou botão II"]
    ],
    arquivo: "game.html",
    proporcao: null,
    cor: 320
  },
  {
    slug: "faxineiro-de-fantasmas",
    titulo: "Faxineiro de Fantasmas",
    categoria: "Arcade",
    descricao: "Aspire fantasmas em rodadas cronometradas, enfrente chefes e limpe 9 cômodos assombrados.",
    sobre: "Você é o faxineiro de uma mansão assombrada. Em cada rodada, capture a meta de fantasmas antes que o tempo acabe, use o poder do aspirador, cumpra missões por moedas extras e gaste as moedas em melhorias. A cada 5 rodadas aparece um chefe gigante, e há um modo infinito para bater recorde.",
    controles: [
      ["Mover", "WASD, setas, ou segurar o dedo/mouse na tela"],
      ["Aspirar sem andar", "Espaço (ou dedo parado)"],
      ["Poder do aspirador", "E, Shift ou o botão ⚡ da tela"]
    ],
    arquivo: "game.html",
    proporcao: null,
    cor: 165
  },
  {
    slug: "lago-lunar",
    titulo: "Lago Lunar",
    categoria: "Pesca",
    descricao: "Pesque sob a lua em pixel art: arremesse, fisgue, vença a disputa e venda na loja.",
    sobre: "Jogo de pesca noturno com arremesso por zona de acerto, disputa contra o peixe, loja, enciclopédia, conquistas e personalização do personagem. O menu mostra um modo multiplayer cooperativo, mas ele está marcado como “em breve” e ainda não pode ser usado.",
    controles: [
      ["Arremessar", "Segure ou clique para preparar; clique de novo na zona verde"],
      ["Fisgar", "Clique quando o peixe morder; na disputa, acerte a zona verde"],
      ["Loja", "B"],
      ["Enciclopédia", "C"],
      ["Personagem", "V"],
      ["Som / Pausar", "M / P"]
    ],
    arquivo: "game.html",
    proporcao: "16/9",
    cor: 235
  },
  {
    slug: "turno-da-noite",
    titulo: "Turno da Noite",
    categoria: "Mistério",
    descricao: "Atenda clientes numa loja 24h, observe detalhes e acuse só com evidência.",
    sobre: "Você trabalha o turno da noite (22:00 às 06:00) numa loja de conveniência. Converse, registre os produtos, cobre, monte o troco e peça documento para bebida alcoólica. Observe detalhes, explore o ambiente e acuse só com evidência: clientes esquisitos podem ser apenas humanos. Há um diário com evidências.",
    controles: [
      ["Jogar", "Tudo com o mouse (ou toque)"],
      ["Continuar cenas", "Clique ou Espaço"],
      ["Explorar", "Clique na TV, janela, geladeira, luzes, telefone, letreiro e no diário"]
    ],
    aviso: "Este jogo usa efeitos de flash. Dá para desligar no botão “Flashes” dentro do jogo.",
    arquivo: "game.html",
    proporcao: null,
    cor: 28
  }
];
