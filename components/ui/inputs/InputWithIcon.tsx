import { InputWithIconProps } from '@/types/input.interface'
import clsx from 'clsx'

const InputWithIcon = ({
  type,
  icon,
  placeholder,
  hasError,
  errorMessage,
  value,
  onChange,
  name,
}: InputWithIconProps) => {
  return (
    <div className='w-full'>
      <label
        className={clsx(
          'input input-bordered flex items-center gap-2',
          hasError && 'border-red-500'
        )}
      >
        <span className='text-primary'>{icon}</span>
        <input
          type={type}
          className='grow input-primary'
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={name}
        />
      </label>
      {hasError && (
        <article className='label justify-end'>
          <span className='label-text-alt text-red-500/70'>{errorMessage}</span>
        </article>
      )}
    </div>
  )
}

export default InputWithIcon
