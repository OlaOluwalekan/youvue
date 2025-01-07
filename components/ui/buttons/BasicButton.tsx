import { ButtonProps } from '@/types/button.interface'

const BasicButton = ({ type, text, disabled }: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className='btn w-full btn-primary text-primary-content'
    >
      {text}
    </button>
  )
}

export default BasicButton
