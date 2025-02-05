"use client";
import { useEffect, useState, ReactNode, useRef } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
}

const AnimatedSection = ({ children }: AnimatedSectionProps) => {
  const [inView, setInView] = useState<boolean>(false);
  const sectionRef = useRef<HTMLDivElement | null>(null); // Usando ref para o elemento da seção

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setInView(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Verifica se o componente está visível desde o início

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`transform transition-all duration-1000 ease-out ${
        inView ? "translate-x-0 opacity-100" : "translate-x-[-100%] opacity-0"
      }`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
