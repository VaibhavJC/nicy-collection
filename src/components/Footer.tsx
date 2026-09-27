import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import InstagramIcon from "./icons/InstagramIcon";
import { siteConfig } from "../config/site";
import { getGeneralEnquiryUrl } from "../utils/whatsapp";

const footerLinks = [
  { label: "Home", to: "/" },
  { label: "Collections", to: "/collections" },
  { label: "Occasions", to: "/occasions" },
  { label: "Customize", to: "/customize" },
  { label: "Our Story", to: "/our-story" },
  { label: "Contact", to: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-ivory/90 pb-20 lg:pb-0">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <p className="font-display text-2xl text-ivory">{siteConfig.brandName}</p>
          <p className="mt-1 text-sm tracking-[0.2em] uppercase text-gold">
            {siteConfig.tagline} ✨
          </p>
          <p className="mt-4 text-sm text-ivory/70 max-w-xs">
            {siteConfig.shortDescription}
          </p>
        </div>

        <nav aria-label="Footer">
          <p className="text-xs uppercase tracking-[0.2em] text-ivory/50 mb-3">Explore</p>
          <ul className="space-y-2 text-sm">
            {footerLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="hover:text-gold transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-ivory/50 mb-3">Connect</p>
          <div className="flex gap-3 mb-4">
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Nicy Collection on Instagram"
              className="p-2.5 rounded-full border border-ivory/20 hover:border-gold hover:text-gold transition-colors"
            >
              <InstagramIcon size={18} />
            </a>
            <a
              href={getGeneralEnquiryUrl()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with Nicy Collection on WhatsApp"
              className="p-2.5 rounded-full border border-ivory/20 hover:border-gold hover:text-gold transition-colors"
            >
              <MessageCircle size={18} />
            </a>
          </div>
          <p className="text-sm text-ivory/70">{siteConfig.locationsLabel}</p>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <p className="text-center text-xs text-ivory/50 py-5 px-4">
          © {siteConfig.copyrightYear} {siteConfig.brandName}. Handmade with love ✨
        </p>
      </div>
    </footer>
  );
}
