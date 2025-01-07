import AuthBg from '@/components/auth/AuthBg'
import AuthWrapper from '@/components/auth/AuthWrapper'
import LoginForm from '@/components/auth/LoginForm'

const LoginPage = () => {
  return (
    <div className='h-full'>
      <AuthBg>
        <AuthWrapper>
          <LoginForm />
        </AuthWrapper>
      </AuthBg>
    </div>
  )
}

export default LoginPage
