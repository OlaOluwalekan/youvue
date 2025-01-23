'use client'

import { RootState } from '@/store'
import { useSelector } from 'react-redux'
import Calendar from '../calendar/Calendar'
import Settings from '../settings/Settings'

const PageHandler = () => {
  const { page } = useSelector((store: RootState) => store.general)

  return (
    <div className='h-full'>
      {page === 'calendar' && <Calendar />}
      {page === 'settings' && <Settings />}
    </div>
  )
}

export default PageHandler
