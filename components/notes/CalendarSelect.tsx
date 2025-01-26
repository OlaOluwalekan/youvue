'use client'

import {
  CalendarSelectProps,
  CalendarValueType,
} from '@/types/calender.interface'
import {
  convertToRanges,
  flattenDate,
  formatDatesDisplay,
  isHighlighted,
  updateDates,
} from '@/utils/helpers/date'
import clsx from 'clsx'
import { format } from 'date-fns'
import { useEffect, useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import './test.css'

const CalendarSelect = ({
  value,
  setValue,
  dates,
  setDates,
}: CalendarSelectProps) => {
  const [dateIsOpen, setDateIsOpen] = useState(false)
  const [rangeAllowed, setRangeAllowed] = useState(false)
  const [calendarKey, setCalendarKey] = useState(0) // for resetting the calendar
  const [allDates, setAllDates] = useState<Date[]>()
  const [selectType, setSelectType] = useState('single')

  useEffect(() => {
    setAllDates(flattenDate(dates))
  }, [value])

  const handleSelectedDateChange = (value: CalendarValueType) => {
    const spreadDates = updateDates(dates, value)
    const rangedDate = convertToRanges(spreadDates)
    setDates(rangedDate)
    setValue(value)
    if (selectType === 'single') {
      setDateIsOpen(false)
    }
  }

  const handleRangeSwitch = () => {
    setRangeAllowed(!rangeAllowed)
    setValue(null)
    setCalendarKey((prev) => prev + 1)
  }

  return (
    <div className='relative'>
      <article className='text-xs flex gap-2 my-1'>
        <button
          type='button'
          className='underline max-w-[200px] whitespace-nowrap text-ellipsis overflow-hidden py-1 px-2 rounded-md hover:bg-base-100'
          onClick={() => setDateIsOpen(!dateIsOpen)}
        >
          {formatDatesDisplay(dates)}
        </button>
        <button
          type='button'
          className='underline py-1 px-2 rounded-md hover:bg-base-100'
        >
          Choose Time
        </button>
      </article>
      {dateIsOpen && (
        <div className='w-fit absolute bottom-10'>
          <Calendar
            key={calendarKey}
            value={value}
            onChange={(e) => handleSelectedDateChange(e as CalendarValueType)}
            className={clsx('text-sm')}
            calendarType='gregory'
            selectRange={rangeAllowed}
            tileClassName={({ date, view }) =>
              // Add custom class for specific dates
              view === 'month' && isHighlighted(date, allDates as Date[])
                ? 'selected-date'
                : ''
            }
          />

          <section className='bg-neutral-50 text-neutral-content px-2 py-2'>
            <section className='flex gap-2'>
              <article className='flex gap-2'>
                {['single', 'multiple'].map((item) => {
                  return (
                    <article key={item}>
                      <input
                        type='radio'
                        name='select-type'
                        id={item}
                        className='hidden'
                        value={item}
                        onChange={() => setSelectType(item)}
                      />
                      <label
                        htmlFor={item}
                        className={clsx(
                          'flex px-2 border-primary cursor-pointer rounded capitalize',
                          selectType === item ? 'border-[1px]' : ''
                        )}
                      >
                        {item}
                      </label>
                    </article>
                  )
                })}
              </article>

              <article>
                <input
                  type='checkbox'
                  name='range'
                  id='range'
                  checked={rangeAllowed}
                  onChange={handleRangeSwitch}
                  className='hidden'
                />
                <label
                  htmlFor='range'
                  className={clsx(
                    'cursor-pointer px-2 py-1 rounded',
                    rangeAllowed
                      ? 'bg-primary text-primary-content'
                      : 'underline'
                  )}
                >
                  Range
                </label>
              </article>
            </section>

            <section className='flex justify-end'>
              <button
                type='button'
                className='py-2 px-3 rounded bg-primary text-primary-content'
                onClick={() => {
                  setDateIsOpen(false)
                  // console.log(dates)
                  // console.log(allDates)
                }}
              >
                Done
              </button>
            </section>
          </section>
        </div>
      )}
    </div>
  )
}

export default CalendarSelect
