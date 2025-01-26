'use client'

import { useDispatch } from 'react-redux'
import Overlay from '../general/Overlay'
import { toggleAddNoteIsOpen } from '@/store/notesSlice'
import BasicInput from '../ui/inputs/BasicInput'
import { ChangeEvent, useEffect, useState } from 'react'
import TextBoxInput from '../ui/inputs/TextBoxInput'
import BasicButton from '../ui/buttons/BasicButton'
import Select from '../ui/inputs/Select'
import { occurrenceList } from '@/data/notes'
import CalendarSelect from './CalendarSelect'
import { CalendarValueType, NotesDataProps } from '@/types/calender.interface'

const AddNotesForm = () => {
  const [noteData, setNoteData] = useState<NotesDataProps>({
    title: '',
    description: '',
    occurrence: 'ONCE',
    date: null,
  })
  const [date, setDate] = useState<CalendarValueType>(noteData.date)
  const [dates, setDates] = useState<CalendarValueType[]>([])
  const dispatch = useDispatch()

  const handleNoteDataChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNoteData({ ...noteData, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    setNoteData({ ...noteData, date })
  }, [date])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(noteData, dates)
    // dates.forEach((date) => {
    //   console.log(date)
    //   // console.log(date instanceof Date)
    // })
  }

  return (
    <Overlay onClick={() => dispatch(toggleAddNoteIsOpen(false))}>
      <form
        className='w-[90%] max-w-[400px] bg-base-300 p-4 rounded-lg flex flex-col gap-2'
        onClick={(e) => e.stopPropagation()}
        onSubmit={handleSubmit}
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
          name='occurrence'
          value={noteData.occurrence}
          onChange={handleNoteDataChange}
        />

        <CalendarSelect
          value={date}
          setValue={setDate}
          dates={dates}
          setDates={setDates}
        />

        <BasicButton type='submit' text='Add Note' />
      </form>
    </Overlay>
  )
}

export default AddNotesForm
