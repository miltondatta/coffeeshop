'use client'

import { useRef, type InputHTMLAttributes } from 'react'

interface SearchInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'type' | 'size'> {
  value?: string
  onChange?: (value: string) => void
  onClear?: () => void
  size?: 'sm' | 'md'
}

const sizeMap = {
  sm: 'h-9 text-body-sm',
  md: 'h-11 text-body-md',
} as const

const iconSizeMap = {
  sm: 'size-3.5',
  md: 'size-4',
} as const

export function SearchInput({
  value,
  onChange,
  onClear,
  size = 'md',
  placeholder = 'Search',
  disabled,
  ...rest
}: SearchInputProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  function handleClear() {
    onChange?.('')
    onClear?.()
    inputRef.current?.focus()
  }

  return (
    <div className="relative flex items-center">
      {/* Search icon */}
      <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-brown-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className={iconSizeMap[size]}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </span>

      <input
        {...rest}
        ref={inputRef}
        type="search"
        role="searchbox"
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.value)}
        className={[
          sizeMap[size],
          'w-full rounded-pill border border-cream-300 bg-white',
          'pl-9 pr-9',
          'text-brown-900 placeholder:text-brown-400',
          'transition-all duration-200',
          'focus:outline-none focus:ring-2 focus:ring-terracotta-500 focus:border-transparent',
          'hover:border-brown-300',
          disabled && 'cursor-not-allowed opacity-50',
        ]
          .filter(Boolean)
          .join(' ')}
      />

      {/* Clear button – only visible when there is a value */}
      {value && (
        <button
          type="button"
          onClick={handleClear}
          aria-label="Clear search"
          className="absolute right-3.5 top-1/2 -translate-y-1/2 text-brown-400
                     hover:text-brown-700 transition-colors duration-150 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={iconSizeMap[size]}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
    </div>
  )
}
