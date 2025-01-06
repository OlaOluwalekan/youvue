'use client'

import { useState } from 'react'

const Month = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date())

  const daysInCurrentMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate()
  }

  const firstDayInCurrentMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay()
  }

  const renderDays = () => {
    const days = []
    const year = currentMonth.getFullYear()
    const month = currentMonth.getMonth()
    const totalDays = daysInCurrentMonth(year, month)
    const firstDay = firstDayInCurrentMonth(year, month)

    for (let i = 0; i < firstDay; i++) {
      days.push(
        <div className='border bg-gray-100 opacity-50 w-full aspect-square max-h-[70px]'></div>
      )
    }

    for (let i = 1; i <= daysInCurrentMonth(year, month); i++) {
      days.push(
        <div
          key={i}
          className='border border-gray-300 w-full aspect-square max-h-[70px] flex justify-center items-center text-center cursor-pointer hover:bg-blue-200 hover:text-gray-700'
        >
          {i}
        </div>
      )
    }

    return days
  }

  const renderDaysHeadings = () => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    return days.map((day) => (
      <div
        key={day}
        className='w-full aspect-square max-h-[70px] flex justify-center items-center'
      >
        {day}
      </div>
    ))
  }

  return (
    <div>
      <div className='flex justify-between items-center mb-4'>
        <button
          onClick={() =>
            setCurrentMonth(
              new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1)
            )
          }
        >
          Prev
        </button>
        <h2>
          {currentMonth.toLocaleDateString('default', { month: 'long' })}{' '}
          {currentMonth.getFullYear()}
        </h2>
        <button
          onClick={() =>
            setCurrentMonth(
              new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1)
            )
          }
        >
          Next
        </button>
      </div>
      <div className='grid grid-cols-7 gap-2'>
        {renderDaysHeadings()}
        {renderDays()}
      </div>
    </div>
  )
}

export default Month
