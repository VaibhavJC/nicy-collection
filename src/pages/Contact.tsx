import { useEffect } from "react";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import InstagramIcon from "../components/icons/InstagramIcon";
import Layout from "../components/Layout";
import Reveal from "../components/Reveal";
import WhatsAppButton from "../components/WhatsAppButton";
import Button from "../components/Button";
import { siteConfig } from "../config/site";
import { getGeneralEnquiryUrl } from "../utils/whatsapp";
import { setPageMeta } from "../utils/meta";

export default function Contact() {
  useEffect(() => {
    setPageMeta({
      title: `Contact | ${siteConfig.brandName}`,
      description:
        "Get in touch with Nicy Collection on WhatsApp or Instagram — handmade jewellery and décor from Nagpur, Bhandara & Lakhni.",
    });
  }, []);

  return (
    <Layout>
      <section className="max-w-4xl mx-auto px-6 lg:px-10 pt-28 sm:pt-32 pb-20 sm:pb-28 text-center">
        <Reveal className="flex flex-col items-center gap-4">
          <span className="text-xs sm:text-sm tracking-[0.25em] uppercase text-gold-dark font-medium">
            Contact
          </span>
          <h1 className="font-display text-4xl sm:text-5xl text-ink text-balance">
            Let's Create Something Beautiful ✨
          </h1>
          <p className="text-ink-soft max-w-md text-base sm:text-lg">
            Reach out on WhatsApp or Instagram — we'd love to hear about
            what you have in mind.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-12 bg-ivory ring-1 ring-champagne rounded-2xl p-8 sm:p-10 flex flex-col items-center gap-6">
          <div>
            <p className="font-display text-2xl text-ink">{siteConfig.brandName}</p>
            <p className="inline-flex items-center gap-1.5 text-ink-soft mt-2 justify-center">
              <MapPin size={16} aria-hidden="true" /> {siteConfig.locationsLabel}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <WhatsAppButton url={getGeneralEnquiryUrl()} label="Chat on WhatsApp" />
            <Button
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              icon={<InstagramIcon size={18} />}
            >
              Follow on Instagram
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="mt-10">
          <p className="text-sm text-ink-soft">
            Looking for something custom?{" "}
            <Link to="/customize" className="text-gold-dark underline underline-offset-2">
              Start your custom order
            </Link>
            .
          </p>
        </Reveal>
      </section>
    </Layout>
  );
}
