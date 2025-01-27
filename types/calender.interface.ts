export type SelectedViewType =
  | 'day'
  | 'week'
  | 'month'
  | 'year'
  | 'agenda'
  | 'schedule'
  | 'timelineDay'
  | 'timelineWeek'
  | 'timelineMonth'
  | 'timelineYear'
  | 'timeline'

export interface CalendarInitProps {
  selectedView: SelectedViewType
  selectedViewPopupIsOpen: boolean
  inViewDateString: string
}

export type occurrenceType =
  | 'NONE'
  | 'DAILY'
  | 'WEEKLY'
  | 'BIWEEKLY'
  | 'MONTHLY'
  | 'YEARLY'
  | 'RANGE'

export type ValuePiece = Date | null

export type CalendarValueType = ValuePiece | [ValuePiece, ValuePiece]

export interface CalendarSelectProps {
  value: CalendarValueType
  setValue: (value: CalendarValueType) => void
  dates: Date[]
  setDates: (value: Date[]) => void
}

export interface NotesDataProps {
  title: string
  description: string
  recurrence: occurrenceType
  dates: Date[]
}
