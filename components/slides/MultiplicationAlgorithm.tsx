'use client'

import SlideWrapper from '../SlideWrapper'
import MermaidDiagram from '../MermaidDiagram'
import { useState } from 'react'

export default function MultiplicationAlgorithm() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <SlideWrapper title="Third Version Multiplication Algorithm">
      <div className="space-y-6">
        <ul className="list-disc list-inside space-y-2">
          <li>Uses a combined Product-Multiplier register</li>
          <li>Only requires an n-bit adder for n-bit numbers</li>
          <li>Shifts the Product-Multiplier right instead of shifting the Multiplicand left</li>
          <li>Performs addition only when the rightmost bit of the Multiplier is 1</li>
        </ul>

        <MermaidDiagram
          chart={`
            flowchart TD
              A[Start] --> B[Initialize Product and Multiplier registers]
              B --> C[Check rightmost bit of Multiplier]
              C -->|Bit = 1| D[Add Multiplicand to left half of Product]
              C -->|Bit = 0| E[No addition]
              D --> F[Shift Product-Multiplier right]
              E --> F
              F --> G{All bits processed?}
              G -->|No| C
              G -->|Yes| H[End]
          `}
          className="mt-4"
        />
      </div>
    </SlideWrapper>
  )
}
