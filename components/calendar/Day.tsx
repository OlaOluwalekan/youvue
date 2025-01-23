'use client'

import { daysMap, hoursArray, monthsMap } from '@/data/date'
import { RootState } from '@/store'
import { setInViewDateString } from '@/store/calendarSlice'
import { useEffect } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6'
import { useDispatch, useSelector } from 'react-redux'

const Day = () => {
  const { inViewDateString } = useSelector((store: RootState) => store.calendar)
  const dispatch = useDispatch()
  let inViewDate = new Date(inViewDateString)
  const day = inViewDate.getDate()
  const dayOfWeek = daysMap[inViewDate.getDay()].full
  const month = monthsMap[inViewDate.getMonth()].full

  return (
    <div className='h-full flex flex-col'>
      <div className='flex gap-2'>
        <section className='text-lg flex gap-4'>
          <button
            onClick={() => {
              dispatch(
                setInViewDateString(
                  new Date(
                    inViewDate.setDate(inViewDate.getDate() - 1)
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
                    inViewDate.setDate(inViewDate.getDate() + 1)
                  ).toISOString()
                )
              )
            }}
          >
            <FaChevronRight />
          </button>
        </section>

        <div className='flex items-center gap-1'>
          <span className='text-5xl'>{day}</span>
          <article className='flex flex-col text-sm'>
            <span>{dayOfWeek}</span>
            <span>{month}</span>
          </article>
        </div>
      </div>

      <div className='flex flex-col flex-grow overflow-auto px-1 py-2 rounded-lg bg-base-300'>
        <div className='overflow-auto scrollbar-thin scrollbar-thumb-rounded-full'>
          {hoursArray.map((hours, i) => {
            return (
              <div key={i}>
                <div className='flex items-center'>
                  <span className='text-xs'>{hours.start}</span>
                  <article className='border-[1px] flex-grow'></article>
                </div>
                <div className='h-6'></div>
                {i == hoursArray.length - 1 && (
                  <div className='flex items-center'>
                    <span className='text-xs'>{hours.end}</span>
                    <article className='border-[1px] flex-grow'></article>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Day
