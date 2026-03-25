import { Navbar } from "@/components/Navbar";
import { ContactHero } from "@/components/ContactHero";
import { ContactForm } from "@/components/ContactForm";
import { ContactInfo } from "@/components/ContactInfo";
import { ContactFooter } from "@/components/ContactFooter";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <ContactHero />
            <ContactForm />
            <ContactInfo />
            <ContactFooter />
        </main>
    );
}
