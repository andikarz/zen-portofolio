'use client'

import { motion } from 'framer-motion'


export default function Hero() {
    return (
        <motion.section
            className="min-h-screen flex flex-col justify-center max-w-5xl mx-auto px-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="border-l-4 border-[var(--color-wood-accent)] pl-8 py-4">
                <h1 className="text-5xl md:text-7xl font-bold text-[var(--color-ink)] font-serif tracking-tight">
                    Andika R
                </h1>
                <p className="mt-4 text-xl md:text-2xl text-[var(--color-wood-accent)] font-medium">
                    AI Engineer | Computer Vision & NLP
                </p>
            </div>
            <p className="mt-8 max-w-xl text-lg leading-loose text-[var(--color-ink)]/90 font-light">
                I design and build intelligent systems that transform data
                into practical, real-world AI solutions.
            </p>
        </motion.section>
    )
}