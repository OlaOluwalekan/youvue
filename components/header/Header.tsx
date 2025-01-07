'use client'

import { useDispatch } from 'react-redux'
import Logo from './Logo'
import { FaBarsStaggered } from 'react-icons/fa6'
import { toggleSidebar } from '@/store/sidebarSlice'

const Header = () => {
  const dispatch = useDispatch()

  return (
    <header>
      <div className='navbar bg-base-200 text-base-content'>
        <div className='flex gap-2 items-center md:hidden'>
          <button
            className='text-xl'
            onClick={() => dispatch(toggleSidebar(true))}
          >
            <FaBarsStaggered />
          </button>
          <Logo />
        </div>
      </div>
    </header>
  )
}

export default Header
