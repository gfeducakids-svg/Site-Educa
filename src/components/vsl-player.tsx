
'use client';

import React, { useState, useEffect, useRef } from 'react';
import Player from '@vimeo/player';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Rocket, VolumeX, Volume2 } from 'lucide-react';

// Bloco de configuração principal
const CONFIG = {
  VIMEO_VIDEO_ID: '1118869511', // O ID do seu vídeo do Vimeo
  CTA_SECONDS: 480, // Em qual segundo o botão de CTA deve aparecer
  CTA_HREF: 'https://pay.kiwify.com.br/S7SLFJY', // Link de checkout
  CTA_LABEL: 'SIM QUERO O MÉTODO',
  END_SCREEN: true, // Ativar ou desativar a tela final
};

// Declaração do dataLayer para o GTM
declare global {
  interface Window {
    dataLayer: any[];
  }
}

export function VslPlayer() {
  const playerContainerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<Player | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const [isCtaVisible, setIsCtaVisible] = useState(false);
  const [isEndScreenVisible, setIsEndScreenVisible] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showUnmuteButton, setShowUnmuteButton] = useState(true);
  const [isSticky, setIsSticky] = useState(false);
  
  useEffect(() => {
    if (typeof window === 'undefined' || !playerContainerRef.current) return;

    const player = new Player(playerContainerRef.current, {
      id: parseInt(CONFIG.VIMEO_VIDEO_ID, 10),
      byline: false,
      portrait: false,
      title: false,
      autoplay: true,
      muted: true,
      dnt: true,
      background: true, // Remove todos os controles
    });

    playerRef.current = player;
    window.dataLayer = window.dataLayer || [];

    const onPlay = () => {
      window.dataLayer.push({ event: 'video_play' });
      // Tenta remover o mudo após o play, mas pode ser bloqueado
      player.getMuted().then(muted => setIsMuted(muted));
    };

    const onTimeUpdate = (data: { seconds: number }) => {
      localStorage.setItem(`vimeoTime_${CONFIG.VIMEO_VIDEO_ID}`, String(data.seconds));
      if (data.seconds >= CONFIG.CTA_SECONDS && !isCtaVisible) {
        setIsCtaVisible(true);
        window.dataLayer.push({ event: 'cta_shown' });
      }
    };
    
    const onEnded = () => {
      if (CONFIG.END_SCREEN) setIsEndScreenVisible(true);
      window.dataLayer.push({ event: 'video_complete' });
    };

    player.on('play', onPlay);
    player.on('timeupdate', onTimeUpdate);
    player.on('ended', onEnded);
    player.on('pause', () => window.dataLayer.push({ event: 'video_pause' }));
    player.on('volumechange', (data: { volume: number }) => {
      if (data.volume > 0) setIsMuted(false);
    });

    const savedTime = parseFloat(localStorage.getItem(`vimeoTime_${CONFIG.VIMEO_VIDEO_ID}`) || '0');
    if (savedTime > 0) {
      player.setCurrentTime(savedTime).catch(e => console.warn("Não foi possível definir o tempo do vídeo."));
    }

    // Lógica do Player Flutuante (Sticky)
    const observer = new IntersectionObserver(
      ([entry]) => setIsSticky(!entry.isIntersecting),
      { threshold: 0.5 } // Ativa quando 50% do player está fora da tela
    );

    if (wrapperRef.current) {
        observer.observe(wrapperRef.current);
    }

    return () => {
      player.destroy();
      if (wrapperRef.current) observer.unobserve(wrapperRef.current);
    };
  }, [isCtaVisible]);

  const handleUnmute = () => {
    if (playerRef.current) {
      playerRef.current.setMuted(false);
      setIsMuted(false);
      setShowUnmuteButton(false);
      playerRef.current.play(); // Garante que o vídeo toque
    }
  };

  return (
    <div ref={wrapperRef} className={cn(
        "w-full max-w-4xl mx-auto transition-all duration-300",
        isSticky ? 'h-[12.5rem]' : 'h-auto' // Altura do placeholder para o vídeo sticky
    )}>
        <div className={cn(
            "relative w-full aspect-video bg-black rounded-lg overflow-hidden shadow-2xl transition-all duration-300",
            isSticky && "fixed bottom-4 right-4 w-60 md:w-80 z-50 animate-fade-in"
        )}>
            <div ref={playerContainerRef} className="w-full h-full" />
            
            {showUnmuteButton && (
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center z-10">
                    <Button onClick={handleUnmute} variant="secondary" size="lg" className="animate-pulse">
                        <VolumeX className="mr-2 h-6 w-6"/> ATIVAR SOM
                    </Button>
                </div>
            )}
            
            {isCtaVisible && !isEndScreenVisible && (
              <div className={cn(
                  "vsl-cta-container absolute left-1/2 -translate-x-1/2 w-11/12 max-w-lg z-20 transition-all duration-500",
                  isCtaVisible ? 'bottom-5 sm:bottom-8 animate-fade-in-up' : '-bottom-full',
                  isSticky && "hidden" // Esconde CTA no modo sticky
              )}>
                  <Button asChild size="lg" className="h-auto py-3 px-4 w-full text-sm sm:text-base font-headline bg-green-500 hover:bg-green-600 text-primary-foreground shadow-lg text-center transform hover:scale-105 transition-transform animate-pulse">
                      <Link href={CONFIG.CTA_HREF}>
                          <Rocket className="mr-2 h-5 w-5" />
                          {CONFIG.CTA_LABEL}
                      </Link>
                  </Button>
              </div>
            )}
            
            {CONFIG.END_SCREEN && isEndScreenVisible && (
                <div className="vsl-end-screen absolute inset-0 bg-black/80 flex flex-col items-center justify-center text-center p-4 sm:p-8 z-30 animate-fade-in">
                    <h3 className="text-xl sm:text-3xl font-bold text-white mb-4">A sua jornada começa agora!</h3>
                    <p className="text-sm sm:text-lg text-white/80 mb-6">Você está a um passo de transformar a alfabetização do seu filho.</p>
                    <div className="text-left space-y-1 mb-6 text-white text-xs sm:text-base">
                        <p>✓ Método divertido e eficaz</p>
                        <p>✓ Apenas 15 minutos por dia</p>
                        <p>✓ Resultados em 30 dias</p>
                    </div>
                    <Button asChild size="lg" className="w-full max-w-md h-12 sm:h-14 text-base sm:text-xl font-bold bg-green-500 hover:bg-green-600 text-white shadow-lg animate-pulse">
                      <a href={CONFIG.CTA_HREF} target="_blank" rel="noopener noreferrer">{CONFIG.CTA_LABEL}</a>
                    </Button>
                </div>
            )}
        </div>
    </div>
  );
}
