'use client'

interface QuantityStepperProps {
  value: number
  min?: number
  max?: number
  disabled?: boolean
  onChange?: (value: number) => void
  size?: 'sm' | 'md'
}

const sizeMap = {
  sm: { button: 'size-7 text-base', value: 'w-8 text-body-sm' },
  md: { button: 'size-9 text-lg', value: 'w-10 text-body-md' },
} as const

export function QuantityStepper({
  value,
  min = 1,
  max = 99,
  disabled,
  onChange,
  size = 'md',
}: QuantityStepperProps) {
  const canDecrement = !disabled && value > min
  const canIncrement = !disabled && value < max
  const s = sizeMap[size]

  function decrement() {
    if (canDecrement) onChange?.(value - 1)
  }

  function increment() {
    if (canIncrement) onChange?.(value + 1)
  }

  return (
    <div
      className="inline-flex items-center rounded-pill border border-cream-300 bg-white overflow-hidden"
      role="group"
      aria-label="Quantity"
    >
      {/* Decrement */}
      <button
        type="button"
        aria-label="Decrease quantity"
        disabled={!canDecrement}
        onClick={decrement}
        className={[
          s.button,
          'flex items-center justify-center flex-shrink-0',
          'text-brown-600 font-semibold',
          'transition-colors duration-150',
          'focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-500',
          canDecrement
            ? 'hover:bg-cream-200 hover:text-brown-900'
            : 'opacity-30 cursor-not-allowed',
        ]
          .filter(Boolean)
          .join(' ')}
      >
        −
      </button>

      {/* Value display */}
      <span
        className={[
          s.value,
          'text-center font-semibold text-brown-900 select-none tabular-nums',
          'border-x border-cream-300',
          disabled && 'opacity-50',
        ]
          .filter(Boolean)
          .join(' ')}
        aria-live="polite"
        aria-atomic="true"
      >
        {value}
      </span>

      {/* Increment */}
      <button
        type="button"
        aria-label="Increase quantity"
        disabled={!canIncrement}
        onClick={increment}
        className={[
          s.button,
          'flex items-center justify-center flex-shrink-0',
          'text-brown-600 font-semibold',
          'transition-colors duration-150',
          'focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-500',
          canIncrement
            ? 'hover:bg-cream-200 hover:text-brown-900'
            : 'opacity-30 cursor-not-allowed',
        ]
          .filter(Boolean)
          .join(' ')}
      >
        +
      </button>
    </div>
  )
}
