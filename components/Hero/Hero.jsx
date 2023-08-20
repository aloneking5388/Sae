import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <div>
         <div className="grid gap-4 grid-cols-3 grid-rows-3">
      <div className="flex-1 shadow-xl w-[200px] p-2 bg-blue-200 rounded-2xl">
        <p className='text-green-400 font-extrabold m-2'>Title</p>
        <Link className='bg-[#d03ef5] items-end rounded-xl text-yellow-50 p-2' href='#'>Visit</Link>
      </div>
      <div className="flex-1 shadow-xl w-[200px] p-2 bg-blue-200 rounded-2xl">
        <p className='text-blue-400 font-extrabold m-1'>Title</p>
        <Link className='bg-[#8d3ef5] rounded-xl text-yellow-50 p-2' href='#'>Visit</Link>
      </div>
      <div className="flex-1 shadow-xl w-[200px] p-2 bg-blue-200 rounded-2xl">
        <p className='text-sky-300 font-extrabold m-1'>Title</p>
        <Link className='bg-[#f53eb8] rounded-xl text-yellow-50 p-2' href='#'>Visit</Link>
      </div>
      <div className="flex-1 shadow-xl w-[200px] p-2 bg-blue-200 rounded-2xl">
        <p className='text-orange-400 font-extrabold m-1'>Title</p>
        <Link className='bg-[#3e78f5] rounded-xl text-yellow-50 p-2' href='#'>Visit</Link>
      </div>
      </div>
    </div>
  )
}

export default Hero