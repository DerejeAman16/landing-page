import Link from "next/link";
import { Heart } from "lucide-react";

export function ContactFooter() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white border-t border-gray-100">
            <div className="container mx-auto px-6 py-16">
                {/* Newsletter + Links grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
                    {/* Subscribe section */}
                    <div className="lg:col-span-1">
                        <h4 className="font-bold text-slate-800 mb-1">
                            Subcribe Our Newslatter
                        </h4>
                        <div className="w-8 h-0.5 bg-[#00A396] mb-6" />
                        <div className="flex items-center gap-2">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="flex-1 px-4 py-3 rounded-md border border-gray-200 bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#00A396] transition-colors text-sm"
                            />
                            <button className="bg-[#00A396] text-white px-5 py-3 rounded-md font-semibold hover:bg-[#008f83] transition-all text-sm whitespace-nowrap">
                                Get Started
                            </button>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h4 className="font-bold text-slate-800 mb-1">Social</h4>
                        <div className="w-8 h-0.5 bg-[#00A396] mb-6" />
                        <ul className="space-y-3 text-sm text-slate-500">
                            <li>
                                <Link href="#" className="hover:text-[#00A396] transition-colors">Blog</Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-[#00A396] transition-colors">Facebook</Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-[#00A396] transition-colors">Instagram</Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-[#00A396] transition-colors">Twitter</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h4 className="font-bold text-slate-800 mb-1">Product</h4>
                        <div className="w-8 h-0.5 bg-[#00A396] mb-6" />
                        <ul className="space-y-3 text-sm text-slate-500">
                            <li>
                                <Link href="#" className="hover:text-[#00A396] transition-colors">Service</Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-[#00A396] transition-colors">Features</Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-[#00A396] transition-colors">Credit</Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-[#00A396] transition-colors">FAQ</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Support Links */}
                    <div>
                        <h4 className="font-bold text-slate-800 mb-1">Support</h4>
                        <div className="w-8 h-0.5 bg-[#00A396] mb-6" />
                        <ul className="space-y-3 text-sm text-slate-500">
                            <li>
                                <Link href="#" className="hover:text-[#00A396] transition-colors">Privcy</Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-[#00A396] transition-colors">Tearms</Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-[#00A396] transition-colors">Help</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-100 pt-8">
                    {/* Heart icon */}
                    <div className="flex justify-center mb-4">
                        <div className="w-12 h-12 rounded-full bg-[#00A396]/10 flex items-center justify-center">
                            <Heart size={20} className="text-[#00A396] fill-[#00A396]" />
                        </div>
                    </div>

                    {/* Copyright */}
                    <p className="text-center text-slate-400 text-sm">
                        © {currentYear} Cyber. Design and coded by ThemesBoss.
                    </p>
                </div>
            </div>
        </footer>
    );
}
