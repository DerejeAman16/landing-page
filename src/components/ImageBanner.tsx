"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function ImageBanner() {
    return (
        <section className="py-10 bg-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative w-full h-[300px] md:h-[450px] rounded-[30px] overflow-hidden group shadow-2xl"
                >
                    {/* Optimized background image via next/image */}
                    <Image
                        src="/Banner/ImageBanner.jpg"
                        alt="Banner Background"
                        fill
                        sizes="(max-width: 768px) 100vw, 90vw"
                        className="object-cover object-center"
                        priority={false}
                    />

                    {/* Colour overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#08979c]/80 to-[#006d75]/80 z-10 transition-all group-hover:opacity-70" />

                    {/* Content Overlay */}
                    <div className="absolute inset-0 z-20 flex items-center justify-center text-center p-6">
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl leading-tight">
                            Landing Design template for your startup.
                        </h2>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute bottom-10 right-10 z-20 hidden md:block">
                        <div className="w-20 h-20 border-2 border-white/30 rounded-full animate-ping opacity-20" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
