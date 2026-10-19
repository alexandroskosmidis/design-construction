"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowRight,
  ArrowUpRight,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Menu,
  Phone,
  X,
} from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import logoMark from "@/assets/logo-mark.png";
import logoMarkOnDark from "@/assets/logo-mark-on-dark.png";

const nav = [
  { to: "/", label: "Αρχική" },
  { to: "/about", label: "Σχετικά με εμάς" },
  { to: "/services", label: "Υπηρεσίες" },
  { to: "/projects", label: "Έργα" },
  { to: "/contact", label: "Επικοινωνία" },
] as const;

export function Brand({ variant = "light" }: { variant?: "light" | "dark" }) {
  return (
    <Link href="/" className="brand" aria-label="DESIGN CONSTRUCTION — Αρχική">
      <img
        src={(variant === "dark" ? logoMarkOnDark : logoMark).src}
        alt=""
        className="brand-mark"
        width={66}
        height={56}
      />
      <span className="brand-name">
        DESIGN<span>CONSTRUCTION</span>
        <span className="brand-sub">ΜΕΛΕΤΗ · ΚΑΤΑΣΚΕΥΗ · ΕΠΙΒΛΕΨΗ</span>
      </span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <Brand />
        <nav className="desktop-nav" aria-label="Κύρια πλοήγηση">
          {nav.map((item) => (
            <Link
              key={item.to}
              href={item.to}
              data-status={pathname === item.to ? "active" : undefined}
              className="nav-link"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Button variant="studio" asChild className="header-cta">
          <Link href="/contact">
            Επικοινωνήστε μαζί μας <ArrowUpRight />
          </Link>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="mobile-toggle"
          aria-label={open ? "Κλείσιμο μενού" : "Άνοιγμα μενού"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      {open && (
        <nav
          id="mobile-navigation"
          className="mobile-nav"
          aria-label="Πλοήγηση κινητού"
          onKeyDown={(e) => {
            if (e.key === "Escape") setOpen(false);
          }}
        >
          {nav.map((item) => (
            <Link key={item.to} href={item.to} onClick={() => setOpen(false)} className="nav-link">
              {item.label}
            </Link>
          ))}
          <Button variant="studio" asChild>
            <Link href="/contact" onClick={() => setOpen(false)}>
              Επικοινωνήστε μαζί μας <ArrowUpRight />
            </Link>
          </Button>
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="wrap footer-main">
        <div>
          <Brand variant="dark" />
          <p>
            Χαλικιώτης Θ. Γεώργιος — Πολιτικός Μηχανικός ΤΕ. Μελέτη, κατασκευή και ανακαίνιση με
            συνέπεια στη λεπτομέρεια.
          </p>
        </div>
        <nav className="footer-nav" aria-label="Πλοήγηση υποσέλιδου">
          <span className="footer-label">ΠΛΟΗΓΗΣΗ</span>
          {nav.map((item) => (
            <Link key={item.to} href={item.to}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div>
          <span className="footer-label">ΕΠΙΚΟΙΝΩΝΙΑ</span>
          <ul className="footer-contact">
            <li>
              <a href="tel:+36973395072">
                <Phone size={15} /> +36973395072
              </a>
            </li>
            <li>
              <a href="mailto:ghalik@hotmail.com">
                <Mail size={15} /> ghalik@hotmail.com
              </a>
            </li>
            <li>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Alimos,Athens,Greece"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin size={15} /> Άλιμος, Αθήνα
              </a>
            </li>
          </ul>
          <div className="footer-social">
            <a
              href="https://www.facebook.com/g.chalikiotis?rdid=zi5V76Sq3JPHg036&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F192zzdtX6S%2F#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook — DESIGN CONSTRUCTION"
            >
              <Facebook size={16} />
            </a>
            <a
              href="https://www.instagram.com/chalikiotis_construction"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram — DESIGN CONSTRUCTION"
            >
              <Instagram size={16} />
            </a>
          </div>
          <div className="footer-map">
            <iframe
              src="https://www.google.com/maps?q=Alimos,Athens,Greece&output=embed"
              title="Χάρτης τοποθεσίας — Άλιμος, Αθήνα"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a
              className="footer-map-link"
              href="https://www.google.com/maps/search/?api=1&query=Alimos,Athens,Greece"
              target="_blank"
              rel="noopener noreferrer"
            >
              Άνοιγμα στο Άλιμος <ArrowUpRight size={12} />
            </a>
          </div>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <span>
          © {new Date().getFullYear()} Design Construction — Χαλικιώτης Θ. Γεώργιος. Με επιφύλαξη
          παντός δικαιώματος.
        </span>
      </div>
    </footer>
  );
}

export function Cta() {
  return (
    <section className="cta">
      <div className="wrap cta-inner">
        <div>
          <div className="eyebrow">ΤΟ ΕΠΟΜΕΝΟ ΒΗΜΑ</div>
          <h2>
            Το επόμενο έργο ξεκινά
            <br />
            με τη δική σας ιδέα.
          </h2>
        </div>
        <Button variant="studio" asChild>
          <Link href="/contact">
            Ας συζητήσουμε το έργο σας <ArrowUpRight />
          </Link>
        </Button>
      </div>
    </section>
  );
}

export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          node.classList.add("is-visible");
          observer.unobserve(node);
        }
      },
      { threshold: 0.08 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}

export function PageHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="page-heading">
      <div className="wrap">
        <div className="eyebrow">{eyebrow}</div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}

export function TextLink({
  to,
  children,
}: {
  to: "/about" | "/services" | "/projects" | "/contact";
  children: ReactNode;
}) {
  return (
    <Button variant="text" asChild>
      <Link href={to}>
        {children}
        <ArrowRight />
      </Link>
    </Button>
  );
}
