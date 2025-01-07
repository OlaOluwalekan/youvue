import { ReactNode } from 'react'
import Logo from '../header/Logo'

const AuthWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className='flex flex-col gap-3 justify-center items-center md:flex-row'>
      <div className='flex flex-col justify-center items-center md:gap-20'>
        <Logo />
        <article className='flex flex-col justify-center items-center md:gap-2'>
          <h3 className='text-2xl'>Lorem ipsum dolor sit amet.</h3>
          <p className=' text-center w-[80%]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            necessitatibus porro dolorum cum debitis repellat!
          </p>
        </article>
      </div>
      {children}
    </div>
  )
}

export default AuthWrapper
