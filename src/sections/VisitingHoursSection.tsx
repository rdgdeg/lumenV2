import ScrollReveal from "@/components/ScrollReveal";
import DecorativeDivider from "@/components/DecorativeDivider";

export default function VisitingHoursSection() {
  return (
    <section id="nouveautes" className="py-16 md:py-20" style={{ backgroundColor: "var(--bg-primary)" }}>
      <div className="container-main max-w-[800px] text-center">
        <ScrollReveal>
          <p className="font-script text-[28px] md:text-[32px]" style={{ color: "var(--text-muted)" }}>Votre ecoute</p>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <h2 className="font-display text-[28px] md:text-[36px] font-normal mt-1" style={{ color: "var(--text-primary)" }}>
            Heures de visite du funerarium
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.3}><DecorativeDivider /></ScrollReveal>

        <ScrollReveal delay={0.45}>
          <div className="max-w-[600px] mx-auto p-8 md:p-10 mt-8 rounded-2xl" style={{ backgroundColor: "var(--bg-card)", boxShadow: "0 4px 30px var(--shadow-card)" }}>
            <div className="flex justify-center mb-6">
              <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: "var(--bg-primary)" }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent-medium)" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
            </div>

            <div>
              <h3 className="font-display text-xl font-medium" style={{ color: "var(--text-primary)" }}>Du lundi au samedi</h3>
              <p className="font-body text-base font-normal mt-2" style={{ color: "var(--text-secondary)" }}>
                de 9h00 a 12h00, de 13h00 a 18h30
              </p>
            </div>

            <div className="w-[160px] h-px mx-auto my-5" style={{ backgroundColor: "var(--border-divider)" }} />

            <div>
              <h3 className="font-display text-xl font-medium" style={{ color: "var(--text-primary)" }}>Les dimanches et jours feries</h3>
              <p className="font-body text-base font-normal mt-2" style={{ color: "var(--text-secondary)" }}>
                de 9h00 a 12h30
              </p>
            </div>

            <p className="font-body text-xs font-normal italic mt-6" style={{ color: "var(--text-muted)" }}>
              * Les horaires sont susceptibles d&apos;etre adaptes en fonction des mesures sanitaires.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
