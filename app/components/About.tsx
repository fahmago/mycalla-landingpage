export default function About() {
    return (
        <section id="about" className="py-24 px-16 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-5xl font-black text-[#0a050a] mb-6">
                            Creative <span className="text-[#42224A]">Process</span>
                        </h2>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            We believe in a human-centered approach to design. Every project begins with understanding your audience,
                            crafting a strategy, and executing with precision to create digital products that truly matter.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {/* Process Steps */}
                        <div className="flex gap-4 items-start">
                            <div className="flex-shrink-0 w-12 h-12 bg-[#42224A] text-white rounded-full flex items-center justify-center font-bold text-lg">
                                1
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-[#0a050a] mb-2">Discovery</h3>
                                <p className="text-gray-600">Understanding your goals, audience, and market landscape.</p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start">
                            <div className="flex-shrink-0 w-12 h-12 bg-[#42224A] text-white rounded-full flex items-center justify-center font-bold text-lg">
                                2
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-[#0a050a] mb-2">Strategy</h3>
                                <p className="text-gray-600">Crafting a roadmap that aligns creativity with business objectives.</p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start">
                            <div className="flex-shrink-0 w-12 h-12 bg-[#42224A] text-white rounded-full flex items-center justify-center font-bold text-lg">
                                3
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-[#0a050a] mb-2">Execution</h3>
                                <p className="text-gray-600">Bringing ideas to life with precision and attention to detail.</p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start">
                            <div className="flex-shrink-0 w-12 h-12 bg-[#42224A] text-white rounded-full flex items-center justify-center font-bold text-lg">
                                4
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-[#0a050a] mb-2">Iteration</h3>
                                <p className="text-gray-600">Continuous refinement to ensure excellence in every pixel.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
