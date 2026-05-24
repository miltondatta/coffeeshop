'use client'

import { type SelectHTMLAttributes } from 'react'
import { FormField } from './FormField'

export interface SelectOption {
  value: string
  label: string
  disabled?: boolean
}

interface SelectProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> {
  label?: string
  options: SelectOption[]
  placeholder?: string
  hint?: string
  error?: string
  onChange?: (value: string) => void
}

export function Select({
  label,
  options,
  placeholder,
  hint,
  error,
  disabled,
  required,
  id,
  onChange,
  ...rest
}: SelectProps) {
  const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-')

  return (
    <FormField
      label={label}
      htmlFor={inputId}
      hint={hint}
      error={error}
      required={required}
    >
      <div className="relative">
        <select
          {...rest}
          id={inputId}
          disabled={disabled}
          required={required}
          aria-invalid={!!error}
          onChange={(e) => onChange?.(e.target.value)}
          className={[
            'h-11 w-full appearance-none rounded-md border bg-white',
            'pl-4 pr-10',
            'text-body-md text-brown-900',
            'transition-all duration-200 cursor-pointer',
            'focus:outline-none focus:ring-2 focus:ring-terracotta-500',
            error
              ? 'border-terracotta-500'
              : 'border-cream-300 hover:border-brown-300',
            disabled && 'cursor-not-allowed opacity-50 bg-cream-200',
          ]
            .filter(Boolean)
            .join(' ')}
        >
          {placeholder && (
            <option value="" disabled hidden>
              {placeholder}
            </option>
          )}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value} disabled={opt.disabled}>
              {opt.label}
            </option>
          ))}
        </select>

        {/* Chevron icon */}
        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-brown-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="size-4"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </span>
      </div>
    </FormField>
  )
}
