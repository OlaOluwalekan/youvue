'use client'

import { useSelector } from 'react-redux'
import Month from './Month'
import Day from './Day'
import { RootState } from '@/store'
import Week from './Week'

const Calendar = () => {
  const { selectedView } = useSelector((store: RootState) => store.calendar)

  return (
    <div className='p-4 text-primary w-full h-full'>
      {selectedView === 'month' && <Month />}
      {selectedView === 'day' && <Day />}
      {selectedView === 'week' && <Week />}
    </div>
  )
}

export default Calendar
