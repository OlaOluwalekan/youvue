//   get the first day of the currently viewed month
export const firstDayInCurrentMonth = (year: number, month: number) => {
  return new Date(year, month, 1).getDay()
}

//   get the number of days in the currently viewed month
export const daysInCurrentMonth = (year: number, month: number) => {
  return new Date(year, month + 1, 0).getDate()
}
