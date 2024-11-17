'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Introduction from '@/components/slides/Introduction'
import MultiplicationAlgorithm from '@/components/slides/MultiplicationAlgorithm'
import DivisionAlgorithm from '@/components/slides/DivisionAlgorithm'
import Comparison from '@/components/slides/Comparison'
import MathIntroduction from '@/components/slides/MathIntroduction'
import MultiplicationMath from '@/components/slides/MultiplicationMath'
import DivisionMath from '@/components/slides/DivisionMath'
import MultiplicationExample from '@/components/slides/MultiplicationExample'
import DivisionExample from '@/components/slides/DivisionExample'
import PerformanceAnalysis from '@/components/slides/PerformanceAnalysis'
import HardwareImplementation from '@/components/slides/HardwareImplementation'
import FutureDirections from '@/components/slides/FutureDirections'
import Conclusion from '@/components/slides/Conclusion'
import mermaid from 'mermaid'

const slides = [
  Introduction,
  MultiplicationAlgorithm,
  DivisionAlgorithm,
  Comparison,
  MathIntroduction,
  MultiplicationMath,
  DivisionMath,
  MultiplicationExample,
  DivisionExample,
  PerformanceAnalysis,
  HardwareImplementation,
  FutureDirections,
  Conclusion,
]

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    mermaid.initialize({ startOnLoad: true })
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0))
  }

  const CurrentSlideComponent = slides[currentSlide]

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Card className="w-full max-w-6xl bg-white bg-opacity-80 backdrop-blur-lg">
        <CardContent className="p-6">
          <CurrentSlideComponent />
        </CardContent>
      </Card>
      <div className="flex justify-between w-full max-w-6xl mt-4">
        <Button onClick={prevSlide} disabled={currentSlide === 0}>Previous</Button>
        <span className="text-sm text-gray-500">Slide {currentSlide + 1} of {slides.length}</span>
        <Button onClick={nextSlide} disabled={currentSlide === slides.length - 1}>Next</Button>
      </div>
    </main>
  )
}