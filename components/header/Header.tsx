'use client'

import { useDispatch } from 'react-redux'
import Logo from './Logo'
import { FaBarsStaggered } from 'react-icons/fa6'
import { toggleSidebar } from '@/store/sidebarSlice'
import Link from 'next/link'

const Header = () => {
  const dispatch = useDispatch()

  return (
    <header>
      <div className='navbar bg-base-200 text-base-content flex justify-between'>
        <div className='flex gap-2 items-center md:hidden'>
          <button
            className='text-xl'
            onClick={() => dispatch(toggleSidebar(true))}
          >
            <FaBarsStaggered />
          </button>
          <Logo />
        </div>

        <div>
          <Link href='/login'>Login</Link>
        </div>
      </div>
    </header>
  )
}

export default Header
