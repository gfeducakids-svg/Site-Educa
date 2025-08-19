import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Clock, Award } from "lucide-react";

export function Urgency() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div className="space-y-4">
                <div className="flex items-center gap-3">
                    <AlertTriangle className="h-8 w-8 text-destructive" />
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-foreground">
                        ATENÇÃO: OFERTA POR TEMPO LIMITADO
                    </h2>
                </div>
                <p className="text-muted-foreground md:text-lg">
                    ⚡ <strong>APENAS 150 VAGAS DISPONÍVEIS NESTE MÊS.</strong> Por que limitamos as vagas? Para garantir suporte de qualidade no grupo VIP do Telegram, conseguimos atender apenas 150 famílias por mês. Quando esgotar, só volta no próximo mês com preço normal de R$ 99,00.
                </p>
            </div>
            <Card className="bg-white shadow-lg border-2 border-primary">
                <CardHeader>
                    <CardTitle className="font-headline text-primary flex items-center gap-3">
                        <Award className="h-7 w-7" />
                        <span>PRIORIDADE DE ACESSO</span>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-xl font-bold text-foreground">PRIMEIROS 50 COMPRADORES GANHAM:</p>
                    <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground">
                        <li>Acesso imediato (sem espera)</li>
                        <li>Resposta garantida em até 2 horas no suporte</li>
                    </ul>
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}
