import { useEffect } from "react";
import Layout from "../components/Layout";
import Reveal from "../components/Reveal";
import Button from "../components/Button";
import { siteConfig } from "../config/site";
import { setPageMeta } from "../utils/meta";

export default function NotFound() {
  useEffect(() => {
    setPageMeta({ title: `Page Not Found | ${siteConfig.brandName}` });
  }, []);

  return (
    <Layout>
      <section className="max-w-2xl mx-auto px-6 pt-32 pb-28 text-center">
        <Reveal className="flex flex-col items-center gap-5">
          <span className="text-4xl" aria-hidden="true">
            🪷
          </span>
          <h1 className="font-display text-4xl text-ink">Page Not Found</h1>
          <p className="text-ink-soft">
            The page you're looking for doesn't exist. Let's get you back to
            something beautiful.
          </p>
          <Button to="/" variant="primary">
            Back to Home
          </Button>
        </Reveal>
      </section>
    </Layout>
  );
}
