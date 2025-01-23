'use client'

import { useDispatch } from 'react-redux'
import Overlay from '../general/Overlay'
import { toggleAddNoteIsOpen } from '@/store/notesSlice'
import BasicInput from '../ui/inputs/BasicInput'
import { ChangeEvent, useState } from 'react'
import TextBoxInput from '../ui/inputs/TextBoxInput'
import BasicButton from '../ui/buttons/BasicButton'

const AddNotesForm = () => {
  const [noteData, setNoteData] = useState({
    title: '',
    description: '',
    occurrence: 'once',
  })
  const dispatch = useDispatch()

  const handleNoteDataChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNoteData({ ...noteData, [e.target.name]: e.target.value })
  }

  return (
    <Overlay onClick={() => dispatch(toggleAddNoteIsOpen(false))}>
      <form
        className='w-[90%] max-w-[400px] bg-base-300 p-4 rounded-lg flex flex-col gap-2'
        onClick={(e) => e.stopPropagation()}
      >
        <BasicInput
          type='text'
          placeholder='Title'
          name='title'
          value={noteData.title}
          onChange={handleNoteDataChange}
        />

        <TextBoxInput
          name='description'
          placeholder='Description'
          value={noteData.description}
          onChange={handleNoteDataChange}
        />

        <BasicButton type='submit' text='Add Note' />
      </form>
    </Overlay>
  )
}

export default AddNotesForm
