"use client";
import { useState } from "react";

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
    <section className="bg-gradient-to-r from-steel-blue to-gray-700 pb-20">
      <div className="mx-auto container px-4 lg:px-8 rounded-xl">
        <div>
          <h2 className="text-xl bg-white text-midnight-green inline-block  p-5 rounded-b-xl font-semibold mb-10">
            Perguntas Frequentes
          </h2>
        </div>
        <div className="flex flex-col    max-lg:max-w-2xl mx-auto max-w-full">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-xl">
              <div className="accordion-group">
                {faqData.map((faq, index) => (
                  <div
                    key={index}
                    className="accordion py-8 border-b border-solid border-gray-200"
                  >
                    <button
                      className=" text-left accordion-toggle group inline-flex items-center justify-between text-xl font-normal leading-8 text-gray-white w-full  hover:text-white"
                      aria-controls={`basic-collapse-${index}`}
                      onClick={() => toggleFAQ(index)}
                    >
                      <h5 className="text0white">{faq.question}</h5>
                      <svg
                        className="text-white  group-hover:text-steel-blue"
                        width={22}
                        height={22}
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
                    <div
                      id={`basic-collapse-${index}`}
                      className={`accordion-content w-full px-0 overflow-hidden  ${
                        openIndex === index
                          ? "max-h-screen py-4"
                          : "max-h-0 py-0"
                      }`}
                    >
                      <p className="text-base text-gray-300 font-normal">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
