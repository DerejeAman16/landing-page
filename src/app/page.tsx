import dynamic from "next/dynamic";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";

const ImageBanner = dynamic(() => import("@/components/ImageBanner").then(m => ({ default: m.ImageBanner })));
const Features = dynamic(() => import("@/components/Features").then(m => ({ default: m.Features })));
const ProductDoc = dynamic(() => import("@/components/ProductDoc").then(m => ({ default: m.ProductDoc })));
const TeamSection = dynamic(() => import("@/components/TeamSection").then(m => ({ default: m.TeamSection })));
const CTA = dynamic(() => import("@/components/CTA").then(m => ({ default: m.CTA })));
const Newsletter = dynamic(() => import("@/components/Newsletter").then(m => ({ default: m.Newsletter })));
const Footer = dynamic(() => import("@/components/Footer").then(m => ({ default: m.Footer })));

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ImageBanner />
      <Features />
      <ProductDoc />
      <TeamSection />
      <CTA />
      <Newsletter />
      <Footer />
    </main>
  );
}

