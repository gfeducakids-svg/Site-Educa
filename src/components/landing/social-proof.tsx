import { Lightbulb } from 'lucide-react';

export function SocialProof() {
  return (
    <section className="w-full py-12 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center space-y-6">
          <div className="inline-block rounded-lg bg-accent/20 px-4 py-2 text-base font-medium text-primary font-headline">
            PROVA SOCIAL CIENTÍFICA
          </div>
          <div className="flex items-start justify-center gap-6 p-8 bg-background rounded-lg shadow-lg border">
            <Lightbulb className="h-10 w-10 text-primary mt-1 flex-shrink-0" />
            <p className="text-muted-foreground text-left text-base md:text-lg">
              Estudos em neurociência educacional comprovam que métodos visuais-fonéticos aceleram em até 300% o processo de alfabetização, especialmente quando combinam elementos gráficos com sons. O grafismo chinês utiliza exatamente esses princípios milenares adaptados para o português brasileiro.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
