'use client'

import { daysMap, hoursArray, monthsMap } from '@/data/date'
import { RootState } from '@/store'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

const Day = () => {
  const { inViewDateString } = useSelector((store: RootState) => store.calendar)
  let inViewDate = new Date(inViewDateString)
  const day = inViewDate.getDate()
  const dayOfWeek = daysMap[inViewDate.getDay()].full
  const month = monthsMap[inViewDate.getMonth()].full
  //   const hoursArray = Array.from({ length: 24 }, (_, i) => i)

  //   console.log(hoursArray)

  //   useEffect(() => {
  //     inViewDate = new Date(inViewDateString)
  //     // console.log(inViewDate)
  //   }, [inViewDateString])

  return (
    <div className='h-full flex flex-col'>
      <div className='flex items-center gap-1'>
        <span className='text-5xl'>{day}</span>
        <article className='flex flex-col text-sm'>
          <span>{dayOfWeek}</span>
          <span>{month}</span>
        </article>
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
