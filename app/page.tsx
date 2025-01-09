import { auth } from '@/auth'
import Calendar from '@/components/calendar/Calendar'
import Header from '@/components/header/Header'
import Sidebar from '@/components/sider/Sidebar'

const HomePage = async () => {
  const session = await auth()
  // console.log('Session =>', session)

  return (
    <div className='h-full bg-base-100 md:flex'>
      <Sidebar />
      <div className='w-full'>
        <Header session={session} />
        <Calendar />
      </div>
    </div>
  )
}

export default HomePage
