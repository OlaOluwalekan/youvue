'use client'

import { RootState } from '@/store'
import { useState } from 'react'
import { useSelector } from 'react-redux'

const Month = () => {
  const { inViewDateString } = useSelector((store: RootState) => store.calendar)
  const [currentMonth, setCurrentMonth] = useState(new Date(inViewDateString))

  //   get the number of days in the currently viewed month
  const daysInCurrentMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate()
  }

  //   get the first day of the currently viewed month
  const firstDayInCurrentMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay()
  }

  //   render the days of the currently viewed month
  const renderDays = () => {
    const days = []
    const year = currentMonth.getFullYear()
    const month = currentMonth.getMonth()
    const firstDay = firstDayInCurrentMonth(year, month)

    for (let i = 0; i < firstDay; i++) {
      days.push(
        <div
          key={`empty-${i}`}
          className='border bg-gray-100 opacity-10 w-full aspect-square max-h-[70px]'
        ></div>
      )
    }

    for (let i = 1; i <= daysInCurrentMonth(year, month); i++) {
      const now = new Date()
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
      const date = new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth(),
        i
      )

      days.push(
        <div
          key={i}
          className={`border border-accent w-full aspect-square max-h-[70px] flex justify-center items-center text-center cursor-pointer hover:bg-blue-200 hover:text-accent ${
            today.toLocaleDateString() == date.toLocaleDateString()
              ? 'bg-secondary text-secondary-content'
              : 'bg-base-100'
          }`}
        >
          <span className='text-xs'>{i}</span>
        </div>
      )
    }

    return days
  }

  //   render the days headings
  const renderDaysHeadings = () => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    return days.map((day) => (
      <div
        key={day}
        className='w-full aspect-square max-h-[70px] flex justify-center items-center text-primary font-semibold'
      >
        {day}
      </div>
    ))
  }

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

      {/* days grid */}
      <div className='grid grid-cols-7 gap-2 text-base-content'>
        {renderDaysHeadings()}
        {renderDays()}
      </div>
    </div>
  )
}

export default Month
