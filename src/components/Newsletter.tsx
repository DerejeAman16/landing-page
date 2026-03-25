"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";

export function Newsletter() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-6">
                        Subcribe Of Our New Versions
                    </h2>
                    <p className="text-text-muted text-base leading-relaxed mb-12 max-w-2xl mx-auto">
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>

                    <motion.form
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative max-w-xl mx-auto"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div className="flex flex-col sm:flex-row gap-0 overflow-hidden rounded-full border border-gray-200 shadow-lg focus-within:border-primary transition-colors">
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="flex-grow px-8 py-5 text-text-main focus:outline-none bg-white"
                                required
                            />
                            <button className="bg-primary text-white px-10 py-5 font-bold hover:bg-primary/90 transition-all flex items-center justify-center gap-2 group">
                                Subcribe <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </div>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}
