import { NavLink } from "react-router-dom";
import { Home, Sparkles, Wand2, MessageCircle } from "lucide-react";
import { getGeneralEnquiryUrl } from "../utils/whatsapp";

const items = [
  { label: "Home", to: "/", icon: Home, end: true },
  { label: "Collections", to: "/collections", icon: Sparkles, end: false },
  { label: "Customize", to: "/customize", icon: Wand2, end: false },
];

export default function MobileBottomNav() {
  return (
    <nav
      className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-ivory/95 backdrop-blur border-t border-champagne pb-[env(safe-area-inset-bottom,0px)]"
      aria-label="Quick actions"
    >
      <ul className="grid grid-cols-4">
        {items.map(({ label, to, icon: Icon, end }) => (
          <li key={to}>
            <NavLink
              to={to}
              end={end}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center gap-1 py-2.5 text-[11px] font-medium ${
                  isActive ? "text-gold-dark" : "text-ink-soft"
                }`
              }
            >
              <Icon size={20} aria-hidden="true" />
              {label}
            </NavLink>
          </li>
        ))}
        <li>
          <a
            href={getGeneralEnquiryUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-1 py-2.5 text-[11px] font-medium text-forest"
          >
            <MessageCircle size={20} aria-hidden="true" />
            WhatsApp
          </a>
        </li>
      </ul>
    </nav>
  );
}
