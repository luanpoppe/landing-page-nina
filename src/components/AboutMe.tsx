import Image from "next/image";
import { ButtonCustom } from "./ui/ButtonCustom";
import { FaWhatsapp } from "react-icons/fa6";

export function AboutMe() {
  return (
    <section className="mt-16 mb-8">
      <div className="flex gap-8 flex-col md:flex-row items-center justify-center">
        <div className="w-2/3">
          <h1 className="mb-4">Quem está por trás desta estratégia?</h1>
          <h3 className="mb-8">
            Nancy Almeida é referência em estratégias de tráfego pago que não só
            trazem clientes, mas multiplicam seu faturamento.
          </h3>
          <h3 className="mb-8">
            Com um histórico de campanhas que elevam negócios locais a
            resultados mensais de 5 dígitos, ele traz todo o know-how da
            Escala10K para a sua empresa.
          </h3>
        </div>

        <div className="w-1/3">
          <Image
            alt="Segunda imagem de perfil"
            src="/foto-nina.jpg"
            width="400"
            height="400"
          />
        </div>
      </div>

      <p className="mt-8 mb-4 text-xl">
        Em vez de experimentar campanhas que podem ou não funcionar, tenha ao
        seu lado um especialista comprometido com uma coisa:{" "}
        <span className="text-purple-400">o sucessoda sua empresa.</span>
      </p>

      <ButtonCustom className="text-lg md:text-xl py-10 md:py-8">
        <p>Quero ter um especialista para minha empresa</p>
        <FaWhatsapp style={{ height: "28px", width: "28px" }} />
      </ButtonCustom>
    </section>
  );
}
