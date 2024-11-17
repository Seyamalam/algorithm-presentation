'use client'

import { useEffect, useState } from 'react'
import mermaid from 'mermaid'

interface MermaidDiagramProps {
  chart: string
  className?: string
}

let diagramCounter = 0

export default function MermaidDiagram({ chart, className = '' }: MermaidDiagramProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [svgContent, setSvgContent] = useState<string>('')
  const [diagramId] = useState(() => `mermaid-diagram-${++diagramCounter}`)

  useEffect(() => {
    const renderDiagram = async () => {
      try {
        const { svg } = await mermaid.render(diagramId, chart)
        setSvgContent(svg)
        setIsLoading(false)
      } catch (error) {
        console.error('Mermaid rendering failed:', error)
        setIsLoading(false)
      }
    }

    renderDiagram()
  }, [chart, diagramId])

  return (
    <>
      {isLoading ? (
        <div className="animate-pulse h-80 bg-gray-200 rounded" />
      ) : (
        <div 
          className={`bg-white/50 p-6 rounded-lg shadow-md ${className}`}
          dangerouslySetInnerHTML={{ __html: svgContent }}
        />
      )}
    </>
  )
} 