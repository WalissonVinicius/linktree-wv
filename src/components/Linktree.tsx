import React, { useEffect, useState } from 'react';
import { Github, ExternalLink, Twitter, Instagram } from 'lucide-react';
import SpotifyIcon from './icons/SpotifyIcon';
import TikTokIcon from './icons/TikTokIcon';

const Linktree = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const socialLinks = [
    {
      icon: SpotifyIcon,
      href: 'https://open.spotify.com/user/q4k7jlo2evlvw94kyxz0yxcps?si=dae39d6b5c6d4183',
      label: 'Spotify',
      color: 'from-green-500 to-green-600',
      hoverColor: 'hover:from-green-600 hover:to-green-700',
      shadowColor: 'hover:shadow-green-500/30'
    },
    {
      icon: Twitter,
      href: 'https://x.com/SennXp',
      label: 'Twitter (X)',
      color: 'from-blue-500 to-blue-600',
      hoverColor: 'hover:from-blue-600 hover:to-blue-700',
      shadowColor: 'hover:shadow-blue-500/30'
    },
    {
      icon: Instagram,
      href: 'https://www.instagram.com/wv.sccp/',
      label: 'Instagram',
      color: 'from-pink-500 to-purple-600',
      hoverColor: 'hover:from-pink-600 hover:to-purple-700',
      shadowColor: 'hover:shadow-pink-500/30'
    },
    {
      icon: TikTokIcon,
      href: 'https://www.tiktok.com/@wv_sccp',
      label: 'TikTok',
      color: 'from-red-500 to-pink-500',
      hoverColor: 'hover:from-red-600 hover:to-pink-600',
      shadowColor: 'hover:shadow-red-500/30'
    },
    {
      icon: Github,
      href: 'https://github.com/WalissonVinicius',
      label: 'GitHub',
      color: 'from-gray-600 to-gray-700',
      hoverColor: 'hover:from-gray-700 hover:to-gray-800',
      shadowColor: 'hover:shadow-gray-500/30'
    },
    {
      icon: ExternalLink,
      href: 'https://walisson.discloud.app/',
      label: 'Meu Portfólio',
      color: 'from-purple-500 to-indigo-600',
      hoverColor: 'hover:from-purple-600 hover:to-indigo-700',
      shadowColor: 'hover:shadow-purple-500/30'
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced background gradient with animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-purple-900/20 animate-gradient-shift"></div>

      {/* Multiple animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 md:w-64 h-32 md:h-64 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 md:w-80 h-40 md:h-80 bg-purple-500/10 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-3/4 left-1/2 w-24 md:w-48 h-24 md:h-48 bg-green-500/8 rounded-full blur-2xl animate-pulse-slow"></div>
        <div className="absolute top-1/2 right-1/3 w-16 md:w-32 h-16 md:h-32 bg-pink-500/8 rounded-full blur-xl animate-bounce-slow"></div>

        {/* Floating particles */}
        {[...Array(window.innerWidth > 768 ? 20 : 10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-float-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-sm sm:max-w-md">
        <div className="text-center">
          {/* Enhanced Profile Section */}
          <div className={`mb-6 sm:mb-8 pt-4 sm:pt-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
            <div className="relative group flex justify-center">
              <div className="w-24 sm:w-28 h-24 sm:h-28 rounded-full mx-auto mb-4 sm:mb-6 overflow-hidden border-4 bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center transition-all duration-500 hover:scale-110 hover:rotate-6 hover:shadow-2xl hover:shadow-purple-500/30">
                <img
                  src="/walisson.jpeg"
                  alt="Foto de perfil de Walisson Vinicius"
                  className="w-20 sm:w-24 h-20 sm:h-24 rounded-full object-cover"
                />
              </div>
            </div>

            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 sm:mb-3 hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 hover:bg-clip-text hover:text-transparent transition-all duration-300 cursor-default">
              Walisson Vinicius
            </h1>

            <p className="text-gray-400 text-sm sm:text-base mb-1 hover:text-gray-300 transition-colors duration-300 cursor-default">
              Desenvolvedor Full Stack & Gamer
            </p>

            <p className="text-gray-500 text-xs sm:text-sm mb-3 sm:mb-4 hover:text-gray-400 transition-colors duration-300 cursor-default">
              21 anos • Formado em Ads
            </p>

            <p className="text-gray-400 text-xs sm:text-sm max-w-xs sm:max-w-sm mx-auto hover:text-gray-300 transition-colors duration-300 cursor-default leading-relaxed">
              Apaixonado por tecnologia, desenvolvimento e gaming. Sempre em busca de novos desafios e aprendizados.
            </p>
          </div>

          {/* Enhanced Links Section */}
          <div className="space-y-3 sm:space-y-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`block w-full bg-gradient-to-r ${social.color} ${social.hoverColor} ${social.shadowColor} text-white p-3 sm:p-4 rounded-xl sm:rounded-2xl font-medium text-base sm:text-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-1 transform group relative overflow-hidden active:scale-95 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                style={{
                  transitionDelay: `${index * 100 + 300}ms`,
                  transform: hoveredIndex === index ? 'scale(1.05) translateY(-4px)' : ''
                }}
              >
                {/* Animated background overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-xl sm:rounded-2xl"></div>

                {/* Ripple effect */}
                <div className="absolute inset-0 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute top-1/2 left-1/2 w-0 h-0 bg-white/20 rounded-xl sm:rounded-2xl group-hover:w-full group-hover:h-full group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 transition-all duration-500"></div>
                </div>

                <div className="flex items-center justify-center space-x-2 sm:space-x-3 relative z-10">
                  <div className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                    <social.icon size={window.innerWidth > 640 ? 24 : 20} />
                  </div>
                  <span className="transition-all duration-300 group-hover:tracking-wider">{social.label}</span>
                </div>

                {/* Glowing border effect */}
                <div className="absolute inset-0 rounded-xl sm:rounded-2xl border-2 border-white/0 group-hover:border-white/30 transition-all duration-300"></div>
              </a>
            ))}
          </div>

          {/* Enhanced Footer */}
          <div className={`mt-6 sm:mt-8 pb-4 sm:pb-8 text-center transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
            <div className="relative">
              <p className="text-gray-500 text-xs sm:text-sm hover:text-gray-400 transition-colors duration-300 cursor-default">
                © 2025 Walisson Vinícius
              </p>

              {/* Animated underline */}
              <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-500 hover:w-full hover:-translate-x-1/2"></div>
            </div>
          </div>

          {/* Mobile optimization indicator */}
          <div className="fixed bottom-2 right-2 text-xs text-gray-600 opacity-50 sm:hidden">
            <div className="bg-gray-900/80 px-2 py-1 rounded">
              📱 Mobile
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Linktree;