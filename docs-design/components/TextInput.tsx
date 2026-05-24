'use client'

import { type InputHTMLAttributes, type ReactNode } from 'react'
import { FormField } from './FormField'

interface TextInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'type'> {
  label?: string
  hint?: string
  error?: string
  type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number'
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  onChange?: (value: string) => void
}

export function TextInput({
  label,
  hint,
  error,
  type = 'text',
  leftIcon,
  rightIcon,
  disabled,
  required,
  id,
  onChange,
  ...rest
}: TextInputProps) {
  const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-')

  const baseInput = [
    'h-11 w-full rounded-md border bg-white px-4',
    'text-body-md text-brown-900 placeholder:text-brown-400',
    'transition-all duration-200',
    'focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-terracotta-500',
    error
      ? 'border-terracotta-500'
      : 'border-cream-300 hover:border-brown-300',
    disabled && 'cursor-not-allowed opacity-50 bg-cream-200',
    leftIcon && 'pl-10',
    rightIcon && 'pr-10',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <FormField
      label={label}
      htmlFor={inputId}
      hint={hint}
      error={error}
      required={required}
    >
      <div className="relative">
        {leftIcon && (
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-brown-400">
            {leftIcon}
          </span>
        )}

        <input
          {...rest}
          id={inputId}
          type={type}
          disabled={disabled}
          required={required}
          aria-invalid={!!error}
          aria-describedby={
            error
              ? `${inputId}-error`
              : hint
                ? `${inputId}-hint`
                : undefined
          }
          className={baseInput}
          onChange={(e) => onChange?.(e.target.value)}
        />

        {rightIcon && (
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-brown-400">
            {rightIcon}
          </span>
        )}
      </div>
    </FormField>
  )
}
