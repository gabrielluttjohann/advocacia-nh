import FAQ from "@/components/FAQ/FAQ";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Resources from "@/components/Resources/Resources";
import Solutions from "@/components/Solutions/Solutions";
import Team from "@/components/Team/Team";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Resources />
      <Solutions />
      <Team />
      <FAQ />
      <Footer />
    </div>
  );
}
