import { ButtonProps } from '@/types/button.interface'
import clsx from 'clsx'

const BasicButton = ({ type, text, disabled }: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={clsx(
        'btn w-full btn-primary text-primary-content',
        disabled ? 'opacity-50' : 'opacity-100'
      )}
    >
      {text}
    </button>
  )
}

export default BasicButton
