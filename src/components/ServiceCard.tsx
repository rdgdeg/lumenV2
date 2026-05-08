import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  serviceKey: string;
}

export default function ServiceCard({ image, title, description, serviceKey }: ServiceCardProps) {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="rounded-2xl overflow-hidden transition-all duration-400 ease-out cursor-pointer border border-transparent"
      style={{
        backgroundColor: "var(--bg-card)",
        boxShadow: hovered ? "0 12px 40px var(--shadow-card-hover)" : "0 2px 16px var(--shadow-card)",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        borderColor: hovered ? "var(--accent-light)" : "var(--border-divider)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => navigate(`/service/${serviceKey}`)}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500"
          style={{ transform: hovered ? "scale(1.05)" : "scale(1)" }} />
      </div>
      <div className="p-6">
        <h3 className="font-display text-xl font-medium" style={{ color: "var(--text-primary)" }}>{title}</h3>
        <p className="font-body text-sm font-normal leading-relaxed mt-2 line-clamp-3" style={{ color: "var(--text-secondary)" }}>{description}</p>
        <div className="mt-4 flex items-center gap-1 font-display text-[13px] font-medium transition-colors" style={{ color: hovered ? "var(--link-hover)" : "var(--link-color)" }}>
          <span>En savoir plus</span>
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="mt-0.5">
            <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}
