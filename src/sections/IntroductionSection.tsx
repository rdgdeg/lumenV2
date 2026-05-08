import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import DecorativeDivider from "@/components/DecorativeDivider";

export default function IntroductionSection() {
  const [h1, setH1] = useState(false);
  const [h2, setH2] = useState(false);

  const cardStyle = (hovered: boolean) => ({
    backgroundColor: "var(--bg-card)",
    transform: hovered ? "translateY(-6px)" : "translateY(0)",
    boxShadow: hovered ? "0 12px 40px var(--shadow-card-hover)" : "0 2px 16px var(--shadow-card)",
  });

  return (
    <section id="presentation" className="py-20 md:py-24" style={{ backgroundColor: "var(--bg-secondary)" }}>
      <div className="container-main max-w-[900px]">
        <div className="text-center">
          <ScrollReveal>
            <p className="font-script text-[28px] md:text-[32px]" style={{ color: "var(--accent-light)" }}>Un accompagnement</p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <h2 className="font-display text-[28px] md:text-[40px] font-light italic mt-1" style={{ color: "var(--text-primary)" }}>
              a dimension humaine
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.3}><DecorativeDivider /></ScrollReveal>
          <ScrollReveal delay={0.45}>
            <p className="font-body text-base md:text-lg font-normal leading-[1.8] max-w-[700px] mx-auto" style={{ color: "var(--text-secondary)" }}>
              Depuis plus de 20 ans d&apos;experience, les Pompes Funebres Lumen vous epaulent, avec respect en vous offrant un service a dimension humaine. Le caractere familial de notre societe vous assure une proximite digne, discrete et attentionnee dans ces moments difficiles.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.6}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <div className="rounded-2xl p-8 transition-all duration-400 ease-out border" style={{ ...cardStyle(h1), borderColor: "var(--border-divider)" }} onMouseEnter={() => setH1(true)} onMouseLeave={() => setH1(false)}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: "var(--bg-primary)" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ color: "var(--accent-light)" }} stroke="currentColor" strokeWidth="1.2">
                  <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-medium" style={{ color: "var(--text-primary)" }}>Nos prestations</h3>
              <p className="font-body text-base font-normal leading-relaxed mt-3" style={{ color: "var(--text-secondary)" }}>
                Funerarium - Transferts - Incineration - Inhumation - Redaction de necrologie & souvenirs - Articles funeraires - Fleurs artificielles et naturelles - Monuments & Caveaux
              </p>
              <a href="#prestations" className="inline-flex items-center gap-1 mt-4 font-display text-[17px] font-medium transition-colors" style={{ color: "var(--link)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--link-hover)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--link)"; }}>
                <span>Decouvrir nos prestations</span>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
            </div>

            <div className="rounded-2xl p-8 transition-all duration-400 ease-out border" style={{ ...cardStyle(h2), borderColor: "var(--border-divider)" }} onMouseEnter={() => setH2(true)} onMouseLeave={() => setH2(false)}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: "var(--bg-primary)" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ color: "var(--accent-light)" }} stroke="currentColor" strokeWidth="1.2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-medium" style={{ color: "var(--text-primary)" }}>Condoleances</h3>
              <p className="font-body text-base font-normal leading-relaxed mt-3" style={{ color: "var(--text-secondary)" }}>
                Vous souhaitez laisser un temoignage de sympathie a l&apos;egard des proches d&apos;un defunt ? Presentez vos condoleances en ligne.
              </p>
              <a href="#condoleances" className="inline-flex items-center gap-1 mt-4 font-display text-[17px] font-medium transition-colors" style={{ color: "var(--link)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--link-hover)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--link)"; }}>
                <span>Presenter ses condoleances</span>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
