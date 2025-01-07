import { AuthButtonProps } from '@/types/button.interface'

const AuthButton = ({ text, icon, type, onClick }: AuthButtonProps) => {
  return (
    <button className='btn w-full bg-base-300' type={type} onClick={onClick}>
      <span>{icon}</span>
      {text}
    </button>
  )
}

export default AuthButton
