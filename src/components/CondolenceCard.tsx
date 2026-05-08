import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useNotices } from "@/hooks/useNotices";

interface CondolenceCardProps {
  id: string;
  firstName: string;
  lastName: string;
  birthPlace: string;
  birthDate: string;
  deathPlace: string;
  deathDate: string;
  funeralInfo: string;
  photo?: string | null;
}

function fmtDate(dateStr: string): string {
  const d = new Date(dateStr);
  const m = ["Janvier","Fevrier","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Decembre"];
  return `${d.getDate()} ${m[d.getMonth()]} ${d.getFullYear()}`;
}

export default function CondolenceCard(props: CondolenceCardProps) {
  const { id, firstName, lastName, birthPlace, birthDate, deathPlace, deathDate, funeralInfo, photo } = props;
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();
  const { getMessagesForNotice } = useNotices();
  const msgCount = getMessagesForNotice(id).length;

  return (
    <div
      className="rounded-2xl overflow-hidden transition-all duration-400 ease-out cursor-pointer border"
      style={{
        backgroundColor: "var(--bg-card)",
        boxShadow: hovered ? "0 12px 40px var(--shadow-card-hover)" : "0 2px 16px var(--shadow-card)",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        borderTop: "3px solid",
        borderColor: hovered ? "var(--accent-light)" : "var(--border-divider)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => navigate(`/condoleances/${id}`)}
    >
      <div className="p-6 md:p-8 flex flex-col items-center text-center">
        <div className="w-[100px] h-[100px] rounded-full border-[3px] overflow-hidden flex items-center justify-center mb-4 shadow-md"
          style={{ backgroundColor: "var(--bg-primary)", borderColor: "var(--accent-light)" }}>
          {photo ? (
            <img src={photo} alt={`${firstName} ${lastName}`} className="w-full h-full object-cover" />
          ) : (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--accent-medium)" strokeWidth="1.2">
              <circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
            </svg>
          )}
        </div>

        <h3 className="font-display text-xl font-medium" style={{ color: "var(--text-primary)" }}>
          {firstName} {lastName}
        </h3>

        <div className="mt-2 font-body text-xs space-y-0.5" style={{ color: "var(--text-muted)" }}>
          <p>Ne(e) a {birthPlace} le {fmtDate(birthDate)}</p>
          <p>Decede(e) a {deathPlace} le {fmtDate(deathDate)}</p>
        </div>

        <div className="w-[80px] h-px my-4" style={{ backgroundColor: "var(--border-divider)" }} />

        <p className="font-body text-[11px] uppercase tracking-[0.1em] mb-2" style={{ color: "var(--text-muted)" }}>
          Informations funerailles
        </p>

        <p className="font-body text-sm font-normal leading-relaxed line-clamp-3" style={{ color: "var(--text-secondary)" }}>
          {funeralInfo}
        </p>

        <div className="mt-5 flex flex-col sm:flex-row items-center gap-3">
          <button
            className="inline-flex items-center gap-2 font-display text-xs font-semibold uppercase tracking-[0.12em] px-6 py-3 rounded-full transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]"
            style={{ backgroundColor: "var(--btn-bg)", color: "var(--btn-text)" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "var(--btn-hover)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "var(--btn-bg)"; }}
          >
            <span>Presenter mes condoleances</span>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          {msgCount > 0 && (
            <span className="font-body text-xs px-3 py-1.5 rounded-full" style={{ backgroundColor: "var(--bg-primary)", color: "var(--text-muted)" }}>
              {msgCount} message{msgCount > 1 ? "s" : ""}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
