import Calendar from '@/components/calendar/Calendar'
import Header from '@/components/header/Header'

const HomePage = () => {
  return (
    <div className='h-full bg-base-100'>
      <Header />
      <div>
        <Calendar />
      </div>
    </div>
  )
}

export default HomePage
