"use client";

import { motion } from "framer-motion";
import { Monitor, Code, Sliders, Globe, Wind, Eye } from "lucide-react";

const features = [
    {
        title: "Fully Responsive",
        description: "It has survived not only five centuries, but also the leap into electronic typesetting.",
        icon: <Monitor className="w-6 h-6" />,
        image: "/Product Doc/Fully Responsive.png",
    },
    {
        title: "W3c Valid Code",
        description: "It has survived not only five centuries, but also the leap into electronic typesetting.",
        icon: <Code className="w-6 h-6" />,
        image: "/Product Doc/W3c Valid Code.png",
    },
    {
        title: "Easy to customize",
        description: "It has survived not only five centuries, but also the leap into electronic typesetting.",
        icon: <Sliders className="w-6 h-6" />,
        image: "/Product Doc/Easy to customize.jpg",
    },
    {
        title: "Browser Compatibility",
        description: "It has survived not only five centuries, but also the leap into electronic typesetting.",
        icon: <Globe className="w-6 h-6" />,
        image: "/Product Doc/Browser Compatibility.png",
    },
    {
        title: "Based On Tailwind Css",
        description: "It has survived not only five centuries, but also the leap into electronic typesetting.",
        icon: <Wind className="w-6 h-6" />,
        image: "/Product Doc/Based On Tailwind Css.png",
    },
    {
        title: "Retina Ready",
        description: "It has survived not only five centuries, but also the leap into electronic typesetting.",
        icon: <Eye className="w-6 h-6" />,
        image: "/Product Doc/Retina Ready.png",
    },
];

export function ProductDoc() {
    return (
        <section className="py-24 bg-background-alt">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-6">
                        Product Doc
                    </h2>
                    <p className="text-text-muted text-base leading-relaxed">
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group"
                        >
                            {/* Product Image */}
                            <div className="aspect-video bg-gray-50 rounded-xl mb-8 overflow-hidden relative border border-gray-100 group-hover:border-primary/20">
                                <img
                                    src={feature.image}
                                    alt={feature.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute top-2 left-2 flex gap-1 z-10">
                                    <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 transition-colors group-hover:bg-primary group-hover:text-white">
                                    {feature.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-text-main mb-3 group-hover:text-primary transition-colors">
                                        {feature.title}
                                    </h3>
                                    <p className="text-text-muted text-sm leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

