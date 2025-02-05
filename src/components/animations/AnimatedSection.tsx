"use client";
import { useEffect, useState, ReactNode, useRef } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
}

const AnimatedSection = ({ children }: AnimatedSectionProps) => {
  const [inView, setInView] = useState<boolean>(false);
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false);
  const sectionRef = useRef<HTMLDivElement | null>(null); // Usando ref para o elemento da seção

  useEffect(() => {
    // Verifica se a largura da tela é maior ou igual a 1024px (lg)
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    const handleMediaQueryChange = (e: MediaQueryListEvent) => {
      setIsLargeScreen(e.matches);
    };

    // Inicializa o estado com o valor atual
    setIsLargeScreen(mediaQuery.matches);

    // Adiciona um ouvinte para mudanças na largura da tela
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  useEffect(() => {
    if (!isLargeScreen) return; // Não aplica a animação em telas pequenas

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
  }, [isLargeScreen]);

  return (
    <div
      ref={sectionRef}
      className={ isLargeScreen ? ` transform transition-all duration-1000 ease-out ${
        inView  ? "translate-x-0 opacity-100" : "translate-x-[-100%] opacity-0"
      }` : ""}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
