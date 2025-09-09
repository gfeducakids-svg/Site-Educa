import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { Rocket } from 'lucide-react';

export function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 items-center justify-center">
          <div className="flex flex-col justify-center space-y-6 text-center">
            <div className="space-y-4">
              <h1 className="text-2xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl text-foreground">
                DESCUBRA O Método Chinês que Alfabetiza Crianças 3x Mais Rápido <span className="text-primary">(300% MAIS EFICAZ)</span>
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl font-rubik mx-auto">
                Para pais e educadores que querem alfabetizar sem lágrimas ou pressão em apenas 30 dias - usado por +1.200 famílias.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
