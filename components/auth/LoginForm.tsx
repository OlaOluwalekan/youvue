'use client'

import { FaEnvelope, FaKey } from 'react-icons/fa6'
import { FcGoogle } from 'react-icons/fc'
import InputWithIcon from '../ui/inputs/InputWithIcon'
import { useEffect, useState, useTransition } from 'react'
import BasicButton from '../ui/buttons/BasicButton'
import AuthButton from '../ui/buttons/AuthButton'
import Link from 'next/link'
import { login } from '@/utils/actions/login'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, startLoginProcess] = useTransition()
  const [emailError, setEmailError] = useState({ error: false, message: '' })
  const [passwordError, setPasswordError] = useState({
    error: false,
    message: '',
  })
  const router = useRouter()

  useEffect(() => {
    let interval = setTimeout(() => {
      setEmailError({ error: false, message: '' })
      setPasswordError({ error: false, message: '' })
    }, 3000)

    return () => clearInterval(interval)
  }, [emailError, passwordError])

  const handleSubmit = (formData: FormData) => {
    setEmailError({ error: false, message: '' })
    setPasswordError({ error: false, message: '' })
    startLoginProcess(() => {
      login(formData).then((res) => {
        if (res.success) {
          // console.log(res.data)
          router.push('/')
        } else {
          let errorMessage = res.message.toLowerCase()
          //   console.log(res.message)
          if (errorMessage.includes('email')) {
            setEmailError({
              error: true,
              message: res.message,
            })
          }
          if (errorMessage.includes('password')) {
            setPasswordError({
              error: true,
              message: res.message,
            })
          } else {
            console.log(res.message, res.data)
          }
        }
      })
    })
  }

  return (
    <form
      className='w-[90%] max-w-[400px] bg-base-100 text-base-content px-3 py-3 rounded shadow-xl flex flex-col gap-2'
      action={handleSubmit}
      noValidate
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
      <BasicButton
        type='submit'
        text={isLoading ? 'Please wait...' : 'Login'}
        disabled={isLoading}
      />

      <div className='divider divider-neutral'>OR</div>

      <AuthButton
        type='button'
        text='Login with Google'
        icon={<FcGoogle />}
        onClick={async () => {
          try {
            await signIn('google', { callbackUrl: '/' })
          } catch (error) {
            console.log('error in google login:', error)
          }
        }}
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
