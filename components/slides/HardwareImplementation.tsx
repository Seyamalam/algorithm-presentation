'use client'

import { useEffect } from 'react'
import mermaid from 'mermaid'

export default function HardwareImplementation() {
  useEffect(() => {
    mermaid.contentLoaded()
  }, [])

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Hardware Implementation</h2>
      <p>The third version algorithms can be efficiently implemented in hardware using the following components:</p>
      <div className="mermaid">
        {`
        graph TD
          A[ALU] --> B[Adder/Subtractor]
          A --> C[Shifter]
          D[Control Unit] --> A
          D --> E[Registers]
          E --> F[Multiplicand/Divisor]
          E --> G[Product/Remainder]
          E --> H[Multiplier/Quotient]
        `}
      </div>
      <ul className="list-disc list-inside space-y-2 mt-4">
        <li>ALU: Performs addition/subtraction and shifting operations</li>
        <li>Control Unit: Manages the sequence of operations</li>
        <li>Registers: Store operands and intermediate results</li>
      </ul>
    </div>
  )
}