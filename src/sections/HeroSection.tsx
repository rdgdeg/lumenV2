import ImageCarousel from "@/components/ImageCarousel";
import ScrollReveal from "@/components/ScrollReveal";
import DecorativeDivider from "@/components/DecorativeDivider";
import PrimaryButton from "@/components/PrimaryButton";
import ContactInfoBlock from "@/components/ContactInfoBlock";

const heroImages = [
  { src: "/hero-corbillard.jpg", alt: "Corbillard Pompes Funebres Lumen" },
  { src: "/hero-funerarium.jpg", alt: "Funerarium Lumen" },
  { src: "/hero-salle.jpg", alt: "Salle de ceremonie Lumen" },
];

const iconStyle = { stroke: "var(--text-muted)", fill: "none", strokeWidth: 1.5 };

export default function HeroSection() {
  return (
    <section id="accueil" className="relative" style={{ backgroundColor: "var(--bg-primary)" }}>
      <ImageCarousel images={heroImages} />
      <div className="container-main pt-16 pb-20 relative z-10">
        <div className="max-w-[700px] mx-auto text-center">
          <ScrollReveal>
            <p className="font-script text-[28px] md:text-[32px]" style={{ color: "var(--accent-light)" }}>Bienvenue chez</p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <h1 className="font-display text-[32px] md:text-[48px] font-light italic tracking-tight leading-tight mt-1" style={{ color: "var(--text-primary)" }}>
              Pompes Funebres Lumen
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.3}><DecorativeDivider /></ScrollReveal>
          <ScrollReveal delay={0.45}>
            <p className="font-body text-base md:text-lg font-normal leading-[1.8] mt-2" style={{ color: "var(--text-secondary)" }}>
              Parce que dans les moments douloureux, il est difficile de penser a tout, les Pompes Funebres LUMEN vous proposent un service funeraire complet avec la garantie d&apos;une qualite de services et de respect.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.6}>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-10 mt-10">
              <ContactInfoBlock
                icon={<svg width="28" height="28" viewBox="0 0 24 24" style={iconStyle}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>}
                label="Adresse" values={["Chaussee de Mons, 473", "7810 Maffle"]}
              />
              <ContactInfoBlock
                icon={<svg width="28" height="28" viewBox="0 0 24 24" style={iconStyle}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>}
                label="Telephone" values={["068/28.72.51"]}
              />
              <ContactInfoBlock
                icon={<svg width="28" height="28" viewBox="0 0 24 24" style={iconStyle}><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>}
                label="Disponibilite" values={["7j/7 - 24h/24"]}
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.75} className="mt-10">
            <PrimaryButton href="#presentation">En savoir plus</PrimaryButton>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
