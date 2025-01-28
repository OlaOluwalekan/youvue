import { CalendarValueType } from '@/types/calender.interface'
import { format } from 'date-fns'

export const spreadDates = (startDate: Date, endDate: Date) => {
  const dates = []
  const currentDate = new Date(startDate)

  while (currentDate <= endDate) {
    dates.push(new Date(currentDate))
    currentDate.setDate(currentDate.getDate() + 1)
  }

  return dates
}

export const flattenDate = (dates: CalendarValueType[]) => {
  const allDates: Date[] = []
  dates.forEach((date) => {
    if (date !== null) {
      if (date instanceof Date) {
        allDates.push(date)
      } else {
        let startDate = date[0]
        let endDate = date[1]

        const dateSpread = spreadDates(startDate as Date, endDate as Date)
        allDates.push(...dateSpread)
      }
    }
  })

  return allDates
}

// Helper function to format the date(s) for display
export const formatDateDisplay = (value: CalendarValueType) => {
  if (!value) return 'Choose Date'
  if (Array.isArray(value)) {
    const [start, end] = value
    return `${start ? format(start, 'MMM dd, yyyy') : ''} - ${
      end ? format(end, 'MMM dd, yyyy') : ''
    }`
  }
  return format(value, 'MMM dd, yyyy')
}

export const formatDatesDisplay = (dates: CalendarValueType[]) => {
  const formattedDates: string[] = []

  if (dates.length === 0) return 'Choose Date'

  dates.forEach((date) => {
    if (!date) {
      return 'Choose Date'
    }

    if (Array.isArray(date)) {
      const [start, end] = date
      formattedDates.push(
        `${start ? format(start, 'MMM dd, yy') : ''} - ${
          end ? format(end, 'MMM dd, yy') : ''
        }`
      )
    } else {
      formattedDates.push(format(date, 'MMM dd, yy'))
    }
  })
  return formattedDates.join('; ')
}

export const updateDates = (
  dates: CalendarValueType[],
  value: CalendarValueType
) => {
  const flattenedDates = flattenDate(dates)

  const flattenedDatesString = flattenedDates.map((date) =>
    date.toLocaleDateString()
  )

  if (value) {
    if (value instanceof Date) {
      const selectedDateString = value.toLocaleDateString()
      if (flattenedDatesString.includes(selectedDateString)) {
        const newDates = flattenedDates.filter((date) => {
          return date.toLocaleDateString() !== selectedDateString
        })
        return newDates
      } else {
        return [...flattenedDates, value].sort(
          (a, b) => a.getTime() - b.getTime()
        )
      }
    } else {
      const [start, end] = value
      const rangeStringValue = spreadDates(start as Date, end as Date).map(
        (date) => date.toLocaleDateString()
      )

      const filteredDates = flattenedDates.filter(
        (date) => !rangeStringValue.includes(date.toLocaleDateString())
      )

      const newDates = spreadDates(start as Date, end as Date).filter(
        (date) => !flattenedDatesString.includes(date.toLocaleDateString())
      )

      return [...filteredDates, ...newDates].sort(
        (a, b) => a.getTime() - b.getTime()
      )
    }
  } else {
    return []
  }
}

export const isHighlighted = (date: Date, allDates: Date[]) => {
  return allDates.some(
    (highlightedDate) =>
      date.getFullYear() === highlightedDate?.getFullYear() &&
      date.getMonth() === highlightedDate.getMonth() &&
      date.getDate() === highlightedDate.getDate()
  )
}

export const convertToRanges = (dates: Date[]) => {
  if (dates.length === 0) return []

  const ranges: (Date | [Date, Date])[] = []
  let start = dates[0]
  let end = dates[0]

  for (let i = 1; i < dates.length; i++) {
    const currentDate = dates[i]
    const previousDate = dates[i - 1]

    if (
      (currentDate.getTime() - previousDate.getTime()) /
        (1000 * 60 * 60 * 24) ===
      1
    ) {
      end = currentDate
    } else {
      ranges.push(start.getTime() === end.getTime() ? start : [start, end])
      start = currentDate
      end = currentDate
    }
  }

  ranges.push(start.getTime() === end.getTime() ? start : [start, end])

  return ranges
}

export const convertDatesArrayToStringDate = (dates: Date[]): string[] => {
  const datesString = dates.map((date) => {
    return date.toLocaleDateString()
  })

  return datesString
}

export const convertDateStringArrayToDate = (dateString: string[]): Date[] => {
  const datesArray = dateString.map((date) => {
    return new Date(date)
  })

  return datesArray
}
