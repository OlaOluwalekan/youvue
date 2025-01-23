'use client'

import { setInViewDateString } from '@/store/calendarSlice'
import { useDispatch } from 'react-redux'

const TodayButton = () => {
  const dispatch = useDispatch()

  return (
    <button
      className='btn btn-secondary'
      onClick={() => {
        dispatch(setInViewDateString(new Date().toISOString()))
      }}
    >
      Goto Today
    </button>
  )
}

export default TodayButton
