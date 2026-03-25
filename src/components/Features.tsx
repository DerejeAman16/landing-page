"use client";

import { motion } from "framer-motion";
import { MoveRight, Smartphone, UserPlus, Rocket } from "lucide-react";
import Link from "next/link";

const steps = [
    {
        number: "1.",
        title: "Download Our App",
        description: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.",
        icon: Smartphone,
    },
    {
        number: "2.",
        title: "Create A Free Account",
        description: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.",
        icon: UserPlus,
    },
    {
        number: "3.",
        title: "Now Start Your Journey",
        description: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.",
        icon: Rocket,
    },
];

export function Features() {
    return (
        <section id="features" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-6">
                        Our Featured Service That We Provide
                    </h2>
                    <p className="text-text-muted text-base leading-relaxed">
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white p-2 text-center group"
                        >
                            <div className="mb-8 flex justify-center">
                                <div className="w-16 h-16 rounded-2xl bg-[#00A396]/10 text-[#00A396] flex items-center justify-center transition-colors duration-300 group-hover:bg-[#00A396] group-hover:text-white">
                                    <step.icon size={28} />
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-text-main mb-4 flex items-center justify-center gap-2">
                                <span className="text-primary">{step.number}</span> {step.title}
                            </h3>

                            <p className="text-text-muted leading-relaxed mb-6 px-4">
                                {step.description}
                            </p>

                            <Link
                                href="#"
                                className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all"
                            >
                                Learn More <MoveRight size={18} />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
