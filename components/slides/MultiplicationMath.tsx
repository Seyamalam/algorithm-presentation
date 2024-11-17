'use client'

import { motion } from 'framer-motion'
import SlideWrapper from '../SlideWrapper'
import MermaidDiagram from '../MermaidDiagram'

export default function MultiplicationMath() {
  return (
    <SlideWrapper title="Multiplication Mathematical Analysis">
      <div className="space-y-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/80 p-8 rounded-xl shadow-lg prose max-w-none"
        >
          <p className="text-xl leading-relaxed">
            The multiplication algorithm leverages the distributive property and binary 
            representation to perform efficient computation through sequential processing.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white/80 p-8 rounded-xl shadow-lg"
        >
          <h3 className="text-2xl font-bold mb-6 text-primary">Mathematical Foundation</h3>
          <div className="space-y-6">
            <div className="text-center">
              <p className="text-xl mb-4">For binary numbers A and B:</p>
              <div className="bg-blue-50 p-6 rounded-lg space-y-4">
                <p className="text-xl">The product P = A × B is calculated as:</p>
                <p className="text-lg text-gray-600">
                  1. Start with P = 0
                </p>
                <p className="text-lg text-gray-600">
                  2. For each bit position i in B (from right to left):
                </p>
                <p className="text-lg text-gray-600 pl-8">
                  • If B[i] = 1, add (A × 2ⁱ) to P
                </p>
                <p className="text-lg text-gray-600 pl-8">
                  • If B[i] = 0, skip addition
                </p>
                <p className="text-lg text-gray-600">
                  3. The final value of P is the product
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <MermaidDiagram
          chart={`
            graph TD
              A[Binary Multiplication] --> B[Partial Products]
              B --> C[Shift and Add]
              C --> D[Accumulation]
              D --> E[Final Result]
              style A fill:#f9f,stroke:#333
              style E fill:#f9f,stroke:#333
          `}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/50 p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold mb-4">Key Features</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Sequential processing</li>
              <li>Bit-by-bit multiplication</li>
              <li>Accumulator-based addition</li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/50 p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold mb-4">Optimizations</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Combined registers</li>
              <li>Right shift operations</li>
              <li>Conditional addition</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </SlideWrapper>
  )
}