'use client'

import { useDispatch, useSelector } from 'react-redux'
import Logo from './Logo'
import { FaBarsStaggered } from 'react-icons/fa6'
import { toggleSidebar } from '@/store/sidebarSlice'
import Link from 'next/link'
import AddNoteButton from '../notes/AddNoteButton'
import { Session } from 'next-auth'
import LinkButton from '../ui/buttons/LinkButton'
import TodayButton from './TodayButton'
import { NotesProps } from '@/types/notes.interface'
import { useEffect } from 'react'
import { setNotes } from '@/store/notesSlice'
import { RootState } from '@/store'

const Header = ({
  session,
  notes,
}: {
  session: Session | null
  notes: NotesProps[]
}) => {
  const dispatch = useDispatch()
  const { addNoteIsOpen } = useSelector((store: RootState) => store.notes)

  useEffect(() => {
    dispatch(setNotes(notes))
  }, [addNoteIsOpen])

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
            <AddNoteButton session={session} />
          ) : (
            <LinkButton href='/login' text='Login' />
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
