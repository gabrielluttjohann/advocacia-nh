import React from "react";
import logo from "@/assets/logo.png";
import Link from "next/link";
import { WHATSAPP_LINK } from "@/data/links";

export default function Header() {
  return (
    <nav className="bg-midnight-green sticky top-0 left-0 w-full z-50  ">
      <div className="bg-midnight-green py-4   mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-white text-xl font-bold transform transition duration-300 ease-in-out hover:scale-110"
            >
              <img
                src={logo.src}
                alt="Logo da Advocacia Lüttjohann & Soares "
                className="max-w-32"
              />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4 ">
            <div>
              <Link
                href={WHATSAPP_LINK}
                className="bg-green-500 font-semibold text-white hover:bg-green-400 transform transition duration-300 ease-in-out  p-4 rounded-full"
              >
                Fale Conosco
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
