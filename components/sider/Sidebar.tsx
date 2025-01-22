'use client'

import { RootState } from '@/store'
import clsx from 'clsx'
import { useDispatch, useSelector } from 'react-redux'
import Logo from '../header/Logo'
import { FaTimes } from 'react-icons/fa'
import { IoMdLogOut } from 'react-icons/io'
import { toggleSidebar } from '@/store/sidebarSlice'
import ViewList from './ViewList'
import { FaGear } from 'react-icons/fa6'
import { changePage } from '@/store/generalSlice'
import { signOut } from 'next-auth/react'
import { Session } from 'next-auth'

const Sidebar = ({ session }: { session: Session | null }) => {
  const { sidebarIsOpen } = useSelector((store: RootState) => store.sidebar)
  const dispatch = useDispatch()

  return (
    <div
      className={clsx(
        'w-screen h-screen backdrop-filter backdrop-blur-sm bg-base-200/40 absolute top-0 z-20 md:left-0 md:w-[300px] md:relative transition-all duration-300',
        sidebarIsOpen ? 'left-0' : 'left-[-5000px]'
      )}
      onClick={() => dispatch(toggleSidebar(false))}
    >
      <div
        className={clsx(
          'w-[300px] h-full bg-base-200 shadow-lg flex flex-col md:shadow-none'
        )}
        onClick={(e) => e.stopPropagation()}
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

        <div className='text-base-content flex flex-col items-start justify-between flex-grow'>
          <div>
            <ViewList />
            <button
              className='flex gap-3 items-center leading-10 px-4'
              onClick={() => {
                dispatch(changePage('settings'))
                dispatch(toggleSidebar(false))
              }}
            >
              <FaGear /> Settings
            </button>
          </div>

          {session && (
            <article className='flex justify-center w-full p-1'>
              <button
                className='bg-secondary text-secondary-content w-full flex justify-center items-center gap-2 py-2 text-base'
                onClick={() => {
                  signOut()
                  dispatch(toggleSidebar(false))
                }}
              >
                <IoMdLogOut />
                Log Out
              </button>
            </article>
          )}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
