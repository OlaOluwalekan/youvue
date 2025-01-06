import { CalendarInitProps, SelectedViewType } from '@/types/calender.interface'
import { createSlice } from '@reduxjs/toolkit'

const initialState: CalendarInitProps = {
  selectedView: 'month',
}

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    setSelectedView: (state, { payload }: { payload: SelectedViewType }) => {
      state.selectedView = payload
    },
  },
})

export default calendarSlice.reducer
