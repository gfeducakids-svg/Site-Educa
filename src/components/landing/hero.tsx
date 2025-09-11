import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { Rocket } from 'lucide-react';

export function Hero() {
  return (
    <section className="w-full pt-5 pb-5">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 items-center justify-center">
          <div className="flex flex-col justify-center space-y-6 text-center">
            <div className="space-y-4">
              <h1 className="text-2xl font-bold font-headline tracking-tighter sm:text-3xl md:text-4xl text-foreground">
                DESCUBRA o Método Chinês em APP que alfabetiza crianças com apenas 15 minutos por dia!
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl font-rubik mx-auto">
                <span className="text-primary font-bold">3x Mais eficaz que métodos tradicionais</span> para mães que querem alfabetizar sem lágrimas ou pressão em apenas 30 dias.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
