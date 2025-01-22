'use client'

import { useDispatch } from 'react-redux'
import Overlay from '../general/Overlay'
import { toggleAddNoteIsOpen } from '@/store/notesSlice'

const AddNotesForm = () => {
  const dispatch = useDispatch()

  return (
    <Overlay onClick={() => dispatch(toggleAddNoteIsOpen(false))}>
      <div>AddNotesForm</div>
    </Overlay>
  )
}

export default AddNotesForm
