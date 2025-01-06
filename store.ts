import { configureStore } from '@reduxjs/toolkit'
import themeSlice from './store/themeSlice'
import calendarSlice from './store/calendarSlice'

const store = configureStore({
  reducer: {
    // Add reducers here
    theme: themeSlice,
    calendar: calendarSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>

export default store
