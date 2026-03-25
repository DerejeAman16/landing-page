import dynamic from "next/dynamic";
import { Navbar } from "@/components/Navbar";
import { ServicesHero } from "@/components/ServicesHero";

const ServiceBenefits = dynamic(() => import("@/components/ServiceBenefits").then(m => ({ default: m.ServiceBenefits })));
const ServiceFeatures = dynamic(() => import("@/components/ServiceFeatures").then(m => ({ default: m.ServiceFeatures })));
const ServiceFAQ = dynamic(() => import("@/components/ServiceFAQ").then(m => ({ default: m.ServiceFAQ })));
const ServiceCTA = dynamic(() => import("@/components/ServiceCTA").then(m => ({ default: m.ServiceCTA })));
const ServiceFooter = dynamic(() => import("@/components/ServiceFooter").then(m => ({ default: m.ServiceFooter })));

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <ServicesHero />
            <ServiceBenefits />
            <ServiceFeatures />
            <ServiceFAQ />
            <ServiceCTA />
            <ServiceFooter />
        </main>
    );
}

