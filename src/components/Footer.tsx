import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Send } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-footer-bg pt-20 pb-10 text-white/60">
            <div className="container mx-auto px-6">
                {/* Top Row: Logo and Nav */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-10 pb-12 border-b border-white/5">
                    <Link href="/" className="text-2xl font-bold text-white flex items-center gap-2">
                        {/* Antler/Reindeer Icon */}
                        <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 2C14 6 10 8 8 12C6 16 8 20 10 22C12 24 14 28 16 30C18 28 20 24 22 22C24 20 26 16 24 12C22 8 18 6 16 2Z" fill="#08979c" />
                        </svg>
                        <span className="uppercase tracking-wide">Cyber</span>
                    </Link>

                    <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
                        <Link href="/" className="text-white hover:text-primary transition-colors font-medium">Home</Link>
                        <span className="text-white/20">—</span>
                        <Link href="/services" className="text-white hover:text-primary transition-colors font-medium">Services</Link>
                        <span className="text-white/20">—</span>
                        <Link href="/about" className="text-white hover:text-primary transition-colors font-medium">About Us</Link>
                        <span className="text-white/20">—</span>
                        <Link href="/contact" className="text-white hover:text-primary transition-colors font-medium">Contact</Link>
                    </div>
                </div>

                {/* Bottom Row: Copyright and Socials */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-10">
                    <p className="text-sm">
                        © {currentYear} Cyber. Design and coded by <span className="text-white font-medium hover:text-primary transition-colors cursor-pointer">ThemesBoss</span>.
                    </p>

                    <div className="flex items-center gap-4">
                        <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1">
                            <Facebook size={18} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1">
                            <Twitter size={18} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1">
                            <Instagram size={18} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1">
                            <Linkedin size={18} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
