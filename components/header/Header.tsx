'use client'

import { useDispatch } from 'react-redux'
import Logo from './Logo'
import { FaBarsStaggered } from 'react-icons/fa6'
import { toggleSidebar } from '@/store/sidebarSlice'
import Link from 'next/link'
import AddNoteButton from '../notes/AddNoteButton'
import { Session } from 'next-auth'
import LinkButton from '../ui/buttons/LinkButton'
import TodayButton from './TodayButton'

const Header = ({ session }: { session: Session | null }) => {
  const dispatch = useDispatch()

  return (
    <header>
      <div className='navbar bg-base-200 text-base-content flex justify-between md:justify-end'>
        <div className='flex gap-2 items-center md:hidden'>
          <button
            className='text-xl'
            onClick={() => dispatch(toggleSidebar(true))}
          >
            <FaBarsStaggered />
          </button>
          <Logo />
        </div>

        <div className='flex gap-2'>
          <TodayButton />
          {session ? (
            <AddNoteButton />
          ) : (
            <LinkButton href='/login' text='Login' />
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
