'use client'

import { NotesProps } from '@/types/notes.interface'
import { useEffect, useState } from 'react'

const MonthViewDay = ({
  day,
  date,
  notes,
}: {
  day: number
  date: Date
  notes: NotesProps[]
}) => {
  const now = new Date()
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  const [todayNotes, setTodayNotes] = useState<NotesProps[]>([])

  useEffect(() => {
    const notesToday = notes.filter((note) => {
      return note.dates.includes(date.toLocaleDateString())
    })
    setTodayNotes(notesToday)
  }, [notes])

  return (
    <div
      className={`border border-accent w-full aspect-square max-h-[70px] flex justify-center items-center text-center cursor-pointer hover:bg-accent hover:text-accent-content relative ${
        today.toLocaleDateString() == date.toLocaleDateString()
          ? 'bg-secondary text-secondary-content'
          : 'bg-base-100'
      }`}
    >
      <span className='text-xs absolute top-1 left-1'>{day}</span>
      <article>
        {todayNotes.length > 0 && (
          <article>
            <span className='md:hidden'>✅</span>
            <article className='hidden md:flex flex-col'>
              {todayNotes.map((note) => {
                return (
                  <span key={note.id} className='text-xs hover:underline'>
                    {note.title}
                  </span>
                )
              })}
            </article>
          </article>
        )}
      </article>
    </div>
  )
}

export default MonthViewDay
