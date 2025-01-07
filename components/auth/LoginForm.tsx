'use client'

import { FaEnvelope, FaKey } from 'react-icons/fa6'
import { FcGoogle } from 'react-icons/fc'
import InputWithIcon from '../ui/inputs/InputWithIcon'
import { useState } from 'react'
import BasicButton from '../ui/buttons/BasicButton'
import AuthButton from '../ui/buttons/AuthButton'
import Link from 'next/link'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = () => {}

  return (
    <form
      className='w-[90%] max-w-[400px] bg-base-100 text-base-content px-3 py-3 rounded shadow-xl'
      action={handleSubmit}
    >
      <InputWithIcon
        type='email'
        icon={<FaEnvelope />}
        placeholder='Email'
        hasError={true}
        errorMessage='something went wrong'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputWithIcon
        type='password'
        icon={<FaKey />}
        placeholder='Password'
        hasError={true}
        errorMessage='something went wrong'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <BasicButton type='submit' text='Login' />

      <div className='divider divider-neutral'>OR</div>

      <AuthButton
        type='button'
        text='Login with Google'
        icon={<FcGoogle />}
        onClick={() => {}}
      />

      <article className='text-center text-xs mt-5'>
        No Account?{' '}
        <Link href='/register' className='underline font-semibold'>
          REGISTER HERE
        </Link>
      </article>
    </form>
  )
}

export default LoginForm
