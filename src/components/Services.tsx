"use client";

import { motion } from "framer-motion";
import { Layout, Settings, Lock } from "lucide-react";

const services = [
    {
        icon: Layout,
        title: "Easy access",
        description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur."
    },
    {
        icon: Settings,
        title: "Budgets that work",
        description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur."
    },
    {
        icon: Lock,
        title: "Total control",
        description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur."
    }
];

export function Services() {
    return (
        <section id="services" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <div className="relative inline-block">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-secondary/10 rounded-full blur-xl -z-10"></div>
                        <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4 relative z-10">
                            Solution Made <span className="text-secondary">For You.</span>
                        </h2>
                    </div>
                    <p className="text-text-muted text-lg">
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eose.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-10">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group text-center sm:text-left"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center mb-6 mx-auto sm:mx-0 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                                <service.icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-text-main mb-3 group-hover:text-secondary transition-colors duration-300">
                                {service.title}
                            </h3>
                            <p className="text-text-muted leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
