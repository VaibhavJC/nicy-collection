import { Suspense, lazy } from "react";
import { HashRouter, Routes, Route, useParams } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

const Home = lazy(() => import("./pages/Home"));
const Collections = lazy(() => import("./pages/Collections"));
const Category = lazy(() => import("./pages/Category"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));
const Customize = lazy(() => import("./pages/Customize"));
const Occasions = lazy(() => import("./pages/Occasions"));
const OccasionDetail = lazy(() => import("./pages/OccasionDetail"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

function RouteFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-ivory">
      <span className="font-display text-xl italic text-ink-soft">
        Nicy Collection ✨
      </span>
    </div>
  );
}

// Remount the page when the slug param changes, so any local filter/UI
// state resets naturally instead of via setState-in-effect.
function KeyedByParam({ paramName, children }: { paramName: string; children: React.ReactNode }) {
  const params = useParams();
  return <span key={params[paramName]}>{children}</span>;
}

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collections" element={<Collections />} />
          <Route
            path="/collections/:categorySlug"
            element={
              <KeyedByParam paramName="categorySlug">
                <Category />
              </KeyedByParam>
            }
          />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="/customize" element={<Customize />} />
          <Route path="/occasions" element={<Occasions />} />
          <Route
            path="/occasions/:occasionSlug"
            element={
              <KeyedByParam paramName="occasionSlug">
                <OccasionDetail />
              </KeyedByParam>
            }
          />
          <Route path="/our-story" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </HashRouter>
  );
}
