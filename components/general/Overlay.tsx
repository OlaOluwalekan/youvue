'use client'

import { ReactNode } from 'react'

const Overlay = ({
  children,
  onClick,
}: {
  children: ReactNode
  onClick: () => void
}) => {
  return (
    <div
      className='w-screen h-screen absolute top-0 left-0 bg-base-200/40 flex justify-center items-center backdrop-blur-md z-20'
      onClick={onClick}
    >
      {children}
    </div>
  )
}

export default Overlay
