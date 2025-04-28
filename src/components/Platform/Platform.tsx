import React from 'react';
import { ShieldAlert, Activity, BarChart4, AlertCircle, CheckCircle2, ListChecks } from 'lucide-react';

const Platform: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
            Nossa Plataforma
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300">
            Conheça a plataforma integrada de segurança cibernética da Underbug,
            projetada para oferecer proteção completa para o seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="relative">
            <div className="platform-display bg-gray-800 border border-gray-700 rounded-xl p-1 shadow-xl">
              <div className="mockup-window bg-black border-2 border-gray-700 rounded-lg overflow-hidden">
                <div className="platform-dashboard flex flex-col p-4 bg-gray-900 h-[450px]">
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center">
                      <ShieldAlert className="mr-2 h-6 w-6 text-cyan-400" />
                      <span className="text-xl font-bold text-white">Underbug Security Dashboard</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="px-2 py-1 rounded bg-green-500/20 text-green-400 text-xs">STATUS: PROTEGIDO</div>
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                      <div className="text-xs text-gray-400 mb-1">Ameaças Detectadas</div>
                      <div className="text-2xl font-bold text-red-400">17</div>
                      <div className="text-xs text-gray-500 mt-1">Últimos 30 dias</div>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                      <div className="text-xs text-gray-400 mb-1">Vulnerabilidades</div>
                      <div className="text-2xl font-bold text-yellow-400">32</div>
                      <div className="text-xs text-gray-500 mt-1">5 críticas</div>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                      <div className="text-xs text-gray-400 mb-1">Score de Segurança</div>
                      <div className="text-2xl font-bold text-cyan-400">87%</div>
                      <div className="text-xs text-green-500 mt-1">+5% este mês</div>
                    </div>
                  </div>
                  <div className="flex-1 grid grid-cols-2 gap-4">
                    <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 flex flex-col">
                      <div className="text-sm font-medium text-white mb-2">Atividade de Ameaças</div>
                      <div className="flex-1 flex items-end">
                        <div className="w-full h-32 flex items-end justify-around">
                          <div className="w-4 bg-blue-500/70 rounded-t" style={{ height: '40%' }}></div>
                          <div className="w-4 bg-blue-500/70 rounded-t" style={{ height: '65%' }}></div>
                          <div className="w-4 bg-blue-500/70 rounded-t" style={{ height: '25%' }}></div>
                          <div className="w-4 bg-blue-500/70 rounded-t" style={{ height: '85%' }}></div>
                          <div className="w-4 bg-red-500/70 rounded-t" style={{ height: '55%' }}></div>
                          <div className="w-4 bg-blue-500/70 rounded-t" style={{ height: '35%' }}></div>
                          <div className="w-4 bg-blue-500/70 rounded-t" style={{ height: '70%' }}></div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                      <div className="text-sm font-medium text-white mb-3">Alertas Recentes</div>
                      <ul className="space-y-2">
                        <li className="flex items-center text-xs">
                          <AlertCircle className="h-3 w-3 text-red-400 mr-2" />
                          <span className="text-gray-300">Tentativa de acesso não autorizado</span>
                        </li>
                        <li className="flex items-center text-xs">
                          <CheckCircle2 className="h-3 w-3 text-green-400 mr-2" />
                          <span className="text-gray-300">Patch de segurança aplicado</span>
                        </li>
                        <li className="flex items-center text-xs">
                          <ListChecks className="h-3 w-3 text-yellow-400 mr-2" />
                          <span className="text-gray-300">Scan de vulnerabilidades completo</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full blur-3xl opacity-30"></div>
          </div>

          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-6 text-white">
              Monitoramento em tempo real e resposta automatizada
            </h3>
            
            <ul className="space-y-5">
              <li className="flex">
                <div className="flex-shrink-0">
                  <ShieldAlert className="h-6 w-6 text-cyan-400 mt-1" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-white">Detecção Avançada de Ameaças</h4>
                  <p className="mt-1 text-gray-400">Identificação de atividades maliciosas em tempo real com inteligência artificial e machine learning.</p>
                </div>
              </li>
              <li className="flex">
                <div className="flex-shrink-0">
                  <Activity className="h-6 w-6 text-purple-400 mt-1" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-white">Monitoramento Contínuo</h4>
                  <p className="mt-1 text-gray-400">Vigilância 24/7 do seu ambiente, garantindo proteção constante contra ameaças emergentes.</p>
                </div>
              </li>
              <li className="flex">
                <div className="flex-shrink-0">
                  <BarChart4 className="h-6 w-6 text-blue-400 mt-1" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-white">Relatórios Detalhados</h4>
                  <p className="mt-1 text-gray-400">Análises e insights valiosos sobre o estado de segurança da sua empresa, com métricas claras e acionáveis.</p>
                </div>
              </li>
            </ul>
            
            <div className="mt-8">
              <a 
                href="/plataforma" 
                className="inline-flex items-center px-6 py-3 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-cyan-500/30"
              >
                Conheça a plataforma completa
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Platform;