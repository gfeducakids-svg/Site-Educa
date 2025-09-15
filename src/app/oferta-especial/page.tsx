
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Check, Crown, Star, AlertTriangle, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const bonuses = [
  { text: "Atividades para Imprimir" },
  { text: "Jogos Educativos Interativos" },
  { text: "Materiais Integrados de Apoio para Pais" },
  { text: "Materiais ideias para Alfabetização" },
  { text: "Suporte Pedagógico Automático 24/7" },
  { text: "Suporte Sobre o APP Automático 24/7" },
  { text: "Certificado de Conclusão Personalizado" },
  { text: "Acesso Vitalício ao Conteúdo" },
  { text: "Atividades lúdicas e interativas" },
  { text: "BÔNUS: Guia Completo para Alfabetização" },
  { text: "BÔNUS: Garantia de 7 Dias" },
];


export default function OfertaEspecialPage() {
  return (
    <div className="flex flex-col min-h-dvh w-full overflow-x-hidden bg-aderecos items-center justify-center p-4">
        <div className="star-1"></div>
        <div className="star-2"></div>
        <div className="star-3"></div>
        <div className="star-4"></div>
        <div className="star-5"></div>
        <div className="bg-aderecos::before"></div>
        <div className="bg-aderecos::after"></div>
        
        <main className="flex-1 relative z-10 flex flex-col items-center justify-center w-full">
            <div className="max-w-2xl mx-auto bg-white border-2 border-destructive/20 rounded-xl shadow-lg p-6 md:p-8 mb-8">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="flex flex-col items-center gap-3 sm:gap-4">
                        <AlertTriangle className="h-8 w-8 sm:h-10 sm:w-10 text-destructive flex-shrink-0" />
                        <h2 className="text-xl sm:text-2xl font-bold tracking-tighter font-headline text-foreground">
                            ESPERE! OFERTA ESPECIAL SÓ PARA VOCÊ
                        </h2>
                    </div>
                    <p className="max-w-[600px] text-muted-foreground text-base md:text-lg">
                        Você está a um passo de mudar o futuro do seu filho. Não deixe essa oportunidade escapar. O preço vai subir em breve!
                    </p>
                </div>
            </div>

            <Card className="relative flex flex-col p-6 bg-gradient-to-br from-yellow-50 via-amber-100 to-yellow-50 border-4 border-amber-400 shadow-2xl rounded-2xl transition-transform hover:scale-105 w-full max-w-lg">
                <div className="absolute -top-4 right-1/2 translate-x-1/2 bg-amber-400 text-white font-bold px-4 py-2 rounded-md text-sm shadow-lg">O melhor para seu filho</div>
                <div className="absolute top-2 left-2 opacity-20">
                    <Star className="w-16 h-16 text-amber-300 fill-amber-300" />
                </div>
                <div className="absolute bottom-2 right-2 opacity-20">
                    <Star className="w-12 h-12 text-amber-300 fill-amber-300 transform -rotate-12" />
                </div>
                <CardHeader className="text-center pb-4 z-10 pt-8">
                <CardTitle className="text-3xl font-headline text-amber-900">PLANO PREMIUM</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow z-10">
                <ul className="space-y-3 text-left">
                    {bonuses.map((bonus, index) => (
                    <li key={index} className="flex items-center gap-3">
                        {bonus && bonus.text && bonus.text.startsWith("BÔNUS:") ? (
                            <Star className="w-6 h-6 text-amber-500 fill-amber-500 flex-shrink-0" />
                        ) : (
                            <Crown className="w-6 h-6 text-amber-500 flex-shrink-0" />
                        )}
                        <span className="font-medium text-amber-900">{bonus.text}</span>
                    </li>
                    ))}
                </ul>
                </CardContent>
                <div className="mt-6 z-10 px-6 pb-6 flex flex-col items-center text-center">
                    <div className="mb-4">
                        <p className="text-3xl font-bold text-amber-600 tracking-tighter">R$ 47,90</p>
                        <p className="text-lg font-semibold text-green-600 flex items-center justify-center gap-2 mt-1">
                           <Sparkles className="w-5 h-5" />
                           <span>Apenas R$ 1,60 por dia</span>
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">Pagamento Único</p>
                    </div>
                    <Button asChild size="lg" className="w-full h-auto py-4 text-lg font-headline bg-green-500 hover:bg-green-600 text-white shadow-xl transform hover:scale-105 transition-transform">
                    <Link href="https://pay.kiwify.com.br/S7SLFJY">
                    GARANTIR MINHA VAGA AGORA
                    </Link>
                </Button>
                </div>
            </Card>
        </main>
    </div>
  );
}
