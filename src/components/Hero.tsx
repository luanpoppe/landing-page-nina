import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa6";

export function Hero() {
  return (
    <section className="flex-col justify-center items-center md:flex-row flex gap-5">
      <div className="w-2/3">
        <h1>Nancy Almeida</h1>
        <p className="mb-10">Gestora de tráfego</p>

        <h2 className="mb-6">
          Cansado de gastar dinheiro em anúncios sem resultados?{" "}
          <span className="text-purple-500">
            Transforme seu investimento em clientes reais!
          </span>
        </h2>

        <p className="text-slate-400">
          Não arrisque seu faturamento com tentativas e erros. Contrate um
          gestor de tráfego e comece a ver o crescimento ainda neste mês. Nossa
          estratégia já entregou resultados comprovados para negócios como o
          seu.
        </p>

        <Button className="bg-purple-500 hover:bg-purple-700 text-white rounded-lg mt-5 w-full md:w-3/4 transition-all duration-300 hover:scale-105 text-wrap py-7 md:py-2">
          Quero Aumentar Minhas Vendas Agora!
          <FaWhatsapp />
        </Button>
      </div>

      <div className="w-1/3">
        <Image
          objectFit="contain"
          alt="Foto de perfil"
          src={"/foto-nina.jpg"}
          width="800"
          height="800"
        />
      </div>
    </section>
  );
}
