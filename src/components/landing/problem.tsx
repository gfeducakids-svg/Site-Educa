
import { HeartHandshake, Lightbulb } from "lucide-react";

export function Problem() {
  return (
    <section className="w-full py-8 md:py-12 lg:py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-foreground">
              Você não está sozinho(a) nessa luta...
            </h2>
            <p className="text-muted-foreground md:text-lg">
              Se você está aqui, é porque já viveu aqueles momentos de frustração do tipo seu filho chorando na hora da lição, você se sentindo perdida sem saber como ajudar, e aquela voz na sua cabeça "será que sou uma péssima mãe?"
            </p>
            <div className="bg-background p-6 rounded-lg shadow-md space-y-4">
                <div className="flex items-center gap-3">
                    <HeartHandshake className="h-8 w-8 text-primary"/>
                    <h3 className="text-2xl font-bold font-rubik text-primary">Eu sei exatamente como você se sente.</h3>
                </div>
                <p className="text-muted-foreground">
                  Já ouvi centenas de pais me contarem: "Contratei uma professora, mas não mudou muito..." "Fiz tudo certo, mas ele não se interessava." "Ele só quer jogar."
                </p>
                <p className="text-muted-foreground border-l-4 border-primary pl-4 italic">
                  E o pior são os comentários das pessoas: "Ele ainda não sabe ler? Mas meu filho aprendeu com 5 anos." "Você que é mãe, devia estar se esforçando mais, né?"
                </p>
            </div>
          </div>
          <div className="space-y-4 rounded-lg bg-background p-8 shadow-lg border-2 border-accent">
            <p className="text-muted-foreground md:text-lg">
              A verdade é que <strong className="text-foreground">não é culpa sua.</strong> O problema não está em você - está no método ultrapassado que ainda é utilizado para alfabetizar.
            </p>
            <div className="flex items-center gap-3 pt-4">
                <Lightbulb className="h-8 w-8 text-primary"/>
                <h3 className="text-2xl font-bold tracking-tighter font-rubik text-primary">Mas imagina como seria diferente se...</h3>
            </div>
            <ul className="list-inside space-y-2 text-muted-foreground md:text-lg">
              <li className="flex items-start gap-2"><span className="text-primary font-bold">✓</span>Se seu filho aprendesse a ler com prazer e rapidez.</li>
              <li className="flex items-start gap-2"><span className="text-primary font-bold">✓</span>Se o ensino acontecesse de forma natural e divertida.</li>
              <li className="flex items-start gap-2"><span className="text-primary font-bold">✓</span>Se seu filho desenvolvesse autoestima e gosto pela leitura.</li>
              <li className="flex items-start gap-2"><span className="text-primary font-bold">✓</span>Se você tivesse segurança e material para ensinar em casa.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
