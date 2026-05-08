import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/hooks/useAuth";
import { useNotices } from "@/hooks/useNotices";
import LumenLogo from "@/components/LumenLogo";
import ThemeToggle from "@/components/ThemeToggle";
import type { Notice, NoticeFormData } from "@/types";

/* ─── helpers ─── */
function fmtDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString("fr-BE", { day: "2-digit", month: "2-digit", year: "numeric" });
}

function emptyForm(): NoticeFormData {
  return { firstName: "", lastName: "", birthPlace: "", birthDate: "", deathPlace: "", deathDate: "", photo: null, funeralInfo: "", visitingInfo: "" };
}

function noticeToForm(n: Notice): NoticeFormData {
  return { firstName: n.firstName, lastName: n.lastName, birthPlace: n.birthPlace, birthDate: n.birthDate, deathPlace: n.deathPlace, deathDate: n.deathDate, photo: n.photo, funeralInfo: n.funeralInfo, visitingInfo: n.visitingInfo };
}

const divider = (
  <div className="flex items-center my-4">
    <div className="w-6 h-px" style={{ backgroundColor: "var(--accent)" }} />
    <div className="w-1.5 h-1.5 rounded-full border mx-2" style={{ borderColor: "var(--accent)" }} />
    <div className="w-6 h-px" style={{ backgroundColor: "var(--accent)" }} />
  </div>
);

/* ═════════ LOGIN SCREEN ═════════ */
function LoginScreen({ onLogin }: { onLogin: (pw: string) => boolean }) {
  const [pw, setPw] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!onLogin(pw)) setError("Mot de passe incorrect. Veuillez reessayer.");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ backgroundColor: "var(--bg-primary)" }}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }} className="w-full max-w-[400px]">
        <div className="flex justify-center mb-12">
          <LumenLogo color="var(--text-primary)" width={150} />
        </div>
        <div className="p-10" style={{ backgroundColor: "var(--bg-card)", boxShadow: "0 4px 30px var(--shadow-card)" }}>
          <h1 className="font-display text-[28px] font-normal text-center" style={{ color: "var(--text-primary)" }}>Espace administrateur</h1>
          <p className="font-body text-sm text-center mt-2" style={{ color: "var(--text-muted)" }}>Gestion des avis de deces</p>
          {divider}
          <form onSubmit={handleSubmit}>
            <label className="font-body text-[13px] font-semibold" style={{ color: "var(--text-primary)" }}>Mot de passe</label>
            <input type="password" value={pw} onChange={(e) => { setPw(e.target.value); setError(""); }} placeholder="••••••••"
              className="w-full mt-1.5 px-4 py-3.5 font-body text-base outline-none transition-all"
              style={{ backgroundColor: "var(--bg-input)", color: "var(--text-primary)", border: "1px solid var(--border-color)" }} />
            <AnimatePresence>
              {error && (
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                  className="mt-4 px-4 py-2.5 border-l-2" style={{ backgroundColor: "color-mix(in srgb, var(--error) 14%, transparent)", borderColor: "var(--error)" }}>
                  <p className="font-body text-sm" style={{ color: "var(--error)" }}>{error}</p>
                </motion.div>
              )}
            </AnimatePresence>
            <button type="submit"
              className="w-full mt-6 inline-flex items-center justify-center gap-2 font-display text-xs font-semibold uppercase tracking-[0.12em] px-8 py-3.5 transition-colors duration-300"
              style={{ backgroundColor: "var(--btn-bg)", color: "var(--btn-text)" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "var(--btn-hover)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "var(--btn-bg)"; }}>
              Se connecter
            </button>
          </form>
          <a href="/#/" className="block w-full mt-6 text-center font-body text-[13px] transition-colors" style={{ color: "var(--text-muted)" }}>Retour au site</a>
        </div>
      </motion.div>
    </div>
  );
}

