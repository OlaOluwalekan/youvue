import { createSlice } from '@reduxjs/toolkit'

const initialState = {
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
  },
})

export const { toggleAddNoteIsOpen } = notesSlice.actions

export default notesSlice.reducer
