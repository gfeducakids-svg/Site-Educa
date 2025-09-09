import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck, Mail, Clock, Wallet, Check, BrainCircuit, Users, Laptop } from "lucide-react";

const faqs = [
  {
    icon: Clock,
    question: "NÃO TENHO TEMPO",
    answer: "Apenas 15 minutos por dia. Menos tempo que você gasta vendo TV ou no celular. E os resultados aparecem em 30 dias."
  },
  {
    icon: Wallet,
    question: "MUITO CARO",
    answer: "R$ 37,90 é menos que uma pizza. Uma aula particular custa R$ 50/hora. Você economiza centenas e ainda tem garantia total."
  },
  {
    icon: Users,
    question: "NÃO FUNCIONA PARA MIM",
    answer: "Já funcionou com +1.200 famílias de diferentes perfis. Crianças de 4 a 8 anos, com e sem dificuldades. Garantia de 7 dias para testar."
  },
  {
    icon: Check,
    question: "JÁ TENTEI OUTRAS COISAS",
    answer: "O Método Chinês é diferente: usa associação visual, não decoreba. É por isso que funciona onde outros falharam. Teste sem risco."
  },
  {
    icon: BrainCircuit,
    question: "MEU FILHO É MUITO NOVO/VELHO",
    answer: "O método funciona de 4 a 8 anos. Adapta-se ao ritmo de cada criança. Sem pressão, sem comparações."
  },
  {
    icon: Laptop,
    question: "NÃO SOU BOM COM TECNOLOGIA",
    answer: "Material simples de leitura. Não precisa de apps complicados ou programas especiais. Se sabe usar WhatsApp, consegue usar o método."
  },
];

export function GuaranteeAndFaq() {
  return (
    <section className="w-full py-8 md:py-12 lg:py-16 bg-white">
      <div className="container px-4 md:px-6 grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-8">
            <Card className="bg-background border-primary border-2 shadow-lg">
                <CardHeader className="text-center">
                    <ShieldCheck className="h-12 w-12 mx-auto text-primary" />
                    <CardTitle className="font-headline text-2xl text-primary">GARANTIA INCONDICIONAL DE 7 DIAS</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                    <p className="text-muted-foreground md:text-lg">
                        Teste o Método Chinês por 7 dias completos. Se por qualquer motivo você não ficar satisfeito, devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia. O risco é todo nosso.
                    </p>
                </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
                <CardHeader className="text-center">
                    <Mail className="h-12 w-12 mx-auto text-primary" />
                    <CardTitle className="font-headline text-2xl text-foreground">Canais de Atendimento</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                    <p className="text-muted-foreground md:text-lg">
                        <strong>Email:</strong> gf.educakids@gmail.com
                        <br />
                        <strong>Área de Membros:</strong> Suporte Imediato
                    </p>
                </CardContent>
            </Card>
        </div>

        <div className="space-y-4">
            <h3 className="text-2xl font-bold font-headline text-foreground">Suas objeções respondidas!</h3>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white px-4 rounded-lg shadow mb-2">
                  <AccordionTrigger className="font-headline text-left">
                    <div className="flex items-center gap-3">
                        <faq.icon className="h-6 w-6 text-primary" />
                        {faq.question}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
        </div>
      </div>
    </section>
  );
}
