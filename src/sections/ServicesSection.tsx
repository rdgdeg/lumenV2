import ScrollReveal from "@/components/ScrollReveal";
import DecorativeDivider from "@/components/DecorativeDivider";
import ServiceCard from "@/components/ServiceCard";

const data = [
  { key: "funerarium", image: "/service-funerarium.jpg", title: "Funerarium", description: "Notre funerarium, d'acces facile, permet d'accueillir le defunt ainsi que ses proches dans les meilleures conditions. Un vaste parking est a votre disposition." },
  { key: "transferts", image: "/service-transferts.jpg", title: "Transferts et formalites", description: "Nous nous chargeons des formalites de transfert et du transport du defunt de l'etranger vers la Belgique, du domicile ou du funerarium au site choisi." },
  { key: "incineration", image: "/service-incineration.jpg", title: "Incineration", description: "Nous vous accompagnons dans toutes les demarches liees a l'incineration et vous proposons differentes options pour la dispersion ou la conservation des cendres." },
  { key: "inhumation", image: "/service-inhumation.jpg", title: "Inhumation", description: "Nous vous guidons dans le choix du caveau, du monument ou de la simple fosse, ainsi que dans toutes les demarches administratives liees a l'inhumation." },
];

export default function ServicesSection() {
  return (
    <section id="prestations" className="py-20 md:py-24" style={{ backgroundColor: "var(--bg-primary)" }}>
      <div className="container-main">
        <div className="text-center">
          <ScrollReveal>
            <p className="font-script text-[28px] md:text-[32px]" style={{ color: "var(--text-muted)" }}>Nos services</p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <h2 className="font-display text-[28px] md:text-[36px] font-normal mt-1" style={{ color: "var(--text-primary)" }}>Prestations funeraires</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.3}><DecorativeDivider /></ScrollReveal>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {data.map((s, i) => (
            <ScrollReveal key={s.key} delay={0.15 * i}>
              <ServiceCard {...s} serviceKey={s.key} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
