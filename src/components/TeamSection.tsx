"use client";

import { motion } from "framer-motion";
import { Twitter, Linkedin, Github } from "lucide-react";

const team = [
    {
        name: "Hannah Sharpe",
        role: "CEO, Co-Founder",
        image: "/Team-Member/BlackGirl.jpg",
    },
    {
        name: "Clee Carter",
        role: "Managing Partner",
        image: "/Team-Member/Men.avif",
    },
    {
        name: "Mary Merrill",
        role: "Operations Director",
        image: "/Team-Member/white.avif",
    },
];

export function TeamSection() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-6">
                        Team Better Crew For Your Startup
                    </h2>
                    <p className="text-text-muted text-base leading-relaxed">
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="text-center group"
                        >
                            <div className="relative w-48 h-48 mx-auto mb-8">
                                <div className="absolute inset-0 bg-primary/10 rounded-full scale-110 group-hover:scale-125 transition-transform duration-500" />
                                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl shadow-primary/10">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-text-main mb-1 group-hover:text-primary transition-colors">
                                {member.name}
                            </h3>
                            <p className="text-text-muted text-sm font-medium mb-6 uppercase tracking-wider">
                                {member.role}
                            </p>

                            <div className="flex justify-center gap-3">
                                <a href="#" className="w-9 h-9 rounded-full bg-primary/5 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1">
                                    <Twitter size={16} />
                                </a>
                                <a href="#" className="w-9 h-9 rounded-full bg-primary/5 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1">
                                    <Linkedin size={16} />
                                </a>
                                <a href="#" className="w-9 h-9 rounded-full bg-primary/5 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1">
                                    <Github size={16} />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
