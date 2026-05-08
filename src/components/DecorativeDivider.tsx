import { motion } from "framer-motion";

export default function DecorativeDivider({ className = "" }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`flex items-center justify-center my-6 ${className}`}
    >
      <div className="w-[24px] h-px" style={{ backgroundColor: "var(--accent)" }} />
      <div className="w-1.5 h-1.5 rounded-full mx-2" style={{ border: "1px solid var(--accent)" }} />
      <div className="w-[24px] h-px" style={{ backgroundColor: "var(--accent)" }} />
    </motion.div>
  );
}
