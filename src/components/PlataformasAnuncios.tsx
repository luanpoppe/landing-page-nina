import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa6";

export function PlataformasAnuncios() {
  const listaPlataformas = [
    FaFacebook,
    FaInstagram,
    FaGoogle,
    FaYoutube,
    FaTiktok,
  ];
  return (
    <section className="mt-32 mb-12">
      <h2 className="mb-6">Plataformas que seus anúncios podem aparecer:</h2>
      <div className="flex gap-4 md:gap-8 justify-center">
        {listaPlataformas.map((p, i) => (
          <Plataforma key={i}>
            {p({
              className: "text-black w-[32px] h-[32px] md:w-[48px] md:h-[48px]",
            })}
          </Plataforma>
        ))}
      </div>
    </section>
  );
}

function Plataforma({ children }: React.PropsWithChildren) {
  return (
    <div className="size-12 md:size-20 bg-white rounded-xl flex items-center justify-center">
      {children}
    </div>
  );
}
