'use client'

import { SelectProps } from '@/types/input.interface'
import clsx from 'clsx'
import { useState } from 'react'

const Select = ({ options, name, value, onChange }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [labelValue, setLabelValue] = useState(
    options.find((option) => option.value == value)?.label || options[0].label
  )

  const handleOptionsChange = (optionValue: string, optionLabel: string) => {
    setLabelValue(optionLabel)
    setIsOpen(false)

    if (onChange) {
      onChange({ target: { name: name as string, value: optionValue } })
    }
  }

  return (
    <div className='relative'>
      <input
        type='text'
        contentEditable={false}
        className='input w-full cursor-pointer caret-transparent'
        readOnly
        onClick={() => setIsOpen(!isOpen)}
        value={labelValue}
      />
      <input type='hidden' name={name} value={value} />
      {isOpen && (
        <section className='bg-base-200 absolute z-10 w-full mt-1 rounded-lg shadow-lg px-2 py-2'>
          {options.map((option) => {
            return (
              <article key={option.id}>
                <input
                  type='radio'
                  id={option.id}
                  name='option'
                  onChange={(e) =>
                    handleOptionsChange(option.value, option.label)
                  }
                  value={option.value}
                  className='hidden'
                />
                <label
                  htmlFor={option.id}
                  className={clsx(
                    'leading-8 cursor-pointer flex hover:bg-base-100 px-2',
                    option.value == value
                      ? 'bg-secondary text-secondary-content'
                      : ''
                  )}
                >
                  {option.label}
                </label>
              </article>
            )
          })}
        </section>
      )}
    </div>
  )
}

export default Select
