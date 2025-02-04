import image from "../../../public/images/buildings.png";
import team1 from "@/assets/geile.jpg";
import team2 from "@/assets/adriana.png";

export default function Team() {
  return (
    <>
      <div className="bg-gradient-to-r from-midnight-green to-gray-700 pb-20">
        <div className="container mx-auto">
          <h2 className="bg-white p-5 rounded-b-xl text-xl inline-block text-midnight-green font-semibold mb-5">
            Valores das Sócias Fundadoras
          </h2>
        </div>
        <div className="container mx-auto  grid grid-cols-1 md:grid-cols-2 mt-10 ">
          <div className="bg-midnight-green px-12 py-12 xl:px-48 xl:py-24">
            <p>
              Praticidade – Acreditamos que o Direito deve ser um meio e não um
              obstáculo. Nosso compromisso é oferecer soluções jurídicas
              aplicáveis à realidade do mercado, sem burocracia ou formalismos
              desnecessários.
            </p>
            <br />
            <p>
              Agilidade – O tempo é um ativo valioso e, no mundo empresarial,
              decisões precisam ser rápidas e precisas. Trabalhamos para
              oferecer respostas eficientes, reduzindo riscos e evitando
              problemas antes que se tornem entraves.
            </p>
            <br />
            <p>
              Segurança – Sabemos que o empresário precisa tomar decisões bem
              fundamentadas. Por isso, garantimos segurança jurídica, oferecendo
              assessoria confiável e estratégias que protejam seus interesses.
            </p>
            <br />
            <p>
              Parceria – Não somos apenas advogados, somos aliados estratégicos.
              Atuamos lado a lado com nossos clientes, entendendo suas
              necessidades e construindo soluções que realmente fazem sentido
              para o seu negócio.
            </p>
            <br />
            <p>
              Compromisso com resultados – O sucesso do nosso cliente é o nosso
              sucesso. Trabalhamos para garantir que cada ação jurídica
              contribua para o crescimento sustentável e seguro da sua empresa.
            </p>
          </div>
          <div
            className="bg-steel-blue flex flex-col items-center justify-center gap-8 py-5
           "
          >
            <div className=" flex flex-col items-center justify-center">
              <img src={team1.src} className="rounded-full max-w-64" alt="" />
              <p className="font-bold pt-3 text-xl">Geile Aline Lüttjohann</p>
              <p className="text-xl ">OAB/RS 102.625</p>
            </div>
            <div className=" flex flex-col items-center justify-center">
              <img src={team2.src} className="rounded-full max-w-64" alt="" />
              <p className="font-bold pt-3 text-xl">
                Adriana Soares Schaumloeffel
              </p>
              <p className="text-xl">OAB/RS 136.447</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
