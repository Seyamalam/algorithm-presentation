import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import MermaidInitializer from '@/components/MermaidInitializer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Third Version Multiplication and Division Algorithms',
  description: 'A presentation on advanced arithmetic algorithms',
}

const mathConfig = `
  MathJax.Hub.Config({
    tex2jax: {
      inlineMath: [['$', '$']],
      displayMath: [['$$', '$$']],
      processEscapes: true,
    },
    messageStyle: 'none',
    skipStartupTypeset: false,
    showMathMenu: false,
    showProcessingMessages: false,
    styles: {
      '.MathJax': {
        color: 'inherit'
      }
    }
  });
`

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-br from-blue-100 to-purple-100 min-h-screen`}>
        <div className="container max-w-[90%] mx-auto py-4">
          <MermaidInitializer />
          {children}
        </div>
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.9/MathJax.js?config=TeX-AMS-MML_HTMLorMML"
          strategy="beforeInteractive"
        />
        <Script id="MathJax-config" strategy="beforeInteractive">
          {mathConfig}
        </Script>
      </body>
    </html>
  )
}