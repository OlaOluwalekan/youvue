import AuthBg from '@/components/auth/AuthBg'
import AuthWrapper from '@/components/auth/AuthWrapper'
import RegisterForm from '@/components/auth/RegisterForm'

const RegisterPage = () => {
  return (
    <div className='h-full'>
      <AuthBg>
        <AuthWrapper>
          <RegisterForm />
        </AuthWrapper>
      </AuthBg>
    </div>
  )
}

export default RegisterPage
