"use client";

import { motion } from "framer-motion";
import Link from "next/link";
export function CTA() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-primary rounded-[40px] p-10 md:p-16 lg:px-24 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden"
                >
                    {/* Decorative patterns */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -translate-x-1/2 translate-y-1/2" />

                    <div className="text-left max-w-2xl relative z-10">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                            Get Started With Cyber
                        </h2>
                        <p className="text-lg text-white/80 leading-relaxed font-medium">
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </p>
                    </div>

                    <div className="shrink-0 relative z-10">
                        <Link href='/contact'>
                            <button className="bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all shadow-xl hover:-translate-y-1 transform active:scale-95">
                                Get Started
                            </button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
