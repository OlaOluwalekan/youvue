import Calender from '@/components/calendar/Calender'
import Header from '@/components/header/Header'

const HomePage = () => {
  return (
    <div className='h-full bg-base-100'>
      <Header />
      <div>
        <Calender />
      </div>
    </div>
  )
}

export default HomePage
