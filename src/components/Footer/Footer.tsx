import logo from "@/assets/logo.png";
import Link from "next/link";

// components/Footer.js
const Footer = () => {
  const footerLinks = [
    { name: "Política de Privacidade", url: "#" },
    { name: "Termos de Serviço", url: "#" },
    { name: "Contato", url: "#" },
  ];

  return (
    <footer className="bg-midnight-green  text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Logo da empresa */}
        <div className="flex justify-center md:justify-start">
          <img src={logo.src} alt="Logo da Empresa" className="h-12" />
        </div>

        {/* Links */}
        <div className="">
          {footerLinks.map((link) => (
            <Link
              key={link.name}
              href={link.url}
              className="px-3 text-white hover:text-gray-400"
            >
              {link.name}
            </Link>
          ))}
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
