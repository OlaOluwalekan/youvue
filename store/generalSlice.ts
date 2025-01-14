import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  page: 'calendar',
}

const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    changePage: (state, { payload }: { payload: string }) => {
      state.page = payload
    },
  },
})

export const { changePage } = generalSlice.actions

export default generalSlice.reducer
