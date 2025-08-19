import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Star } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Carla e Matheus, mãe de Miguel (6 anos)',
    location: 'São Paulo/SP',
    quote: "Eu estava desesperada. Miguel chorava toda vez que via uma cartilha. Em 3 semanas com o método, ele começou a formar palavras sozinho e hoje pede para 'brincar de ler' comigo. Eu recuperei a paz em casa e a autoestima do meu filho.",
    image: 'https://i.imgur.com/bgsicu3.png',
    dataAiHint: 'mother child'
  },
  {
    name: 'Fernanda, mãe de Laura (5 anos)',
    location: 'Belo Horizonte/MG',
    quote: "Tentei apps, reforço, até psicopedagoga. Nada funcionava. Com o grafismo chinês, Laura aprendeu brincando. Ela mesma disse: 'Mamãe, agora eu sei ler de verdade!' Vale muito mais que os R$ 27,90 que paguei.",
    image: 'https://i.imgur.com/RInc4LW.png',
    dataAiHint: 'mother daughter'
  },
  {
    name: 'Professor Renato',
    location: 'Escola Municipal de Curitiba/PR',
    quote: "Em 15 anos de magistério, nunca vi método tão eficaz. Meus alunos pedem para fazer as atividades de grafismo. A alfabetização virou diversão na minha sala. Recomendo para todos os colegas.",
    image: 'https://i.imgur.com/dUfpSp5.png',
    dataAiHint: 'male teacher'
  },
];

export function Testimonials() {
  return (
    <section className="w-full py-12 md:py-24 bg-background">
      <div className="container grid items-center justify-center gap-6 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline text-foreground">
            O que as famílias e educadores dizem
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-rubik">
            Junte-se a +1.200 famílias que já alfabetizaram seus filhos com sucesso e transformaram a aprendizagem em um momento de alegria.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 lg:grid-cols-3 gap-8 pt-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
              <CardHeader className="p-6">
                <div className="flex items-center gap-4">
                  <Image
                    alt={testimonial.name}
                    className="rounded-full"
                    height="64"
                    width="64"
                    src={testimonial.image}
                    data-ai-hint={testimonial.dataAiHint}
                    style={{
                      aspectRatio: '64/64',
                      objectFit: 'cover',
                    }}
                  />
                  <div className="text-left">
                    <p className="font-bold font-headline text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6 pt-0 text-left space-y-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="fill-yellow-400 text-yellow-400 h-5 w-5" />
                  ))}
                </div>
                <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
