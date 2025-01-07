'use client'

import { FaEnvelope, FaKey } from 'react-icons/fa6'
import { FcGoogle } from 'react-icons/fc'
import InputWithIcon from '../ui/inputs/InputWithIcon'
import { useEffect, useState, useTransition } from 'react'
import BasicButton from '../ui/buttons/BasicButton'
import AuthButton from '../ui/buttons/AuthButton'
import Link from 'next/link'
import { login } from '@/utils/actions/login'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, startLoginProcess] = useTransition()
  const [emailError, setEmailError] = useState({ error: false, message: '' })
  const [passwordError, setPasswordError] = useState({
    error: false,
    message: '',
  })

  useEffect(() => {
    let interval = setTimeout(() => {
      setEmailError({ error: false, message: '' })
      setPasswordError({ error: false, message: '' })
    }, 3000)
  }, [emailError, passwordError])

  const handleSubmit = (formData: FormData) => {
    setEmailError({ error: false, message: '' })
    setPasswordError({ error: false, message: '' })
    startLoginProcess(() => {
      login(formData).then((res) => {
        if (res.success) {
          console.log(res.data)
        } else {
          //   console.log(res.message)
          if (res.message.toLowerCase().includes('email')) {
            setEmailError({
              error: true,
              message: res.message,
            })
          }
          if (res.message.toLowerCase().includes('password')) {
            setPasswordError({
              error: true,
              message: res.message,
            })
          }
        }
      })
    })
  }

  return (
    <form
      className='w-[90%] max-w-[400px] bg-base-100 text-base-content px-3 py-3 rounded shadow-xl flex flex-col gap-2'
      action={handleSubmit}
    >
      <p className='text-xs text-base-content/80'>WELCOME BACK</p>
      <h3 className='font-semibold'>Login to your account</h3>
      <InputWithIcon
        type='email'
        icon={<FaEnvelope />}
        placeholder='Email'
        hasError={emailError.error}
        errorMessage={emailError.message}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        name='email'
      />
      <InputWithIcon
        type='password'
        icon={<FaKey />}
        placeholder='Password'
        hasError={passwordError.error}
        errorMessage={passwordError.message}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        name='password'
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
