import { ChangeEvent, ReactNode } from 'react'

export type CustomChangeEvent = (
  e:
    | { target: { name: string; value: string } }
    | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => void

export interface InputProps {
  type?: string
  name?: string
  value?: string
  // onChange?: any
  onChange?: any
  placeholder?: string
  hasError?: boolean
  errorMessage?: string
  disabled?: boolean
}

export interface InputWithIconProps extends InputProps {
  icon: ReactNode
}

export interface TextBoxInputProps extends InputProps {
  rows?: number
  cols?: number
}

export interface SelectProps extends InputProps {
  options: any[]
}
