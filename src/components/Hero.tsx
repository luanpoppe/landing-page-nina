import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa6";
import { ButtonCustom } from "./ui/ButtonCustom";

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

        <ButtonCustom>
          Quero Aumentar Minhas Vendas Agora!
          <FaWhatsapp />
        </ButtonCustom>
      </div>

      <div className="w-1/3 rounded-lg shadow-md shadow-purple-900">
        <Image
          className="rounded-lg"
          alt="Foto de perfil"
          src={"/foto-nina.jpg"}
          width="800"
          height="800"
        />
      </div>
    </section>
  );
}
