'use client'

import { useEffect } from 'react'
import mermaid from 'mermaid'

export default function MermaidInitializer() {
  useEffect(() => {
    mermaid.initialize({ 
      startOnLoad: true,
      theme: 'default',
      securityLevel: 'loose',
      flowchart: {
        htmlLabels: true,
        curve: 'basis',
        defaultRenderer: 'dagre-d3'
      }
    })
  }, [])
  return null
} 