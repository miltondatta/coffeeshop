'use client'

export interface RadioOption {
  value: string
  label: string
  hint?: string
  disabled?: boolean
}

interface RadioGroupProps {
  name: string
  label?: string
  options: RadioOption[]
  value?: string
  onChange?: (value: string) => void
  orientation?: 'horizontal' | 'vertical'
  hint?: string
  error?: string
}

export function RadioGroup({
  name,
  label,
  options,
  value,
  onChange,
  orientation = 'vertical',
  hint,
  error,
}: RadioGroupProps) {
  return (
    <fieldset className="flex flex-col gap-1.5">
      {label && (
        <legend className="text-body-sm font-medium text-brown-900 mb-1">
          {label}
        </legend>
      )}

      <div
        className={[
          'flex',
          orientation === 'horizontal'
            ? 'flex-row flex-wrap gap-x-6 gap-y-3'
            : 'flex-col gap-3',
        ].join(' ')}
      >
        {options.map((opt) => {
          const isChecked = value === opt.value

          return (
            <label
              key={opt.value}
              className={[
                'group flex items-start gap-3 cursor-pointer',
                opt.disabled && 'cursor-not-allowed opacity-50',
              ]
                .filter(Boolean)
                .join(' ')}
            >
              <div className="relative flex-shrink-0 mt-0.5">
                <input
                  type="radio"
                  name={name}
                  value={opt.value}
                  checked={isChecked}
                  disabled={opt.disabled}
                  onChange={() => onChange?.(opt.value)}
                  className="peer sr-only"
                />
                {/* Custom circle */}
                <span
                  className={[
                    'flex size-5 items-center justify-center rounded-full border-2 transition-all duration-150',
                    isChecked
                      ? 'border-terracotta-500'
                      : 'border-cream-300 bg-white',
                    !opt.disabled && 'group-hover:border-terracotta-400',
                    'peer-focus-visible:ring-2 peer-focus-visible:ring-offset-2 peer-focus-visible:ring-terracotta-500',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  aria-hidden="true"
                >
                  {isChecked && (
                    <span className="size-2.5 rounded-full bg-terracotta-500" />
                  )}
                </span>
              </div>

              <div className="flex flex-col gap-0.5">
                <span className="text-body-sm font-medium text-brown-900 leading-snug">
                  {opt.label}
                </span>
                {opt.hint && (
                  <span className="text-label text-brown-400">{opt.hint}</span>
                )}
              </div>
            </label>
          )
        })}
      </div>

      {error ? (
        <p className="text-label text-terracotta-500 mt-1" role="alert">
          {error}
        </p>
      ) : hint ? (
        <p className="text-label text-brown-400 mt-1">{hint}</p>
      ) : null}
    </fieldset>
  )
}
