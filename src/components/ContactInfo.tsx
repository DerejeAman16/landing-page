"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Clock } from "lucide-react";

const contactInfo = [
    {
        icon: Mail,
        title: "Email",
        lines: ["information@gmail.com"],
    },
    {
        icon: Phone,
        title: "Telephone",
        lines: ["+(485) 874 249 23"],
    },
    {
        icon: Clock,
        title: "Business Hours",
        lines: ["Monday To Friday", "9:00am To 6:00pm (GMT)"],
    },
];

export function ContactInfo() {
    return (
        <section className="py-16 bg-white border-t border-gray-100">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-10 max-w-4xl mx-auto">
                    {contactInfo.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="text-center"
                        >
                            <div className="w-14 h-14 rounded-xl bg-[#00A396]/10 text-[#00A396] flex items-center justify-center mx-auto mb-5">
                                <item.icon size={24} />
                            </div>
                            <h3 className="text-lg font-bold text-slate-800 mb-2">
                                {item.title}
                            </h3>
                            {item.lines.map((line, i) => (
                                <p key={i} className="text-slate-500 text-sm">
                                    {line}
                                </p>
                            ))}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
