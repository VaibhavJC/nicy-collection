import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import { siteConfig } from "../config/site";
import { getGeneralEnquiryUrl } from "../utils/whatsapp";
import SafeImage from "./SafeImage";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Collections", to: "/collections" },
  { label: "Occasions", to: "/occasions" },
  { label: "Customize", to: "/customize" },
  { label: "Our Story", to: "/our-story" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-ivory/95 backdrop-blur shadow-[0_1px_0_0_rgba(0,0,0,0.06)]" : "bg-ivory/70 backdrop-blur-sm"
      }`}
    >
      <nav
        className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-10 py-3"
        aria-label="Primary"
      >
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <SafeImage
            src="/images/logo/nicy-logo-thumb.webp"
            alt={`${siteConfig.brandName} logo`}
            className="h-11 w-11 rounded-full object-cover"
            loading="eager"
          />
          <span className="font-display text-xl sm:text-2xl tracking-wide text-ink">
            {siteConfig.brandName}
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-8 font-sans text-sm tracking-wide">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `pb-1 border-b transition-colors ${
                    isActive
                      ? "text-gold-dark border-gold-dark"
                      : "text-ink-soft border-transparent hover:text-ink hover:border-champagne"
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a
            href={getGeneralEnquiryUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-forest text-ivory px-5 py-2.5 text-sm font-medium hover:bg-[#28361f] transition-colors"
          >
            <MessageCircle size={16} aria-hidden="true" />
            WhatsApp
          </a>
        </div>

        <button
          type="button"
          className="lg:hidden p-2 text-ink"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-ivory border-t border-champagne"
          >
            <ul className="flex flex-col px-6 py-4 gap-1">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    end={link.to === "/"}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block py-3 text-lg font-display ${
                        isActive ? "text-gold-dark" : "text-ink"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href={getGeneralEnquiryUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-forest text-ivory px-5 py-3 text-sm font-medium w-full justify-center"
                >
                  <MessageCircle size={16} aria-hidden="true" />
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
