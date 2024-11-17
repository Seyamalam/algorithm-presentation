'use client'

import { motion } from 'framer-motion'
import SlideWrapper from '../SlideWrapper'
import MermaidDiagram from '../MermaidDiagram'

export default function MathematicalExplanation() {
  return (
    <SlideWrapper title="Mathematical Explanation">
      <div className="space-y-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/80 p-8 rounded-xl shadow-lg prose max-w-none"
        >
          <p className="text-xl leading-relaxed">
            The third version algorithms utilize advanced mathematical concepts 
            to achieve efficient binary arithmetic operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/80 p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-6 text-primary">Multiplication</h3>
            <div className="space-y-4">
              <div className="text-center text-xl bg-blue-50 p-4 rounded-lg">
                {'$$P = M \\times Q = \\sum_{k=0}^{n-1} (q_k \\times M \\times 2^k)$$'}
              </div>
              <p className="text-gray-600 text-center">
                {'where $q_k$ is the k-th bit of Q'}
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/80 p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-6 text-primary">Division</h3>
            <div className="space-y-4">
              <div className="text-center text-xl bg-blue-50 p-4 rounded-lg">
                {'$$N = D \\times Q + R$$'}
              </div>
              <p className="text-gray-600 text-center">
                {'where $0 \\leq R < |D|$'}
              </p>
            </div>
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
                M[Mathematical Foundation] --> I[Implementation]
                I --> O[Optimization]
                M --> V[Verification]
                V --> O
                O --> R[Results]
                style M fill:#f3f4f6,stroke:#4f46e5
                style I fill:#f3f4f6,stroke:#4f46e5
                style O fill:#f3f4f6,stroke:#4f46e5
                style V fill:#f3f4f6,stroke:#4f46e5
                style R fill:#f3f4f6,stroke:#4f46e5
            `}
          />
        </motion.div>
      </div>
    </SlideWrapper>
  )
}