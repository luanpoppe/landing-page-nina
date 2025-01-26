import Image from "next/image";

export function Certificates() {
  return (
    <section className="mt-16 flex flex-col items-center">
      <h2 className="mb-8">
        <span className="text-purple-500">Certificado</span> pela maior
        Comunidade de Tráfego Pago do Brasil
      </h2>

      <p className="mb-4">
        Meu principal objetivo é garantir que sua empresa alcance os melhores
        resultados. Para isso, faço parte do seleto grupo de 2% dos
        profissionais que foram certificados e aprovados pela própria
        Descomplicando Ads em Google Ads e Facebook Ads.
      </p>

      <div className="flex gap-4 mb-8 mt-8 justify-center">
        <Image
          src="https://adncurso.com/gestor/wp-content/uploads/2024/10/Design-sem-nome-2024-10-19T120053.356.png"
          alt="Google Partner Certificate"
          loading="lazy"
          width="200"
          height="120"
        />
        <Image
          src="https://adncurso.com/gestor/wp-content/uploads/2024/10/Design-sem-nome-2024-10-19T120130.716.png"
          alt="Meta Partner Certificate"
          loading="lazy"
          width="200"
          height="120"
        />
        <Image
          src="https://adncurso.com/gestor/wp-content/uploads/2024/10/Design-sem-nome-2024-10-19T120231.975.png"
          alt="TikTok Partner Certificate"
          loading="lazy"
          width="200"
          height="120"
        />
      </div>

      <Image
        loading="lazy"
        alt="Imagem de certificado"
        src="https://adncurso.com/gestor/wp-content/uploads/2024/10/Certificao-de-Trafego-Pago-Facebook-ADS.png"
        width="1100"
        height="780"
      />
    </section>
  );
}
