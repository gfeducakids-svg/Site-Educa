
'use client';

import React, { useState, useEffect, useRef } from 'react';
import Player from '@vimeo/player';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Rocket } from 'lucide-react';

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

  const [isCtaVisible, setIsCtaVisible] = useState(false);
  const [isEndScreenVisible, setIsEndScreenVisible] = useState(false);
  
  useEffect(() => {
    if (typeof window === 'undefined' || !playerContainerRef.current) return;

    // Inicializa o player do Vimeo
    const player = new Player(playerContainerRef.current, {
      id: parseInt(CONFIG.VIMEO_VIDEO_ID, 10),
      byline: false,
      portrait: false,
      title: false,
      autoplay: true,
      muted: true, // Autoplay com som é bloqueado pela maioria dos navegadores
      dnt: true, // Do not track
    });

    playerRef.current = player;
    
    window.dataLayer = window.dataLayer || [];

    // Tenta tocar o vídeo (necessário para autoplay em alguns navegadores)
    player.play().catch(error => {
      console.warn('Autoplay foi bloqueado pelo navegador. Interação do usuário é necessária.');
    });

    // Event Listeners do Player
    const onTimeUpdate = (data: { seconds: number }) => {
      // Salva o tempo atual no localStorage
      localStorage.setItem(`vimeoTime_${CONFIG.VIMEO_VIDEO_ID}`, String(data.seconds));

      // Mostra o CTA
      if (data.seconds >= CONFIG.CTA_SECONDS && !isCtaVisible) {
        setIsCtaVisible(true);
        window.dataLayer.push({ event: 'cta_shown' });
      }
    };

    const onPlay = () => {
      window.dataLayer.push({ event: 'video_play' });
    };

    const onPause = () => {
       window.dataLayer.push({ event: 'video_pause' });
    };

    const onEnded = () => {
      if (CONFIG.END_SCREEN) {
        setIsEndScreenVisible(true);
      }
      window.dataLayer.push({ event: 'video_complete' });
    };

    player.on('timeupdate', onTimeUpdate);
    player.on('play', onPlay);
    player.on('pause', onPause);
    player.on('ended', onEnded);

    // Recupera o tempo salvo e continua o vídeo
    const savedTime = parseFloat(localStorage.getItem(`vimeoTime_${CONFIG.VIMEO_VIDEO_ID}`) || '0');
    if (savedTime > 0) {
      player.setCurrentTime(savedTime).catch(e => console.warn("Não foi possível definir o tempo do vídeo."));
    }

    // Cleanup
    return () => {
      player.off('timeupdate', onTimeUpdate);
      player.off('play', onPlay);
      player.off('pause', onPause);
      player.off('ended', onEnded);
      player.destroy();
    };
  }, [isCtaVisible]);


  return (
    <div className="relative w-full max-w-4xl mx-auto aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
      
      {/* Container para o Iframe do Vimeo */}
      <div ref={playerContainerRef} className="w-full h-full" />
      
      {/* Container do Botão de CTA */}
      {isCtaVisible && !isEndScreenVisible && (
        <div className={cn(
            "vsl-cta-container absolute left-1/2 -translate-x-1/2 w-11/12 max-w-lg z-20 transition-all duration-500",
            isCtaVisible ? 'bottom-28 md:bottom-24 animate-fade-in-up' : '-bottom-full'
        )}>
            <Button asChild size="lg" className="h-auto py-3 px-4 w-full text-sm sm:text-base font-headline bg-green-500 hover:bg-green-600 text-primary-foreground shadow-lg text-center transform hover:scale-105 transition-transform animate-pulse">
                <Link href={CONFIG.CTA_HREF}>
                    <Rocket className="mr-2 h-5 w-5" />
                    {CONFIG.CTA_LABEL}
                </Link>
            </Button>
        </div>
      )}
      
      {/* Tela Final */}
      {CONFIG.END_SCREEN && isEndScreenVisible && (
          <div className="vsl-end-screen absolute inset-0 bg-black/80 flex flex-col items-center justify-center text-center p-8 z-30 animate-fade-in">
              <h3 className="text-3xl font-bold text-white mb-4">A sua jornada começa agora!</h3>
              <p className="text-lg text-white/80 mb-8">Você está a um passo de transformar a alfabetização do seu filho.</p>
              <div className="text-left space-y-2 mb-8 text-white">
                  <p>✓ Método divertido e eficaz</p>
                  <p>✓ Apenas 15 minutos por dia</p>
                  <p>✓ Resultados em 30 dias</p>
              </div>
              <Button asChild size="lg" className="w-full max-w-md h-14 text-xl font-bold bg-green-500 hover:bg-green-600 text-white shadow-lg animate-pulse">
                <a href={CONFIG.CTA_HREF} target="_blank" rel="noopener noreferrer">{CONFIG.CTA_LABEL}</a>
              </Button>
          </div>
      )}
    </div>
  );
}
