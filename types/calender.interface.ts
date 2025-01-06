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
}
