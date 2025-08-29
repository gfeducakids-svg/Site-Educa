
'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Gift, ShoppingCart, Tag, CheckCircle, Award, Lock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import React from "react";

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

const carouselImages = [
  { src: "https://i.imgur.com/tYI2vas.png", alt: "Atividade de alfabetização 1" },
  { src: "https://i.imgur.com/Rgadoag.png", alt: "Atividade de alfabetização 2" },
  { src: "https://i.imgur.com/RegFOYm.png", alt: "Atividade de alfabetização 3" },
  { src: "https://i.imgur.com/XErMvzx.png", alt: "Atividade de alfabetização 4" },
  { src: "https://i.imgur.com/purmdGb.png", alt: "Atividade de alfabetização 5" },
  { src: "https://i.imgur.com/40pdFGH.png", alt: "Atividade de alfabetização 6" },
];

export function Offer() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  )

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6 flex flex-col items-center gap-16">
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
                
                <div className="text-center space-y-4 pt-6">
                    <p className="text-lg text-muted-foreground">
                        No total tudo deveria custar <span className="line-through text-red-500">R$ 218,00</span>
                        <br/>
                        Mas hoje você vai ter acesso completo por
                    </p>
                    <p className="text-6xl font-bold text-primary">R$ 27,90</p>
                    
                    <div className="w-full max-w-xs mx-auto border-t border-b border-gray-300 my-4 py-2">
                      <p className="text-sm font-semibold tracking-wider text-muted-foreground">ACESSO VITALÍCIO | ACESSO IMEDIATO</p>
                    </div>

                    <Button asChild size="lg" className="h-auto w-full max-w-md py-4 px-6 text-xl font-bold bg-green-500 hover:bg-green-600 text-white shadow-lg rounded-full transform hover:scale-105 transition-transform duration-300 animate-pulse">
                        <Link href="https://pay.kiwify.com.br/S7SLFJY">
                            QUERO GARANTIR O MEU KIT AGORA!
                        </Link>
                    </Button>
                    <div className="flex justify-center items-center gap-4 pt-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                            <CheckCircle className="h-4 w-4 text-primary"/>
                            <span>Compra Segura</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Award className="h-4 w-4 text-primary"/>
                            <span>Satisfação Garantida</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Lock className="h-4 w-4 text-primary"/>
                            <span>Privacidade Protegida</span>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>

        <div className="w-full max-w-4xl">
            <h3 className="text-2xl md:text-3xl font-bold font-headline text-center text-foreground mb-8">
                Veja um pouco do material por dentro:
            </h3>
            <Carousel
              plugins={[plugin.current]}
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent>
                {carouselImages.map((image, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-2">
                    <div className="p-1">
                      <Card className="overflow-hidden rounded-lg">
                        <CardContent className="p-0 flex aspect-[4/3] items-center justify-center">
                          <Image
                            src={image.src}
                            alt={image.alt}
                            width={400}
                            height={300}
                            className="w-full h-full object-cover"
                          />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex" />
              <CarouselNext className="hidden sm:flex" />
            </Carousel>
        </div>
      </div>
    </section>
  );
}
