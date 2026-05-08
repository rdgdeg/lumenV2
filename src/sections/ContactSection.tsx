import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import DecorativeDivider from "@/components/DecorativeDivider";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ nom: "", prenom: "", email: "", telephone: "", sujet: "", message: "", privacy: false });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value }));
  };
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

  const inputClass = "w-full mt-1.5 px-4 py-3 font-body text-sm font-normal outline-none transition-all rounded-lg";
  const inputStyle = {
    backgroundColor: "var(--bg-input)",
    color: "var(--text-primary)",
    border: "1px solid var(--border-color)",
  };

  return (
    <section id="contact" className="py-20 md:py-24" style={{ backgroundColor: "var(--bg-primary)" }}>
      <div className="container-main">
        {/* Map */}
        <ScrollReveal>
          <div className="mb-16">
            <div className="text-center mb-8">
              <p className="font-script text-[28px] md:text-[32px]" style={{ color: "var(--text-muted)" }}>Nous trouver</p>
              <h2 className="font-display text-[28px] md:text-[36px] font-normal mt-1" style={{ color: "var(--text-primary)" }}>Notre localisation</h2>
              <DecorativeDivider />
            </div>
            <div className="max-w-[960px] mx-auto rounded-2xl border p-3 md:p-4" style={{ borderColor: "var(--border-divider)", backgroundColor: "var(--bg-secondary)" }}>
              <div className="w-full h-[280px] md:h-[360px] overflow-hidden rounded-xl shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2525.4978248129!2d3.7784!3d50.6278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c2fa3d9a2e7c6b%3A0x9b8b3c4d5e6f7a8b!2sChauss%C3%A9e%20de%20Mons%2C%207810%20Maffle!5e0!3m2!1sfr!2sbe!4v1700000000000!5m2!1sfr!2sbe"
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade" title="Pompes Funebres Lumen - Localisation"
                />
              </div>
            </div>
            <div className="text-center mt-4">
              <a href="https://www.google.com/maps/dir//Chauss%C3%A9e+de+Mons,+7810+Maffle" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-display text-xs font-semibold uppercase tracking-[0.12em] px-6 py-3 rounded-full transition-all duration-300"
                style={{ border: "1px solid var(--btn-outline-border)", color: "var(--btn-outline-text)" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
                Itineraire Google Maps
              </a>
            </div>
          </div>
        </ScrollReveal>

        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-8 lg:mb-10">
            <ScrollReveal><p className="font-script text-[28px]" style={{ color: "var(--text-muted)" }}>Nous contacter</p></ScrollReveal>
            <ScrollReveal delay={0.15}>
              <h2 className="font-display text-[28px] md:text-[36px] font-normal mt-1" style={{ color: "var(--text-primary)" }}>Contactez-nous</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.3}><DecorativeDivider /></ScrollReveal>
          </div>

        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-10 lg:gap-12 items-start">
          <div>
            {submitted ? (
              <ScrollReveal delay={0.45}>
                <div className="rounded-xl p-8 text-center mt-8" style={{ backgroundColor: "var(--bg-card)", boxShadow: "0 2px 16px var(--shadow-card)" }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--success)" strokeWidth="1.5" className="mx-auto mb-3">
                    <circle cx="12" cy="12" r="10" /><polyline points="9 12 11 14 15 10" />
                  </svg>
                  <p className="font-display text-xl" style={{ color: "var(--success)" }}>Message envoye</p>
                  <p className="font-body text-sm font-normal mt-2" style={{ color: "var(--text-secondary)" }}>Nous vous contacterons dans les plus brefs delais.</p>
                </div>
              </ScrollReveal>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 mt-8 p-6 md:p-8 rounded-2xl border" style={{ backgroundColor: "var(--bg-card)", boxShadow: "0 2px 16px var(--shadow-card)", borderColor: "var(--border-divider)" }}>
                {[
                  { name: "nom", label: "Nom", type: "text", req: true },
                  { name: "prenom", label: "Prenom", type: "text", req: true },
                  { name: "email", label: "Email", type: "email", req: true },
                  { name: "telephone", label: "Telephone", type: "tel", req: false },
                  { name: "sujet", label: "Sujet", type: "text", req: true },
                ].map((field, i) => (
                  <ScrollReveal key={field.name} delay={0.45 + i * 0.1}>
                    <div>
                      <label className="font-body text-[13px] font-medium" style={{ color: "var(--text-primary)" }}>
                        {field.label} {field.req && <span style={{ color: "var(--error)" }}>*</span>}
                      </label>
                      <input type={field.type} name={field.name} required={field.req} value={(form as any)[field.name]} onChange={handleChange} className={inputClass} style={inputStyle} />
                    </div>
                  </ScrollReveal>
                ))}
                <ScrollReveal delay={0.95}>
                  <div>
                    <label className="font-body text-[13px] font-medium" style={{ color: "var(--text-primary)" }}>
                      Message <span style={{ color: "var(--error)" }}>*</span>
                    </label>
                    <textarea name="message" required rows={4} value={form.message} onChange={handleChange} className={`${inputClass} resize-none`} style={inputStyle} />
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={1.05}>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" name="privacy" checked={form.privacy} onChange={handleChange} className="mt-1 w-4 h-4 rounded" style={{ accentColor: "var(--btn-bg)" }} />
                    <span className="font-body text-xs font-normal" style={{ color: "var(--text-secondary)" }}>
                      J&apos;accepte la politique de confidentialite.
                    </span>
                  </label>
                </ScrollReveal>
                <ScrollReveal delay={1.15}>
                  <button type="submit"
                    className="w-full md:w-auto inline-flex items-center justify-center gap-2 font-display text-xs font-semibold uppercase tracking-[0.12em] px-8 py-3.5 rounded-full transition-all duration-400"
                    style={{ border: "1px solid var(--btn-outline-border)", color: "var(--btn-outline-text)", backgroundColor: "transparent" }}
                    onMouseEnter={(e) => { const t = e.currentTarget; t.style.backgroundColor = "var(--btn-bg)"; t.style.borderColor = "var(--btn-bg)"; t.style.color = "var(--btn-text)"; }}
                    onMouseLeave={(e) => { const t = e.currentTarget; t.style.backgroundColor = "transparent"; t.style.borderColor = "var(--btn-outline-border)"; t.style.color = "var(--btn-outline-text)"; }}>
                    <span>Envoyer</span>
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </button>
                </ScrollReveal>
              </form>
            )}
          </div>

          <div>
            <div className="grid grid-cols-1 gap-5">
            {[
              { icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>), label: "Adresse", lines: ["Chaussee de Mons, 473/B", "7810 Maffle"] },
              { icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>), label: "Telephone", lines: ["068/28.72.51", "0475/89.28.17 (apres 18h30)"] },
              { icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>), label: "Heures de visite", lines: ["Lun-Sam: 9h-12h, 13h-18h30", "Dim/JF: 9h-12h30"] },
              { icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>), label: "Email", lines: ["info@pompesfunebreslumen.be"], isLink: true },
            ].map((block, i) => (
              <ScrollReveal key={block.label} direction="right" delay={0.3 + i * 0.15}>
                <div className="flex items-start gap-4 p-5 rounded-2xl border min-h-[102px]" style={{ backgroundColor: "var(--bg-card)", boxShadow: "0 2px 12px var(--shadow-card)", borderColor: "var(--border-divider)" }}>
                  <div className="flex-shrink-0 mt-0.5">{block.icon}</div>
                  <div>
                    <p className="font-body text-[11px] font-medium uppercase tracking-[0.1em]" style={{ color: "var(--text-muted)" }}>{block.label}</p>
                    {block.lines.map((line, j) => (
                      block.isLink ? (
                        <a key={j} href={`mailto:${line}`} className="font-body text-sm font-normal mt-1 block transition-colors" style={{ color: "var(--link)" }}
                          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--link-hover)"; }}
                          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--link)"; }}>{line}</a>
                      ) : (
                        <p key={j} className="font-body text-sm font-normal mt-1" style={{ color: "var(--text-primary)" }}>{line}</p>
                      )
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
