'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import SlideWrapper from '../SlideWrapper'
import MermaidDiagram from '../MermaidDiagram'
import { Button } from '../ui/button'

export default function MultiplicationExample() {
  const [currentStep, setCurrentStep] = useState(0)
  const steps = [
    { a: '0000', q: '1001', m: '1100', description: 'Initialize' },
    { a: '0000', q: '1001', m: '1100', description: 'Check Q[0], it\'s 1, so add M to A' },
    { a: '1100', q: '1001', m: '1100', description: 'Shift right A and Q' },
    { a: '0110', q: '0100', m: '1100', description: 'Check Q[0], it\'s 0, no addition' },
    { a: '0011', q: '0010', m: '1100', description: 'Shift right A and Q' },
    { a: '0001', q: '1001', m: '1100', description: 'Check Q[0], it\'s 1, so add M to A' },
    { a: '1101', q: '1001', m: '1100', description: 'Shift right A and Q' },
    { a: '0110', q: '1100', m: '1100', description: 'Final result: 01101100 (108 in decimal)' },
  ]

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, steps.length - 1))
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 0))

  return (
    <SlideWrapper title="Multiplication Example: 9 x 12">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2 space-y-6">
          <div className="prose">
            <p className="text-lg">
              This example demonstrates the multiplication of 9 (1001₂) by 12 (1100₂) 
              using the third version multiplication algorithm.
            </p>
          </div>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-2">Step</th>
                <th className="border border-gray-300 p-2">A (Accumulator)</th>
                <th className="border border-gray-300 p-2">Q (Multiplier)</th>
                <th className="border border-gray-300 p-2">M (Multiplicand)</th>
              </tr>
            </thead>
            <tbody>
              {steps.map((step, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: index <= currentStep ? 1 : 0.3 }}
                  className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                >
                  <td className="border border-gray-300 p-2">{index}</td>
                  <td className="border border-gray-300 p-2">{step.a}</td>
                  <td className="border border-gray-300 p-2">{step.q}</td>
                  <td className="border border-gray-300 p-2">{step.m}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
          <p className="font-semibold">{steps[currentStep].description}</p>
          <div className="flex justify-between">
            <Button onClick={prevStep} disabled={currentStep === 0}>Previous</Button>
            <Button onClick={nextStep} disabled={currentStep === steps.length - 1}>Next</Button>
          </div>
        </div>
        <div className="md:w-1/2 overflow-y-auto max-h-[600px]">
          <MermaidDiagram
            chart={`
              graph TD
                A[Start] --> B[Initialize]
                B --> C{Check Q0}
                C -->|1| D[Add M to A]
                C -->|0| E[Skip Add]
                D & E --> F[Shift Right]
                F --> G{More Bits?}
                G -->|Yes| C
                G -->|No| H[End]
                style ${['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'][currentStep]} fill:#f9f,stroke:#333,stroke-width:4px
            `}
          />
        </div>
      </div>
    </SlideWrapper>
  )
}
