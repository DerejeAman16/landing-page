"use client";

import { motion } from "framer-motion";
import { ChevronsDown } from "lucide-react";

export function Hero() {
    return (
        <section className="relative pt-[124px] pb-20 overflow-hidden bg-[url('/Hero/Girl.jpg')] bg-cover bg-center">
            {/* Background Image Overlay */}
            <div className="bg-[url('/Hero/Frame.png')] absolute inset-0 bg-no-repeat bg-center bg-cover pointer-events-none"></div>


            <div className="container mx-auto px-6 relative z-10">
                <div className="flex justify-center">
                    {/* Centered White Box */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-[700px] text-center w-full bg-white border-[10px] border-[#0aa195]/10 py-[50px] px-6 md:px-10 shadow-2xl"
                    >
                        {/* Overline / Badge */}
                        <div className="flex items-center justify-center gap-1 mb-6">
                            <span className="h-[2px] w-10 bg-[#0aa195]"></span>
                            <span className="text-sm font-semibold text-[#0aa195] uppercase tracking-[4px] font-nunito px-1">
                                Awesome
                            </span>
                            <span className="h-[2px] w-10 bg-[#0aa195]"></span>
                        </div>

                        <h1 className="text-3xl md:text-[54px] font-bold leading-[1.3] md:leading-[1.4] text-text-main mb-6 font-nunito">
                            Welcome To The <span className="text-text-main">Cyber Ui kit</span>
                        </h1>

                        <p className="text-base md:text-lg text-text-muted mb-10 max-w-lg mx-auto leading-relaxed font-nunito">
                            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
                            impedit quo minus id quod maxime The standard chunk of those interested.
                        </p>

                        {/* Scroll down button */}
                        <div className="flex justify-center">
                            <a
                                href="#features"
                                className="w-[50px] h-[50px] rounded-full bg-[#0aa195] text-white flex items-center justify-center hover:bg-[#0aa195]/90 transition-all hover:scale-110 shadow-lg shadow-[#0aa195]/25"
                            >
                                <ChevronsDown size={24} />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>


    );
}
