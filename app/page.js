import Ads from '@/components/Ads/Ads'
import Hero from '@/components/Hero/Hero'
import Navbar from '@/components/Navbar/Navbar'
import Sidebar from '@/components/Sidebar/Sidebar'

export default function Home() {
  return (

    <main className='bg-[#241468]'>
      <Navbar />
      <Ads />
     <div className="md:flex grid grid-cols-3 md:m-auto p-2 mx-2 w-full">
        <Sidebar />
          <Hero />
        <Sidebar />
     </div>
      <Ads />
    </main>
  )
}
