import { ChangeEvent, ReactNode } from 'react'

export interface InputProps {
  type: string
  name?: string
  value?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  hasError?: boolean
  errorMessage?: string
  disabled?: boolean
}

export interface InputWithIconProps extends InputProps {
  icon: ReactNode
}
