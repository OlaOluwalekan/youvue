'use server'

import { db } from '@/lib/db'
import { NotesDataProps } from '@/types/calender.interface'
import ActionResponse from '../responseTemplate'

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

    return ActionResponse.success('Note created successfully', newNote)
  } catch (error) {
    console.error(error)
    return ActionResponse.error('Failed to create note', null)
  }
}
