import Ads from '@/components/Ads/Ads'
import Navbar from '@/components/Navbar/Navbar'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (

    <main>
      <Navbar />
     <Ads />
     <div className="md:flex flex-row justify-center md:m-auto m-5 w-full">
      <div className=" md:flex md:mx-10 p-3 shadow-xl md:max-h-[600px] hidden rounded-2xl bg-blue-100">
        <Image src='/images/sae.png' width={230} height={600} alt='ADS' />
      </div>
      <div className="flex-1 row-auto">
      <div className="flex-col w-[50%] p-10 justify-center text-center m-[10px] ">
        <p className='text-green-400 font-extrabold text-center m-1'>Title</p>
        <Link className='w-[150px] h-2 bg-[#d03ef5] rounded-xl text-yellow-50 p-2' href='#'>Visit Here</Link>
      </div>
      <div className="flex-col w-[50%] p-10 justify-center text-center m-[10px] ">
        <p className='text-blue-400 font-extrabold text-center m-1'>Title</p>
        <Link className='w-[150px] h-2 bg-[#8d3ef5]  rounded-xl text-yellow-50 p-2' href='#'>Visit Here</Link>
      </div>
      <div className="flex-col w-[50%] p-10 justify-center text-center m-[10px] ">
        <p className='text-sky-300 font-extrabold text-center m-1'>Title</p>
        <Link className='w-[150px] h-2 bg-[#f53eb8]  rounded-xl text-yellow-50 p-2' href='#'>Visit Here</Link>
      </div>
      <div className="flex-col w-[50%] p-10 justify-center text-center m-[10px] ">
        <p className='text-orange-400 font-extrabold text-center m-1'>Title</p>
        <Link className='w-[150px] h-2 bg-[#3e78f5]  rounded-xl text-yellow-50 p-2' href='#'>Visit Here</Link>
      </div>
      </div>
      <div className=" md:flex md:mx-10 shadow-xl p-3 md:max-h-[600px] hidden rounded-2xl bg-blue-100">
        <Image src='/images/sae.png' width={230} height={600} alt='ADS' />
      </div>
     </div>
     <Ads />
    </main>
  )
}
