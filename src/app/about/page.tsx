
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AboutHero } from "@/components/AboutHero";
import { TeamSection } from "@/components/TeamSection";
import { ValuesSection } from "@/components/ValuesSection";
import { PartnersSection } from "@/components/PartnersSection";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <div className="pt-20"> {/* Add padding for fixed navbar */}
                <AboutHero />
                <TeamSection />
                <ValuesSection />
                <PartnersSection />
            </div>
            <Footer />
        </main>
    );
}
