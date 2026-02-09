'use client'

import { Mail, Github, Linkedin } from 'lucide-react'
import { motion } from 'framer-motion'


export default function Contact() {
    return (
        <motion.section
            id="contact"
            className="py-24 max-w-5xl mx-auto px-6"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <div className="bg-[var(--color-shoji-paper)] p-8 border-2 border-[var(--color-tatami-border)] rounded-sm shadow-sm">
                <h2 className="text-3xl font-bold mb-6 font-serif text-[var(--color-ink)] border-b-2 border-[var(--color-tatami-border)] inline-block pb-2">
                    Contact
                </h2>
                <ul className="space-y-4 text-lg">
                    <li className="flex items-center gap-4 text-[var(--color-ink)] hover:text-[var(--color-wood-accent)] transition-colors">
                        <Mail className="text-[var(--color-wood-accent)]" size={20} />
                        <span className="font-medium">yourname@email.com</span>
                    </li>
                    <li className="flex items-center gap-4 text-[var(--color-ink)] hover:text-[var(--color-wood-accent)] transition-colors">
                        <Github className="text-[var(--color-wood-accent)]" size={20} />
                        <span className="font-medium">github.com/yourusername</span>
                    </li>
                    <li className="flex items-center gap-4 text-[var(--color-ink)] hover:text-[var(--color-wood-accent)] transition-colors">
                        <Linkedin className="text-[var(--color-wood-accent)]" size={20} />
                        <span className="font-medium">linkedin.com/in/yourusername</span>
                    </li>
                </ul>
            </div>
        </motion.section>
    )
}