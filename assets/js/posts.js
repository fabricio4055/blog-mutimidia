window.BLOG_CONFIG = {
  siteName: "Blog Acadêmico Multimídia",
  tagline: "Blog estatico para textos, videos e projetos academicos"
};

window.BLOG_POSTS = [
  {
    slug: "criacao-do-blog",
    title: "Criação do blog",
    category: "Apresentação",
    format: "texto",
    accent: "emerald",
    featured: true,
    date: "2026-03-01",
    readingTime: "4 min",
    excerpt: "Registro da criação do blog e da estrutura escolhida para organizar textos, vídeos e projetos interativos.",
    intro: "Este blog nasce como um espaço de documentação acadêmica e criativa. A ideia é reunir teoria, exercícios, projetos e reflexões em um único ambiente digital, com visual organizado e navegação simples.",
    tags: ["blog", "estrutura", "portfólio"],
    blocks: [
      {
        type: "paragraph",
        content: "A estrutura foi planejada para funcionar sem painel administrativo e sem banco de dados. Isso torna o projeto leve, fácil de hospedar e simples de atualizar sempre que uma nova atividade for concluída."
      },
      {
        type: "list",
        title: "O que o blog já suporta",
        items: [
          "postagens de texto com seções e listas",
          "vídeos incorporados ou locais",
          "projetos com links, tecnologias e descrição",
          "embeds do Tinkercad para circuitos e protótipos",
          "filtros por categoria, formato e busca por palavra-chave"
        ]
      },
      {
        type: "callout",
        tone: "success",
        accent: "emerald",
        title: "Como editar rapidamente",
        content: "Para publicar uma nova atividade, basta duplicar uma postagem no arquivo assets/js/posts.js e trocar os dados do conteúdo."
      },
      {
        type: "paragraph",
        content: "Além de apresentar os temas da disciplina, o blog também funciona como um portfólio de evolução. Cada postagem pode mostrar aprendizado, processo, referências e resultados em diferentes formatos."
      }
    ]
  },
  {
    slug: "quem-sou-eu",
    title: "Postagem 1: Minha Historia",
    category: "Apresentação",
    format: "texto",
    accent: "amber",
    date: "2026-03-21",
    readingTime: "3 min",
    excerpt: "Modelo de apresentação pessoal para contar trajetória, interesses e objetivos dentro do blog.",
    intro: "Apenas um jovem tranquilo.",
    tags: ["apresentação", "biografia", "perfil"],
    blocks: [
      {
        type: "callout",
        tone: "info",
        accent: "amber",
        title: "Personalize este texto",
        content: "Troque os campos entre colchetes pelos seus dados reais para transformar esta postagem em uma apresentação pessoal completa."
      },
      {
        type: "paragraph",
        content: "Olá, meu nome é Fabrício Bardela e sou estudante da área de tecnologia. Tenho interesse em aprender sobre desenvolvimento de sistemas, programação, automação e novas ferramentas digitais que fazem parte do mundo atual. Gosto de explorar conteúdos que unem teoria e prática, porque isso ajuda a entender melhor como a tecnologia está presente no nosso dia a dia. Este blog foi criado como uma forma de apresentar um pouco do que venho aprendendo e de organizar os temas trabalhados em sala. Aqui, vou compartilhar assuntos relacionados à tecnologia, inovação e desenvolvimento, sempre de maneira simples e direta."
      },
      {
        type: "quote",
        accent: "amber",
        content: "Aprender também é documentar o caminho, enxergar a própria evolução e compartilhar descobertas.",
      }
    ]
  },
  {
    slug: "finalidade-do-blog",
    title: "Finalidade do blog",
    category: "Apresentação",
    format: "texto",
    accent: "aqua",
    date: "2026-03-20",
    readingTime: "3 min",
    excerpt: "Explicação do objetivo do blog como espaço para estudo, publicação e portfólio digital.",
    intro: "A proposta deste blog é registrar conteúdos acadêmicos de forma organizada, visualmente agradável e com liberdade para usar diferentes mídias em cada postagem.",
    tags: ["objetivo", "aprendizagem", "registro"],
    blocks: [
      {
        type: "paragraph",
        content: "Mais do que reunir textos, o blog foi pensado como um ambiente de experimentação. Em vez de ficar restrito a anotações, ele permite combinar análise teórica, vídeos, imagens, protótipos e links para projetos."
      },
      {
        type: "specs",
        title: "Funções principais deste espaço",
        items: [
          {
            label: "Documentar",
            value: "Registrar o que foi estudado, desenvolvido e testado durante a disciplina."
          },
          {
            label: "Comunicar",
            value: "Apresentar ideias com clareza para colegas, professores e visitantes."
          },
          {
            label: "Evidenciar",
            value: "Mostrar processos, resultados e evolução por meio de postagens progressivas."
          }
        ]
      },
      {
        type: "paragraph",
        content: "Ao final, o blog se transforma em um portfólio acadêmico vivo: um lugar onde teoria e prática aparecem lado a lado, com linguagem simples e organização por tema."
      }
    ]
  },
  {
    slug: "multimidia",
    title: "Multimídia",
    category: "Conceitos Digitais",
    format: "video",
    accent: "clay",
    date: "2026-03-19",
    readingTime: "4 min",
    excerpt: "Conceito de multimídia e espaço preparado para receber vídeo de apoio ou apresentação do tema.",
    intro: "Multimídia é a integração de diferentes formas de linguagem em um mesmo ambiente, combinando texto, som, imagem, animação e vídeo para comunicar uma ideia de forma mais rica.",
    tags: ["multimídia", "vídeo", "mídias digitais"],
    blocks: [
      {
        type: "paragraph",
        content: "Na prática, multimídia aparece em sites, jogos, aplicativos educacionais, apresentações interativas e campanhas digitais. O valor dessa combinação está na capacidade de atingir diferentes sentidos e tornar a experiência mais envolvente."
      },
      {
        type: "list",
        title: "Componentes que podem formar uma peça multimídia",
        items: [
          "texto para contexto e explicação",
          "imagem para síntese visual",
          "áudio para orientação ou ambientação",
          "vídeo para demonstração de processo",
          "animação para destacar etapas e movimento"
        ]
      },
      {
        type: "embed",
        embedKind: "youtube",
        title: "Espaço para vídeo sobre multimídia",
        src: "",
        placeholderTitle: "Área pronta para vídeo incorporado",
        helperText: "Cole aqui o link embed do YouTube para mostrar um vídeo explicativo, apresentação sua ou material de apoio.",
        description: "Quando você tiver o vídeo, substitua o campo src por uma URL de incorporação do YouTube."
      },
      {
        type: "paragraph",
        content: "Em um blog acadêmico, o uso de multimídia ajuda a transformar conteúdo expositivo em experiência. Em vez de apenas falar sobre um tema, é possível demonstrar, ilustrar e comparar diferentes exemplos no mesmo post."
      }
    ]
  },
  {
    slug: "hipermidia",
    title: "Hipermídia",
    category: "Conceitos Digitais",
    format: "texto",
    accent: "emerald",
    date: "2026-03-18",
    readingTime: "4 min",
    excerpt: "Visão geral sobre hipermídia, navegação não linear e relação entre nós de informação.",
    intro: "Hipermídia amplia a ideia de multimídia ao permitir navegação não linear entre conteúdos conectados por links, botões, menus e caminhos interativos.",
    tags: ["hipermídia", "links", "navegação"],
    blocks: [
      {
        type: "paragraph",
        content: "Enquanto a multimídia reúne várias mídias, a hipermídia organiza essas mídias em rede. O usuário escolhe o percurso, acessa conteúdos em diferentes ordens e cria sua própria trilha de leitura de acordo com interesse e contexto."
      },
      {
        type: "list",
        title: "Características da hipermídia",
        items: [
          "estrutura baseada em conexões",
          "interação do usuário com o percurso",
          "acesso rápido a materiais relacionados",
          "integração de mídias com navegação dinâmica"
        ]
      },
      {
        type: "links",
        title: "Exemplos de conexões dentro deste blog",
        items: [
          {
            label: "Voltar para a página inicial do acervo",
            url: "index.html#postagens"
          },
          {
            label: "Ler a postagem sobre multimídia",
            url: "post.html?slug=multimidia"
          },
          {
            label: "Abrir a seção de publicação do blog",
            url: "index.html#publicar"
          }
        ]
      },
      {
        type: "paragraph",
        content: "Em ambientes educacionais, a hipermídia é útil porque permite aprofundar assuntos em camadas. Um texto pode levar a um vídeo, que leva a uma simulação, que leva a um projeto. Assim, a aprendizagem deixa de ser linear e ganha profundidade."
      }
    ]
  },
  {
    slug: "realidade-virtual-hardware-software",
    title: "Realidade Virtual (Hardware e Software)",
    category: "Realidade Estendida",
    format: "texto",
    accent: "aqua",
    date: "2026-03-17",
    readingTime: "5 min",
    excerpt: "Panorama da realidade virtual com foco nos dispositivos utilizados e nos softwares que tornam a imersão possível.",
    intro: "A realidade virtual cria ambientes totalmente digitais e imersivos, permitindo que o usuário explore um espaço simulado como se estivesse presente nele.",
    tags: ["VR", "imersão", "hardware", "software"],
    blocks: [
      {
        type: "paragraph",
        content: "Esse tipo de tecnologia depende da combinação entre dispositivos físicos e sistemas computacionais capazes de renderizar cenas em tempo real, rastrear movimento e responder às ações do usuário com baixa latência."
      },
      {
        type: "specs",
        title: "Componentes essenciais da VR",
        items: [
          {
            label: "Hardware",
            value: "headsets, controladores, sensores de posição, fones e, em alguns casos, computadores ou consoles dedicados"
          },
          {
            label: "Software",
            value: "engines 3D, renderização estereoscópica, rastreamento espacial e aplicações imersivas para jogos, treinamento ou simulação"
          },
          {
            label: "Experiência",
            value: "interação em primeira pessoa, sensação de presença e resposta imediata aos movimentos do corpo"
          }
        ]
      },
      {
        type: "list",
        title: "Aplicações frequentes",
        items: [
          "treinamento técnico e profissional",
          "simulações médicas ou industriais",
          "jogos digitais imersivos",
          "visitas virtuais a espaços arquitetônicos"
        ]
      },
      {
        type: "paragraph",
        content: "Quando bem implementada, a VR cria um senso de presença difícil de alcançar com mídias tradicionais. Por isso, ela vem sendo usada em áreas que exigem prática, visualização espacial e tomada de decisão em ambientes simulados."
      }
    ]
  },
  {
    slug: "realidade-aumentada-hardware-software",
    title: "Realidade Aumentada (Hardware e Software)",
    category: "Realidade Estendida",
    format: "texto",
    accent: "amber",
    date: "2026-03-16",
    readingTime: "5 min",
    excerpt: "Como a realidade aumentada sobrepõe elementos digitais ao mundo real por meio de câmeras, sensores e processamento visual.",
    intro: "Na realidade aumentada, o ambiente real continua visível, mas recebe camadas digitais que enriquecem a percepção do usuário com informações, objetos 3D e interações contextuais.",
    tags: ["AR", "visão computacional", "hardware", "software"],
    blocks: [
      {
        type: "paragraph",
        content: "A AR ficou popular em celulares, mas também pode ser usada com óculos específicos. Seu funcionamento depende da leitura do espaço físico, do reconhecimento de superfícies, imagens ou marcadores e da sobreposição coerente dos elementos virtuais."
      },
      {
        type: "specs",
        title: "Estrutura de funcionamento",
        items: [
          {
            label: "Hardware",
            value: "câmera, sensores de movimento, GPS, giroscópio, processador gráfico e tela para exibir a camada virtual"
          },
          {
            label: "Software",
            value: "rastreamento de imagem, entendimento de superfícies, posicionamento de objetos 3D e integração com bibliotecas de AR"
          },
          {
            label: "Uso",
            value: "educação, manutenção assistida, marketing, turismo, filtros e visualização de produtos"
          }
        ]
      },
      {
        type: "quote",
        accent: "amber",
        content: "A realidade aumentada não substitui o mundo real; ela acrescenta camadas de informação sobre ele.",
        author: "Síntese do conceito"
      },
      {
        type: "paragraph",
        content: "Seu potencial é grande porque ela conecta o digital ao cotidiano. Ao apontar a câmera para um objeto ou ambiente, o usuário pode receber instruções, visualizações e interações que ampliam a compreensão daquele contexto."
      }
    ]
  },
  {
    slug: "realidade-mista-hardware-software",
    title: "Realidade Mista (Hardware e Software)",
    category: "Realidade Estendida",
    format: "texto",
    accent: "clay",
    date: "2026-03-15",
    readingTime: "5 min",
    excerpt: "Entendimento da realidade mista como encontro entre o ambiente real e os objetos digitais interativos.",
    intro: "A realidade mista combina características da realidade aumentada e da realidade virtual para permitir que elementos digitais convivam e interajam com o espaço físico de forma mais profunda.",
    tags: ["MR", "interação espacial", "realidade estendida"],
    blocks: [
      {
        type: "paragraph",
        content: "Na MR, o objeto virtual não apenas aparece sobre o mundo real: ele reconhece superfícies, ocupa posições consistentes e pode reagir ao movimento do usuário ou à geometria do ambiente."
      },
      {
        type: "specs",
        title: "Recursos necessários",
        items: [
          {
            label: "Hardware",
            value: "óculos com mapeamento espacial, sensores de profundidade, câmeras e capacidade de rastrear mãos ou controladores"
          },
          {
            label: "Software",
            value: "mapeamento do ambiente, ancoragem espacial, física de interação e renderização em tempo real"
          },
          {
            label: "Diferencial",
            value: "integração mais consistente entre real e virtual, permitindo colaboração e manipulação contextual"
          }
        ]
      },
      {
        type: "list",
        title: "Onde a MR pode ser aplicada",
        items: [
          "treinamento operacional com objetos virtuais ancorados no espaço real",
          "prototipagem industrial e arquitetônica",
          "visualização de dados tridimensionais",
          "ensino de montagem, manutenção e procedimentos"
        ]
      },
      {
        type: "paragraph",
        content: "Por exigir reconhecimento espacial mais sofisticado, a realidade mista costuma demandar equipamentos mais avançados. Em compensação, oferece experiências muito mais ricas para atividades de análise, manipulação e colaboração."
      }
    ]
  },
  {
    slug: "holografia-hardware-software",
    title: "Holografia (Hardware e Software)",
    category: "Realidade Estendida",
    format: "texto",
    accent: "emerald",
    date: "2026-03-14",
    readingTime: "4 min",
    excerpt: "Introdução à holografia e aos recursos necessários para registrar, processar e exibir imagens tridimensionais aparentes.",
    intro: "A holografia busca reproduzir a aparência tridimensional de um objeto por meio de padrões de luz capazes de simular profundidade, forma e posição espacial.",
    tags: ["holografia", "óptica", "visualização"],
    blocks: [
      {
        type: "paragraph",
        content: "Embora muitas representações chamadas de hologramas sejam, na prática, projeções ou ilusões ópticas, o conceito está ligado ao registro e reconstrução de frentes de onda de luz para produzir imagens com sensação tridimensional."
      },
      {
        type: "specs",
        title: "O que compõe um sistema holográfico",
        items: [
          {
            label: "Hardware",
            value: "fontes de luz, lasers, sensores, películas ou superfícies de exibição e estruturas ópticas especializadas"
          },
          {
            label: "Software",
            value: "cálculo de padrões, modelagem tridimensional, processamento de imagem e controle de exibição"
          },
          {
            label: "Desafio",
            value: "garantir profundidade convincente, estabilidade visual e fidelidade do efeito tridimensional"
          }
        ]
      },
      {
        type: "paragraph",
        content: "A holografia desperta interesse em medicina, museus, publicidade, ensino e entretenimento porque oferece novas formas de apresentar objetos complexos, delicados ou invisíveis a olho nu."
      }
    ]
  },
  {
    slug: "imagens-e-seus-formatos",
    title: "Imagens e seus formatos",
    category: "Imagem e Mídia",
    format: "texto",
    accent: "amber",
    date: "2026-03-13",
    readingTime: "4 min",
    excerpt: "Comparação entre formatos de imagem e explicação de quando usar JPG, PNG, SVG, WebP e outros tipos.",
    intro: "Os formatos de imagem foram criados para atender necessidades diferentes de qualidade, compressão, transparência, animação e escalabilidade.",
    tags: ["imagem", "formatos", "compressão"],
    blocks: [
      {
        type: "paragraph",
        content: "Escolher um formato adequado impacta diretamente a qualidade visual, o tamanho do arquivo e o desempenho de sites, aplicativos e apresentações. Cada formato atende melhor a um tipo de uso."
      },
      {
        type: "specs",
        title: "Formatos mais comuns",
        items: [
          {
            label: "JPG ou JPEG",
            value: "bom para fotografias, com compressão eficiente, mas sem transparência"
          },
          {
            label: "PNG",
            value: "indicado para gráficos, capturas e imagens com transparência"
          },
          {
            label: "SVG",
            value: "ideal para vetores, ícones e logotipos por escalar sem perder qualidade"
          },
          {
            label: "WebP e AVIF",
            value: "formatos modernos com ótima compressão e boa qualidade para web"
          }
        ]
      },
      {
        type: "list",
        title: "Critérios para escolher um formato",
        items: [
          "tipo de conteúdo visual",
          "necessidade de transparência",
          "peso final do arquivo",
          "compatibilidade com a plataforma",
          "qualidade exigida pelo projeto"
        ]
      },
      {
        type: "paragraph",
        content: "Entender os formatos é importante porque a qualidade de um projeto digital não depende apenas do design, mas também da forma como os arquivos são preparados, comprimidos e distribuídos."
      }
    ]
  },
  {
    slug: "processamento-de-imagens",
    title: "Processamento de Imagens",
    category: "Imagem e Mídia",
    format: "texto",
    accent: "aqua",
    date: "2026-03-12",
    readingTime: "5 min",
    excerpt: "Visão geral sobre técnicas de ajuste, análise e transformação de imagens em ambientes computacionais.",
    intro: "O processamento de imagens envolve técnicas para melhorar, transformar, analisar ou interpretar imagens com apoio de algoritmos computacionais.",
    tags: ["processamento", "imagem digital", "análise visual"],
    blocks: [
      {
        type: "paragraph",
        content: "Essas técnicas podem atuar em níveis diferentes: desde operações simples, como brilho, contraste e redução de ruído, até processos mais avançados, como segmentação, detecção de bordas e reconhecimento de padrões."
      },
      {
        type: "list",
        title: "Etapas comuns em pipelines de processamento",
        items: [
          "aquisição da imagem",
          "pré-processamento",
          "extração de características",
          "análise ou classificação",
          "geração de resultado para o usuário ou sistema"
        ]
      },
      {
        type: "quote",
        accent: "aqua",
        content: "Processar uma imagem não é apenas editar sua aparência, mas também preparar dados visuais para extração de informação.",
        author: "Síntese da área"
      },
      {
        type: "paragraph",
        content: "Na prática, o processamento de imagens aparece em filtros de câmera, diagnóstico por imagem, inspeção industrial, reconhecimento facial, carros autônomos e muitas soluções baseadas em visão computacional."
      }
    ]
  },
  {
    slug: "inteligencia-artificial",
    title: "Inteligência Artificial",
    category: "IA",
    format: "texto",
    accent: "clay",
    date: "2026-03-11",
    readingTime: "5 min",
    excerpt: "Resumo do conceito de IA, áreas de aplicação e cuidados necessários no uso responsável da tecnologia.",
    intro: "A inteligência artificial reúne métodos computacionais capazes de identificar padrões, tomar decisões assistidas por dados e automatizar tarefas que antes exigiam grande esforço humano.",
    tags: ["IA", "machine learning", "dados"],
    blocks: [
      {
        type: "paragraph",
        content: "A IA não é uma tecnologia única, mas um conjunto de abordagens que inclui aprendizado de máquina, redes neurais, sistemas especialistas, visão computacional e processamento de linguagem natural."
      },
      {
        type: "specs",
        title: "Usos frequentes da IA",
        items: [
          {
            label: "Análise",
            value: "classificação de dados, recomendação, previsão e apoio à tomada de decisão"
          },
          {
            label: "Interação",
            value: "chatbots, assistentes virtuais, reconhecimento de fala e tradução"
          },
          {
            label: "Visão",
            value: "detecção de objetos, leitura de imagens, inspeção de qualidade e reconhecimento de padrões"
          }
        ]
      },
      {
        type: "callout",
        tone: "warn",
        accent: "clay",
        title: "Uso responsável",
        content: "Ao estudar IA, também é importante discutir viés algorítmico, privacidade, transparência e os impactos sociais da automação."
      },
      {
        type: "paragraph",
        content: "Quando bem aplicada, a inteligência artificial pode ampliar produtividade e capacidade analítica. Porém, seu valor real depende da qualidade dos dados, do contexto do problema e da supervisão humana."
      }
    ]
  },
  {
    slug: "game-design-document",
    title: "Game Design Document",
    category: "Jogos",
    format: "projeto",
    accent: "emerald",
    date: "2026-03-10",
    readingTime: "4 min",
    excerpt: "Estrutura básica de um GDD e modelo para organizar conceito, mecânicas e objetivos do jogo.",
    intro: "O Game Design Document, ou GDD, é um documento de planejamento que descreve a visão do jogo, suas regras, mecânicas, narrativa, estilo visual e experiência desejada.",
    tags: ["GDD", "jogos", "planejamento"],
    blocks: [
      {
        type: "paragraph",
        content: "Um bom GDD funciona como mapa do projeto. Ele ajuda a alinhar ideias, reduzir ambiguidades e registrar como o jogo deve funcionar antes e durante o desenvolvimento."
      },
      {
        type: "project",
        accent: "emerald",
        kicker: "Modelo de documento",
        title: "Estrutura sugerida para o seu GDD",
        summary: "Use este bloco como checklist para preencher o documento do seu jogo e manter o escopo claro do início ao fim.",
        technologies: [
          "conceito do jogo",
          "público-alvo",
          "mecânicas centrais",
          "personagens e cenário",
          "progressão e fases",
          "arte, som e interface"
        ],
        links: [
          {
            label: "Ver postagem do jogo desenvolvido",
            url: "post.html?slug=jogo-desenvolvido"
          }
        ]
      },
      {
        type: "list",
        title: "Perguntas que o GDD deve responder",
        items: [
          "qual problema ou experiência o jogo propõe?",
          "como o jogador interage e progride?",
          "quais desafios, metas e recompensas existem?",
          "qual é o estilo audiovisual pretendido?"
        ]
      },
      {
        type: "paragraph",
        content: "Mesmo em projetos pequenos, documentar o design é importante. Isso facilita apresentar a ideia, dividir tarefas e manter coerência entre conceito, mecânica e execução."
      }
    ]
  },
  {
    slug: "jogo-desenvolvido",
    title: "Jogo desenvolvido",
    category: "Jogos",
    format: "projeto",
    accent: "amber",
    date: "2026-03-09",
    readingTime: "4 min",
    excerpt: "Postagem modelo para apresentar o jogo criado, destacando proposta, mecânicas e link de demonstração.",
    intro: "Esta postagem foi preparada para receber as informações do jogo desenvolvido na disciplina. Ela já inclui espaços para descrição do projeto, tecnologias e vídeo de gameplay.",
    tags: ["jogo", "gameplay", "projeto"],
    blocks: [
      {
        type: "callout",
        tone: "info",
        accent: "amber",
        title: "Preencha com os dados do seu jogo",
        content: "Troque os campos em colchetes pelo nome do jogo, gênero, motor utilizado, objetivos, desafios e links reais de demonstração."
      },
      {
        type: "project",
        accent: "amber",
        kicker: "Projeto jogável",
        title: "[Nome do jogo]",
        summary: "[Descreva o conceito do jogo, o objetivo principal, a experiência desejada para o jogador e o que foi desenvolvido nesta versão.]",
        technologies: [
          "gênero: [ação, puzzle, aventura...]",
          "engine: [Unity, Godot, Construct...]",
          "plataforma: [PC, web, mobile]",
          "mecânica principal: [explique aqui]"
        ],
        links: [
          {
            label: "Adicionar link do jogo",
            url: "#"
          },
          {
            label: "Relacionar ao GDD",
            url: "post.html?slug=game-design-document"
          }
        ]
      },
      {
        type: "embed",
        embedKind: "youtube",
        title: "Gameplay ou apresentação do projeto",
        src: "",
        placeholderTitle: "Área pronta para vídeo do jogo",
        helperText: "Cole um vídeo do YouTube mostrando a jogabilidade, a interface e os principais objetivos do jogo.",
        description: "Você também pode trocar este bloco por um vídeo local usando o tipo video."
      },
      {
        type: "paragraph",
        content: "Apresentar um jogo em blog é importante porque permite ir além do link jogável. Aqui é possível explicar decisões de design, dificuldades do desenvolvimento, melhorias futuras e aprendizado técnico obtido no processo."
      }
    ]
  },
  {
    slug: "internet-das-coisas",
    title: "Internet das Coisas",
    category: "IoT e Automação",
    format: "texto",
    accent: "aqua",
    date: "2026-03-08",
    readingTime: "5 min",
    excerpt: "Explicação sobre IoT, conectividade entre dispositivos e exemplos de uso em casas, cidades e indústria.",
    intro: "A Internet das Coisas conecta objetos físicos à rede para coletar dados, automatizar ações e ampliar o controle sobre ambientes, equipamentos e processos.",
    tags: ["IoT", "sensores", "conectividade"],
    blocks: [
      {
        type: "paragraph",
        content: "Na IoT, sensores, microcontroladores e plataformas de software trabalham juntos para registrar o que acontece no mundo físico e enviar essas informações para sistemas capazes de monitorar, analisar ou reagir automaticamente."
      },
      {
        type: "specs",
        title: "Partes de uma solução IoT",
        items: [
          {
            label: "Dispositivos",
            value: "sensores, atuadores, placas embarcadas e módulos de comunicação"
          },
          {
            label: "Conectividade",
            value: "Wi-Fi, Bluetooth, LoRa, RFID, rede móvel ou protocolos específicos"
          },
          {
            label: "Plataforma",
            value: "painéis de monitoramento, banco de dados, automações e alertas"
          }
        ]
      },
      {
        type: "list",
        title: "Exemplos de aplicação",
        items: [
          "casas inteligentes",
          "monitoramento ambiental",
          "agricultura de precisão",
          "rastreamento logístico",
          "indústria conectada"
        ]
      },
      {
        type: "paragraph",
        content: "A IoT é valiosa porque aproxima o mundo físico do mundo digital. Com isso, decisões podem ser tomadas com base em dados em tempo real, reduzindo desperdícios e ampliando eficiência."
      }
    ]
  },
  {
    slug: "automacao",
    title: "Automação",
    category: "IoT e Automação",
    format: "tinkercad",
    accent: "clay",
    date: "2026-03-07",
    readingTime: "4 min",
    excerpt: "Conceito de automação e espaço pronto para incorporar circuito ou simulação desenvolvida no Tinkercad.",
    intro: "Automação consiste em usar tecnologia para executar tarefas com menos intervenção humana, aumentando precisão, repetibilidade e produtividade.",
    tags: ["automação", "Tinkercad", "circuitos"],
    blocks: [
      {
        type: "paragraph",
        content: "Sistemas automatizados podem estar presentes em residências, processos industriais, laboratórios e projetos educacionais. Em todos os casos, a lógica principal é observar uma condição e acionar uma resposta de maneira programada."
      },
      {
        type: "project",
        accent: "clay",
        kicker: "Protótipo de automação",
        title: "Exemplo: sistema de iluminação automática",
        summary: "Um projeto simples pode combinar sensor, microcontrolador e atuador para ligar ou desligar uma lâmpada conforme luminosidade, presença ou horário definido.",
        technologies: ["Arduino", "sensor", "atuador", "lógica de controle"],
        links: [
          {
            label: "Relacionar com IoT",
            url: "post.html?slug=internet-das-coisas"
          }
        ]
      },
      {
        type: "embed",
        embedKind: "tinkercad",
        title: "Embed do circuito no Tinkercad",
        src: "",
        placeholderTitle: "Área pronta para Tinkercad",
        helperText: "Abra seu projeto no Tinkercad, gere o link de incorporação e cole a URL embed no campo src deste bloco.",
        description: "Depois disso, o circuito aparecerá diretamente nesta postagem para visualização e demonstração."
      },
      {
        type: "paragraph",
        content: "Usar automação em um blog é interessante porque a explicação teórica pode ser complementada por um protótipo visual ou interativo. Assim, a postagem mostra o conceito e também a aplicação prática."
      }
    ]
  },
  {
    slug: "projeto-desenvolvido",
    title: "Projeto Desenvolvido",
    category: "Projetos",
    format: "projeto",
    accent: "emerald",
    date: "2026-03-06",
    readingTime: "4 min",
    excerpt: "Modelo final para apresentar um projeto concluído com descrição, tecnologias, resultado e mídia incorporada.",
    intro: "Esta postagem foi estruturada para destacar um projeto finalizado, reunindo visão geral, tecnologias usadas, links relevantes e espaço para mídia incorporada.",
    tags: ["projeto final", "portfólio", "apresentação"],
    blocks: [
      {
        type: "callout",
        tone: "success",
        accent: "emerald",
        title: "Transforme este modelo no seu portfólio",
        content: "Substitua os conteúdos entre colchetes por informações reais do seu projeto, incluindo objetivos, resultados, materiais utilizados e links públicos."
      },
      {
        type: "project",
        accent: "emerald",
        kicker: "Projeto concluído",
        title: "[Nome do projeto desenvolvido]",
        summary: "[Explique o que o projeto resolve, como foi construído, qual foi o processo de desenvolvimento e quais resultados foram alcançados.]",
        technologies: [
          "tecnologias: [liste aqui]",
          "ferramentas: [liste aqui]",
          "objetivo: [resuma aqui]",
          "resultado: [resuma aqui]"
        ],
        links: [
          {
            label: "Adicionar repositório",
            url: "#"
          },
          {
            label: "Adicionar demonstração",
            url: "#"
          }
        ]
      },
      {
        type: "embed",
        embedKind: "tinkercad",
        title: "Mídia do projeto",
        src: "",
        placeholderTitle: "Escolha o melhor formato para apresentar",
        helperText: "Aqui você pode usar um embed do Tinkercad, trocar por um vídeo de demonstração ou adicionar imagens em uma galeria.",
        description: "A estrutura do blog já está preparada para receber diferentes mídias conforme o tipo do projeto."
      },
      {
        type: "paragraph",
        content: "Uma boa postagem de projeto não mostra apenas o resultado final. Ela também evidencia o problema inicial, o raciocínio aplicado, os testes realizados e o conhecimento construído ao longo do desenvolvimento."
      }
    ]
  }
];
