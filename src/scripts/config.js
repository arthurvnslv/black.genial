/**
 * Configuração Central da Campanha Black Genial 2026
 * 
 * Todos os preços, links de checkout, textos de apoio e dados
 * podem ser atualizados centralizadamente neste arquivo.
 */

export const CAMPAIGN_CONFIG = {
  // Identificação Institucional
  brand: {
    name: 'BLACK GENIAL 2026',
    institution: 'Genial Vestibulares',
    logo: '/assets/logos/genial.png',
  },

  // Seção 01: Hero
  hero: {
    tagline: 'BLACK GENIAL 2026',
    title: 'Todas as turmas do Genial em uma só matrícula.',
    subtitle: 'Escolha seu plano e comece sua preparação com os recursos do Genial.',
    ctaText: 'QUERO ME MATRICULAR',
    ctaTarget: '#planos',
    teacherPhoto: '/assets/professores/paulinho-hero.png',
    teacherPhotoAlt: 'Professor Paulinho - Genial Vestibulares',
  },

  // Seção 02: O que o aluno recebe
  benefits: {
    title: 'Tudo o que você precisa para se preparar em um só lugar.',
    subtitle: 'Metodologia validada, acompanhamento próximo e recursos de ponta para sua aprovação.',
    items: [
      {
        id: 1,
        title: 'Aulas ao vivo e gravadas',
        description: 'Mais de 8 aulas ao vivo por semana, com cronograma estruturado e gravações disponíveis para rever quando quiser.',
      },
      {
        id: 2,
        title: 'Correção assistida de redação',
        description: 'Feedback detalhado e individualizado com professor ou corretor especializado nos critérios das principais bancas.',
      },
      {
        id: 3,
        title: 'Simulados e banco de questões',
        description: 'Questões autorais, simulados periódicos no modelo exato das provas e amplo banco de exercícios resolvidos.',
      },
      {
        id: 4,
        title: 'Mentorias com aprovados em Medicina',
        description: 'Encontros estratégicos com quem já trilhou o caminho da aprovação nas vagas mais concorridas do país.',
      },
      {
        id: 5,
        title: 'Metas e assistente de estudos com IA',
        description: 'Metas diárias de questões, planejamento de estudos personalizado e inteligência artificial para tirar dúvidas.',
      },
    ],
  },

  // Seção 03: Planos e valores
  pricing: {
    title: 'Escolha seu plano e aproveite a Black Genial.',
    subtitle: 'Condições exclusivas de Black Friday com vagas limitadas para acompanhamento.',
    plans: {
      normal: {
        id: 'plano-normal',
        name: 'PLANO NORMAL',
        badge: 'ACESSO ANUAL',
        priceInstallments: '12x de R$ 149,90',
        priceCash: null, // A definir oficialmente pela equipe comercial
        description: 'Acesso pelo período contratado.',
        ctaText: 'APROVEITAR A OFERTA',
        checkoutUrl: '#', // Inserir link oficial do checkout do Plano Normal
        features: [
          'Acesso completo a todas as turmas durante o período contratado',
          'Mais de 8 aulas ao vivo semanais + acervo de gravações',
          'Correção assistida de redações com professores',
          'Banco de questões e simulados no modelo dos vestibulares',
          'Acesso a todos os bônus elegíveis da Black Genial',
        ],
        isHighlighted: false,
      },
      atePassar: {
        id: 'plano-ate-passar',
        name: 'PLANO ATÉ PASSAR',
        badge: 'MAIS RECOMENDADO',
        priceInstallments: '12x de R$ 249,90',
        priceCash: null, // A definir oficialmente pela equipe comercial
        description: 'Matrícula única e acesso até a aprovação, conforme as regras do plano.',
        ctaText: 'APROVEITAR A OFERTA',
        checkoutUrl: '#', // Inserir link oficial do checkout do Plano Até Passar
        features: [
          'Matrícula única: continue estudando até conquistar sua aprovação',
          'Sem necessidade de refazer matrícula ou pagar novos planos anuais',
          'Acesso prioritário a todas as atualizações pedagógicas futuras',
          'Mais de 8 aulas ao vivo semanais e mentorias com aprovados',
          'Correções assistidas, metas personalizadas e assistente IA',
          'Elegível ao kit físico exclusivo (para os 10 primeiros compradores)',
        ],
        isHighlighted: true,
      },
    },
  },

  // Seção 04: Bônus da Black e ancoragem de valor
  bonuses: {
    title: 'Quem aproveita a Black Genial recebe benefícios especiais.',
    subtitle: 'Confira as vantagens exclusivas liberadas para as matrículas da campanha.',
    items: [
      {
        id: 1,
        name: 'Comece antes de todo mundo',
        eligibility: 'Todos os matriculados',
        description: 'Acesso antecipado a partir de 01/12, diagnóstico pedagógico, curso de Matemática Básica, aula magna de abertura e entrada no grupo fechado de alunos.',
        referenceValue: null,
      },
      {
        id: 2,
        name: 'Bônus das primeiras 24 horas',
        eligibility: 'Compras em 17/11',
        description: 'Mentoria individual de 30 minutos com direcionamento estratégico e crédito de correção assistida de redação extra.',
        referenceValue: 'Mentoria: R$ 499,90 | Correção: R$ 197,90',
      },
      {
        id: 3,
        name: 'Kit físico exclusivo',
        eligibility: '10 primeiros compradores do Plano Até Passar',
        description: 'Planner físico impresso de alto padrão para organização diária de estudos e cartela de adesivos da Arena.',
        referenceValue: 'R$ 499,90',
      },
      {
        id: 4,
        name: 'Kit digital exclusivo',
        eligibility: '100 primeiros compradores',
        description: 'Planner de estudos em formato PDF interativo, resumos completos das 20 unidades de maior incidência e apostila de Matemática Básica.',
        referenceValue: 'R$ 297,90',
      },
      {
        id: 5,
        name: 'Indique um amigo',
        eligibility: 'Quem indicar um amigo que efetivamente se matricular',
        description: 'Quatro créditos extras de correção assistida para quem indicou. O amigo indicado recebe 20% de desconto no valor total da matrícula.',
        referenceValue: 'R$ 497,90',
      },
      {
        id: 6,
        name: 'Abatimento de ingressos',
        eligibility: 'Alunos do Projeto 20/20 e Desafio 827',
        description: 'Abatimento direto de R$ 47 ou R$ 27 na primeira parcela do plano escolhido, conforme as condições da oferta.',
        referenceValue: null,
      },
    ],
  },

  // Seção 05: Resultados reais dos alunos
  results: {
    title: 'Resultados que mostram a força da preparação Genial.',
    subtitle: 'Conheça estudantes reais que transformaram sua rotina e conquistaram suas vagas nos cursos mais disputados do Brasil.',
    // Cards com os materiais reais de aprovados
    students: [
      {
        id: 1,
        image: '/assets/aprovados/aprovado-01.jpg',
        alt: 'Aprovado Genial Vestibulares - Resultado real',
      },
      {
        id: 2,
        image: '/assets/aprovados/aprovado-02.jpg',
        alt: 'Aprovado Genial Vestibulares - Resultado real',
      },
      {
        id: 3,
        image: '/assets/aprovados/aprovado-03.jpg',
        alt: 'Aprovado Genial Vestibulares - Resultado real',
      },
      {
        id: 4,
        image: '/assets/aprovados/aprovado-04.jpg',
        alt: 'Aprovado Genial Vestibulares - Resultado real',
      },
      {
        id: 5,
        image: '/assets/aprovados/aprovado-05.jpg',
        alt: 'Aprovado Genial Vestibulares - Resultado real',
      },
      {
        id: 6,
        image: '/assets/aprovados/aprovado-06.jpg',
        alt: 'Aprovado Genial Vestibulares - Resultado real',
      },
      {
        id: 7,
        image: '/assets/aprovados/aprovado-07.jpg',
        alt: 'Aprovado Genial Vestibulares - Resultado real',
      },
      {
        id: 8,
        image: '/assets/aprovados/aprovado-08.jpg',
        alt: 'Aprovado Genial Vestibulares - Resultado real',
      },
      {
        id: 9,
        image: '/assets/aprovados/aprovado-09.jpg',
        alt: 'Aprovado Genial Vestibulares - Resultado real',
      },
      {
        id: 10,
        image: '/assets/aprovados/aprovado-10.jpg',
        alt: 'Aprovado Genial Vestibulares - Resultado real',
      },
      {
        id: 11,
        image: '/assets/aprovados/aprovado-11.jpg',
        alt: 'Aprovado Genial Vestibulares - Resultado real',
      },
      {
        id: 12,
        image: '/assets/aprovados/aprovado-12.jpg',
        alt: 'Aprovado Genial Vestibulares - Resultado real',
      },
    ],
  },

  // Seção 06: Diferencial do Plano Até Passar
  differential: {
    title: 'Uma matrícula para estudar até a aprovação.',
    highlightText: 'No Plano Até Passar, o aluno mantém acesso à preparação sem precisar refazer sua matrícula todos os anos, de acordo com as condições contratuais.',
    ctaText: 'APROVEITAR A OFERTA',
    ctaTarget: '#planos',
  },

  // Seção 07: Garantias e segurança da compra
  guarantees: {
    title: 'Faça sua matrícula com tranquilidade.',
    subtitle: 'Nosso compromisso é com a sua segurança e a sua evolução rumo à aprovação.',
    items: [
      {
        id: 'garantia-7-dias',
        title: 'Garantia incondicional de 7 dias',
        description: 'Você pode experimentar toda a plataforma, aulas e materiais. Se por qualquer motivo você decidir que o Genial não é para você, basta solicitar o reembolso integral em até 7 dias, conforme os termos aplicáveis.',
      },
      {
        id: 'garantia-aprovacao',
        title: 'Garantia de aprovação',
        description: 'Se você for aprovado em 2027, o Genial devolve o dinheiro da matrícula, conforme as condições e critérios de elegibilidade previstos nos termos da campanha.',
      },
    ],
    termsNotice: 'A regra de elegibilidade da garantia de aprovação e as condições contratuais constam nos termos oficiais da oferta.',
  },

  // Seção 08: Perguntas frequentes
  faq: {
    title: 'Dúvidas frequentes',
    subtitle: 'Respostas diretas e transparentes sobre a Black Genial 2026.',
    items: [
      {
        id: 1,
        question: 'Qual é a diferença entre o Plano Normal e o Plano Até Passar?',
        answer: 'O Plano Normal oferece acesso pelo período contratado. O Plano Até Passar permite continuar estudando até a aprovação, conforme as condições do contrato.',
      },
      {
        id: 2,
        question: 'O que está incluído em cada plano?',
        answer: 'A preparação Genial oferece aulas ao vivo e gravadas, questões, simulados e recursos de acompanhamento. Os recursos específicos de cada plano serão apresentados na descrição da oferta.',
      },
      {
        id: 3,
        question: 'Como funciona o acesso até a aprovação?',
        answer: 'No Plano Até Passar, a matrícula dá direito à continuidade dos estudos até a aprovação, respeitando as regras e condições de acesso do plano.',
      },
      {
        id: 4,
        question: 'Quando as aulas e o acesso começam?',
        answer: 'Os matriculados terão acesso antecipado a partir de 01/12, com diagnóstico, Matemática Básica, aula de abertura e grupo fechado.',
      },
      {
        id: 5,
        question: 'E se eu for aprovado em 2027?',
        answer: 'A campanha prevê a devolução do valor da matrícula para quem for aprovado em 2027, conforme as condições da garantia de aprovação.',
      },
    ],
  },

  // Seção 09: Última chamada
  finalCta: {
    title: 'Sua próxima aprovação começa com uma decisão.',
    text: 'Escolha o plano que combina com sua preparação e aproveite as condições da Black Genial.',
    ctaText: 'APROVEITAR A OFERTA',
    ctaTarget: '#planos',
  },

  // Rodapé e links institucionais
  footer: {
    brandName: 'Genial Vestibulares',
    tagline: 'Preparação de excelência para os vestibulares mais concorridos do Brasil.',
    year: 2026,
    links: [
      { label: 'Termos da Oferta', url: '#' },
      { label: 'Política de Privacidade', url: '#' },
      { label: 'Regulamento da Black Genial', url: '#' },
      { label: 'Suporte ao Aluno', url: '#' },
    ],
  },
};
