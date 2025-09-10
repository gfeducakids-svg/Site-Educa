
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Check, Crown, XCircle, Star } from "lucide-react";
import Link from "next/link";

const bonuses = [
  { text: "Atividades Extras para Imprimir" },
  { text: "Jogos Educativos Interativos" },
  { text: "Materiais de Apoio para Pais" },
  { text: "Acesso a Comunidade VIP" },
  { text: "Suporte Pedagógico Exclusivo" },
  { text: "Certificado de Conclusão Personalizado" },
];

const negatives = [
    { text: "Continua sem saber ler" },
    { text: "Frustração e choro nas tarefas" },
    { text: "Sentimento de 'ser o último' da turma" },
    { text: "Horas perdidas em métodos que não funcionam" },
    { text: "Autoestima da criança é prejudicada" }
];


export function Pricing() {
  return (
    <section className="w-full py-8 md:py-12 lg:py-16 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-foreground">
            Escolha o Futuro do Seu Filho
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed font-rubik">
            Você tem duas opções. A decisão que você tomar hoje pode mudar a vida da sua criança para sempre.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12 items-stretch">
          
          {/* Plano Grátis */}
          <Card className="flex flex-col justify-between p-6 bg-white shadow-md transition-transform hover:scale-105">
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-2xl font-headline text-muted-foreground">SEM PLANO</CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="space-y-3 text-left">
                {negatives.map((neg, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <XCircle className="w-5 h-5 text-destructive flex-shrink-0" />
                    <span className="text-muted-foreground">{neg.text}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Plano Premium */}
          <Card className="flex flex-col p-6 bg-gradient-to-br from-yellow-50 via-amber-100 to-yellow-50 border-4 border-amber-400 shadow-2xl rounded-2xl transition-transform hover:scale-105 relative">
            <div className="absolute -top-4 -right-4 bg-amber-400 text-white font-bold px-4 py-2 rounded-bl-lg text-sm transform rotate-6 shadow-lg">O melhor para seu filho</div>
             <div className="absolute top-2 left-2 opacity-20">
                <Star className="w-16 h-16 text-amber-300 fill-amber-300" />
            </div>
             <div className="absolute bottom-2 right-2 opacity-20">
                <Star className="w-12 h-12 text-amber-300 fill-amber-300 transform -rotate-12" />
            </div>
            <CardHeader className="text-center pb-4 z-10">
              <CardTitle className="text-3xl font-headline text-amber-900">PLANO PREMIUM</CardTitle>
              <CardDescription className="text-4xl font-bold text-amber-600 tracking-tighter">R$ 37,90</CardDescription>
              <p className="text-sm text-amber-800">Pagamento Único</p>
            </CardHeader>
            <CardContent className="flex-grow z-10">
              <ul className="space-y-3 text-left">
                {bonuses.map((bonus, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Crown className="w-6 h-6 text-amber-500 flex-shrink-0" />
                    <span className="font-medium text-amber-900">{bonus.text}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <div className="mt-6 z-10">
                 <Button asChild size="lg" className="w-full h-auto py-4 text-lg font-headline bg-green-500 hover:bg-green-600 text-white shadow-xl transform hover:scale-105 transition-transform">
                <Link href="https://pay.kiwify.com.br/S7SLFJY">
                  GARANTIR MINHA VAGA
                </Link>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
