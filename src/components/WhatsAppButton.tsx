import { MessageCircle } from "lucide-react";
import Button from "./Button";

interface WhatsAppButtonProps {
  url: string;
  label?: string;
  className?: string;
  variant?: "whatsapp" | "outline";
}

export default function WhatsAppButton({
  url,
  label = "Enquire on WhatsApp",
  className = "",
  variant = "whatsapp",
}: WhatsAppButtonProps) {
  return (
    <Button
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      variant={variant}
      className={className}
      icon={<MessageCircle size={18} aria-hidden="true" />}
    >
      {label}
    </Button>
  );
}
