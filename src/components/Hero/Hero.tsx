import { WHATSAPP_LINK } from "@/data/links";
import buildings from "../../../public/images/buildings.png";
import Link from "next/link";
import Overlay from "../common/Overlay";
import AnimatedSection from "../animations/AnimatedSection";

export default function Hero() {
  const services = [
    "Recuperação de Empresas",
    "Direito Empresarial e Contratos ",
    "Defesa Trabalhista Empresarial ",
    "Direito Tributário e Defesa em Execuções Fiscais ",
    "Direito do Consumidor e Proteção de Dados (LGPD) ",
    "Direito Imobiliário e Patrimonial ",
    "Direito Bancário",
    "Direito Autoral e Registro de Marcas",
  ];

  return (
    <div
      style={{ backgroundImage: `url(${buildings.src})` }}
      className="w-full min-h-screen bg-cover bg-no-repeat relative lg:bg-fixed"
    >
      {/* Overlay */}
      <Overlay />

      {/* Content */}
      <div className="relative z-20 ">
        <AnimatedSection>
          <div className="py-10 md:py-0 max-w-screen-xl mx-auto flex flex-col h-full  px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl md:my-48">
              <h1 className="text-4xl  mb-4 text-white ">
                Suporte Jurídico Estratégico para Decisões Inteligentes
              </h1>
              <p className="text-md text-white pb-8">
                Tomar decisões sem segurança jurídica pode custar caro. Nosso
                papel é ser o seu apoio estratégico, garantindo que cada escolha
                na sua empresa seja feita com clareza, previsibilidade e
                proteção.
              </p>
              <Link
                href={WHATSAPP_LINK}
                className="inline-block mb-8 bg-steel-blue text-white rounded-lg py-3 px-5 font-bold"
              >
                Fale Conosco
              </Link>
            </div>
          </div>

          {/* Grid Cards */}
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full  md:gap-y-12 relative z-20 px-4 sm:px-6 lg:px-8 pb-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-midnight-green  text-white  p-8 flex items-center "
              >
                <div className="flex items-center">
                  <span className="border-4 border-steel-blue py-8 h-full " />
                  <span className="pl-3 text-lg">{service}</span>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
