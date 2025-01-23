import { auth } from '@/auth'
import Calendar from '@/components/calendar/Calendar'
import Header from '@/components/header/Header'
import PageHandler from '@/components/home/PageHandler'
import Sidebar from '@/components/sider/Sidebar'

const HomePage = async () => {
  const session = await auth()
  // console.log('Session =>', session)

  return (
    <div className='h-full bg-base-100 md:flex'>
      <Sidebar session={session} />
      <div className='w-full h-full flex flex-col'>
        <Header session={session} />
        <div className='flex-grow flex flex-col h-full overflow-auto'>
          <PageHandler />
        </div>
      </div>
    </div>
  )
}

export default HomePage
