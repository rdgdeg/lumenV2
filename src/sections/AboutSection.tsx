import ScrollReveal from "@/components/ScrollReveal";
import DecorativeDivider from "@/components/DecorativeDivider";
import PrimaryButton from "@/components/PrimaryButton";

export default function AboutSection() {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: "var(--bg-secondary)" }}>
      <div className="container-main">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <ScrollReveal direction="left" duration={1.0}>
            <div className="h-[300px] md:h-[500px] overflow-hidden rounded-2xl shadow-lg">
              <img src="/about-funerarium.jpg" alt="Interieur du funerarium Lumen" className="w-full h-full object-cover" />
            </div>
          </ScrollReveal>

          <div>
            <ScrollReveal direction="right" delay={0.15}>
              <p className="font-script text-[28px] md:text-[32px]" style={{ color: "var(--accent-light)" }}>Notre mission</p>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.3}>
              <h2 className="font-display text-[28px] md:text-[36px] font-light italic mt-1 leading-tight" style={{ color: "var(--text-primary)" }}>
                Plus de 20 ans d&apos;experience a votre service
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.45}>
              <div className="flex justify-start"><DecorativeDivider className="my-4" /></div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.6}>
              <p className="font-body text-base font-normal leading-[1.8] mt-2" style={{ color: "var(--text-secondary)" }}>
                La perte d&apos;un etre proche est toujours douloureuse. Le chemin du deuil passe par plusieurs etapes normales et necessaires, ou differents sentiments risquent de vous envahir. Un accompagnement professionnel par des personnes competentes peut vous aider dans ce processus.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.75}>
              <p className="font-body text-base font-normal leading-[1.8] mt-4" style={{ color: "var(--text-secondary)" }}>
                Le caractere familial de notre societe vous assure une proximite digne, discrete et attentionnee dans ces moments difficiles. A votre ecoute pour tout conseil, AVANT, PENDANT ou APRES les funerailles.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.9} className="mt-8">
              <PrimaryButton href="#presentation">Notre presentation</PrimaryButton>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
