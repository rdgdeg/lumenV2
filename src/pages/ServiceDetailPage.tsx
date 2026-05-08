import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import DecorativeDivider from "@/components/DecorativeDivider";
import PrimaryButton from "@/components/PrimaryButton";

interface ServiceInfo {
  key: string;
  title: string;
  subtitle: string;
  image: string;
  description: string[];
  features: string[];
  ctaText: string;
  ctaHref: string;
}

const services: ServiceInfo[] = [
  {
    key: "funerarium",
    title: "Funerarium",
    subtitle: "Un lieu de recueillement paisible",
    image: "/service-funerarium.jpg",
    description: [
      "Notre funerarium, d'acces facile, permet d'accueillir le defunt ainsi que ses proches dans les meilleures conditions. Un vaste parking est a votre disposition.",
      "Les espaces sont concus pour offrir intimite et serenite aux familles dans ces moments difficiles. Le funerarium dispose de plusieurs salles de recueillement, chacune amenagee avec soin pour creer une atmosphere chaleureuse et apaisante.",
      "Nous mettons a votre disposition du materiel audiovisuel pour la diffusion de photos et de videos souvenirs. La musique d'ambiance peut egalement etre personnalisee selon vos souhaits."
    ],
    features: [
      "Salles de recueillement climatisees",
      "Parking prive de 50 places",
      "Accessibilite PMR",
      "Materiel audiovisuel",
      "Musique d'ambiance personnalisable",
      "Ouvert 7j/7"
    ],
    ctaText: "Nous contacter",
    ctaHref: "#contact",
  },
  {
    key: "transferts",
    title: "Transferts et formalites",
    subtitle: "Prise en charge complete des demarches",
    image: "/service-transferts.jpg",
    description: [
      "Nous nous chargeons des formalites de transfert et du transport du defunt de l'etranger vers la Belgique, du domicile ou du funerarium au site choisi.",
      "Notre equipe experimentee s'occupe de l'ensemble des demarches administratives : declaration de deces, obtention de permis d'inhumer ou d'incinerer, formalites pour les transferts internationaux.",
      "Nous disposons d'un vehicule funeraire moderne et entretenu pour assurer le transport dans le respect et la dignite."
    ],
    features: [
      "Transferts nationaux et internationaux",
      "Formalites administratives completes",
      "Vehicule funeraire professionnel",
      "Assistance 24h/24",
      "Coordination avec les autorites",
      "Conseil personnalise"
    ],
    ctaText: "Nous contacter",
    ctaHref: "#contact",
  },
  {
    key: "incineration",
    title: "Incineration",
    subtitle: "Un accompagnement respectueux",
    image: "/service-incineration.jpg",
    description: [
      "Nous vous accompagnons dans toutes les demarches liees a l'incineration et vous proposons differentes options pour la dispersion ou la conservation des cendres.",
      "Le processus d'incineration est realise dans le respect des normes environnementales les plus strictes. Nous vous informons sur chaque etape et vous aidons a choisir la ceremonie qui correspond a vos souhaits.",
      "Pour les cendres, nous proposons plusieurs options : urne decorative, columbarium, dispersion dans un jardin du souvenir, ou dispersion dans la nature selon les reglementations en vigueur."
    ],
    features: [
      "Accompagnement personnalise",
      "Choix de l'urne",
      "Ceremonie d'adieux",
      "Options de conservation",
      "Dispersion dans jardin du souvenir",
      "Colombarium disponible"
    ],
    ctaText: "Nous contacter",
    ctaHref: "#contact",
  },
  {
    key: "inhumation",
    title: "Inhumation",
    subtitle: "Dignite et serenite",
    image: "/service-inhumation.jpg",
    description: [
      "Nous vous guidons dans le choix du caveau, du monument ou de la simple fosse, ainsi que dans toutes les demarches administratives liees a l'inhumation.",
      "Notre equipe vous accompagne dans la selection du cimetiere, le choix de l'emplacement, et la conception du monument funeraire. Nous travaillons avec des marbriers de confiance pour creer des monuments personnalises.",
      "Nous gerons egalement les aspects pratiques : preparation de la fosse, organisation de la ceremonie, et suivi des formalites post-funerailles."
    ],
    features: [
      "Choix du cimetiere et emplacement",
      "Conception de monuments",
      "Caveaux familiaux",
      "Fleurissement",
      "Entretien des sepultures",
      "Conseil juridique"
    ],
    ctaText: "Nous contacter",
    ctaHref: "#contact",
  },
];

