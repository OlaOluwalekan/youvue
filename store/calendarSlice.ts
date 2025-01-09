import { CalendarInitProps, SelectedViewType } from '@/types/calender.interface'
import { createSlice } from '@reduxjs/toolkit'

const initialState: CalendarInitProps = {
  selectedView: 'month',
  selectedViewPopupIsOpen: false,
}

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    setSelectedView: (state, { payload }: { payload: SelectedViewType }) => {
      state.selectedView = payload
    },
    setSelectedViewPopupIsOpen: (state, { payload }: { payload: boolean }) => {
      state.selectedViewPopupIsOpen = payload
    },
  },
})

export const { setSelectedView, setSelectedViewPopupIsOpen } =
  calendarSlice.actions

export default calendarSlice.reducer
