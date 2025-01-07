'use client'

import { RootState } from '@/store'
import clsx from 'clsx'
import { useDispatch, useSelector } from 'react-redux'
import Logo from '../header/Logo'
import { FaTimes } from 'react-icons/fa'
import { toggleSidebar } from '@/store/sidebarSlice'

const Sidebar = () => {
  const { sidebarIsOpen } = useSelector((store: RootState) => store.sidebar)
  const dispatch = useDispatch()

  return (
    <div
      className={clsx(
        'w-screen h-screen backdrop-filter backdrop-blur-sm bg-base-200/40 absolute top-0 z-20 md:left-0 md:w-[300px] md:relative transition-all duration-300',
        sidebarIsOpen ? 'left-0' : 'left-[-5000px]'
      )}
    >
      <div
        className={clsx(
          'w-[300px] h-full bg-base-200 shadow-lg md:shadow-none'
        )}
      >
        <article className='navbar flex justify-between text-base-content border-b-2 border-base-300'>
          <Logo />
          <button
            className='text-xl md:hidden'
            onClick={() => dispatch(toggleSidebar(false))}
          >
            <FaTimes />
          </button>
        </article>
      </div>
    </div>
  )
}

export default Sidebar
