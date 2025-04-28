import React from 'react';
import { Shield, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-cyan-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
                UNDERBUG
              </span>
            </div>
            <p className="mt-4 text-gray-400 max-w-xs">
              Protegendo empresas contra as ameaças digitais mais avançadas do mundo atual.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-cyan-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="/plataforma" className="text-gray-400 hover:text-cyan-400 transition-colors">Plataforma</a>
              </li>
              <li>
                <a href="/servicos" className="text-gray-400 hover:text-cyan-400 transition-colors">Serviços</a>
              </li>
              <li>
                <a href="/conteudo" className="text-gray-400 hover:text-cyan-400 transition-colors">Conteúdo</a>
              </li>
              <li>
                <a href="/sobre" className="text-gray-400 hover:text-cyan-400 transition-colors">Sobre Nós</a>
              </li>
              <li>
                <a href="/contato" className="text-gray-400 hover:text-cyan-400 transition-colors">Fale Conosco</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <a href="/servicos/pentest" className="text-gray-400 hover:text-cyan-400 transition-colors">Pentest</a>
              </li>
              <li>
                <a href="/servicos/consultoria" className="text-gray-400 hover:text-cyan-400 transition-colors">Consultoria de Segurança</a>
              </li>
              <li>
                <a href="/servicos/soc" className="text-gray-400 hover:text-cyan-400 transition-colors">SOC as a Service</a>
              </li>
              <li>
                <a href="/servicos/treinamentos" className="text-gray-400 hover:text-cyan-400 transition-colors">Treinamentos</a>
              </li>
              <li>
                <a href="/servicos/resposta-incidentes" className="text-gray-400 hover:text-cyan-400 transition-colors">Resposta a Incidentes</a>
              </li>
              <li>
                <a href="/servicos/inteligencia-ameacas" className="text-gray-400 hover:text-cyan-400 transition-colors">Inteligência de Ameaças</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-cyan-400 mt-1 mr-3" />
                <span className="text-gray-400">contato@underbug.com.br</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-cyan-400 mt-1 mr-3" />
                <span className="text-gray-400">+55 (11) 0000-0000</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-cyan-400 mt-1 mr-3" />
                <span className="text-gray-400">Av. Paulista, 1000 - Bela Vista, São Paulo - SP, 01310-100</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 pb-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Underbug. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/politica-privacidade" className="text-gray-500 hover:text-gray-400 text-sm">
                Política de Privacidade
              </a>
              <a href="/termos-servico" className="text-gray-500 hover:text-gray-400 text-sm">
                Termos de Serviço
              </a>
              <a href="/cookies" className="text-gray-500 hover:text-gray-400 text-sm">
                Política de Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;