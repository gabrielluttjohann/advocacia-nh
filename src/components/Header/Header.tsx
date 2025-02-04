import React from "react";
import logo from "@/assets/logo.png";
import Link from "next/link";

export default function Header() {
  const navItems = [
    {
      name: "Home",
      href: "#",
    },
    {
      name: "Quem Somos",
      href: "#",
    },
    {
      name: "Soluções Jurídicas",
      href: "#",
    },
    {
      name: "Contato",
      href: "#",
    },
  ];
  return (
    <nav className="bg-midnight-green sticky top-0 left-0 w-full z-50  ">
      <div className="bg-midnight-green py-4   mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="text-white text-xl font-bold">
              <img src={logo.src} alt="" className="max-w-32" />
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-4 ">
            <div className=" p-3 rounded-full">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div>
              <Link href={"#"} className="bg-green-500 p-4 rounded-full">
                Fale Conosco
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
