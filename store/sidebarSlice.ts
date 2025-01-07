import { SidebarInitProps } from '@/types/sidebar.interface'
import { createSlice } from '@reduxjs/toolkit'

const initialState: SidebarInitProps = {
  sidebarIsOpen: false,
}

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggleSidebar: (state, { payload }: { payload: boolean }) => {
      state.sidebarIsOpen = payload
    },
  },
})

export const { toggleSidebar } = sidebarSlice.actions

export default sidebarSlice.reducer
