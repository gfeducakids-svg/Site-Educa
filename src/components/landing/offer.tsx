
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Tag, Gift, ShoppingCart } from "lucide-react";
import Link from "next/link";

const includedItems = [
    { name: "Método Chinês de Grafismo Fonético", value: "R$ 99,00" },
    { name: "Formação da Base até a Escrita", value: "R$ 47,00" },
    { name: "Guia Completo de Atividades Lúdicas", value: "R$ 57,00" },
    { name: "+150 Quadrinhos de Grafismo Fonético", value: "R$ 15,00" },
]

const newBonusItems = [
    { name: "Tesouro dos Sons (Novo!)", value: "Incalculável" },
    { name: "Atividade Bingo de Sílabas (Novo!)", value: "Incalculável" },
]

export function Offer() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6 flex justify-center">
        <Card className="w-full max-w-2xl bg-background shadow-2xl border-2 border-primary transform hover:scale-105 transition-transform duration-500">
            <CardHeader className="text-center">
                <CardTitle className="text-2xl sm:text-3xl font-bold font-headline text-foreground animate-pulse">O que você recebe ao se inscrever hoje</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="space-y-3">
                    {includedItems.map((item, index) => (
                        <div key={index} className="flex justify-between items-center p-3 bg-white rounded-lg shadow transition-all duration-300 hover:shadow-md hover:bg-gray-50">
                            <div className="flex items-center gap-3">
                                <Tag className="h-5 w-5 text-primary flex-shrink-0" />
                                <span className="font-semibold text-foreground text-sm sm:text-base">{item.name}</span>
                            </div>
                            <span className="font-bold text-muted-foreground line-through text-sm sm:text-base">{item.value}</span>
                        </div>
                    ))}
                    <div className="pt-4 space-y-3">
                        {newBonusItems.map((item, index) => (
                             <div key={index} className="flex justify-between items-center p-3 bg-accent/20 rounded-lg shadow transition-all duration-300 hover:shadow-md border-l-4 border-accent">
                                <div className="flex items-center gap-3">
                                    <Gift className="h-5 w-5 text-primary flex-shrink-0 animate-bounce" />
                                    <span className="font-semibold text-primary text-sm sm:text-base">{item.name}</span>
                                </div>
                                <span className="font-bold text-primary text-sm sm:text-base">{item.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="text-center bg-white p-4 rounded-lg shadow-inner">
                    <p className="text-sm font-semibold text-muted-foreground">VALOR TOTAL DE TUDO</p>
                    <p className="text-2xl font-bold text-muted-foreground line-through">R$ 218,00</p>
                </div>
                <div className="text-center bg-primary/10 border-2 border-dashed border-primary p-6 rounded-lg shadow-lg space-y-4">
                    <div>
                        <p className="text-lg sm:text-xl font-semibold uppercase text-primary">🔥 OFERTA ESPECIAL HOJE:</p>
                        <p className="text-4xl sm:text-5xl font-bold text-foreground">APENAS R$ 27,90</p>
                        <p className="text-sm text-muted-foreground">(Pagamento Único)</p>
                    </div>
                    <Button asChild size="lg" className="h-auto w-full py-4 px-6 text-lg sm:text-xl font-headline bg-green-500 hover:bg-green-600 text-white shadow-lg transform hover:scale-105 transition-transform duration-300 animate-pulse">
                        <Link href="https://pay.kiwify.com.br/S7SLFJY">
                            <ShoppingCart className="mr-3 h-6 w-6" />
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
