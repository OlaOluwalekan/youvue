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

export type occurrenceType = 'NONE' | 'DAILY' | 'MONTHLY' | 'YEARLY' | 'RANGE'

export type ValuePiece = Date | null

export type CalendarValueType = ValuePiece | [ValuePiece, ValuePiece]

export interface CalendarSelectProps {
  value: CalendarValueType
  setValue: (value: CalendarValueType) => void
  dates: CalendarValueType[]
  setDates: (value: CalendarValueType[]) => void
}

export interface NotesDataProps {
  title: string
  description: string
  occurrence: string
  date: CalendarValueType
}
