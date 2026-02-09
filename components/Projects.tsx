'use client'

import { motion } from 'framer-motion'


const projects = [
    {
        title: 'AI Project Title',
        desc: 'Short description of the AI solution and its impact.',
    },
]


export default function Projects() {
    return (
        <motion.section
            id="projects"
            className="py-24 max-w-5xl mx-auto px-6"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <h2 className="text-3xl font-bold mb-8 font-serif text-[var(--color-ink)] border-b-2 border-[var(--color-tatami-border)] inline-block pb-2">
                Recent Projects
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
                {projects.map((p, i) => (
                    <div key={i} className="p-6 border-2 border-[var(--color-tatami-border)] bg-[var(--color-shoji-paper)] rounded-sm shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="font-bold text-xl text-[var(--color-ink)] font-serif">{p.title}</h3>
                        <p className="text-[var(--color-ink)]/80 mt-2 leading-relaxed">{p.desc}</p>
                    </div>
                ))}
            </div>
        </motion.section>
    )
}