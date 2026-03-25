import Link from "next/link";

export function ContactHero() {
    return (
        <section className="pt-32 pb-20 px-6 md:pt-40 md:pb-28 relative overflow-hidden bg-[#f8fafb]">
            {/* Background Decorations - teal/green blob shapes */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#00A396]/8 rounded-full -z-0 translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-[#00A396]/8 rounded-full -z-0 -translate-x-1/4 translate-y-1/4" />
            <div className="absolute bottom-10 right-1/4 w-[80px] h-[80px] bg-[#00A396]/6 rounded-full -z-0" />

            <div className="container mx-auto max-w-5xl relative z-10">
                <div className="max-w-xl">
                    <h1 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4 leading-tight">
                        Have a project in mind?
                    </h1>
                    <p className="text-slate-500 text-lg mb-8">
                        We&apos;d love to talk about how we can help you.
                    </p>
                    <Link
                        href="#contact-form"
                        className="inline-block bg-[#00A396] text-white px-7 py-3 rounded-md font-semibold hover:bg-[#008f83] transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 text-sm"
                    >
                        Contact US
                    </Link>
                </div>
            </div>
        </section>
    );
}
