'use client'

import { RootState } from '@/store'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import DaysRender from './DaysRender'

const Month = () => {
  const { inViewDateString } = useSelector((store: RootState) => store.calendar)
  const [currentMonth, setCurrentMonth] = useState(new Date(inViewDateString))

  return (
    <div>
      {/* calendar header */}
      <div className='flex justify-between items-center mb-4'>
        {/* previous button */}
        <button
          onClick={() =>
            setCurrentMonth(
              new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1)
            )
          }
          className='bg-primary w-20 h-10 text-primary-content relative ml-5'
        >
          <article className='w-7 h-7 bg-primary absolute top-0 bottom-0 my-auto left-[-15px] rotate-45'></article>
          Prev
        </button>

        {/* month and year indicator */}
        <h2 className='text-2xl font-semibold'>
          {currentMonth.toLocaleDateString('default', { month: 'long' })}{' '}
          {currentMonth.getFullYear()}
        </h2>

        {/* next button */}
        <button
          onClick={() =>
            setCurrentMonth(
              new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1)
            )
          }
          className='bg-primary w-20 h-10 text-primary-content relative mr-5'
        >
          <article className='w-7 h-7 bg-primary absolute top-0 bottom-0 my-auto right-[-15px] rotate-45'></article>
          Next
        </button>
      </div>

      <DaysRender currentMonth={currentMonth} />
    </div>
  )
}

export default Month
