import React from 'react';
import { Shield, Lock, Eye, FileSearch, Wallet, Users } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Shield className="h-12 w-12 text-emerald-400 mb-4" />,
      title: 'Proteção Avançada',
      description: 'Defesa multicamada contra ataques sofisticados e ameaças emergentes.',
      linkText: 'Saiba mais',
      linkUrl: '/servicos/protecao'
    },
    {
      icon: <Eye className="h-12 w-12 text-green-400 mb-4" />,
      title: 'Pentests',
      description: 'Identificação proativa de vulnerabilidades através de testes de penetração especializados.',
      linkText: 'Saiba mais',
      linkUrl: '/servicos/pentests'
    },
    {
      icon: <Wallet className="h-12 w-12 text-emerald-400 mb-4" />,
      title: 'Segurança Blockchain',
      description: 'Auditoria de smart contracts e proteção para ativos digitais em blockchain.',
      linkText: 'Saiba mais',
      linkUrl: '/servicos/blockchain-security'
    },
    {
      icon: <FileSearch className="h-12 w-12 text-green-400 mb-4" />,
      title: 'Análise de Riscos',
      description: 'Identificação e avaliação contínua dos riscos cibernéticos do seu negócio.',
      linkText: 'Saiba mais',
      linkUrl: '/servicos/analise-riscos'
    },
    {
      icon: <Lock className="h-12 w-12 text-emerald-400 mb-4" />,
      title: 'Análise de Smart Contracts',
      description: 'Verificação de segurança e vulnerabilidades em contratos inteligentes.',
      linkText: 'Saiba mais',
      linkUrl: '/servicos/smart-contracts'
    },
    {
      icon: <Users className="h-12 w-12 text-green-400 mb-4" />,
      title: 'Treinamentos',
      description: 'Capacitação de equipes para reconhecer e responder a ameaças de segurança.',
      linkText: 'Saiba mais',
      linkUrl: '/servicos/treinamentos'
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-green-500 text-transparent bg-clip-text">
            Nossos Serviços
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300">
            Soluções completas de segurança cibernética adaptadas às necessidades específicas do seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-all duration-300 border border-gray-700 hover:border-emerald-500/50 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-emerald-500/10"
            >
              <div className="text-center">
                {service.icon}
                <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <a
                  href={service.linkUrl}
                  className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  {service.linkText}
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;