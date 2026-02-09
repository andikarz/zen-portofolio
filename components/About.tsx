'use client'

import { motion } from 'framer-motion'


export default function About() {
    return (
        <motion.section
            className="py-24 max-w-5xl mx-auto px-6"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
        >
            <h2 className="text-3xl font-bold mb-6 font-serif text-[var(--color-ink)] border-b-2 border-[var(--color-tatami-border)] inline-block pb-2">
                About Me
            </h2>
            <p className="max-w-2xl leading-relaxed text-lg text-[var(--color-ink)]/90">
                I am a final-year Informatics student specializing in
                Computer Vision and Natural Language Processing. I focus
                on building applied AI systems from model development
                to deployment.
            </p>
        </motion.section>
    )
}