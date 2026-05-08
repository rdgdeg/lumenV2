import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { useNotices } from "@/hooks/useNotices";

function fmtDate(dateStr: string): string {
  const d = new Date(dateStr);
  const m = ["Janvier","Fevrier","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Decembre"];
  return `${d.getDate()} ${m[d.getMonth()]} ${d.getFullYear()}`;
}

export default function CondolenceDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { notices, addMessage, getMessagesForNotice } = useNotices();
  const [form, setForm] = useState({ authorName: "", authorEmail: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const notice = notices.find((n) => n.id === id);
  const messages = id ? getMessagesForNotice(id) : [];

  if (!notice) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "var(--bg-primary)" }}>
        <div className="text-center">
          <h1 className="font-display text-3xl" style={{ color: "var(--text-primary)" }}>Avis non trouve</h1>
          <button onClick={() => navigate("/")} className="mt-4 font-display text-sm underline" style={{ color: "var(--link)" }}>Retour a l&apos;accueil</button>
        </div>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!id) return;
    addMessage({ noticeId: id, authorName: form.authorName, authorEmail: form.authorEmail, message: form.message });
    setSubmitted(true);
    setForm({ authorName: "", authorEmail: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  const inputStyle = {
    backgroundColor: "var(--bg-input)",
    color: "var(--text-primary)",
    border: "1px solid var(--border-color)",
  };

  return (
    <>
      <Helmet><title>Condoleances - {notice.firstName} {notice.lastName} | Pompes Funebres Lumen</title></Helmet>
      <div className="min-h-screen" style={{ backgroundColor: "var(--bg-primary)" }}>
        <Header />
        <main className="pt-20">
          {/* Hero info */}
          <section className="py-16" style={{ backgroundColor: "var(--bg-secondary)" }}>
            <div className="container-main max-w-[800px]">
              <ScrollReveal>
                <button onClick={() => navigate("/#condoleances")} className="flex items-center gap-2 font-body text-sm mb-8 transition-colors" style={{ color: "var(--text-muted)" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--text-primary)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--text-muted)"; }}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M10 13L5 8L10 3" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  Retour aux condoleances
                </button>
              </ScrollReveal>

              <div className="flex flex-col items-center text-center">
                <div className="w-[140px] h-[140px] rounded-full border-[3px] overflow-hidden flex items-center justify-center mb-6"
                  style={{ backgroundColor: "var(--bg-primary)", borderColor: "var(--accent-light)" }}>
                  {notice.photo ? (
                    <img src={notice.photo} alt="" className="w-full h-full object-cover" />
                  ) : (
                    <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="var(--accent-medium)" strokeWidth="1.2">
                      <circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
                    </svg>
                  )}
                </div>
                <h1 className="font-display text-4xl md:text-5xl font-light italic" style={{ color: "var(--text-primary)" }}>
                  {notice.firstName} {notice.lastName}
                </h1>
                <div className="mt-3 font-body text-sm space-y-1" style={{ color: "var(--text-muted)" }}>
                  <p>Ne(e) a {notice.birthPlace} le {fmtDate(notice.birthDate)}</p>
                  <p>Decede(e) a {notice.deathPlace} le {fmtDate(notice.deathDate)}</p>
                </div>
              </div>
            </div>
          </section>

          {/* Funeral Info */}
          <section className="py-12" style={{ backgroundColor: "var(--bg-primary)" }}>
            <div className="container-main max-w-[800px]">
              <ScrollReveal>
                <div className="max-w-[600px] mx-auto p-8" style={{ backgroundColor: "var(--bg-card)", boxShadow: "0 4px 30px var(--shadow-card)" }}>
                  <h2 className="font-display text-xl font-medium text-center mb-4" style={{ color: "var(--text-primary)" }}>Informations funerailles</h2>
                  <div className="w-[60px] h-px mx-auto mb-4" style={{ backgroundColor: "var(--accent)" }} />
                  <p className="font-body text-base leading-relaxed text-center whitespace-pre-line" style={{ color: "var(--text-secondary)" }}>
                    {notice.funeralInfo}
                  </p>
                  {notice.visitingInfo && (
                    <>
                      <div className="w-[100px] h-px mx-auto my-5" style={{ backgroundColor: "var(--border-divider)" }} />
                      <h3 className="font-display text-lg font-medium text-center mb-2" style={{ color: "var(--text-primary)" }}>Informations visites</h3>
                      <p className="font-body text-sm leading-relaxed text-center" style={{ color: "var(--text-secondary)" }}>{notice.visitingInfo}</p>
                    </>
                  )}
                </div>
              </ScrollReveal>
            </div>
          </section>

          {/* Condolence Form */}
          <section className="py-12" style={{ backgroundColor: "var(--bg-secondary)" }}>
            <div className="container-main max-w-[700px]">
              <ScrollReveal>
                <div className="text-center mb-8">
                  <p className="font-script text-[28px]" style={{ color: "var(--accent-light)" }}>Livre d&apos;or</p>
                  <h2 className="font-display text-2xl font-medium mt-1" style={{ color: "var(--text-primary)" }}>
                    Presenter vos condoleances
                  </h2>
                  <div className="flex items-center justify-center my-4">
                    <div className="w-6 h-px" style={{ backgroundColor: "var(--accent)" }} />
                    <div className="w-1.5 h-1.5 rounded-full border mx-2" style={{ borderColor: "var(--accent)" }} />
                    <div className="w-6 h-px" style={{ backgroundColor: "var(--accent)" }} />
                  </div>
                </div>
              </ScrollReveal>

              <AnimatePresence>
                {submitted && (
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                    className="mb-6 p-4 text-center" style={{ backgroundColor: "var(--success)", color: "white" }}>
                    <p className="font-body text-sm">Votre message a ete ajoute avec succes. Merci pour vos pensees.</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <ScrollReveal delay={0.15}>
                <form onSubmit={handleSubmit} className="space-y-4" style={{ backgroundColor: "var(--bg-card)", padding: "32px", boxShadow: "0 2px 20px var(--shadow-card)" }}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="font-body text-[13px] font-semibold" style={{ color: "var(--text-primary)" }}>Votre nom <span style={{ color: "var(--error)" }}>*</span></label>
                      <input type="text" required value={form.authorName} onChange={(e) => setForm((p) => ({ ...p, authorName: e.target.value }))}
                        className="w-full mt-1.5 px-4 py-3 font-body text-base outline-none" style={inputStyle} />
                    </div>
                    <div>
                      <label className="font-body text-[13px] font-semibold" style={{ color: "var(--text-primary)" }}>Votre email <span style={{ color: "var(--error)" }}>*</span></label>
                      <input type="email" required value={form.authorEmail} onChange={(e) => setForm((p) => ({ ...p, authorEmail: e.target.value }))}
                        className="w-full mt-1.5 px-4 py-3 font-body text-base outline-none" style={inputStyle} />
                    </div>
                  </div>
                  <div>
                    <label className="font-body text-[13px] font-semibold" style={{ color: "var(--text-primary)" }}>Votre message <span style={{ color: "var(--error)" }}>*</span></label>
                    <textarea required rows={4} value={form.message} onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                      className="w-full mt-1.5 px-4 py-3 font-body text-base outline-none resize-none" style={inputStyle}
                      placeholder="Ecrivez vos mots de sympathie ici..." />
                  </div>
                  <button type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 font-display text-xs font-semibold uppercase tracking-[0.12em] px-8 py-3.5 transition-colors duration-300"
                    style={{ backgroundColor: "var(--btn-bg)", color: "var(--btn-text)" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "var(--btn-hover)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "var(--btn-bg)"; }}>
                    <span>Envoyer mes condoleances</span>
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </form>
              </ScrollReveal>

              {/* Messages list */}
              {messages.length > 0 && (
                <div className="mt-10 space-y-4">
                  <h3 className="font-display text-lg font-medium text-center" style={{ color: "var(--text-primary)" }}>
                    Messages de sympathie ({messages.length})
                  </h3>
                  {messages.map((msg, i) => (
                    <ScrollReveal key={msg.id} delay={0.1 * i}>
                      <div className="p-6" style={{ backgroundColor: "var(--bg-card)", borderLeft: "3px solid var(--accent-light)" }}>
                        <div className="flex items-center justify-between mb-2">
                          <p className="font-display text-base font-medium" style={{ color: "var(--text-primary)" }}>{msg.authorName}</p>
                          <p className="font-body text-xs" style={{ color: "var(--text-muted)" }}>
                            {new Date(msg.date).toLocaleDateString("fr-BE", { day: "2-digit", month: "long", year: "numeric" })}
                          </p>
                        </div>
                        <p className="font-body text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{msg.message}</p>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              )}
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
