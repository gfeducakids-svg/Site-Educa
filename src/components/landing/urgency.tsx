
import { AlertTriangle } from "lucide-react";

export function Urgency() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="flex items-center gap-3 sm:gap-4">
                <AlertTriangle className="h-8 w-8 sm:h-12 sm:w-12 text-destructive flex-shrink-0" />
                <h2 className="text-xl sm:text-3xl font-bold tracking-tighter font-headline text-foreground">
                    ATENÇÃO: OFERTA POR TEMPO LIMITADO
                </h2>
            </div>
            <p className="max-w-[600px] text-muted-foreground md:text-lg">
                Após as 150 vagas se esgotarem, o preço retornará ao valor original de <span className="font-bold text-destructive">R$ 89,90</span>. Garanta sua vaga pelo preço promocional agora!
            </p>
        </div>
      </div>
    </section>
  );
}
