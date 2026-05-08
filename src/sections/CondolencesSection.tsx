import { useNavigate } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import DecorativeDivider from "@/components/DecorativeDivider";
import CondolenceCard from "@/components/CondolenceCard";
import { useNotices } from "@/hooks/useNotices";

export default function CondolencesSection() {
  const { notices } = useNotices();
  const navigate = useNavigate();
  const sorted = [...notices].sort((a, b) => new Date(b.deathDate).getTime() - new Date(a.deathDate).getTime()).slice(0, 3);

  return (
    <section id="condoleances" className="py-20 md:py-24" style={{ backgroundColor: "var(--bg-secondary)" }}>
      <div className="container-main">
        <div className="text-center">
          <ScrollReveal><p className="font-script text-[28px] md:text-[32px]" style={{ color: "var(--accent-light)" }}>Nos pensees</p></ScrollReveal>
          <ScrollReveal delay={0.15}>
            <h2 className="font-display text-[28px] md:text-[36px] font-normal mt-1" style={{ color: "var(--text-primary)" }}>Avis de deces</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.3}><DecorativeDivider /></ScrollReveal>
          <ScrollReveal delay={0.45}>
            <p className="font-body text-base font-normal mt-4" style={{ color: "var(--text-secondary)" }}>
              Cliquez sur un avis pour presenter vos condoleances ou consulter les messages.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {sorted.map((n, i) => (
            <ScrollReveal key={n.id} delay={0.2 * i}>
              <CondolenceCard {...n} />
            </ScrollReveal>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
          <button
            onClick={() => navigate("/condoleances")}
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 transition-all duration-300"
            style={{ color: "var(--btn-text)", backgroundColor: "var(--btn-bg)" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "var(--btn-hover)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "var(--btn-bg)"; }}
          >
            <span className="font-display text-sm font-semibold uppercase tracking-[0.09em]">Voir tous les avis de deces</span>
          </button>
          <button
            onClick={() => navigate("/admin")}
            className="flex items-center gap-2 rounded-full px-5 py-2.5 transition-all duration-300"
            style={{ color: "var(--text-muted)", backgroundColor: "var(--theme-toggle-bg)" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "var(--theme-toggle-hover)"; (e.currentTarget as HTMLElement).style.opacity = "1"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "var(--theme-toggle-bg)"; (e.currentTarget as HTMLElement).style.opacity = "0.7"; }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <span className="font-body text-xs font-medium">Espace administrateur</span>
          </button>
        </div>
      </div>
    </section>
  );
}
