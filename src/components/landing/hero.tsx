import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { Rocket } from 'lucide-react';

export function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center">
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl md:text-6xl text-foreground">
                DESCUBRA O Método Chinês que Alfabetiza Crianças 3x Mais Rápido <span className="text-primary">(300% MAIS EFICAZ)</span>
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl font-rubik">
                Para pais e educadores que querem alfabetizar sem lágrimas ou pressão em apenas 30 dias - usado por +1.200 famílias.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="h-auto py-4 px-6 font-headline text-lg bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg">
                <Link href="https://pay.kiwify.com.br/S7SLFJY">
                  <Rocket className="mr-2 h-5 w-5" />
                  QUERO QUE MEU FILHO LEIA EM 30 DIAS
                </Link>
              </Button>
            </div>
          </div>
          <Card className="overflow-hidden rounded-xl shadow-2xl">
            <Image
              alt="Criança sorrindo enquanto aprende a ler com um método divertido"
              className="mx-auto aspect-square overflow-hidden object-cover w-full"
              height="600"
              src="https://i.imgur.com/19LCEGv.png"
              width="600"
              data-ai-hint="child learning"
              priority
            />
          </Card>
        </div>
      </div>
    </section>
  );
}
