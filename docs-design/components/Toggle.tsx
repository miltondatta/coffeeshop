'use client'

interface ToggleProps {
  label: string
  hint?: string
  checked?: boolean
  disabled?: boolean
  onChange?: (checked: boolean) => void
  id?: string
}

export function Toggle({
  label,
  hint,
  checked = false,
  disabled,
  onChange,
  id,
}: ToggleProps) {
  const inputId = id ?? label.toLowerCase().replace(/\s+/g, '-')

  return (
    <label
      htmlFor={inputId}
      className={[
        'group flex items-center justify-between gap-4 cursor-pointer',
        disabled && 'cursor-not-allowed opacity-50',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className="flex flex-col gap-0.5">
        <span className="text-body-sm font-medium text-brown-900 leading-snug">
          {label}
        </span>
        {hint && (
          <span className="text-label text-brown-400">{hint}</span>
        )}
      </div>

      <div className="relative flex-shrink-0">
        <input
          id={inputId}
          type="checkbox"
          role="switch"
          checked={checked}
          disabled={disabled}
          aria-checked={checked}
          onChange={(e) => onChange?.(e.target.checked)}
          className="peer sr-only"
        />
        {/* Track */}
        <span
          className={[
            'block h-6 w-11 rounded-pill border-2 transition-all duration-200',
            checked
              ? 'bg-terracotta-500 border-terracotta-500'
              : 'bg-cream-300 border-cream-300',
            !disabled && 'group-hover:border-terracotta-400',
            'peer-focus-visible:ring-2 peer-focus-visible:ring-offset-2 peer-focus-visible:ring-terracotta-500',
          ]
            .filter(Boolean)
            .join(' ')}
          aria-hidden="true"
        />
        {/* Thumb */}
        <span
          className={[
            'absolute top-0.5 left-0.5 h-4 w-4 rounded-full bg-white shadow-warm-sm',
            'transition-transform duration-200 ease-smooth',
            checked ? 'translate-x-5' : 'translate-x-0',
          ].join(' ')}
          aria-hidden="true"
        />
      </div>
    </label>
  )
}
