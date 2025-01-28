import { occurrenceType } from './calender.interface'

export interface NotesInitialProps {
  addNoteIsOpen: boolean
  notes: NotesProps[]
}

export interface NotesProps {
  id: string
  title: string
  description: string
  dates: string[]
  recurrence: occurrenceType
  userId: string
}
