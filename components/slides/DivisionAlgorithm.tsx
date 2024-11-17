'use client'

import { useEffect } from 'react'
import mermaid from 'mermaid'

export default function DivisionAlgorithm() {
  useEffect(() => {
    mermaid.contentLoaded()
  }, [])

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Third Version Division Algorithm</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Uses a Remainder register that combines the roles of remainder and quotient</li>
        <li>Performs subtraction and then decides whether to keep the result or restore</li>
        <li>Shifts the Remainder left after each step</li>
        <li>Sets the quotient bits based on whether the subtraction was successful</li>
      </ul>
      <div className="mermaid">
        {`
        graph TD
          A[Start] --> B[Initialize Remainder and Divisor registers]
          B --> C[Shift Remainder left]
          C --> D[Subtract Divisor from left half of Remainder]
          D --> E{Is Remainder negative?}
          E --> |Yes| F[Restore Remainder and set quotient bit to 0]
          E --> |No| G[Keep subtraction result and set quotient bit to 1]
          F --> H[Shift Remainder left]
          G --> H
          H --> I{All bits processed?}
          I --> |No| D
          I --> |Yes| J[End]
        `}
      </div>
    </div>
  )
}