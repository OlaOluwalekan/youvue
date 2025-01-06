import { ThemeInitProps } from '@/types/theme.interface'
import { createSlice } from '@reduxjs/toolkit'

const initialState: ThemeInitProps = {
  theme: 'dark',
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {},
})

export default themeSlice.reducer
