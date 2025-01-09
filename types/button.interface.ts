import { ReactNode } from 'react'

export interface ButtonProps {
  type?: 'button' | 'submit' | 'reset'
  text: string
  disabled?: boolean
}

export interface AuthButtonProps extends ButtonProps {
  icon: ReactNode
  onClick: () => void
}

export interface LinkButtonProps extends ButtonProps {
  href: string
}
