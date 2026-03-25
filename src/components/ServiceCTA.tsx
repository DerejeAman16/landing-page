"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function ServiceCTA() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative rounded-3xl overflow-hidden shadow-2xl"
                >
                    {/* Dark background with overlay */}
                    <div className="absolute inset-0 bg-slate-900" />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 to-slate-800/80" />

                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#00A396]/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

                    <div className="relative z-10 py-16 px-8 md:py-20 md:px-16 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Still Need Help?
                        </h2>
                        <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                            Due to its widespread use as filler text for layouts, non-readability is of great importance.
                        </p>
                        <Link
                            href="#contact"
                            className="inline-block bg-[#00A396] text-white px-8 py-4 rounded-md font-semibold hover:bg-[#008f83] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                        >
                            Get In Touch
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
