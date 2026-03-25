"use client";

import { motion } from "framer-motion";
import { Compass, LayoutGrid, Link2 } from "lucide-react";

const benefits = [
    {
        icon: Compass,
        title: "Easy access",
        description:
            "Take Ehya wherever you go so that you know what's going on with your money at all times.",
    },
    {
        icon: LayoutGrid,
        title: "Budgets that work",
        description:
            "Create budgets you can actually stick to, and can actually see how you're spending your money.",
    },
    {
        icon: Link2,
        title: "Total control",
        description:
            "Take a full control of your expenses. Landy will control of help you to do that anywhere anytime.",
    },
];

export function ServiceBenefits() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-10">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="group text-center md:text-left"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-[#00A396]/10 text-[#00A396] flex items-center justify-center mb-6 mx-auto md:mx-0 group-hover:bg-[#00A396] group-hover:text-white transition-colors duration-300">
                                <benefit.icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-[#00A396] transition-colors duration-300">
                                {benefit.title}
                            </h3>
                            <p className="text-slate-500 leading-relaxed">
                                {benefit.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
