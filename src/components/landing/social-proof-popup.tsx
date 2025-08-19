"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { UserCheck } from 'lucide-react';

const names = [
  "Camila Duarte", "Isabela Nunes", "Tatiane Rocha", "Lorena Martins", 
  "Renata Albuquerque", "Jéssica Lima", "Bianca Ferreira", "Lucas Santana",
  "Rafael Costa", "Henrique Oliveira"
];

export function SocialProofPopup() {
  const [currentName, setCurrentName] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cycleNames = () => {
      const name = names[Math.floor(Math.random() * names.length)];
      setCurrentName(name);
      setIsVisible(true);

      setTimeout(() => {
        setIsVisible(false);
      }, 4000); // Hide after 4 seconds
    };

    // Staggered popups
    const id = setInterval(cycleNames, 8000 + Math.random() * 5000); // every 8-13 seconds
    const firstCall = setTimeout(cycleNames, 6000) // first one after 6 seconds

    return () => {
        clearInterval(id)
        clearTimeout(firstCall)
    };
  }, []);

  return (
    <div
      aria-live="polite"
      className={`fixed bottom-5 right-5 z-50 transition-all duration-500 ease-out ${
        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-[200%] opacity-0'
      }`}
    >
      <Card className="shadow-2xl border-2 border-accent bg-white">
        <CardContent className="p-3 flex items-center gap-3">
          <div className="bg-accent p-2 rounded-full">
            <UserCheck className="text-white h-5 w-5" />
          </div>
          <div>
            <p className="font-bold text-sm text-foreground">{currentName}</p>
            <p className="text-xs text-muted-foreground">acabou de se inscrever.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
