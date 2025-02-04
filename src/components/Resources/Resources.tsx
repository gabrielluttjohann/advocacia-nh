import logo from "@/assets/logo.png";

export default function Resources() {
  const cardData = [
    {
      title: "Atualização Jurídica",
      content:
        "Atualizamos você sobre questões jurídicas críticas que impactam sua empresa.",
    },
    {
      title: "Identificação de Riscos e Oportunidades",
      content:
        "Identificamos riscos e oportunidades para garantir o melhor direcionamento para o seu negócio.",
    },
    {
      title: "Apoio à Tomada de Decisões",
      content:
        "Auxiliamos na tomada de decisões estratégicas, garantindo segurança e previsibilidade para o futuro.",
    },
    {
      title: "Esclarecimento de Dúvidas",
      content:
        "Esclarecemos todas as suas dúvidas, garantindo que você tenha total clareza sobre os próximos passos.",
    },
  ];

  return (
    <div className="w-full bg-gradient-to-r from-midnight-green to-gray-700 pb-36">
      <div className="container mx-auto px-4 sm:px-8 relative z-20">
        <div className="flex items-center justify-center md:justify-start">
          <h2 className="inline-block text-center md:text-left bg-white text-midnight-green font-bold p-5 rounded-b-lg text-lg sm:text-xl">
            Consultoria Jurídica Estratégica{" "}
          </h2>
        </div>

        {/* Cards de informações */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {cardData.map((card, index) => (
            <div key={index} className=" p-6 rounded-lg  flex flex-col ">
              <div className="text-blue-whit mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-12"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-300">
                {card.title}
              </h3>
              <p className="mt-4 text-gray-300 text-lg">{card.content}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center pt-24">
          <img src={logo.src} alt="" className="w-64 " />
        </div>
      </div>
    </div>
  );
}
