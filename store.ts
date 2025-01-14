import { configureStore } from '@reduxjs/toolkit'
import themeSlice from './store/themeSlice'
import calendarSlice from './store/calendarSlice'
import sidebarSlice from './store/sidebarSlice'
import generalSlice from './store/generalSlice'

const store = configureStore({
  reducer: {
    // Add reducers here
    theme: themeSlice,
    calendar: calendarSlice,
    sidebar: sidebarSlice,
    general: generalSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>

export default store
