export default function Research() {
    return (
        <section id="research" className="py-24 max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-[var(--color-ink)] mb-4 font-serif border-b-2 border-[var(--color-tatami-border)] inline-block pb-2">
                Research & Publications
            </h2>

            <p className="text-[var(--color-ink)]/80 mb-12 text-lg">
                Academic publications and registered intellectual property related to my research work.
            </p>

            {/* Publications */}
            <div className="mb-16">
                <h3 className="text-xl font-bold text-[var(--color-wood-accent)] mb-6 font-serif">
                    Publications
                </h3>

                <div className="space-y-6">
                    <div className="rounded-sm border-2 border-[var(--color-tatami-border)] bg-[var(--color-shoji-paper)] p-6 shadow-sm">
                        <h4 className="text-lg font-bold text-[var(--color-ink)] font-serif">
                            Lecturer Evaluation from the Perspective of Speech Emotion Recognition with Deep Learning
                        </h4>

                        <p className="mt-1 text-sm text-[var(--color-ink)]/70 italic">
                            International Conference on Data Science and Its Applications · 2025
                        </p>

                        <p className="mt-3 text-[var(--color-ink)]/80 leading-relaxed">
                            This research applies CNN, LSTM, and hybrid CNN–LSTM architectures for speech emotion recognition using MFCC-based acoustic features, demonstrating superior performance of the hybrid model for objective lecturer evaluation.
                        </p>

                        <div className="mt-4 flex gap-4 text-sm font-medium">
                            <a href="https://ieeexplore.ieee.org/document/11157430" className="text-[var(--color-wood-accent)] underline underline-offset-4 hover:text-[var(--color-ink)] transition-colors">
                                Paper
                            </a>
                            <a href="https://doi.org/10.1109/ICDSA.2025.11266666" className="text-[var(--color-wood-accent)] underline underline-offset-4 hover:text-[var(--color-ink)] transition-colors">
                                DOI
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Intellectual Property */}
            <div>
                <h3 className="text-xl font-bold text-[var(--color-wood-accent)] mb-6 font-serif">
                    Intellectual Property (HKI)
                </h3>

                <div className="space-y-6">
                    <div className="rounded-sm border-2 border-[var(--color-tatami-border)] bg-[var(--color-shoji-paper)] p-6 shadow-sm">
                        <h4 className="text-lg font-bold text-[var(--color-ink)] font-serif">
                            AI-Based Image Classification System
                        </h4>

                        <p className="mt-1 text-sm text-[var(--color-ink)]/70 italic">
                            Registered Intellectual Property · Indonesia · 2024
                        </p>

                        <p className="mt-3 text-[var(--color-ink)]/80 leading-relaxed">
                            An AI-powered image classification system registered as intellectual property.
                        </p>

                        <div className="mt-4 flex gap-4 text-sm font-medium">
                            <a href="#" className="text-[var(--color-wood-accent)] underline underline-offset-4 hover:text-[var(--color-ink)] transition-colors">
                                Certificate
                            </a>
                            <a href="#" className="text-[var(--color-wood-accent)] underline underline-offset-4 hover:text-[var(--color-ink)] transition-colors">
                                Description
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
