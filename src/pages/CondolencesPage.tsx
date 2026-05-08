import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import DecorativeDivider from "@/components/DecorativeDivider";
import CondolenceCard from "@/components/CondolenceCard";
import { useNotices } from "@/hooks/useNotices";

export default function CondolencesPage() {
  const { notices } = useNotices();
  const sorted = [...notices].sort((a, b) => new Date(b.deathDate).getTime() - new Date(a.deathDate).getTime());

  return (
    <>
      <Helmet>
        <title>Tous les avis de deces | Pompes Funebres Lumen</title>
      </Helmet>
      <div className="min-h-screen" style={{ backgroundColor: "var(--bg-primary)" }}>
        <Header />
        <main className="pt-20">
          <section className="py-16 md:py-20" style={{ backgroundColor: "var(--bg-secondary)" }}>
            <div className="container-main">
              <div className="text-center">
                <ScrollReveal>
                  <p className="font-script text-[28px] md:text-[32px]" style={{ color: "var(--accent-light)" }}>Nos pensees</p>
                </ScrollReveal>
                <ScrollReveal delay={0.15}>
                  <h1 className="font-display text-[30px] md:text-[42px] font-normal mt-1" style={{ color: "var(--text-primary)" }}>
                    Tous les avis de deces
                  </h1>
                </ScrollReveal>
                <ScrollReveal delay={0.3}><DecorativeDivider /></ScrollReveal>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                {sorted.map((n, i) => (
                  <ScrollReveal key={n.id} delay={0.12 * i}>
                    <CondolenceCard {...n} />
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
