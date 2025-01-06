import { configureStore } from '@reduxjs/toolkit'
import themeSlice from './store/themeSlice'

const store = configureStore({
  reducer: {
    // Add reducers here
    theme: themeSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>

export default store
