"use client";

import { motion } from "framer-motion";
import Image from "next/image"

const features = [
    {
        badge: "PERFACT DESIGN",
        title: "It's Everything You'll Ever Need.",
        description:
            "Create custom landing pages with Cyber that converts more visitors than any website. With lots of unique blocks, you can easily build a page without coding.",
        imagePosition: "right" as const,
        imageSrc: "/feature-1.jpg",
    },
    {
        badge: "USER INTERFACE",
        title: "Unlimited Features Awaiting For You",
        description:
            "Create custom landing pages with Cyber that converts more visitors than any website. With lots of unique blocks, you can easily build a page without coding.",
        imagePosition: "left" as const,
        imageSrc: "/feature-2.jpg",
    },
];

export function ServiceFeatures() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6 space-y-32">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className={`flex flex-col ${feature.imagePosition === "right"
                            ? "md:flex-row"
                            : "md:flex-row-reverse"
                            } items-center gap-12 md:gap-16`}
                    >
                        {/* Text Content */}
                        <div className="flex-1 text-center md:text-left">
                            <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-4 py-2 rounded-full mb-4">
                                {feature.badge}
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 leading-tight">
                                {feature.title}
                            </h2>
                            <p className="text-slate-500 leading-relaxed mb-8 text-lg">
                                {feature.description}
                            </p>
                            <button className="bg-[#00A396] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#008f83] transition-all hover:-translate-y-0.5">
                                Explore
                            </button>
                        </div>

                        {/* Image */}
                        <div className="flex-1 w-full">
                            <div className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl">
                                <Image
                                    src="/servicecommon.jpg"
                                    alt={feature.badge}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
