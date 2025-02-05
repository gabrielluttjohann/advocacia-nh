"use client";
import bridgeImage from "@/assets/bridge.jpg";
import { useState } from "react";
import AnimatedSection from "../animations/AnimatedSection";

const faqData = [
  {
    question: "O escritório atende apenas empresas e empresários?",
    answer:
      "Além de atender empresas, também prestamos serviços jurídicos para profissionais liberais, autônomos e empreendedores e investidores, garantindo suporte jurídico adequado para suas atividades.",
  },
  {
    question:
      "O escritório conta com advogados especializados em diferentes áreas do direito?",
    answer:
      "Sim! O Luttjohann & Soares Advocacia possui uma equipe multidisciplinar, com advogados especializados em diversas áreas do direito. Isso nos permite oferecer um atendimento completo e estratégico para nossos clientes, garantindo soluções eficazes para cada necessidade jurídica.",
  },
  {
    question:
      "O escritório atende tanto demandas preventivas quanto contenciosas?",
    answer:
      "Sim! Atendemos tanto demandas preventivas – ajudando empresas e profissionais a evitarem riscos jurídicos com planejamento e assessoria contínua – quanto demandas contenciosas, representando nossos clientes em processos administrativos e judiciais. Nosso objetivo é sempre buscar a melhor estratégia para minimizar riscos e maximizar resultados.",
  },
  {
    question: "O escritório trabalha com honorários fixos ou sob êxito?",
    answer:
      "Depende do caso. Trabalhamos com honorários fixos para consultorias e acompanhamento jurídico, mas, em algumas situações, como recuperação de crédito, podemos atuar sob êxito (cobramos apenas quando há sucesso na recuperação).",
  },
  {
    question: "O atendimento é presencial, online ou por visitas?",
    answer:
      "Oferecemos atendimento presencial, online e por visitas, conforme a necessidade do cliente. Possuímos estrutura para reuniões virtuais, encontros presenciais em nosso escritório e deslocamento até empresas ou profissionais que necessitem de atendimento in loco.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="relative py-24 bg-cover bg-no-repeat lg:bg-fixed"
      style={{ backgroundImage: `url(${bridgeImage.src})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-midnight-green bg-opacity-75 z-10" />

      <div className="relative z-20 mx-auto container px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-x-16 gap-y-5 xl:gap-28 lg:flex-row lg:justify-between max-lg:max-w-2xl mx-auto max-w-full">
          <AnimatedSection>
            <div className="w-full ">
              <div className="lg:max-w-5xl">
                <div className="mb-6 lg:mb-16">
                  <h2 className="text-4xl  font-bold text-white leading-[3.25rem] mb-5 lg:text-left">
                    Perguntas Frequentes
                  </h2>
                </div>
                <div className="accordion-group">
                  {faqData.map((faq, index) => (
                    <div key={index} className="border-b border-gray-200 py-8 ">
                      <button
                        className="flex text-left justify-between w-full text-xl text-white font-semibold "
                        onClick={() => toggleFAQ(index)}
                      >
                        {faq.question}
                        <svg
                          className={`w-5 h-5 transition-transform ${
                            openIndex === index ? "rotate-180" : ""
                          }`}
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                      {openIndex === index && (
                        <p className="mt-2 text-white text-base">
                          {faq.answer}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
