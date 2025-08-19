import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Clock, Smile, Sparkles, BookHeart, PencilRuler, Search } from 'lucide-react';
import Link from 'next/link';

const steps = [
  {
    icon: BookHeart,
    title: "PASSO 1: CONECTAR",
    subtitle: "(5 Minutos)",
    description: "A criança associa cada letra a um desenho divertido que ela já conhece. O \"A\" vira uma casinha, o \"B\" vira um patinho. Sem decoreba, só diversão."
  },
  {
    icon: PencilRuler,
    title: "PASSO 2: PRATICAR",
    subtitle: "(10 Minutos)",
    description: "Com movimentos naturais, ela desenha as letras seguindo o formato que já memorizou. É como brincar de desenhar, mas aprendendo a escrever."
  },
  {
    icon: Search,
    title: "PASSO 3: DESCOBRIR",
    subtitle: "(15 Minutos)",
    description: "Juntando as letrinhas que já conhece, ela forma suas primeiras palavras. Sem pressão, no ritmo dela, com você do lado comemorando cada conquista."
  }
];

const highlights = [
  { icon: Clock, text: "APENAS 15 MINUTOS POR DIA" },
  { icon: Smile, text: "SEM CARTILHAS CHATAS" },
  { icon: Sparkles, text: "SEM LÁGRIMAS OU PRESSÃO" },
  { icon: ArrowRight, text: "RESULTADOS EM 30 DIAS" }
]

export function Solution() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-12 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-foreground">
              COMO FUNCIONA O MÉTODO CHINÊS DE GRAFISMO FONÉTICO
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed font-rubik">
              É mais simples do que você imagina:
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-1 md:grid-cols-3 md:gap-12">
            {steps.map((step, index) => (
              <Card key={index} className="bg-white shadow-lg text-left transform hover:scale-105 transition-transform duration-300">
                <CardHeader>
                    <div className="flex items-center gap-4">
                        <div className="bg-primary text-primary-foreground p-3 rounded-full">
                            <step.icon className="h-6 w-6" />
                        </div>
                        <div>
                          <CardTitle className="font-headline text-primary text-lg">{step.title}</CardTitle>
                          <p className="text-sm font-medium text-muted-foreground">{step.subtitle}</p>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-4xl pt-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-center justify-center gap-2 p-3 bg-white rounded-lg shadow-md">
                <highlight.icon className="h-6 w-6 text-primary" />
                <span className="font-semibold text-sm text-foreground text-center">{highlight.text}</span>
              </div>
            ))}
          </div>
          <div className="pt-6">
            <Button asChild size="lg" className="h-auto py-4 px-6 font-headline text-lg bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg">
              <Link href="https://pay.kiwify.com.br/S7SLFJY">
                QUERO APRENDER ESSE MÉTODO AGORA
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
