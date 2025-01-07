import Calendar from '@/components/calendar/Calendar'
import Header from '@/components/header/Header'
import Sidebar from '@/components/sider/Sidebar'

const HomePage = () => {
  return (
    <div className='h-full bg-base-100 md:flex'>
      <Sidebar />
      <div className='w-full'>
        <Header />
        <Calendar />
      </div>
    </div>
  )
}

export default HomePage
