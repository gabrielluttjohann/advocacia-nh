import Link from "next/link";
import office from "../../../public/images/office.jpg";
import { WHATSAPP_LINK } from "@/data/links";
import AnimatedSection from "../animations/AnimatedSection";

const solutionsData = [
  {
    title: "Empresas de Pequeno, Médio e Grande Porte",
    description:
      "Prestamos assessoria jurídica completa para empresas de todos os tamanhos, auxiliando na elaboração de contratos, recuperação de crédito, gestão de riscos, contencioso cível e trabalhista, além de outras demandas jurídicas essenciais para o crescimento seguro do seu negócio.",
    bgColor: "bg-midnight-green",
  },
  {
    title: "Profissionais Liberais e Autônomos",
    description:
      "Oferecemos suporte jurídico para profissionais que atuam por conta própria, garantindo a formalização de contratos, orientação tributária e proteção contra possíveis litígios, permitindo que você trabalhe com mais segurança e tranquilidade.",
    bgColor: "bg-steel-blue",
  },
  {
    title: "Startups e Empreendedores",
    description:
      "Ajudamos startups e novos negócios a se estruturarem juridicamente, desde a constituição da empresa até a gestão de contratos, propriedade intelectual e proteção legal, prevenindo riscos que possam comprometer o futuro do seu empreendimento.",
    bgColor: "bg-midnight-green",
  },
  {
    title: "Empresários e Investidores",
    description:
      "Damos suporte a investidores, sócios e parceiros de negócios na formalização de acordos, estruturação societária, análise de riscos e governança corporativa, garantindo que todas as relações comerciais sejam seguras e estratégicas.",
    bgColor: "bg-steel-blue",
  },
];

export default function Solutions() {
  return (
    <div
      className="relative w-full overflow-hidden lg:bg-fixed bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${office.src})` }}
    >
      <div className="absolute inset-0 bg-midnight-green bg-opacity-75 z-10"></div>
      <div className="relative z-20">
        <AnimatedSection>
          <div className="container mx-auto px-4 sm:px-8 ">
            <div className="flex items-center justify-center md:justify-start">
              <h2 className="inline-block text-center md:text-left bg-white text-midnight-green font-bold p-5 rounded-b-lg text-lg sm:text-xl">
                Reunião Estratégica de Acompanhamento
              </h2>
            </div>
          </div>
          <div className="relative my-[100px] inset-0 z-20 flex items-center justify-center">
            <div className="container mx-auto px-4 sm:px-8 ">
              <p className="text-lg sm:text-2xl lg:text-2xl pb-4 text-gray-300 max-w-screen-sm">
                Mais do que um suporte jurídico, oferecemos um ponto de apoio
                estratégico para a tomada de decisões.
              </p>
              <p className="text-lg sm:text-2xl lg:text-2xl pb-4 text-gray-300 max-w-screen-sm">
                Por esse motivo, criamos a Reunião Estratégica de
                Acompanhamento, um encontro semanal ou quinzenal, conforme a
                necessidade da sua empresa, para manter você sempre à frente e
                garantir que nenhuma decisão seja tomada no escuro.
              </p>
              <Link
                href={WHATSAPP_LINK}
                className="inline-block mt-8 bg-steel-blue font-semibold text-white rounded-full py-3 px-5"
              >
                Fale Conosco
              </Link>
            </div>
          </div>
          <div className="relative z-20 container mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mb-48">
            {solutionsData.map((solution, index) => (
              <div key={index} className={`${solution.bgColor} text-white p-6`}>
                <div className="m-8">
                  <h2 className="font-semibold text-2xl mb-8">
                    {solution.title}
                  </h2>
                  <p>{solution.description}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
