'use client'

import { motion } from 'framer-motion'
import SlideWrapper from '../SlideWrapper'
import MermaidDiagram from '../MermaidDiagram'

export default function DivisionMath() {
  return (
    <SlideWrapper title="Division Mathematical Analysis">
      <div className="space-y-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/80 p-8 rounded-xl shadow-lg prose max-w-none"
        >
          <p className="text-xl leading-relaxed">
            The division algorithm implements an optimized restoring division method 
            using binary operations and register manipulation.
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
              <p className="text-xl mb-4">For dividend N and divisor D:</p>
              <div className="bg-blue-50 p-6 rounded-lg space-y-4">
                <p className="text-xl">The division process finds Q and R where:</p>
                <p className="text-lg text-gray-600">
                  N = D × Q + R
                </p>
                <p className="text-lg text-gray-600 mt-4">
                  The process involves:
                </p>
                <p className="text-lg text-gray-600">
                  1. Initialize remainder R = N and quotient Q = 0
                </p>
                <p className="text-lg text-gray-600">
                  2. For each bit position (from left to right):
                </p>
                <p className="text-lg text-gray-600 pl-8">
                  • Shift R left by 1 bit
                </p>
                <p className="text-lg text-gray-600 pl-8">
                  • Try to subtract D from R
                </p>
                <p className="text-lg text-gray-600 pl-8">
                  • If result is greater than or equal to 0: keep result and set Q bit to 1
                </p>
                <p className="text-lg text-gray-600 pl-8">
                  • If result is less than 0: restore R and set Q bit to 0
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <MermaidDiagram
          chart={`
            graph TD
              A[Binary Division] --> B[Left Shift]
              B --> C[Subtraction]
              C --> D[Restoration]
              D --> E[Quotient Formation]
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
              <li>Restoring division method</li>
              <li>Left shift operations</li>
              <li>Conditional subtraction</li>
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
              <li>Combined remainder-quotient</li>
              <li>Early termination</li>
              <li>Efficient bit testing</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </SlideWrapper>
  )
}