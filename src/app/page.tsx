import { Certificates } from "@/components/Certificates";
import { Hero } from "@/components/Hero";
import { MiniCard } from "@/components/MiniCard";
import { FaBriefcase, FaChartLine, FaCheckCircle } from "react-icons/fa";
import { GoGoal } from "react-icons/go";
import { TbZoomMoney } from "react-icons/tb";

export default function Home() {
  return (
    <>
      <main className="container mx-auto px-16 flex flex-col items-center my-12 dark text-center">
        <Hero />

        <section className="mt-16 w-5/6 md:w-[90%]">
          <h2 className="mb-6">
            Como o tráfego pago pode ajudar no seu negócio:
          </h2>
          <div className="gap-6 grid grid-cols-2 md:grid-cols-4 justify-center">
            <MiniCard>
              <FaBriefcase size={32} /> Trazer leads qualificados
            </MiniCard>
            <MiniCard>
              <GoGoal size={32} /> Maior alcance do seu público
            </MiniCard>
            <MiniCard>
              <TbZoomMoney size={32} /> Reconhecimento da sua marca
            </MiniCard>
            <MiniCard>
              <FaChartLine size={32} /> Aumento das vendas
            </MiniCard>
          </div>
        </section>

        <ListaPublicoAlvo />

        <Certificates />
      </main>
    </>
  );
}

function ItemDaListaPublicoAlvo({ children }: React.PropsWithChildren) {
  return (
    <li className="text-xl flex gap-4">
      <div>
        <FaCheckCircle size={40} className="text-green-500 " />
      </div>
      <p className="inline">{children}</p>
    </li>
  );
}

const textosListaPublicoAlvo = [
  "Quer aumentar o movimento e faturamento no seu comércio local",
  "Está cansado de investir em marketing sem ver resultados reais",
  "Deseja gerar mais vendas e leads qualificados para sua empresa",
  "Quer se destacar da concorrência no seu comércio local/digital",
  "Busca uma estratégia de marketing digital que funcione",
  "Quer aumentar o faturamento de sua empresa de forma consistente",
  "Quer um especialista cuidando de cada detalhe para você.",
  "Quer uma abordagem estratégica e focada em resultados.",
];

function ListaPublicoAlvo() {
  return (
    <section className="mt-16">
      <h2 className="mb-8">Nossos serviços foram feitos para você que:</h2>
      <ul className="grid grid-cols-2 gap-y-8 gap-x-16 text-start">
        {textosListaPublicoAlvo.map((i) => (
          <ItemDaListaPublicoAlvo key={i}>{i}</ItemDaListaPublicoAlvo>
        ))}
      </ul>
    </section>
  );
}
