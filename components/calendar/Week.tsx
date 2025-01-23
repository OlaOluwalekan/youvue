'use client'

import { daysMap, hoursArray } from '@/data/date'
import { RootState } from '@/store'
import clsx from 'clsx'
import { useDispatch, useSelector } from 'react-redux'
import { format } from 'date-fns'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6'
import { setInViewDateString } from '@/store/calendarSlice'

const Week = () => {
  const { inViewDateString } = useSelector((store: RootState) => store.calendar)
  const dispatch = useDispatch()

  const inViewDate = new Date(inViewDateString)
  const day = inViewDate.getDate()
  const dayOfWeekNo = inViewDate.getDay()
  const weekStartDay = day - dayOfWeekNo
  const monthNo = inViewDate.getMonth()
  const year = inViewDate.getFullYear()
  //   console.log(day, dayOfWeekNo, day - dayOfWeekNo)
  const weekArray: Date[] = []
  for (let i = weekStartDay; i < weekStartDay + 7; i++) {
    weekArray.push(new Date(year, monthNo, i))
  }

  let today: Date | string = new Date()
  const todayDay = today.getDate()
  const todayMonthNo = today.getMonth()
  const todayYear = today.getFullYear()
  today = new Date(todayYear, todayMonthNo, todayDay).toLocaleDateString()

  return (
    <div className='h-full flex flex-col'>
      <div className='py-4 flex flex-col gap-2 md:flex-row'>
        <section className='text-lg flex gap-4'>
          <button
            onClick={() => {
              dispatch(
                setInViewDateString(
                  new Date(
                    weekArray[0].setDate(weekArray[0].getDate() - 1)
                  ).toISOString()
                )
              )
            }}
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={() => {
              dispatch(
                setInViewDateString(
                  new Date(
                    weekArray[weekArray.length - 1].setDate(
                      weekArray[weekArray.length - 1].getDate() + 1
                    )
                  ).toISOString()
                )
              )
            }}
          >
            <FaChevronRight />
          </button>
        </section>

        <article className='text-lg'>
          {format(weekArray[0], 'MMMM dd yyyy')} -{' '}
          {format(weekArray[6], 'MMMM dd yyyy')}
        </article>
      </div>

      <div className='w-full h-full relative pt-16 overflow-auto scrollbar-thin scrollbar-thumb-rounded-full bg-base-300 rounded-lg'>
        <div className='w-[calc(100%-60px)] h-[1040px] flex absolute top-4 right-0'>
          {weekArray.map((date, i) => {
            const day = date.getDate()
            const dayOfWeek = daysMap[date.getDay()].short
            return (
              <div className='w-full h-full flex flex-col' key={i}>
                <div className='flex flex-col justify-center items-center'>
                  <span>{dayOfWeek}</span>
                  <span
                    className={clsx(
                      'text-lg md:text-2xl w-8 md:w-12 aspect-square flex justify-center items-center rounded-full',
                      date.toLocaleDateString() === today
                        ? 'bg-secondary text-secondary-content'
                        : ''
                    )}
                  >
                    {day}
                  </span>
                </div>
                <div className='w-full flex flex-grow border-l-[1px] border-base-100'></div>
              </div>
            )
          })}
        </div>

        <div className='px-2 py-4'>
          <div>
            {hoursArray.map((hours, i) => {
              return (
                <div key={i}>
                  <div className='flex items-center'>
                    <span className='text-xs'>{hours.start}</span>
                    <article className='border-[1px] border-base-100 flex-grow'></article>
                  </div>
                  <div className='h-6'></div>
                  {i == hoursArray.length - 1 && (
                    <div className='flex items-center'>
                      <span className='text-xs'>{hours.end}</span>
                      <article className='border-[1px] border-base-100 flex-grow'></article>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Week
