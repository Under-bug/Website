import React, { useEffect, useRef } from 'react';
import { Shield, Lock, UserCheck, Database } from 'lucide-react';
import './Hero.css';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle settings
    const particlesArray: Particle[] = [];
    const numberOfParticles = Math.min(100, Math.floor(window.innerWidth / 10));
    const connectDistance = 150;

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.8;
        this.speedY = (Math.random() - 0.5) * 0.8;
        this.color = '#10b981'; // Updated to green
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width || this.x < 0) {
          this.speedX = -this.speedX;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.speedY = -this.speedY;
        }
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Create particles
    const init = () => {
      particlesArray.length = 0;
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    };

    // Connect particles with lines
    const connect = () => {
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectDistance) {
            const opacity = 1 - distance / connectDistance;
            ctx.strokeStyle = `rgba(16, 185, 129, ${opacity * 0.5})`; // Updated to green
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      
      connect();
      requestAnimationFrame(animate);
    };

    init();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black text-white">
      <canvas ref={canvasRef} className="absolute inset-0 z-0"></canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black z-10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col justify-center z-20">
        <div className="pt-24 md:pt-32 lg:pt-0">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 animate-fade-in">
            <span className="bg-gradient-to-r from-emerald-400 to-green-500 text-transparent bg-clip-text">
              Segurança cibernética
            </span>
            <br />
            para o mundo conectado
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8 animate-fade-in-delay">
            Protegendo sua empresa contra as ameaças digitais mais avançadas com soluções de 
            segurança de ponta e análise blockchain.
          </p>
          
          <div className="flex flex-wrap gap-4 animate-fade-in-delay-2">
            <a 
              href="/plataforma" 
              className="px-6 py-3 rounded-md bg-gradient-to-r from-emerald-500 to-green-500 text-white font-medium hover:from-emerald-600 hover:to-green-600 transition-all duration-300 shadow-lg hover:shadow-emerald-500/30 transform hover:-translate-y-1"
            >
              Conheça nossa plataforma
            </a>
            <a 
              href="/contato" 
              className="px-6 py-3 rounded-md bg-transparent border border-emerald-500 text-emerald-400 font-medium hover:bg-emerald-500/10 transition-all duration-300 transform hover:-translate-y-1"
            >
              Fale com um especialista
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-16 md:mt-24 animate-fade-in-delay-3">
          <div className="feature-card p-4 rounded-xl bg-gray-900/60 backdrop-blur-md border border-gray-800 hover:border-emerald-500/50 transition-all duration-300">
            <Shield className="h-8 w-8 text-emerald-400 mb-3" />
            <h3 className="text-lg font-semibold mb-1">Proteção Total</h3>
            <p className="text-sm text-gray-400">Defesa completa para todos os seus ativos digitais</p>
          </div>
          
          <div className="feature-card p-4 rounded-xl bg-gray-900/60 backdrop-blur-md border border-gray-800 hover:border-emerald-500/50 transition-all duration-300">
            <Lock className="h-8 w-8 text-emerald-400 mb-3" />
            <h3 className="text-lg font-semibold mb-1">Análise Blockchain</h3>
            <p className="text-sm text-gray-400">Auditoria e segurança para smart contracts</p>
          </div>
          
          <div className="feature-card p-4 rounded-xl bg-gray-900/60 backdrop-blur-md border border-gray-800 hover:border-emerald-500/50 transition-all duration-300">
            <UserCheck className="h-8 w-8 text-emerald-400 mb-3" />
            <h3 className="text-lg font-semibold mb-1">Equipe Especializada</h3>
            <p className="text-sm text-gray-400">Profissionais certificados e experientes</p>
          </div>
          
          <div className="feature-card p-4 rounded-xl bg-gray-900/60 backdrop-blur-md border border-gray-800 hover:border-emerald-500/50 transition-all duration-300">
            <Database className="h-8 w-8 text-emerald-400 mb-3" />
            <h3 className="text-lg font-semibold mb-1">Inteligência de Dados</h3>
            <p className="text-sm text-gray-400">Análises preditivas para antecipar ameaças</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;