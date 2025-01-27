'use client'

import { useDispatch, useSelector } from 'react-redux'
import AddNotesForm from './AddNotesForm'
import { RootState } from '@/store'
import { toggleAddNoteIsOpen } from '@/store/notesSlice'
import { Session } from 'next-auth'

const AddNoteButton = ({ session }: { session: Session }) => {
  const { addNoteIsOpen } = useSelector((store: RootState) => store.notes)
  const dispatch = useDispatch()

  return (
    <div>
      <button
        className='btn btn-primary'
        onClick={() => dispatch(toggleAddNoteIsOpen(true))}
      >
        Add Note
      </button>
      {addNoteIsOpen && <AddNotesForm session={session} />}
    </div>
  )
}

export default AddNoteButton
