import React, { InputHTMLAttributes, forwardRef } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string
    error?: string
    fullWidth?: boolean
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    (
        {
            label,
            error,
            fullWidth = false,
            className = '',
            disabled = false,
            type = 'text',
            ...props
        },
        ref
    ) => {
        const baseInputClasses = `
      px-3 py-2 
      border rounded-md 
      focus:outline-none focus:ring-2 
      transition-colors
      disabled:bg-gray-100 disabled:cursor-not-allowed disabled:text-gray-500
      ${error
                ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
            }
      ${fullWidth ? 'w-full' : ''}
      ${className}
    `

        return (
            <div className={`${fullWidth ? 'w-full' : ''}`}>
                {/* Label */}
                {label && (
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        {label}
                        {props.required && <span className="text-red-500 ml-1">*</span>}
                    </label>
                )}

                <div className="relative">

                    <input
                        ref={ref}
                        type={type}
                        disabled={disabled}
                        className={baseInputClasses}
                        {...props}
                    />
                </div>
            </div>
        )
    }
)

Input.displayName = 'Input'

export default Input