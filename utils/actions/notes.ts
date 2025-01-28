'use server'

import { db } from '@/lib/db'
import { NotesDataProps } from '@/types/calender.interface'
import ActionResponse from '../responseTemplate'
import { revalidatePath } from 'next/cache'

export const createNotes = async (
  notesData: NotesDataProps,
  userId: string
) => {
  if (!notesData.dates || notesData.dates.length === 0) {
    return ActionResponse.error(
      'Please select at least one date for this event/task',
      null
    )
  }

  try {
    const newNote = await db.note.create({
      data: {
        ...notesData,
        userId,
      },
    })
    revalidatePath('/', 'layout')

    return ActionResponse.success('Note created successfully', newNote)
  } catch (error) {
    return ActionResponse.error('Error fetching notes', error)
  }
}

export const getAllUserNotes = async (userId: string) => {
  try {
    const notes = await db.note.findMany({
      where: {
        userId,
      },
    })

    return ActionResponse.success('Notes fetched successfully', notes)
  } catch (error) {
    console.error(error)
    return ActionResponse.error('Error fetching notes', null)
  }
}
