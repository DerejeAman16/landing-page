"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

export function About() {
    const features = [
        "Built with latest Bootstrap",
        "Awesome Support 24/7",
        "Well documented and structured code"
    ];

    return (
        <section id="about" className="py-20 bg-background-alt overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Left Column: Illustration Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex-1 w-full"
                    >
                        <div className="relative aspect-[4/3] bg-white rounded-2xl shadow-xl border border-gray-100 flex items-center justify-center p-8 group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-secondary/5 to-primary/5 opacity-50 rounded-2xl" />
                            <div className="text-center">
                                <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-secondary">
                                    <span className="text-3xl">👩‍💻</span>
                                </div>
                                <p className="text-text-muted font-medium">Illustration Placeholder</p>
                            </div>

                            {/* Decorative Element */}
                            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-secondary rounded-full opacity-10 filter blur-xl"></div>
                            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary rounded-full opacity-10 filter blur-xl"></div>
                        </div>
                    </motion.div>

                    {/* Right Column: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex-1"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-6 leading-tight">
                            Landik Provide <br className="hidden md:block" />
                            <span className="text-primary">Unique Smart Features</span>
                        </h2>
                        <p className="text-text-muted text-lg mb-8 leading-relaxed">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                        </p>

                        <ul className="space-y-4 mb-8">
                            {features.map((feature, index) => (
                                <li key={index} className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded bg-secondary/10 flex items-center justify-center text-teal-500 shrink-0">
                                        <Check size={14} strokeWidth={3} />
                                    </div>
                                    <span className="text-text-main font-medium">{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <button className="text-secondary font-bold flex items-center gap-2 hover:gap-3 transition-all group">
                            READ MORE <ArrowRight size={18} className="transition-transform" />
                        </button>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
