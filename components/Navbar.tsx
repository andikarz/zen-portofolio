'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'

export default function Navbar() {
    const [hidden, setHidden] = useState(false)
    const { scrollY } = useScroll()

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0
        if (latest > previous && latest > 150) {
            setHidden(true)
        } else {
            setHidden(false)
        }
    })

    return (
        <motion.nav
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed top-0 w-full z-50 bg-[var(--color-shoji-paper)]/90 backdrop-blur-md border-b-2 border-[var(--color-tatami-border)]"
        >
            <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold tracking-tight text-[var(--color-ink)] font-serif">
                    Andika R
                </Link>

                <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-[var(--color-ink)]/80">
                    <li><Link href="/" className="hover:text-[var(--color-wood-accent)] transition-colors">Home</Link></li>
                    <li><Link href="#projects" className="hover:text-[var(--color-wood-accent)] transition-colors">Projects</Link></li>
                    <li><Link href="#research" className="hover:text-[var(--color-wood-accent)] transition-colors">Publication</Link></li>
                    <li><Link href="#contact" className="hover:text-[var(--color-wood-accent)] transition-colors">Contact</Link></li>
                </ul>
            </div>
        </motion.nav>
    )
}
