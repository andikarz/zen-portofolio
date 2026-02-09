'use client'

import { motion } from 'framer-motion'


export default function Skills() {
    return (
        <motion.section
            className="py-24"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <h2 className="text-2xl font-semibold mb-6">Core Expertise</h2>
            <ul className="grid md:grid-cols-2 gap-6">
                <li>
                    <strong>AI</strong>
                    <p className="text-gray-600">Computer Vision, NLP, Deep Learning</p>
                </li>
                <li>
                    <strong>Frameworks</strong>
                    <p className="text-gray-600">PyTorch, TensorFlow, OpenCV</p>
                </li>
                <li>
                    <strong>Deployment</strong>
                    <p className="text-gray-600">FastAPI, Linux, Docker, TFLite</p>
                </li>
                <li>
                    <strong>Tools</strong>
                    <p className="text-gray-600">Git, GitHub, Jupyter</p>
                </li>
            </ul>
        </motion.section>
    )
}