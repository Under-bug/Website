import React from 'react';
import { ShieldCheck, Zap, BarChart3, Users } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { value: '10+', label: 'Anos de Experiência' },
    { value: '350+', label: 'Clientes Atendidos' },
    { value: '1000+', label: 'Ameaças Neutralizadas' },
    { value: '99.9%', label: 'Taxa de Sucesso' }
  ];

  const values = [
    {
      icon: <ShieldCheck className="h-8 w-8 text-cyan-400" />,
      title: 'Proteção Total',
      description: 'Comprometidos com a segurança completa dos nossos clientes em todos os níveis.'
    },
    {
      icon: <Zap className="h-8 w-8 text-purple-400" />,
      title: 'Inovação Constante',
      description: 'Sempre à frente das ameaças com tecnologias e métodos inovadores.'
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-blue-400" />,
      title: 'Resultados Mensuráveis',
      description: 'Fornecemos métricas claras e resultados tangíveis para nossos clientes.'
    },
    {
      icon: <Users className="h-8 w-8 text-green-400" />,
      title: 'Equipe Especializada',
      description: 'Profissionais certificados e com vasta experiência em segurança cibernética.'
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
            Sobre a Underbug
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300">
            Somos especialistas em cibersegurança, dedicados a proteger empresas contra as ameaças digitais mais avançadas do mundo atual.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gray-900 rounded-xl p-6 text-center border border-gray-800">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 shadow-xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-white">
                  Nossa Missão
                </h3>
                <p className="text-gray-300 mb-6">
                  Na Underbug, nossa missão é proteger organizações contra ameaças cibernéticas em constante evolução, fornecendo soluções de segurança avançadas e serviços gerenciados que capacitam nossos clientes a operar com confiança no mundo digital.
                </p>
                <p className="text-gray-300">
                  Trabalhamos incansavelmente para estar sempre à frente das ameaças, combinando tecnologia de ponta, inteligência de ameaças e expertise humana para oferecer proteção abrangente.
                </p>
              </div>
              <div className="h-64 rounded-xl overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg" 
                  alt="Equipe de cibersegurança"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div key={index} className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-cyan-500/50 transition-all duration-300">
              <div className="mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">{value.title}</h3>
              <p className="text-gray-400">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;