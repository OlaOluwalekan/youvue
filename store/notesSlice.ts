import { NotesInitialProps, NotesProps } from '@/types/notes.interface'
import { createSlice } from '@reduxjs/toolkit'

const initialState: NotesInitialProps = {
  addNoteIsOpen: false,
  notes: [],
}

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    toggleAddNoteIsOpen: (state, { payload }) => {
      state.addNoteIsOpen = payload
    },
    setNotes: (state, { payload }: { payload: NotesProps[] }) => {
      state.notes = payload
    },
  },
})

export const { toggleAddNoteIsOpen, setNotes } = notesSlice.actions

export default notesSlice.reducer
