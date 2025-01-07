import { InputProps } from '@/types/input.interface'

const BasicInput = ({ type }: InputProps) => {
  return (
    <label className='input input-bordered flex items-center gap-2'>
      <input type={type} className='grow' placeholder='Search' />
    </label>
  )
}

export default BasicInput
