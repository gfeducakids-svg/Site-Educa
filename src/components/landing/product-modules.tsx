import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

const modules = [
  {
    title: "MÓDULO 01: PRÉ-ALFABETIZAÇÃO: CONSTRUINDO AS BASES",
    points: ["Consciência fonológica", "Motricidade fina", "Atividade 'Tesouro dos Sons'", "Identificação dos sons iniciais"]
  },
  {
    title: "MÓDULO 02: APRESENTANDO O ALFABETO: FORMA E SOM",
    points: ["Memorização multissensorial", "Associar letras a imagens e sons", "Atividade 'Caça às Letras'"]
  },
  {
    title: "MÓDULO 03: SÍLABAS SIMPLES: COMBINANDO SONS",
    points: ["Começar por sílabas CV", "Uso de cartões coloridos", "Atividade 'Bingo de Sílabas'"]
  },
  {
    title: "MÓDULO 04: MÉTODO FÔNICO: PRONÚNCIA CORRETA",
    points: ["Ensinar SONS puros", "Evitar os 'parasitas' fonéticos", "Corrigir vícios comuns de pronúncia"]
  },
  {
    title: "MÓDULO 05: FORMAÇÃO DE PALAVRAS E FRASES",
    points: ["Frases com estrutura Sujeito+Verbo", "Reforço visual com sublinhado", "Palavras CVC e com sílabas repetidas"]
  },
  {
    title: "MÓDULO 06: ESCRITA E COMPREENSÃO LEITORA",
    points: ["Cobrir letras tracejadas", "Escrita sob ditado", "Produção de palavras a partir de imagens", "Interpretação e dramatização de textos"]
  },
];

export function ProductModules() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-foreground">
              O que você vai aprender passo a passo
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed font-rubik">
              Um caminho claro e estruturado para o sucesso da alfabetização.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {modules.map((module, index) => (
              <Card key={index} className="bg-white shadow-lg flex flex-col">
                <CardHeader className="text-left">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-primary text-primary-foreground rounded-full p-2">
                        <BookOpen className="h-6 w-6" />
                    </div>
                    <CardTitle className="font-headline text-primary">{module.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-left flex-grow">
                  <ul className="space-y-2">
                    {module.points.map((point, pIndex) => (
                      <li key={pIndex} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-primary font-bold mt-1">✓</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