/* ═════════ NOTICE MODAL ═════════ */
function NoticeModal({ editing, onClose, onSave }: { editing: Notice | null; onClose: () => void; onSave: (data: NoticeFormData) => void }) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [form, setForm] = useState<NoticeFormData>(editing ? noticeToForm(editing) : emptyForm());
  const [photoPreview, setPhotoPreview] = useState<string | null>(editing?.photo || null);

  const update = (field: keyof NoticeFormData, value: string) => setForm((prev) => ({ ...prev, [field]: value }));

  const handleFile = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => { const r = reader.result as string; setPhotoPreview(r); setForm((prev) => ({ ...prev, photo: r })); };
    reader.readAsDataURL(file);
  };

  const inputClass = "w-full mt-1.5 px-4 py-3 font-body text-base outline-none transition-all";
  const inputStyle = { backgroundColor: "var(--bg-input)", color: "var(--text-primary)", border: "1px solid var(--border-color)" };

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} onClick={onClose}
        className="absolute inset-0" style={{ backgroundColor: "var(--modal-backdrop)" }} />
      <motion.div initial={{ opacity: 0, y: 30, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: 0.97 }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative w-full max-w-[700px] max-h-[90vh] overflow-y-auto" style={{ backgroundColor: "var(--bg-card)", boxShadow: "0 20px 60px rgba(0,0,0,0.2)" }}>
        <div className="p-8 md:p-10">
          <div className="flex items-start justify-between">
            <h2 className="font-display text-[28px] font-normal" style={{ color: "var(--text-primary)" }}>{editing ? "Modifier l'avis" : "Ajouter un avis"}</h2>
            <button onClick={onClose} className="p-1 transition-colors" style={{ color: "var(--text-muted)" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--text-primary)"; }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" /></svg>
            </button>
          </div>
          {divider}

          <form onSubmit={(e) => { e.preventDefault(); onSave(form); }} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div><label className="font-body text-[13px] font-semibold" style={{ color: "var(--text-primary)" }}>Nom <span style={{ color: "var(--error)" }}>*</span></label><input type="text" required value={form.lastName} onChange={(e) => update("lastName", e.target.value)} className={inputClass} style={inputStyle} /></div>
              <div><label className="font-body text-[13px] font-semibold" style={{ color: "var(--text-primary)" }}>Prenom <span style={{ color: "var(--error)" }}>*</span></label><input type="text" required value={form.firstName} onChange={(e) => update("firstName", e.target.value)} className={inputClass} style={inputStyle} /></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div><label className="font-body text-[13px] font-semibold" style={{ color: "var(--text-primary)" }}>Lieu de naissance <span style={{ color: "var(--error)" }}>*</span></label><input type="text" required value={form.birthPlace} onChange={(e) => update("birthPlace", e.target.value)} className={inputClass} style={inputStyle} /></div>
              <div><label className="font-body text-[13px] font-semibold" style={{ color: "var(--text-primary)" }}>Date de naissance <span style={{ color: "var(--error)" }}>*</span></label><input type="date" required value={form.birthDate} onChange={(e) => update("birthDate", e.target.value)} className={inputClass} style={inputStyle} /></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div><label className="font-body text-[13px] font-semibold" style={{ color: "var(--text-primary)" }}>Lieu du deces <span style={{ color: "var(--error)" }}>*</span></label><input type="text" required value={form.deathPlace} onChange={(e) => update("deathPlace", e.target.value)} className={inputClass} style={inputStyle} /></div>
              <div><label className="font-body text-[13px] font-semibold" style={{ color: "var(--text-primary)" }}>Date du deces <span style={{ color: "var(--error)" }}>*</span></label><input type="date" required value={form.deathDate} onChange={(e) => update("deathDate", e.target.value)} className={inputClass} style={inputStyle} /></div>
            </div>

            <div>
              <label className="font-body text-[13px] font-semibold" style={{ color: "var(--text-primary)" }}>Photo du defunt</label>
              <div onClick={() => fileInputRef.current?.click()} onDrop={(e) => { e.preventDefault(); const f = e.dataTransfer.files?.[0]; if (f) handleFile(f); }} onDragOver={(e) => e.preventDefault()}
                className="mt-1.5 border-2 border-dashed p-8 flex flex-col items-center justify-center cursor-pointer transition-all"
                style={{ borderColor: "var(--accent)", backgroundColor: "var(--bg-secondary)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--text-muted)"; (e.currentTarget as HTMLElement).style.backgroundColor = "var(--bg-primary)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)"; (e.currentTarget as HTMLElement).style.backgroundColor = "var(--bg-secondary)"; }}>
                <input ref={fileInputRef} type="file" accept="image/*" onChange={(e) => { const f = e.target.files?.[0]; if (f) handleFile(f); }} className="hidden" />
                {photoPreview ? (
                  <img src={photoPreview} alt="Preview" className="w-20 h-20 rounded-full object-cover border-2" style={{ borderColor: "var(--accent-light)" }} />
                ) : (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="1.2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" /></svg>
                )}
                <p className="font-body text-sm mt-2" style={{ color: "var(--text-muted)" }}>Cliquez pour selectionner une photo</p>
                <p className="font-body text-xs mt-1" style={{ color: "var(--text-secondary)", opacity: 0.5 }}>JPG, PNG - Max 5MB</p>
              </div>
            </div>

            <div><label className="font-body text-[13px] font-semibold" style={{ color: "var(--text-primary)" }}>Informations funerailles <span style={{ color: "var(--error)" }}>*</span></label><textarea rows={4} required value={form.funeralInfo} onChange={(e) => update("funeralInfo", e.target.value)} className={`${inputClass} resize-none`} style={inputStyle} placeholder="Ex: Les funerailles seront celebrees en l'eglise... le [date] a [heure]." /></div>
            <div><label className="font-body text-[13px] font-semibold" style={{ color: "var(--text-primary)" }}>Informations visites <span className="font-normal" style={{ color: "var(--text-muted)" }}>(optionnel)</span></label><textarea rows={3} value={form.visitingInfo} onChange={(e) => update("visitingInfo", e.target.value)} className={`${inputClass} resize-none`} style={inputStyle} placeholder="Ex: La famille sera presente au funerarium le [jour] de [heure] a [heure]." /></div>

            <div className="flex justify-end gap-3 pt-2">
              <button type="button" onClick={onClose} className="font-body text-sm px-4 py-2 transition-colors" style={{ color: "var(--text-muted)" }} onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--text-primary)"; }}>Annuler</button>
              <button type="submit"
                className="inline-flex items-center gap-2 font-display text-xs font-semibold uppercase tracking-[0.12em] px-6 py-3 transition-colors"
                style={{ backgroundColor: "var(--btn-bg)", color: "var(--btn-text)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "var(--btn-hover)"; }}>Enregistrer</button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
}

/* ═════════ DELETE CONFIRM ═════════ */
function DeleteConfirm({ name, onCancel, onConfirm }: { name: string; onCancel: () => void; onConfirm: () => void }) {
  return (
    <div className="fixed inset-0 z-[2100] flex items-center justify-center p-4">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} onClick={onCancel} className="absolute inset-0" style={{ backgroundColor: "var(--modal-backdrop)" }} />
      <motion.div initial={{ opacity: 0, y: 30, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: 0.97 }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }} className="relative w-full max-w-[450px] p-10 text-center" style={{ backgroundColor: "var(--bg-card)", boxShadow: "0 20px 60px rgba(0,0,0,0.2)" }}>
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--error)" strokeWidth="1.2" className="mx-auto">
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
        <h3 className="font-display text-2xl mt-4" style={{ color: "var(--text-primary)" }}>Supprimer cet avis ?</h3>
        <p className="font-body text-base mt-3" style={{ color: "var(--text-secondary)" }}>Cette action est definitive. L&apos;avis de <strong>{name}</strong> sera supprime du site.</p>
        {divider}
        <div className="flex justify-center gap-3">
          <button onClick={onCancel} className="font-body text-sm border px-6 py-2.5 transition-colors" style={{ color: "var(--text-muted)", borderColor: "var(--border-color)" }} onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "var(--bg-secondary)"; }}>Annuler</button>
          <button onClick={onConfirm} className="font-body text-sm text-white px-6 py-2.5 transition-colors" style={{ backgroundColor: "var(--error)" }} onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.9"; }}>Supprimer</button>
        </div>
      </motion.div>
    </div>
  );
}

