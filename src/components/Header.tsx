import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import LumenLogo from "./LumenLogo";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "Presentation", href: "#presentation" },
  { label: "Services", href: "#prestations" },
  { label: "Condoleances", href: "#condoleances" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState("accueil");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      if (!isHome) return;
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (!isHome) {
      navigate("/");
      setTimeout(() => {
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  const goHome = () => {
    if (!isHome) navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-[1000] transition-shadow duration-300 backdrop-blur-md"
      style={{
        backgroundColor: "var(--bg-header)",
        boxShadow: scrolled ? "0 8px 28px rgba(0,0,0,0.18)" : "none",
      }}
    >
      <div className="container-main flex items-center justify-between h-20 gap-4">
        <button onClick={goHome} className="cursor-pointer bg-transparent border-0 p-0 shrink-0">
          <LumenLogo width={110} />
        </button>

        {/* Desktop Nav - hidden on small screens, flex on lg+ */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
              className="font-display text-[15px] font-semibold uppercase tracking-[0.07em] transition-colors duration-300 hover:text-[var(--accent)] relative pb-1.5 whitespace-nowrap"
              style={{ color: activeSection === link.href.replace("#", "") ? "var(--accent)" : "var(--text-light)", cursor: "pointer" }}
            >
              {link.label}
              {isHome && activeSection === link.href.replace("#", "") && (
                <motion.span layoutId="activeNav" className="absolute bottom-0 left-0 right-0 h-0.5" style={{ backgroundColor: "var(--accent)" }} transition={{ duration: 0.3 }} />
              )}
            </motion.a>
          ))}
          <div className="ml-1">
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile/Tablet hamburger - visible below lg */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button className="flex flex-col gap-1.5 p-2 bg-transparent border-0" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
            <span className={`block w-5 h-0.5 transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[3px]" : ""}`} style={{ backgroundColor: "var(--text-light)" }} />
            <span className={`block w-5 h-0.5 transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} style={{ backgroundColor: "var(--text-light)" }} />
            <span className={`block w-5 h-0.5 transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[3px]" : ""}`} style={{ backgroundColor: "var(--text-light)" }} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden"
            style={{ backgroundColor: "var(--bg-header)", borderTop: "1px solid var(--border-divider)" }}
          >
            <div className="container-main py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={(e) => handleNavClick(e, link.href)}
                  className="font-display text-sm font-medium uppercase tracking-[0.08em] transition-colors duration-300 py-1"
                  style={{ color: activeSection === link.href.replace("#", "") ? "var(--accent)" : "var(--text-light)" }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      <div className="h-px" style={{ backgroundColor: "var(--border-divider)" }} />
    </motion.header>
  );
}
