import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface SlideWrapperProps {
  children: ReactNode;
  title?: string;
}

export default function SlideWrapper({ children, title }: SlideWrapperProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 bg-white/80 rounded-xl shadow-lg space-y-6"
    >
      {title && (
        <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
          {title}
        </h2>
      )}
      {children}
    </motion.div>
  )
} 