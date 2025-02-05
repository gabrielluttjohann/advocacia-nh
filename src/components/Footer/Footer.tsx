import logo from "@/assets/logo.png";
import Link from "next/link";

// components/Footer.js
const Footer = () => {
  return (
    <footer className="bg-midnight-green  text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex justify-center md:justify-start ">
          <Link href="/">
            <img
              src={logo.src}
              alt="Logo da Empresa"
              className="h-12 transform transition duration-300 ease-in-out hover:scale-110"
            />
          </Link>
        </div>

        {/* Direitos autorais */}
        <div className="text-sm mt-4 md:mt-0">
          <p>&copy; 2025 Lüttjohann & Soares. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
