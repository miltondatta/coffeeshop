'use client'

import { type ReactNode } from 'react'

interface FormFieldProps {
  label?: string
  htmlFor?: string
  hint?: string
  error?: string
  required?: boolean
  children: ReactNode
}

export function FormField({
  label,
  htmlFor,
  hint,
  error,
  required,
  children,
}: FormFieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label
          htmlFor={htmlFor}
          className="text-body-sm font-medium text-brown-900"
        >
          {label}
          {required && (
            <span className="ml-0.5 text-terracotta-500" aria-hidden="true">
              *
            </span>
          )}
        </label>
      )}

      {children}

      {error ? (
        <p className="text-label text-terracotta-500" role="alert">
          {error}
        </p>
      ) : hint ? (
        <p className="text-label text-brown-400">{hint}</p>
      ) : null}
    </div>
  )
}
