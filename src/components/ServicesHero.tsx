import Link from "next/link";

export function ServicesHero() {
    return (
        <section className="pt-32 pb-20 px-6 md:pt-40 md:pb-28 relative overflow-hidden bg-white">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -z-10 rounded-l-[100px] opacity-60 hidden lg:block" />
            <div className="absolute bottom-0 left-10 w-24 h-24 bg-teal-50 rounded-full -z-10" />
            <div className="absolute top-20 right-20 w-16 h-16 bg-teal-50 rounded-full -z-10 opacity-50" />

            <div className="container mx-auto text-center max-w-4xl">
                <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6 tracking-tight">
                    Services
                </h1>
                <p className="text-lg md:text-xl text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed">
                    Our offer data science and analytics services.
                </p>
                <Link
                    href="/contact"
                    className="inline-block bg-[#00A396] text-white px-8 py-4 rounded-md font-semibold hover:bg-[#008f83] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                    Contact US
                </Link>
            </div>
        </section>
    );
}
