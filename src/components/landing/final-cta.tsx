import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CreditCard, ShieldCheck } from "lucide-react";
import Link from "next/link";

const PixIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.01,5.32c-3.4,0-6.17,2.77-6.17,6.17s2.77,6.17,6.17,6.17c3.4,0,6.17-2.77,6.17-6.17S15.41,5.32,12.01,5.32z M12,16.5c-2.48,0-4.5-2.02-4.5-4.5s2.02-4.5,4.5-4.5s4.5,2.02,4.5,4.5S14.48,16.5,12,16.5z" fill="currentColor"/>
    <path d="M14.68,10.66l-3.32-3.32c-0.29-0.29-0.79-0.29-1.08,0c-0.29,0.29-0.29,0.79,0,1.08l3.32,3.32c0.14,0.14,0.33,0.22,0.54,0.22s0.4-0.08,0.54-0.22C14.97,11.45,14.97,10.95,14.68,10.66z" fill="currentColor"/>
  </svg>
)

export function FinalCta() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container flex flex-col items-center gap-8 px-4 md:px-6">
        <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-foreground">Sua última chance de transformar a educação do seu filho.</h2>
            <p className="text-muted-foreground md:text-xl font-rubik">Não espere mais. Dê ao seu filho o futuro que ele merece.</p>
        </div>
        <Button asChild size="lg" className="h-auto py-4 px-6 text-base md:text-xl font-headline bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg animate-pulse text-center">
          <Link href="https://pay.kiwify.com.br/S7SLFJY">
            GARANTIR ALFABETIZAÇÃO DO MEU FILHO AGORA
          </Link>
        </Button>
        <Card className="w-full max-w-md bg-white shadow-lg">
            <CardContent className="p-6 space-y-4">
                <div className="text-center">
                    <p className="font-bold text-foreground">INFORMAÇÕES DE PAGAMENTO</p>
                </div>
                <div className="flex justify-center items-center gap-4">
                    <div className="flex items-center gap-2">
                        <PixIcon />
                        <span className="font-medium">PIX</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CreditCard />
                        <span className="font-medium">Cartão de Crédito</span>
                    </div>
                </div>
                <div className="text-center bg-accent/20 text-primary p-3 rounded-lg">
                    <p className="font-semibold">PARCELAMENTO SEM JUROS:</p>
                    <p className="text-lg font-bold">12x de R$ 2,50 no cartão</p>
                    <p className="text-sm text-muted-foreground">(Menos que um lanche no shopping)</p>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <ShieldCheck className="h-4 w-4 text-primary" />
                    <span>Pagamento 100% seguro.</span>
                </div>
            </CardContent>
        </Card>
      </div>
    </section>
  );
}
