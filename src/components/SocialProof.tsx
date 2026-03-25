export function SocialProof() {
    const companies = [
        "Airbnb", "Google", "Stripe", "Netflix", "Spotify", "Amazon"
    ];

    return (
        <section className="py-10 border-b border-gray-100 bg-white">
            <div className="container mx-auto px-6">
                <p className="text-center text-sm font-semibold text-text-muted mb-8 uppercase tracking-wider">
                    Trusted by over 10,000 companies
                </p>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    {companies.map((company) => (
                        <div key={company} className="text-2xl font-bold text-gray-400 flex items-center gap-2">
                            {/* Placeholder Logo Icon */}
                            <div className="w-6 h-6 bg-gray-300 rounded-sm"></div>
                            {company}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
