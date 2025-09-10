
'use client';

import React, { useState, useEffect, useRef } from 'react';
import Hls from 'hls.js';
import { Play, Pause, Volume2, VolumeX, Maximize, Minimize, PictureInPicture } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

// Declaração do dataLayer para o GTM
declare global {
  interface Window {
    dataLayer: any[];
    playerAutoplay: () => void;
  }
}

// Bloco de configuração principal
const CONFIG = {
  VIDEO_MP4_URL: '<COLE_SUA_URL_MP4_AQUI>',
  HLS_URL: '<COLE_SUA_URL_M3U8_AQUI>',
  IK_BASE: 'https://ik.imagekit.io/<SEU_ID>/<PASTA>',
  POSTER_PATH: 'poster.jpg',
  CTA_SECONDS: 480,
  ALLOW_SEEK_AFTER: 540,
  CTA_HREF: '<URL_DO_SEU_CHECKOUT>',
  CTA_LABEL: 'Quero comprar agora',
  END_SCREEN: true,
};

export function VslPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const playerContainerRef = useRef<HTMLDivElement>(null);
  const hlsRef = useRef<Hls | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(1);
  const [progress, setProgress] = useState(0);
  const [psychologicalProgress, setPsychologicalProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isCtaVisible, setIsCtaVisible] = useState(false);
  const [isEndScreenVisible, setIsEndScreenVisible] = useState(false);
  const [isControlsVisible, setIsControlsVisible] = useState(true);
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  
  // A/B Test and Player Setup Effect
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // A/B Test Logic
    const bucket = localStorage.getItem('ab_bucket') || (Math.random() < 0.5 ? 'a' : 'b');
    localStorage.setItem('ab_bucket', bucket);
    
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'ab_bucket', bucket });

    const headlineEl = document.getElementById('vsl-headline');
    const subheadlineEl = document.getElementById('vsl-subheadline');

    if (headlineEl) {
        headlineEl.innerText = headlineEl.getAttribute(`data-ab-variation-${bucket}`) || '';
    }
    if (subheadlineEl) {
        subheadlineEl.innerText = subheadlineEl.getAttribute(`data-ab-variation-${bucket}`) || '';
    }

    // Player Setup
    const video = videoRef.current;
    if (!video) return;

    const setupHls = () => {
      if (Hls.isSupported()) {
        const hls = new Hls();
        hlsRef.current = hls;
        hls.loadSource(CONFIG.HLS_URL);
        hls.attachMedia(video);
      } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = CONFIG.HLS_URL;
      } else {
        video.src = CONFIG.VIDEO_MP4_URL;
      }
    };
    
    setupHls();

    const savedTime = parseFloat(localStorage.getItem('videoCurrentTime') || '0');
    if (savedTime > 0 && savedTime < video.duration) {
      video.currentTime = savedTime;
    }

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleTimeUpdate = () => {
      const current = video.currentTime;
      const dur = video.duration;
      if (isNaN(dur)) return;
      
      setProgress((current / dur) * 100);
      
      let psychProgress;
      const psychologicalPoint = dur * 0.7;
      if (current < psychologicalPoint) {
        psychProgress = (current / psychologicalPoint) * 70;
      } else {
        psychProgress = 70 + ((current - psychologicalPoint) / (dur - psychologicalPoint)) * 30;
      }
      setPsychologicalProgress(psychProgress);
      
      localStorage.setItem('videoCurrentTime', String(current));

      if (current >= CONFIG.CTA_SECONDS && !isCtaVisible) {
        setIsCtaVisible(true);
        window.dataLayer.push({ event: 'cta_shown' });
      }
    };
    const handleDurationChange = () => setDuration(video.duration);
    const handleEnded = () => {
        setIsEndScreenVisible(true);
        window.dataLayer.push({ event: 'video_complete' });
    }
    const handleLoadedMetadata = () => {
      setIsVideoLoaded(true);
      setDuration(video.duration);
    }

    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('durationchange', handleDurationChange);
    video.addEventListener('ended', handleEnded);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);


    const attemptAutoplay = async () => {
        try {
            video.muted = false; // Tenta tocar com som primeiro
            setIsMuted(false);
            await video.play();
        } catch (error) {
            console.log('Autoplay com som bloqueado, iniciando mudo.');
            video.muted = true;
            setIsMuted(true);
            try {
                await video.play();
            } catch (err) {
                console.error("Autoplay falhou completamente.", err)
            }
        }
    };
    attemptAutoplay();
    
    window.playerAutoplay = () => {
      if(video) {
        video.muted = false;
        setIsMuted(false);
        video.play();
      }
    };

    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);


    // Cleanup
    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('durationchange', handleDurationChange);
      video.removeEventListener('ended', handleEnded);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      hlsRef.current?.destroy();
    };
  }, [isCtaVisible]);
  
  // Hide Controls Effect
  useEffect(() => {
    const container = playerContainerRef.current;
    if (!container) return;

    const handleMouseMove = () => {
        setIsControlsVisible(true);
        if (controlsTimeoutRef.current) {
            clearTimeout(controlsTimeoutRef.current);
        }
        if (isPlaying) {
            controlsTimeoutRef.current = setTimeout(() => {
                setIsControlsVisible(false);
            }, 3000);
        }
    };

    container.addEventListener('mousemove', handleMouseMove);
    return () => container.removeEventListener('mousemove', handleMouseMove);
  }, [isPlaying]);

  const unmuteAndPlay = () => {
      const video = videoRef.current;
      if (!video) return;

      video.muted = false;
      setIsMuted(false);
      video.play();
  }

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.muted) {
        unmuteAndPlay();
        return;
    }
    
    if (video.paused) {
      video.play();
      window.dataLayer.push({ event: 'video_play' });
    } else {
      video.pause();
      window.dataLayer.push({ event: 'video_pause' });
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (!video) return;
    const newVolume = parseFloat(e.target.value);
    video.volume = newVolume;
    setVolume(newVolume);
    if (newVolume > 0 && isMuted) {
        video.muted = false;
        setIsMuted(false);
    } else if (newVolume === 0) {
        video.muted = true;
        setIsMuted(true);
    }
  };
  
  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const video = videoRef.current;
    if (!video || (video.currentTime < CONFIG.ALLOW_SEEK_AFTER)) return;

    const bar = e.currentTarget;
    const rect = bar.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    video.currentTime = pos * video.duration;
  };

  const formatTime = (time: number) => {
    if (isNaN(time) || time === 0) return '00:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  const toggleFullscreen = () => {
    const container = playerContainerRef.current;
    if (!container) return;
    if (!document.fullscreenElement) {
        container.requestFullscreen().catch(err => {
            alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
        });
    } else {
        document.exitFullscreen();
    }
  };

  const togglePiP = () => {
    const video = videoRef.current;
    if (!video) return;

    if (document.pictureInPictureElement) {
        document.exitPictureInPicture();
    } else if (document.pictureInPictureEnabled && isVideoLoaded) {
        video.requestPictureInPicture();
    }
  };

  const posterUrl = `${CONFIG.IK_BASE}/${CONFIG.POSTER_PATH}?tr=f-auto,q-85`;
  const showUnmutePrompt = isPlaying && isMuted;
  const isPiPSupported = typeof document !== 'undefined' && !!document.pictureInPictureEnabled;


  return (
    <div 
        ref={playerContainerRef}
        className={cn(
            "vsl-player-container relative w-full max-w-4xl mx-auto aspect-video bg-black rounded-lg overflow-hidden shadow-2xl group/player",
            !isControlsVisible && isPlaying && 'cursor-none'
        )}
        onContextMenu={(e) => e.preventDefault()}
    >
      <video ref={videoRef} playsInline className="w-full h-full" poster={posterUrl} onClick={togglePlay} />

      {showUnmutePrompt && (
        <div 
            className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-center text-white z-20 cursor-pointer animate-fade-in"
            onClick={unmuteAndPlay}
        >
            <VolumeX className="w-12 h-12 mb-4" />
            <h3 className="text-2xl font-bold">Seu vídeo já começou</h3>
            <p className="text-lg">Clique para ouvir</p>
        </div>
      )}

      <div className={cn(
        "vsl-controls-overlay absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-0 group-hover/player:opacity-100 transition-opacity duration-300",
        isControlsVisible && 'opacity-100',
        showUnmutePrompt && 'hidden' // Oculta os controles quando o prompt de desmutar estiver visível
      )}>
        {/* Play/Pause Button in Center */}
        <div className="absolute inset-0 flex items-center justify-center">
            <Button variant="ghost" size="icon" onClick={togglePlay} className="w-16 h-16 sm:w-20 sm:h-20 text-white opacity-0 group-hover/player:opacity-100 transition-opacity rounded-full bg-white/10 hover:bg-white/20">
                {isPlaying ? <Pause className="w-8 h-8 sm:w-10 sm:h-10" /> : <Play className="w-8 h-8 sm:w-10 sm:h-10" />}
            </Button>
        </div>

        {/* Controls Bar */}
        <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4 space-y-2">
            {/* Progress Bar */}
            <div className={cn("relative w-full h-2.5", videoRef.current && videoRef.current.currentTime > CONFIG.ALLOW_SEEK_AFTER && "cursor-pointer")} onClick={handleSeek}>
                <div className="absolute w-full h-1 bg-white/30 top-1/2 -translate-y-1/2 rounded-full" />
                {/* Real progress bar */}
                <div 
                    className="absolute h-1 bg-white/60 top-1/2 -translate-y-1/2 rounded-full" 
                    style={{ width: `${progress}%` }} 
                />
                {/* Psychological progress bar */}
                <div 
                    className="absolute h-1 bg-primary top-1/2 -translate-y-1/2 rounded-full" 
                    style={{ width: `${psychologicalProgress}%` }}
                />
            </div>
          
            {/* Bottom Controls */}
            <div className="flex items-center justify-between text-white">
                <div className="flex items-center gap-1 sm:gap-2">
                    <Button variant="ghost" size="icon" onClick={togglePlay} className="text-white hover:bg-white/10" aria-label={isPlaying ? "Pausar" : "Reproduzir"}>
                        {isPlaying ? <Pause className="w-5 h-5 sm:w-6 sm:h-6" /> : <Play className="w-5 h-5 sm:w-6 sm:h-6" />}
                    </Button>
                    <div className="flex items-center gap-1 group/volume">
                        <Button variant="ghost" size="icon" onClick={toggleMute} className="text-white hover:bg-white/10" aria-label={isMuted ? "Ativar som" : "Desativar som"}>
                            {isMuted || volume === 0 ? <VolumeX className="w-5 h-5 sm:w-6 sm:h-6"/> : <Volume2 className="w-5 h-5 sm:w-6 sm:h-6" />}
                        </Button>
                        <input
                            type="range"
                            min="0"
                            max="1"
                            step="0.05"
                            value={volume}
                            onChange={handleVolumeChange}
                            className="w-16 sm:w-20 h-1 accent-white opacity-0 group-hover/volume:opacity-100 transition-opacity"
                        />
                    </div>
                </div>

                <div className="flex items-center gap-1 sm:gap-2">
                    <span className="font-mono text-xs sm:text-sm">{formatTime(videoRef.current?.currentTime || 0)} / {formatTime(duration)}</span>
                    {isPiPSupported && isVideoLoaded && (
                        <Button variant="ghost" size="icon" onClick={togglePiP} className="text-white hover:bg-white/10" aria-label="Picture-in-Picture">
                            <PictureInPicture className="w-5 h-5 sm:w-6 sm:h-6" />
                        </Button>
                    )}
                    <Button variant="ghost" size="icon" onClick={toggleFullscreen} className="text-white hover:bg-white/10" aria-label="Tela cheia">
                       {isFullscreen ? <Minimize className="w-5 h-5 sm:w-6 sm:h-6"/> : <Maximize className="w-5 h-5 sm:w-6 sm:h-6" />}
                    </Button>
                </div>
            </div>
        </div>
      </div>

      {isCtaVisible && !isEndScreenVisible && (
        <div className="vsl-cta-container absolute bottom-24 left-1/2 -translate-x-1/2 w-11/12 max-w-lg z-20 animate-fade-in-up">
            
        </div>
      )}

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
