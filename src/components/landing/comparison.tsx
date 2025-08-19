import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { XCircle, CheckCircle } from "lucide-react";

export function Comparison() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <Card className="bg-white shadow-lg border-2 border-destructive/50">
            <CardHeader>
              <CardTitle className="font-headline text-center text-destructive">ANTES (Estado Atual)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-4">
                <XCircle className="h-6 w-6 text-destructive mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">Criança chora na hora da lição e diz "sou burro"</p>
              </div>
              <div className="flex items-start gap-4">
                <XCircle className="h-6 w-6 text-destructive mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">Noites de briga, tensão e culpa em casa</p>
              </div>
              <div className="flex items-start gap-4">
                <XCircle className="h-6 w-6 text-destructive mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">Dependência total do sistema educacional falido</p>
              </div>
              <div className="flex items-start gap-4">
                <XCircle className="h-6 w-6 text-destructive mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">Medo constante: "será que meu filho vai ficar pra trás?"</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-lg border-2 border-primary">
            <CardHeader>
              <CardTitle className="font-headline text-center text-primary">DEPOIS (30 dias com o Método)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">Criança lê com brilho nos olhos e pede mais atividades</p>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">Alfabetização natural, divertida e sem pressão</p>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">Momentos de conexão e orgulho entre pais e filhos</p>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">Segurança total para ensinar em casa</p>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">Autoestima da criança restaurada e amor pela leitura</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
