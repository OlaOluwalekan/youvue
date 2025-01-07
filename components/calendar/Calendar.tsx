'use client'

import { useSelector } from 'react-redux'
import Month from './Month'
import { RootState } from '@/store'

const Calendar = () => {
  const { selectedView } = useSelector((store: RootState) => store.calendar)

  return (
    <div className='p-4 text-primary w-full'>
      {selectedView === 'month' && <Month />}
    </div>
  )
}

export default Calendar
