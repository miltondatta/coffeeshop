'use client'

import { type TextareaHTMLAttributes } from 'react'
import { FormField } from './FormField'

interface TextareaProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange'> {
  label?: string
  hint?: string
  error?: string
  rows?: number
  resize?: 'none' | 'vertical' | 'both'
  onChange?: (value: string) => void
}

const resizeMap = {
  none: 'resize-none',
  vertical: 'resize-y',
  both: 'resize',
} as const

export function Textarea({
  label,
  hint,
  error,
  rows = 4,
  resize = 'vertical',
  disabled,
  required,
  id,
  onChange,
  ...rest
}: TextareaProps) {
  const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-')

  return (
    <FormField
      label={label}
      htmlFor={inputId}
      hint={hint}
      error={error}
      required={required}
    >
      <textarea
        {...rest}
        id={inputId}
        rows={rows}
        disabled={disabled}
        required={required}
        aria-invalid={!!error}
        onChange={(e) => onChange?.(e.target.value)}
        className={[
          'w-full rounded-md border bg-white px-4 py-3',
          'text-body-md text-brown-900 placeholder:text-brown-400',
          'transition-all duration-200',
          'focus:outline-none focus:ring-2 focus:ring-terracotta-500',
          resizeMap[resize],
          error
            ? 'border-terracotta-500'
            : 'border-cream-300 hover:border-brown-300',
          disabled && 'cursor-not-allowed opacity-50 bg-cream-200',
        ]
          .filter(Boolean)
          .join(' ')}
      />
    </FormField>
  )
}
