import { TextBoxInputProps } from '@/types/input.interface'

const TextBoxInput = ({
  name,
  placeholder,
  value,
  onChange,
}: TextBoxInputProps) => {
  return (
    <textarea
      className='textarea textarea-bordered w-full resize-none'
      placeholder={placeholder}
      name={name}
      defaultValue={value}
      onChange={onChange}
    ></textarea>
  )
}

export default TextBoxInput