export default function ServiceDetailPage() {
  const { serviceKey } = useParams<{ serviceKey: string }>();
  const navigate = useNavigate();
  const service = services.find((s) => s.key === serviceKey);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "var(--bg-primary)" }}>
        <div className="text-center">
          <h1 className="font-display text-3xl" style={{ color: "var(--text-primary)" }}>Service non trouve</h1>
          <button onClick={() => navigate("/")} className="mt-4 font-display text-sm underline" style={{ color: "var(--link)" }}>Retour a l&apos;accueil</button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet><title>{service.title} | Pompes Funebres Lumen</title></Helmet>
      <div className="min-h-screen" style={{ backgroundColor: "var(--bg-primary)" }}>
        <Header />
        <main className="pt-20">
          {/* Hero */}
          <section className="relative h-[400px] md:h-[500px] overflow-hidden">
            <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, var(--bg-primary), transparent 60%)" }} />
            <div className="absolute bottom-0 left-0 right-0 pb-12">
              <div className="container-main">
                <ScrollReveal>
                  <button onClick={() => navigate("/#prestations")}
                    className="flex items-center gap-2 font-body text-sm mb-4 transition-colors"
                    style={{ color: "var(--text-muted)" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--text-primary)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--text-muted)"; }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M10 13L5 8L10 3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Retour aux prestations
                  </button>
                </ScrollReveal>
                <ScrollReveal delay={0.15}>
                  <p className="font-script text-[28px]" style={{ color: "var(--accent-light)" }}>{service.subtitle}</p>
                </ScrollReveal>
                <ScrollReveal delay={0.3}>
                  <h1 className="font-display text-[36px] md:text-[48px] font-light italic" style={{ color: "var(--text-primary)" }}>
                    {service.title}
                  </h1>
                </ScrollReveal>
              </div>
            </div>
          </section>

          {/* Description */}
          <section className="py-16" style={{ backgroundColor: "var(--bg-primary)" }}>
            <div className="container-main max-w-[900px]">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="md:col-span-2 space-y-6">
                  {service.description.map((p, i) => (
                    <ScrollReveal key={i} delay={0.15 * i}>
                      <p className="font-body text-base font-light leading-[1.8]" style={{ color: "var(--text-secondary)" }}>{p}</p>
                    </ScrollReveal>
                  ))}
                  <ScrollReveal delay={0.6}>
                    <PrimaryButton href={service.ctaHref}>{service.ctaText}</PrimaryButton>
                  </ScrollReveal>
                </div>

                <div>
                  <ScrollReveal delay={0.3}>
                    <div className="p-6" style={{ backgroundColor: "var(--bg-card)", boxShadow: "0 4px 30px var(--shadow-card)" }}>
                      <h3 className="font-display text-lg font-medium mb-4" style={{ color: "var(--text-primary)" }}>Nos prestations incluent</h3>
                      <div className="w-[30px] h-px mb-4" style={{ backgroundColor: "var(--accent)" }} />
                      <ul className="space-y-3">
                        {service.features.map((f, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-light)" strokeWidth="2" className="flex-shrink-0 mt-0.5">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                            <span className="font-body text-sm" style={{ color: "var(--text-secondary)" }}>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </div>
          </section>

          {/* Other services */}
          <section className="py-16" style={{ backgroundColor: "var(--bg-secondary)" }}>
            <div className="container-main">
              <ScrollReveal>
                <div className="text-center mb-10">
                  <p className="font-script text-[28px]" style={{ color: "var(--accent-light)" }}>Autres services</p>
                  <h2 className="font-display text-2xl font-medium mt-1" style={{ color: "var(--text-primary)" }}>Nos autres prestations</h2>
                  <DecorativeDivider />
                </div>
              </ScrollReveal>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.filter((s) => s.key !== serviceKey).map((s, i) => (
                  <ScrollReveal key={s.key} delay={0.15 * i}>
                    <button onClick={() => navigate(`/service/${s.key}`)} className="w-full text-left group">
                      <div className="aspect-[4/3] overflow-hidden">
                        <img src={s.image} alt={s.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      </div>
                      <div className="p-4" style={{ backgroundColor: "var(--bg-card)" }}>
                        <h3 className="font-display text-lg font-medium" style={{ color: "var(--text-primary)" }}>{s.title}</h3>
                        <p className="font-body text-xs mt-1" style={{ color: "var(--link)" }}>En savoir plus &rarr;</p>
                      </div>
                    </button>
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
