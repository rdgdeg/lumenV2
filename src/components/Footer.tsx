import LumenLogo from "./LumenLogo";

const services = [
  "Funerarium", "Articles funeraires", "Transferts et formalites", "Incineration",
  "Inhumation", "Redaction de necrologies & souvenirs", "Fleurs naturelles & artificielles",
  "Monuments & caveaux", "Contrat deces",
];

export default function Footer() {
  return (
    <footer id="liens" style={{ backgroundColor: "var(--bg-header)", color: "var(--text-light)" }}>
      <div className="container-main pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10">
          <div>
            <h4 className="font-display text-lg font-medium mb-3" style={{ color: "var(--text-light)" }}>Nos services</h4>
            <div className="w-[30px] h-px mb-4" style={{ backgroundColor: "var(--accent)" }} />
            <ul className="flex flex-col gap-2">
              {services.map((s) => (
                <li key={s}>
                  <span className="font-body text-sm font-normal" style={{ color: "var(--text-light)", opacity: 0.7 }}>{s}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-medium mb-3" style={{ color: "var(--text-light)" }}>Coordonnees</h4>
            <div className="w-[30px] h-px mb-4" style={{ backgroundColor: "var(--accent)" }} />
            <div className="space-y-1">
              <p className="font-body text-sm font-normal" style={{ color: "var(--text-light)", opacity: 0.7 }}>Chaussee de Mons, 473</p>
              <p className="font-body text-sm font-normal" style={{ color: "var(--text-light)", opacity: 0.7 }}>7810 Maffle</p>
            </div>
            <div className="mt-4 space-y-1">
              <p className="font-body text-sm font-normal" style={{ color: "var(--text-light)", opacity: 0.7 }}>068/28.72.51</p>
              <p className="font-body text-sm font-normal" style={{ color: "var(--text-light)", opacity: 0.7 }}>0475/89.28.17 (apres 18h30)</p>
            </div>
            <div className="mt-4">
              <p className="font-body text-[13px] font-medium mb-1" style={{ color: "var(--accent)" }}>Heures de visite</p>
              <p className="font-body text-[13px] font-normal" style={{ color: "var(--text-light)", opacity: 0.6 }}>Lun-Sam: 9h-12h, 13h-18h30</p>
              <p className="font-body text-[13px] font-normal" style={{ color: "var(--text-light)", opacity: 0.6 }}>Dim/JF: 9h-12h30</p>
            </div>
          </div>

          <div className="flex flex-col items-start md:items-center md:justify-between">
            <LumenLogo width={100} />
            <div className="mt-6 text-center">
              <p className="font-body text-xs font-normal" style={{ color: "var(--text-light)", opacity: 0.5 }}>&copy; 2026 Pompes Funebres Lumen</p>
              <p className="font-body text-xs font-normal" style={{ color: "var(--text-light)", opacity: 0.5 }}>Tous droits reserves.</p>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-5 text-center" style={{ borderTop: "1px solid var(--border-divider)" }}>
          <p className="font-body text-xs font-normal" style={{ color: "var(--text-light)", opacity: 0.4 }}>
            Pompes Funebres Lumen - Chaussee de Mons, 473, 7810 Maffle - 068/28.72.51
          </p>
        </div>
      </div>
    </footer>
  );
}
