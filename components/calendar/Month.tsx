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
    const firstDay = firstDayInCurrentMonth(year, month)

    for (let i = 0; i < firstDay; i++) {
      days.push(
        <div
          key={`empty-${i}`}
          className='border bg-gray-100 opacity-50 w-full aspect-square max-h-[70px]'
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
        className='w-full aspect-square max-h-[70px] flex justify-center items-center text-primary font-semibold'
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
          className='bg-primary w-20 h-10 text-primary-content relative ml-5'
        >
          <article className='w-7 h-7 bg-primary absolute top-0 bottom-0 my-auto left-[-15px] rotate-45'></article>
          Prev
        </button>
        <h2 className='text-2xl font-semibold'>
          {currentMonth.toLocaleDateString('default', { month: 'long' })}{' '}
          {currentMonth.getFullYear()}
        </h2>
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
      <div className='grid grid-cols-7 gap-2 text-base-content'>
        {renderDaysHeadings()}
        {renderDays()}
      </div>
    </div>
  )
}

export default Month
