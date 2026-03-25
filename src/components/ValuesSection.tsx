import { CheckCircle2 } from "lucide-react";

export function ValuesSection() {
    return (
        <section className="py-20 px-6 bg-white">
            <div className="container mx-auto max-w-6xl">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                            We’re An Aspiring Team Of Coders And Creatives
                        </h2>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <CheckCircle2 className="text-[#00A396] w-6 h-6 shrink-0 mt-1" />
                                <div>
                                    <h3 className="text-xl font-bold text-slate-800 mb-2">We Commit To Our Craft</h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        Because we love what we do, and because we want our clients to feel the same way about our work.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <CheckCircle2 className="text-[#00A396] w-6 h-6 shrink-0 mt-1" />
                                <div>
                                    <h3 className="text-xl font-bold text-slate-800 mb-2">We Dig Deeper In Workspace</h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        We work hard to understand your business needs so that we can deliver the best possible solutions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-lg text-slate-600 space-y-6 leading-relaxed">
                        <p>
                            We started as a small team with a big vision: to create digital experiences that not only look great but also perform exceptionally well. Over the years, we've grown into a diverse group of passionate individuals who bring their unique skills and perspectives to every project.
                        </p>
                        <p>
                            Whether we're building a website, designing an app, or crafting a marketing strategy, our goal remains the same: to help our clients succeed in the digital world.
                        </p>
                        <ul className="grid grid-cols-2 gap-4 mt-8">
                            <li className="bg-slate-50 p-4 rounded-lg text-center">
                                <span className="block text-3xl font-bold text-[#00A396] mb-1">5+</span>
                                <span className="text-sm font-medium text-slate-500 uppercase tracking-wide">Years Experience</span>
                            </li>
                            <li className="bg-slate-50 p-4 rounded-lg text-center">
                                <span className="block text-3xl font-bold text-[#00A396] mb-1">200+</span>
                                <span className="text-sm font-medium text-slate-500 uppercase tracking-wide">Projects Done</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
