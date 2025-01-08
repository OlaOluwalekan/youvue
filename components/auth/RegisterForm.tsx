'use client'

import { useEffect, useState, useTransition } from 'react'
import InputWithIcon from '../ui/inputs/InputWithIcon'
import { FaEnvelope, FaKey, FaUser } from 'react-icons/fa6'
import BasicButton from '../ui/buttons/BasicButton'
import AuthButton from '../ui/buttons/AuthButton'
import { FcGoogle } from 'react-icons/fc'
import Link from 'next/link'
import { register } from '@/utils/actions/register'
import { useRouter } from 'next/navigation'

const RegisterForm = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isLoading, startRegistrationProcess] = useTransition()
  const [emailError, setEmailError] = useState({ error: false, message: '' })
  const [nameError, setNameError] = useState({ error: false, message: '' })
  const [passwordError, setPasswordError] = useState({
    error: false,
    message: '',
  })
  const [confirmPasswordError, setConfirmPasswordError] = useState({
    error: false,
    message: '',
  })
  const router = useRouter()

  const resetErrors = () => {
    setEmailError({ error: false, message: '' })
    setPasswordError({ error: false, message: '' })
    setNameError({ error: false, message: '' })
    setConfirmPasswordError({ error: false, message: '' })
  }

  const resetForm = () => {
    setEmail('')
    setName('')
    setPassword('')
    setConfirmPassword('')
    resetErrors()
  }

  useEffect(() => {
    let interval = setTimeout(() => {
      resetErrors()
    }, 5000)

    return () => clearInterval(interval)
  }, [emailError, nameError, passwordError, confirmPasswordError])

  const handleSubmit = (formData: FormData) => {
    resetErrors()
    startRegistrationProcess(() => {
      register(formData).then((res) => {
        if (res.success) {
          resetForm()
          // router.push('/login')
          console.log(res.data)
        } else {
          let errorMessage = res.message.toLowerCase()
          if (errorMessage.includes('name')) {
            setNameError({ error: true, message: res.message })
          } else if (errorMessage.includes('email')) {
            setEmailError({ error: true, message: res.message })
          } else if (
            errorMessage.includes('password') &&
            !errorMessage.includes('confirm') &&
            !errorMessage.includes('match')
          ) {
            setPasswordError({ error: true, message: res.message })
          } else if (
            errorMessage.includes('confirm') ||
            errorMessage.includes('match')
          ) {
            setConfirmPasswordError({ error: true, message: res.message })
          } else {
            console.log(res.message, ':', res.data)
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
      <p className='text-xs text-base-content/80'>LET'S GET YOU STARTED</p>
      <h3 className='font-semibold'>Create your account</h3>

      <InputWithIcon
        type='text'
        icon={<FaUser />}
        placeholder='Name'
        hasError={nameError.error}
        errorMessage={nameError.message}
        value={name}
        onChange={(e) => setName(e.target.value)}
        name='name'
      />

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

      <InputWithIcon
        type='password'
        icon={<FaKey />}
        placeholder='Confirm Password'
        hasError={confirmPasswordError.error}
        errorMessage={confirmPasswordError.message}
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        name='confirmPassword'
      />

      <BasicButton
        type='submit'
        text={isLoading ? 'Please wait...' : 'Register'}
        disabled={isLoading}
      />

      <div className='divider divider-neutral'>OR</div>

      <AuthButton
        type='button'
        text='Login with Google'
        icon={<FcGoogle />}
        onClick={() => {}}
      />

      <article className='text-center text-xs mt-5'>
        Have an Account?{' '}
        <Link href='/login' className='underline font-semibold'>
          LOGIN HERE
        </Link>
      </article>
    </form>
  )
}

export default RegisterForm
