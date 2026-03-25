"use client";

import { motion } from "framer-motion";

export function Contact() {
    return (
        <section id="contact" className="py-24 relative overflow-hidden flex items-center justify-center">
            {/* Background Image with Blur */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
                    filter: "blur(8px) brightness(0.7)"
                }}
            ></div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-xl shadow-2xl max-w-2xl mx-auto p-12 text-center"
                >
                    <h2 className="text-3xl font-bold text-text-main mb-4">
                        Still Need Help?
                    </h2>
                    <p className="text-text-muted text-lg mb-8 max-w-lg mx-auto">
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eose.
                    </p>

                    <button className="bg-secondary text-white px-8 py-3.5 rounded font-bold text-lg hover:bg-secondary/90 transition-all shadow-lg shadow-teal-500/30 uppercase tracking-wide">
                        Get In Touch
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
