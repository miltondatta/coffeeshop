'use client'

import { type InputHTMLAttributes } from 'react'

interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'type'> {
  label: string
  hint?: string
  checked?: boolean
  onChange?: (checked: boolean) => void
}

export function Checkbox({
  label,
  hint,
  checked,
  disabled,
  id,
  onChange,
  ...rest
}: CheckboxProps) {
  const inputId = id ?? label.toLowerCase().replace(/\s+/g, '-')

  return (
    <label
      htmlFor={inputId}
      className={[
        'group flex items-start gap-3 cursor-pointer',
        disabled && 'cursor-not-allowed opacity-50',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className="relative flex-shrink-0 mt-0.5">
        <input
          {...rest}
          id={inputId}
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onChange={(e) => onChange?.(e.target.checked)}
          className="peer sr-only"
        />
        {/* Custom box */}
        <span
          className={[
            'flex size-5 items-center justify-center rounded-sm border-2 transition-all duration-150',
            'border-cream-300 bg-white',
            'peer-checked:border-terracotta-500 peer-checked:bg-terracotta-500',
            'peer-focus-visible:ring-2 peer-focus-visible:ring-offset-2 peer-focus-visible:ring-terracotta-500',
            !disabled &&
              'group-hover:border-terracotta-400',
          ]
            .filter(Boolean)
            .join(' ')}
          aria-hidden="true"
        >
          {/* Checkmark */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-3 opacity-0 peer-checked:opacity-100 transition-opacity duration-100"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </span>
      </div>

      <div className="flex flex-col gap-0.5">
        <span className="text-body-sm font-medium text-brown-900 leading-snug">
          {label}
        </span>
        {hint && (
          <span className="text-label text-brown-400">{hint}</span>
        )}
      </div>
    </label>
  )
}
