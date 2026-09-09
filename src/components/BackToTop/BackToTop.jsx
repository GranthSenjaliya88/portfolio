import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const update = () => setVisible(window.scrollY > 900);
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <a href="#home" className="back-to-top" data-visible={visible} aria-label="Back to top" tabIndex={visible ? 0 : -1}>
      <ArrowUp size={18} />
    </a>
  );
}
