import {
  daysInCurrentMonth,
  firstDayInCurrentMonth,
} from '@/utils/helpers/monthView'
import MonthViewDay from './MonthViewDay'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'

const DaysRender = ({ currentMonth }: { currentMonth: Date }) => {
  const { notes } = useSelector((store: RootState) => store.notes)

  // console.log(notes)

  const renderDays = () => {
    const days = []
    const year = currentMonth.getFullYear()
    const month = currentMonth.getMonth()
    const firstDay = firstDayInCurrentMonth(year, month)

    for (let i = 0; i < firstDay; i++) {
      days.push(
        <div
          key={`empty-${i}`}
          className='border bg-gray-100 opacity-10 w-full aspect-square max-h-[70px]'
        ></div>
      )
    }

    for (let i = 1; i <= daysInCurrentMonth(year, month); i++) {
      const date = new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth(),
        i
      )

      days.push(<MonthViewDay key={i} day={i} date={date} notes={notes} />)
    }

    return days
  }

  //   render the days headings
  const renderDaysHeadings = () => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    return days.map((day) => (
      <div
        key={day}
        className='w-full aspect-square max-h-[70px] flex justify-center items-center text-primary font-semibold'
      >
        {day}
      </div>
    ))
  }

  return (
    <div className='grid grid-cols-7 gap-2 text-base-content'>
      {renderDaysHeadings()}
      {renderDays()}
    </div>
  )
}

export default DaysRender
