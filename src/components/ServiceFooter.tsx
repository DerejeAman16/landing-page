"use client";

import Link from "next/link";
import { Facebook, Twitter, Globe } from "lucide-react";

export function ServiceFooter() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-900 text-white">
            {/* Top section - Logo and Subscribe */}
            <div className="container mx-auto px-6 pt-16 pb-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-slate-700/50">
                    <Link href="/" className="text-2xl font-bold flex items-center gap-2">
                        <div className="w-8 h-8 bg-[#00A396] rounded-lg flex items-center justify-center text-white font-bold text-sm">
                            L
                        </div>
                        <span>CYBER</span>
                    </Link>

                    <div className="flex items-center gap-3">
                        <input
                            type="email"
                            placeholder="Email"
                            className="bg-slate-800 border border-slate-700 rounded-md px-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#00A396] transition-colors w-60"
                        />
                        <button className="bg-[#00A396] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#008f83] transition-all text-sm">
                            Subcribe
                        </button>
                    </div>
                </div>

                {/* Links and Social */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-8">
                    <div className="flex items-center gap-8 text-sm text-slate-400">
                        <Link href="#" className="hover:text-white transition-colors">
                            Demo
                        </Link>
                        <Link href="#" className="hover:text-white transition-colors">
                            Pages
                        </Link>
                        <Link href="#" className="hover:text-white transition-colors">
                            Support
                        </Link>
                    </div>

                    <div className="flex items-center gap-4">
                        <a
                            href="#"
                            className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-[#00A396] hover:text-white transition-all"
                        >
                            <Facebook size={18} />
                        </a>
                        <a
                            href="#"
                            className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-[#00A396] hover:text-white transition-all"
                        >
                            <Twitter size={18} />
                        </a>
                        <a
                            href="#"
                            className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-[#00A396] hover:text-white transition-all"
                        >
                            <Globe size={18} />
                        </a>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center pt-6 border-t border-slate-700/50">
                    <p className="text-slate-500 text-sm">
                        © {currentYear} Cyber. Design and coded by ThemesBoss.
                    </p>
                </div>
            </div>
        </footer>
    );
}
