// Navigation data structure
export const navItems = [
  {
    key: 'home',
    title: 'Home',
    submenu: [
      {
        title: 'Visão Geral',
        description: 'Conheça nossa abordagem de segurança',
        url: '/'
      },
      {
        title: 'Novidades',
        description: 'Últimas atualizações e notícias',
        url: '/novidades'
      },
      {
        title: 'Casos de Sucesso',
        description: 'Histórias de clientes satisfeitos',
        url: '/casos-de-sucesso'
      }
    ]
  },
  {
    key: 'platform',
    title: 'Plataforma',
    submenu: [
      {
        title: 'Análise de Vulnerabilidades',
        description: 'Identificação e gestão de riscos',
        url: '/plataforma/analise-vulnerabilidades'
      },
      {
        title: 'Segurança Blockchain',
        description: 'Proteção para seus ativos digitais',
        url: '/plataforma/blockchain'
      },
      {
        title: 'Smart Contracts',
        description: 'Auditoria de contratos inteligentes',
        url: '/plataforma/smart-contracts'
      },
      {
        title: 'Inteligência de Ameaças',
        description: 'Dados em tempo real sobre ameaças',
        url: '/plataforma/inteligencia-ameacas'
      }
    ]
  },
  {
    key: 'services',
    title: 'Serviços',
    submenu: [
      {
        title: 'Pentest',
        description: 'Testes de penetração avançados',
        url: '/servicos/pentest'
      },
      {
        title: 'Consultoria de Segurança',
        description: 'Orientação especializada e personalizada',
        url: '/servicos/consultoria'
      },
      {
        title: 'Análise Blockchain',
        description: 'Segurança para DeFi e criptoativos',
        url: '/servicos/blockchain'
      },
      {
        title: 'Treinamentos',
        description: 'Capacitação em segurança cibernética',
        url: '/servicos/treinamentos'
      }
    ]
  },
  {
    key: 'content',
    title: 'Conteúdo',
    submenu: [
      {
        title: 'Blog',
        description: 'Artigos e análises sobre cibersegurança',
        url: '/conteudo/blog'
      },
      {
        title: 'Webinars',
        description: 'Apresentações educativas online',
        url: '/conteudo/webinars'
      },
      {
        title: 'Relatórios',
        description: 'Pesquisas e documentos técnicos',
        url: '/conteudo/relatorios'
      },
      {
        title: 'Guias e Tutoriais',
        description: 'Recursos práticos para implementação',
        url: '/conteudo/guias'
      }
    ]
  },
  {
    key: 'about',
    title: 'Underbug',
    submenu: [
      {
        title: 'Sobre Nós',
        description: 'Nossa história e valores',
        url: '/sobre'
      },
      {
        title: 'Equipe',
        description: 'Conheça nossos especialistas',
        url: '/equipe'
      },
      {
        title: 'Carreiras',
        description: 'Oportunidades de trabalho',
        url: '/carreiras'
      },
      {
        title: 'Parceiros',
        description: 'Empresas que confiam em nós',
        url: '/parceiros'
      }
    ]
  }
];