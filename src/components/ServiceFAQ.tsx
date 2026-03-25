"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqItems = [
    {
        question: "What does royalty free mean?",
        answer: "Royalty free means that you only need to pay once to use the content, without any additional fees or royalties for future use. This gives you the freedom to use it in multiple projects without worrying about recurring costs.",
    },
    {
        question: "What do you mean by item and end product?",
        answer: "An item is the original file or resource you purchase. An end product is the final result of using that item in your project. For example, if you buy a template, the template is the item, and the website you build with it is the end product.",
    },
    {
        question: "What are some examples of permitted end products?",
        answer: "Permitted end products include websites, web applications, mobile apps, presentations, documents, and other digital or physical products where the item is integrated and not distributed as a standalone product.",
    },
    {
        question: "Am i allowed to modify the item that i purchased?",
        answer: "Yes, you are allowed to modify the items you purchase. You can customize colors, layouts, content, and other aspects to fit your specific needs and project requirements.",
    },
    {
        question: "I'm not sure if my use is covered. what should i do?",
        answer: "If you're unsure whether your intended use is covered by the license, please don't hesitate to contact our support team. We'll be happy to help clarify and guide you through the licensing terms.",
    },
];

export function ServiceFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-6 max-w-3xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                        Want To Ask Something From Us?
                    </h2>
                    <p className="text-slate-500 text-lg">
                        Due to its widespread use as filler text for layouts, non-readability is of great importance.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100"
                        >
                            <button
                                onClick={() =>
                                    setOpenIndex(openIndex === index ? null : index)
                                }
                                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors cursor-pointer"
                            >
                                <span className="font-semibold text-slate-800 text-base pr-4">
                                    {item.question}
                                </span>
                                <ChevronDown
                                    size={20}
                                    className={`text-slate-400 shrink-0 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                                        }`}
                                />
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-5 text-slate-500 leading-relaxed">
                                            {item.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
