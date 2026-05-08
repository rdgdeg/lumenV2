interface ContactInfoBlockProps {
  icon: React.ReactNode;
  label: string;
  values: string[];
}

export default function ContactInfoBlock({ icon, label, values }: ContactInfoBlockProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-2" style={{ color: "var(--text-muted)" }}>{icon}</div>
      <p className="font-body text-xs uppercase tracking-[0.1em]" style={{ color: "var(--text-muted)" }}>{label}</p>
      <div className="mt-1 space-y-0.5">
        {values.map((v, i) => (
          <p key={i} className="font-body text-base" style={{ color: "var(--text-primary)" }}>{v}</p>
        ))}
      </div>
    </div>
  );
}
