"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { twMerge } from "tailwind-merge";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: "About Us", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <nav
            className={twMerge(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled ? "bg-white shadow-md py-3" : "bg-white shadow-sm py-4"
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-xl font-bold text-text-main flex items-center gap-2">
                    {/* Antler/Reindeer Icon */}
                    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 2C14 6 10 8 8 12C6 16 8 20 10 22C12 24 14 28 16 30C18 28 20 24 22 22C24 20 26 16 24 12C22 8 18 6 16 2Z" fill="#08979c" />
                        <path d="M12 8C10 4 6 2 4 2C6 4 7 6 8 8C9 10 10 10 12 8Z" fill="#08979c" opacity="0.7" />
                        <path d="M20 8C22 4 26 2 28 2C26 4 25 6 24 8C23 10 22 10 20 8Z" fill="#08979c" opacity="0.7" />
                    </svg>
                    <span className="uppercase tracking-wide">Landik</span>
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-text-main hover:text-primary font-medium transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <button className="bg-primary text-white px-7 py-2.5 rounded-full font-semibold hover:bg-primary/90 transition-all cursor-pointer hover:-translate-y-0.5">
                        Contact US
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-text-main"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100 p-6 flex flex-col gap-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-text-main font-medium py-2 hover:text-primary"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <button className="bg-primary text-white px-6 py-3 rounded-full font-semibold w-full mt-2 cursor-pointer">
                        Buy Now
                    </button>
                </div>
            )}
        </nav>
    );
}
