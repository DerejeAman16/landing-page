"use client";

import { motion } from "framer-motion";

export function ContactForm() {
    return (
        <section id="contact-form" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-lg mx-auto space-y-5"
                    onSubmit={(e) => e.preventDefault()}
                >
                    <input
                        type="text"
                        placeholder="Your Name..."
                        className="w-full px-4 py-4 rounded-md border border-gray-200 bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#00A396] transition-colors text-sm"
                    />
                    <input
                        type="email"
                        placeholder="Your Email..."
                        className="w-full px-4 py-4 rounded-md border border-gray-200 bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#00A396] transition-colors text-sm"
                    />
                    <input
                        type="text"
                        placeholder="Your Subject..."
                        className="w-full px-4 py-4 rounded-md border border-gray-200 bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#00A396] transition-colors text-sm"
                    />
                    <textarea
                        placeholder="Your Message..."
                        rows={4}
                        className="w-full px-4 py-4 rounded-md border border-gray-200 bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#00A396] transition-colors text-sm resize-none"
                    />
                    <button
                        type="submit"
                        className="w-full bg-[#00A396] text-white py-4 rounded-md font-semibold hover:bg-[#008f83] transition-all shadow-md hover:shadow-lg text-base cursor-pointer"
                    >
                        Send Message
                    </button>
                </motion.form>
            </div>
        </section>
    );
}