/* ═════════ TOAST ═════════ */
function Toast({ message, onDone }: { message: string; onDone: () => void }) {
  return (
    <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }} onAnimationComplete={() => setTimeout(onDone, 3000)}
      className="fixed bottom-8 right-8 z-[3000] px-6 py-4 flex items-center gap-3 max-w-[400px]" style={{ backgroundColor: "var(--success)", boxShadow: "0 4px 20px rgba(0,0,0,0.3)" }}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
      <span className="font-body text-sm text-white">{message}</span>
    </motion.div>
  );
}

/* ═════════ ADMIN DASHBOARD ═════════ */
function AdminDashboard({ onLogout }: { onLogout: () => void }) {
  const { notices, addNotice, updateNotice, deleteNotice } = useNotices();
  const [modalOpen, setModalOpen] = useState(false);
  const [editingNotice, setEditingNotice] = useState<Notice | null>(null);
  const [deletingNotice, setDeletingNotice] = useState<Notice | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  const openAdd = () => { setEditingNotice(null); setModalOpen(true); };
  const openEdit = (n: Notice) => { setEditingNotice(n); setModalOpen(true); };
  const closeModal = () => { setModalOpen(false); setEditingNotice(null); };

  const handleSave = (data: NoticeFormData) => {
    if (editingNotice) { updateNotice(editingNotice.id, data); setToast("L'avis a ete modifie avec succes."); }
    else { addNotice(data); setToast("L'avis a ete ajoute avec succes."); }
    closeModal();
  };

  const handleDelete = () => {
    if (deletingNotice) { deleteNotice(deletingNotice.id); setToast("L'avis a ete supprime avec succes."); }
    setDeletingNotice(null);
  };

  const activeCount = notices.length;
  const now = new Date();
  const thisMonthCount = notices.filter((n) => { const d = new Date(n.deathDate); return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear(); }).length;
  const lastAdded = notices.length > 0 ? fmtDate([...notices].sort((a, b) => new Date(b.deathDate).getTime() - new Date(a.deathDate).getTime())[0].deathDate) : "—";

  const statIcon = (d: React.ReactNode) => <div style={{ color: "var(--text-muted)" }}>{d}</div>;
  const statData = [
    { icon: statIcon(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>), label: "Avis actifs", value: String(activeCount) },
    { icon: statIcon(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>), label: "Ce mois", value: String(thisMonthCount) },
    { icon: statIcon(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>), label: "Dernier ajout", value: lastAdded },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--bg-secondary)" }}>
      <motion.header initial={{ y: "-100%" }} animate={{ y: 0 }} transition={{ duration: 0.4 }} className="fixed top-0 left-0 right-0 z-[1000] h-[70px]" style={{ backgroundColor: "var(--bg-header)" }}>
        <div className="container-main flex items-center justify-between h-full">
          <LumenLogo width={100} />
          <span className="hidden md:block font-display text-lg font-medium" style={{ color: "var(--text-light)" }}>Gestion des condoleances</span>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <button onClick={openAdd}
              className="hidden sm:inline-flex items-center gap-1.5 font-display text-[13px] font-semibold px-4 py-2 transition-colors"
              style={{ backgroundColor: "var(--accent)", color: "var(--bg-header)" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "var(--accent-light)"; }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
              Ajouter un avis
            </button>
            <button onClick={onLogout} className="font-body text-[13px] transition-colors" style={{ color: "var(--text-light)", opacity: 0.7 }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}>Se deconnecter</button>
          </div>
        </div>
      </motion.header>

      <div className="pt-[100px] pb-16 container-main">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
          {statData.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1, duration: 0.6 }}
              className="px-6 py-5 flex items-center gap-3" style={{ backgroundColor: "var(--bg-card)", boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
              {s.icon}
              <div>
                <p className="font-body text-xs uppercase" style={{ color: "var(--text-muted)" }}>{s.label}</p>
                <p className="font-display text-[28px] font-semibold leading-tight" style={{ color: "var(--text-primary)" }}>{s.value}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop table */}
        <div className="hidden md:block" style={{ backgroundColor: "var(--bg-card)", boxShadow: "0 2px 20px rgba(0,0,0,0.06)" }}>
          <table className="w-full">
            <thead>
              <tr style={{ backgroundColor: "var(--table-header)" }}>
                {["Photo", "Nom", "Dates", "Funerailles", "Actions"].map((h) => (
                  <th key={h} className="text-left px-5 py-3.5 font-body text-xs uppercase tracking-[0.08em]" style={{ color: "var(--table-header-text)" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {notices.length === 0 ? (
                <tr><td colSpan={5} className="px-5 py-16 text-center">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="1.5" className="mx-auto" style={{ opacity: 0.3 }}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>
                  <p className="font-display text-xl mt-4" style={{ color: "var(--text-muted)" }}>Aucun avis de deces pour le moment.</p>
                  <p className="font-body text-sm mt-1" style={{ color: "var(--text-muted)" }}>Cliquez sur "Ajouter un avis" pour creer votre premier avis.</p>
                  <button onClick={openAdd} className="mt-4 inline-flex items-center gap-2 font-display text-xs font-semibold uppercase tracking-[0.12em] px-6 py-3 transition-colors" style={{ backgroundColor: "var(--btn-bg)", color: "var(--btn-text)" }}>Ajouter un avis</button>
                </td></tr>
              ) : (notices.map((n, i) => (
                <motion.tr key={n.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.05, duration: 0.5 }}
                  className="border-b transition-colors" style={{ borderColor: "var(--border-divider)", backgroundColor: i % 2 === 0 ? "var(--bg-card)" : "var(--table-row-alt)" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "var(--table-row-hover)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = i % 2 === 0 ? "var(--bg-card)" : "var(--table-row-alt)"; }}>
                  <td className="px-5 py-4">
                    <div className="w-12 h-12 rounded-full border-2 overflow-hidden flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "var(--bg-primary)", borderColor: "var(--accent-light)" }}>
                      {n.photo ? <img src={n.photo} alt="" className="w-full h-full object-cover" /> : <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="1.2"><circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 4-6 8-6s8 2 8 6" /></svg>}
                    </div>
                  </td>
                  <td className="px-5 py-4 font-display text-base font-medium" style={{ color: "var(--text-primary)" }}>{n.firstName} {n.lastName}</td>
                  <td className="px-5 py-4 font-body text-[13px]" style={{ color: "var(--text-secondary)" }}>
                    <p>Ne(e) {fmtDate(n.birthDate)}</p><p>Decede(e) {fmtDate(n.deathDate)}</p>
                  </td>
                  <td className="px-5 py-4 font-body text-[13px] max-w-[300px] truncate" style={{ color: "var(--text-secondary)" }}>{n.funeralInfo.replace(/\\n/g, " ")}</td>
                  <td className="px-5 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button onClick={() => openEdit(n)} className="p-1.5 transition-colors" style={{ color: "var(--text-muted)" }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--text-primary)"; }} title="Modifier">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
                      </button>
                      <button onClick={() => setDeletingNotice(n)} className="p-1.5 transition-colors" style={{ color: "var(--text-muted)" }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--error)"; }} title="Supprimer">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>
                      </button>
                    </div>
                  </td>
                </motion.tr>
              )))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="md:hidden space-y-3">
          {notices.length === 0 ? (
            <div className="p-10 text-center" style={{ backgroundColor: "var(--bg-card)" }}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="1.5" className="mx-auto" style={{ opacity: 0.3 }}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>
              <p className="font-display text-xl mt-4" style={{ color: "var(--text-muted)" }}>Aucun avis de deces pour le moment.</p>
              <button onClick={openAdd} className="mt-4 inline-flex items-center gap-2 font-display text-xs font-semibold uppercase tracking-[0.12em] px-6 py-3" style={{ backgroundColor: "var(--btn-bg)", color: "var(--btn-text)" }}>Ajouter un avis</button>
            </div>
          ) : (notices.map((n) => (
            <div key={n.id} className="p-5" style={{ backgroundColor: "var(--bg-card)", boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-12 h-12 rounded-full border-2 overflow-hidden flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "var(--bg-primary)", borderColor: "var(--accent-light)" }}>
                    {n.photo ? <img src={n.photo} alt="" className="w-full h-full object-cover" /> : <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="1.2"><circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 4-6 8-6s8 2 8 6" /></svg>}
                  </div>
                  <h3 className="font-display text-base font-medium truncate" style={{ color: "var(--text-primary)" }}>{n.firstName} {n.lastName}</h3>
                </div>
                <div className="flex items-center gap-1 flex-shrink-0 ml-2">
                  <button onClick={() => openEdit(n)} className="p-1.5" style={{ color: "var(--text-muted)" }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg></button>
                  <button onClick={() => setDeletingNotice(n)} className="p-1.5" style={{ color: "var(--text-muted)" }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg></button>
                </div>
              </div>
              <p className="font-body text-[13px] mt-2" style={{ color: "var(--text-secondary)" }}>Ne(e) {fmtDate(n.birthDate)} - Decede(e) {fmtDate(n.deathDate)}</p>
              <p className="font-body text-[13px] mt-1 line-clamp-2" style={{ color: "var(--text-secondary)" }}>{n.funeralInfo}</p>
            </div>
          )))}
        </div>
      </div>

      <AnimatePresence>{modalOpen && <NoticeModal editing={editingNotice} onClose={closeModal} onSave={handleSave} />}</AnimatePresence>
      <AnimatePresence>{deletingNotice && <DeleteConfirm name={`${deletingNotice.firstName} ${deletingNotice.lastName}`} onCancel={() => setDeletingNotice(null)} onConfirm={handleDelete} />}</AnimatePresence>
      <AnimatePresence>{toast && <Toast message={toast} onDone={() => setToast(null)} />}</AnimatePresence>
    </div>
  );
}

/* ═════════ MAIN ADMIN PAGE ═════════ */
export default function AdminPage() {
  const { isAuthenticated, login, logout } = useAuth();
  if (!isAuthenticated) return <LoginScreen onLogin={login} />;
  return <AdminDashboard onLogout={logout} />;
}
