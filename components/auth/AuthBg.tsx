import { ReactNode } from 'react'

const AuthBg = ({ children }: { children: ReactNode }) => {
  return (
    <div className='h-full w-full bg-[url("/images/bg/bg1.jpg")] bg-cover'>
      <div className='w-full h-full absolute bg-gradient-to-tr from-black/50 to-transparent flex justify-center items-center'>
        {children}
      </div>
    </div>
  )
}

export default AuthBg
