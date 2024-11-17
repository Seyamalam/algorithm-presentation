'use client'

import { motion } from 'framer-motion'
import SlideWrapper from '../SlideWrapper'
import MermaidDiagram from '../MermaidDiagram'

export default function MathIntroduction() {
  return (
    <SlideWrapper title="Mathematical Foundations">
      <div className="space-y-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/80 p-8 rounded-xl shadow-lg prose max-w-none"
        >
          <p className="text-xl leading-relaxed">
            The third version multiplication and division algorithms are based on fundamental 
            mathematical principles that allow for efficient computation using binary operations.
            These algorithms represent a significant optimization over previous versions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/80 p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-6 text-primary">Binary Operations</h3>
            <ul className="space-y-4 text-lg">
              <li className="flex items-center space-x-3">
                <span className="text-primary">•</span>
                <span>Bitwise shifting for efficient multiplication/division</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-primary">•</span>
                <span>Binary addition/subtraction with carry handling</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-primary">•</span>
                <span>Bit manipulation for control flow</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-primary">•</span>
                <span>Register operations for intermediate storage</span>
              </li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/80 p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-6 text-primary">Key Principles</h3>
            <ul className="space-y-4 text-lg">
              <li className="flex items-center space-x-3">
                <span className="text-primary">•</span>
                <span>Positional number system fundamentals</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-primary">•</span>
                <span>Two's complement for negative numbers</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-primary">•</span>
                <span>Sequential processing optimization</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-primary">•</span>
                <span>Register-based computation efficiency</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white/80 p-8 rounded-xl shadow-lg"
        >
          <MermaidDiagram
            chart={`
              graph LR
                A[Binary Number System] --> B[Arithmetic Operations]
                B --> C[Hardware Implementation]
                A --> D[Register Operations]
                D --> C
                C --> E[Optimized Algorithms]
                style A fill:#f3f4f6,stroke:#4f46e5
                style B fill:#f3f4f6,stroke:#4f46e5
                style C fill:#f3f4f6,stroke:#4f46e5
                style D fill:#f3f4f6,stroke:#4f46e5
                style E fill:#f3f4f6,stroke:#4f46e5
            `}
          />
        </motion.div>
      </div>
    </SlideWrapper>
  )
}