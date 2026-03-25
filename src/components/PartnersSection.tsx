
export function PartnersSection() {
    const partners = [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/2560px-IBM_logo.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/2560px-Microsoft_logo_%282012%29.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
    ];

    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto text-center">
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-8">
                    TRUSTED BY 10,000+ COMPANIES
                </p>
                <div className="bg-[#00A396] py-12 px-4 rounded-xl shadow-lg mx-6 md:mx-0 overflow-hidden">
                    <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* 
                           Note: In a real project, we would use local SVG assets or optimized images. 
                           For now, using placeholders/text or simplified representation as per "white logos".
                           Since I don't have the exact logos, I'll use text representations styled to look like logos 
                           if external images fail or look bad, but let's try a clean text approach first 
                           to match the "white logos" requirement perfectly without relying on external URLs 
                           that might break or look different.
                        */}
                        <span className="text-2xl font-bold text-white tracking-widest">BLACK SWAN</span>
                        <span className="text-2xl font-extrabold text-white tracking-tighter italic">Quadra</span>
                        <span className="text-2xl font-serif text-white tracking-wide">Essence</span>
                        <span className="text-2xl font-mono text-white tracking-tight">GENERIC</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
