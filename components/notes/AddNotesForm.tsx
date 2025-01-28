'use client'

import { useDispatch } from 'react-redux'
import Overlay from '../general/Overlay'
import { setNotes, toggleAddNoteIsOpen } from '@/store/notesSlice'
import BasicInput from '../ui/inputs/BasicInput'
import { ChangeEvent, useEffect, useState, useTransition } from 'react'
import TextBoxInput from '../ui/inputs/TextBoxInput'
import BasicButton from '../ui/buttons/BasicButton'
import Select from '../ui/inputs/Select'
import { occurrenceList } from '@/data/notes'
import CalendarSelect from './CalendarSelect'
import { CalendarValueType, NotesDataProps } from '@/types/calender.interface'
import { createNotes, getAllUserNotes } from '@/utils/actions/notes'
import { Session } from 'next-auth'
import toast from 'react-hot-toast'

const AddNotesForm = ({ session }: { session: Session }) => {
  const [noteData, setNoteData] = useState<NotesDataProps>({
    title: '',
    description: '',
    recurrence: 'NONE',
    dates: [],
  })
  const [date, setDate] = useState<CalendarValueType>(null)
  const [dates, setDates] = useState<string[]>([])
  const dispatch = useDispatch()
  const [creatingNotes, startNoteCreation] = useTransition()

  const handleNoteDataChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log(e.target)

    setNoteData({ ...noteData, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    setNoteData({ ...noteData, dates })
  }, [date])

  const handleSubmit = () => {
    startNoteCreation(() => {
      createNotes(noteData, session.user?.id as string).then((res) => {
        if (res.success) {
          toast.success(res.message)
          dispatch(toggleAddNoteIsOpen(false))
          setNoteData({
            title: '',
            description: '',
            recurrence: 'NONE',
            dates: [],
          })
          getAllUserNotes(session.user?.id as string).then((res) => {
            dispatch(setNotes(res.data))
          })
        } else {
          toast.error(res.message)
        }
      })
    })
  }

  return (
    <Overlay onClick={() => dispatch(toggleAddNoteIsOpen(false))}>
      <form
        className='w-[90%] max-w-[400px] bg-base-300 p-4 rounded-lg flex flex-col gap-2'
        onClick={(e) => e.stopPropagation()}
        action={handleSubmit}
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

        <Select
          options={occurrenceList}
          name='recurrence'
          value={noteData.recurrence}
          onChange={handleNoteDataChange}
        />

        <CalendarSelect
          value={date}
          setValue={setDate}
          dates={dates}
          setDates={setDates}
        />

        <BasicButton
          type='submit'
          text={creatingNotes ? 'Please wait...' : 'Add Note'}
          disabled={creatingNotes}
        />
      </form>
    </Overlay>
  )
}

export default AddNotesForm
