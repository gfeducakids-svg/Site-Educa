import { CheckCircle2, BotMessageSquare, Home, Clock, Smile, Wallet, Palette, Sparkles, ArrowRight } from "lucide-react";

const benefits = [
  { icon: Clock, title: "SEU FILHO VAI APRENDER A LER 3X MAIS RÁPIDO", description: "Em apenas 30 dias, você verá resultados que outros métodos levam meses para alcançar." },
  { icon: BotMessageSquare, title: "MOMENTOS DE CONEXÃO EM VEZ DE LÁGRIMAS", description: "Transforme a hora da lição em momentos especiais de diversão e cumplicidade." },
  { icon: Home, title: "SEGURANÇA TOTAL PARA ENSINAR EM CASA", description: "Você terá um método passo-a-passo que funciona, mesmo sem experiência em educação." },
  { icon: Clock, title: "ECONOMIZE 5+ HORAS POR SEMANA", description: "Apenas 15 minutos/dia substituem horas de luta com cartilhas e métodos tradicionais." },
  { icon: Smile, title: "AUTOESTIMA E CONFIANÇA DA CRIANÇA", description: "Seu filho vai se sentir capaz e inteligente, não mais \"burro\" ou \"atrasado\"." },
  { icon: Wallet, title: "PARE DE GASTAR COM REFORÇOS QUE NÃO FUNCIONAM", description: "Um investimento único de R$ 27,90 substitui meses de aulas particulares caras." },
  { icon: Palette, title: "APRENDIZADO NATURAL E DIVERTIDO", description: "Usa a capacidade que a criança já tem: associar desenhos a significados." },
];

const highlights = [
  { icon: Clock, text: "APENAS 15 MINUTOS POR DIA" },
  { icon: Smile, text: "SEM CARTILHAS CHATAS" },
  { icon: Sparkles, text: "SEM LÁGRIMAS OU PRESSÃO" },
  { icon: ArrowRight, text: "RESULTADOS EM 30 DIAS" }
]

export function Benefits() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-foreground">
              Oque você vai conseguir:
            </h2>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-4">
                <benefit.icon className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                <div className="text-left">
                  <h3 className="text-lg font-bold font-headline text-foreground">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-4xl pt-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-center justify-center gap-2 p-3 bg-background rounded-lg shadow-md">
                <highlight.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                <span className="font-semibold text-xs sm:text-sm text-foreground text-center">{highlight.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
