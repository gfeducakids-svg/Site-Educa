
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Tag } from "lucide-react";
import Link from "next/link";

const includedItems = [
    { name: "Método Chinês de Grafismo Fonético", value: "R$ 99,00" },
    { name: "Bônus #1 - Guia Completo", value: "R$ 57,00" },
    { name: "Bônus #2 - MAIS DE 150 QUADRINHOS DE GRAFISMO FONÉTICO", value: "R$ 15,00" },
    { name: "Bônus #3 - ATIVIDADES LÚDICAS", value: "R$ 10,00" },
]

export function Offer() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6 flex justify-center">
        <Card className="w-full max-w-2xl bg-background shadow-2xl border-2 border-primary">
            <CardHeader className="text-center">
                <CardTitle className="text-2xl sm:text-3xl font-bold font-headline text-foreground">O que você recebe ao se inscrever hoje</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="space-y-3">
                    {includedItems.map((item, index) => (
                        <div key={index} className="flex justify-between items-center p-3 bg-white rounded-lg shadow">
                            <div className="flex items-center gap-2">
                                <Tag className="h-5 w-5 text-primary flex-shrink-0" />
                                <span className="font-semibold text-foreground text-sm sm:text-base">{item.name}</span>
                            </div>
                            <span className="font-bold text-muted-foreground line-through text-sm sm:text-base">{item.value}</span>
                        </div>
                    ))}
                </div>
                <div className="text-center bg-white p-4 rounded-lg shadow-inner">
                    <p className="text-sm font-semibold text-muted-foreground">VALOR TOTAL</p>
                    <p className="text-2xl font-bold text-muted-foreground line-through">R$ 181,00</p>
                </div>
                <div className="text-center bg-primary text-primary-foreground p-6 rounded-lg shadow-lg space-y-4">
                    <div>
                        <p className="text-base sm:text-lg font-semibold uppercase">🔥 SEU INVESTIMENTO HOJE:</p>
                        <p className="text-4xl sm:text-5xl font-bold">APENAS R$ 27,90</p>
                    </div>
                    <Button asChild size="lg" className="h-auto py-3 px-6 text-base sm:text-lg font-headline bg-white hover:bg-white/90 text-primary shadow-lg animate-pulse w-full sm:w-auto text-center">
                        <Link href="https://pay.kiwify.com.br/S7SLFJY">
                            QUERO GARANTIR MINHA VAGA
                        </Link>
                    </Button>
                </div>
            </CardContent>
        </Card>
      </div>
    </section>
  );
}
