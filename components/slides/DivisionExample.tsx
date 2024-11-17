'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import SlideWrapper from '../SlideWrapper'
import { Button } from '../ui/button'
import MermaidDiagram from '../MermaidDiagram'

export default function DivisionExample() {
  const steps = [
    { a: '0000', q: '1101', m: '0011', description: 'Initialize' },
    { a: '0001', q: '1010', m: '0011', description: 'Shift left A and Q' },
    { a: '1110', q: '1010', m: '0011', description: 'Subtract M from A' },
    { a: '0001', q: '1010', m: '0011', description: 'Restore A, set Q[0] = 0' },
    { a: '0011', q: '0100', m: '0011', description: 'Shift left A and Q' },
    { a: '0000', q: '0100', m: '0011', description: 'Subtract M from A, set Q[0] = 1' },
    { a: '0000', q: '1000', m: '0011', description: 'Shift left A and Q' },
    { a: '1101', q: '1000', m: '0011', description: 'Subtract M from A' },
    { a: '0000', q: '1000', m: '0011', description: 'Restore A, set Q[0] = 0' },
    { a: '0001', q: '0000', m: '0011', description: 'Final result: Q=0100 (4), R=0001 (1)' },
  ]

  const [currentStep, setCurrentStep] = useState(0)
  const maxSteps = steps.length - 1

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, maxSteps))
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 0))

  return (
    <SlideWrapper title="Division Example: 13 ÷ 3">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2 space-y-6">
          <div className="prose">
            <p className="text-lg">
              This example demonstrates the division of 13 (1101₂) by 3 (11₂) 
              using the third version division algorithm.
            </p>
          </div>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-2">Step</th>
                <th className="border border-gray-300 p-2">A (Remainder)</th>
                <th className="border border-gray-300 p-2">Q (Quotient)</th>
                <th className="border border-gray-300 p-2">M (Divisor)</th>
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
            <Button onClick={nextStep} disabled={currentStep === maxSteps}>Next</Button>
          </div>
        </div>
        <div className="md:w-1/2 overflow-y-auto max-h-[600px]">
          <MermaidDiagram
            chart={`
              graph TD
                A[Start] --> B[Initialize]
                B --> C[Shift Left]
                C --> D[Subtract]
                D --> E{Is Negative?}
                E -->|Yes| F[Restore]
                E -->|No| G[Keep Result]
                F & G --> H[Next Bit]
                H --> |More Bits| C
                H --> |Done| I[End]
                style ${['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'][currentStep]} fill:#f9f,stroke:#333,stroke-width:4px
            `}
          />
        </div>
      </div>
    </SlideWrapper>
  )
}
