import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
}

export function Button({ className, variant = 'primary', ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'px-6 py-3 rounded-lg font-medium transition-all duration-200',
        variant === 'primary' && 'bg-blue-500 text-white hover:bg-blue-600 disabled:bg-blue-300',
        variant === 'secondary' && 'bg-gray-200 text-gray-800 hover:bg-gray-300 disabled:bg-gray-100',
        'disabled:cursor-not-allowed',
        className
      )}
      {...props}
    />
  )
}
