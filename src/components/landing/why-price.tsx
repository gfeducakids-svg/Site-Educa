
import { DollarSign, BookOpenCheck } from "lucide-react";

export function WhyPrice() {
  return (
    <section className="w-full py-8 md:py-12 lg:py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6 text-center max-w-2xl mx-auto">
            <BookOpenCheck className="h-12 w-12 text-primary" />
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-foreground">
                POR QUE APENAS R$ 47,90?
            </h2>
            <p className="text-muted-foreground md:text-lg">
                Normalmente este método custaria R$ 800+ em aulas particulares.
            </p>
             <p className="text-muted-foreground md:text-lg">
                Mas nossa missão é democratizar a alfabetização no Brasil.
            </p>
             <p className="text-muted-foreground md:text-lg">
                Por isso, mantemos o preço acessível para TODAS as mães.
            </p>
        </div>
      </div>
    </section>
  );
}
