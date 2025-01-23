import { InputProps } from '@/types/input.interface'

const BasicInput = ({
  type,
  placeholder,
  name,
  value,
  onChange,
}: InputProps) => {
  return (
    <label className='input input-bordered flex items-center gap-2'>
      <input
        type={type}
        className='grow'
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </label>
  )
}

export default BasicInput
