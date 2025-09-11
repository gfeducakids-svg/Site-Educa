

import { AlertTriangle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { CreditCard, ShieldCheck, Lock, EyeOff, Verified } from "lucide-react";

const PixIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.01,5.32c-3.4,0-6.17,2.77-6.17,6.17s2.77,6.17,6.17,6.17c3.4,0,6.17-2.77,6.17-6.17S15.41,5.32,12.01,5.32z M12,16.5c-2.48,0-4.5-2.02-4.5-4.5s2.02-4.5,4.5-4.5s4.5,2.02,4.5,4.5S14.48,16.5,12,16.5z" fill="currentColor"/>
    <path d="M14.68,10.66l-3.32-3.32c-0.29-0.29-0.79-0.29-1.08,0c-0.29,0.29-0.29,0.79,0,1.08l3.32,3.32c0.14,0.14,0.33,0.22,0.54,0.22s0.4-0.08,0.54-0.22C14.97,11.45,14.97,10.95,14.68,10.66z" fill="currentColor"/>
  </svg>
)

export function Urgency() {
  return (
    <section className="w-full pt-0 pb-8 md:pb-12 lg:pb-16 bg-background">
      <div className="container px-4 md:px-6 space-y-8">
        <div className="max-w-2xl mx-auto bg-white border-2 border-destructive/20 rounded-xl shadow-lg p-6 md:p-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="flex flex-col items-center gap-3 sm:gap-4">
                    <AlertTriangle className="h-8 w-8 sm:h-10 sm:w-10 text-destructive flex-shrink-0" />
                    <h2 className="text-xl sm:text-2xl font-bold tracking-tighter font-headline text-foreground">
                        ATENÇÃO: <br />OFERTA POR TEMPO LIMITADO
                    </h2>
                </div>
                <p className="max-w-[600px] text-muted-foreground text-base md:text-lg">
                    Após as 150 vagas se esgotarem, o preço retornará ao valor original de <span className="font-bold text-destructive">R$ 149,90</span>. Garanta sua vaga pelo preço promocional agora!
                </p>
            </div>
        </div>

        <div className="flex flex-col items-center">
          <Card className="w-full max-w-md bg-white shadow-lg">
              <CardContent className="p-6 space-y-4">
                  <div className="text-center">
                      <p className="font-bold text-foreground">Formas de Pagamento</p>
                  </div>
                  <div className="flex justify-center items-center gap-4">
                      <div className="flex items-center gap-2">
                          <PixIcon />
                          <span className="font-medium">PIX</span>
                      </div>
                      <div className="flex items-center gap-2">
                          <CreditCard />
                          <span className="font-medium">Cartão</span>
                      </div>
                  </div>
                  <div className="space-y-2 text-sm text-muted-foreground mt-4">
                      <div className="flex items-center justify-center gap-2">
                          <ShieldCheck className="h-4 w-4 text-primary" />
                          <span>Pagamento 100% seguro.</span>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                          <Verified className="h-4 w-4 text-primary" />
                          <span>Compra segura via Kiwify.</span>
                      </div>
                       <div className="flex items-center justify-center gap-2">
                          <Lock className="h-4 w-4 text-primary" />
                          <span>Dados criptografados.</span>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                          <EyeOff className="h-4 w-4 text-primary" />
                          <span>Privacidade garantida.</span>
                      </div>
                  </div>
              </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
