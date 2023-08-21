
const Hero = () => {
  return (
    <div>
         <div className="grid gap-4 grid-cols-1 px-6  md:grid-cols-3 md:grid-rows-5">
      <div className="flex-1 shadow-xl w-[200px] p-2 bg-[#F79BD3] rounded-2xl">
        <p className='text-green-400 font-extrabold m-2'>Title</p>
        <button className='bg-[#ff3648] rounded-xl shadow-xl text-white px-4 py-1 ml-[120px]'>Vist</button>
      </div>
      <div className="flex-1 shadow-xl w-[200px] p-2 bg-[#F79BD3] rounded-2xl">
        <p className='text-blue-400 font-extrabold m-2'>Title</p>
        <button className='bg-[#8d3ef5] rounded-xl shadow-xl text-yellow-50 px-4 py-1 ml-[120px]'>Visit</button>
      </div>
      <div className="flex-1 shadow-xl w-[200px] p-2 bg-[#F79BD3] rounded-2xl">
        <p className='text-sky-300 font-extrabold m-2'>Title</p>
        <button className='bg-[#f53eb8] rounded-xl shadow-xl text-yellow-50 px-4 py-1 ml-[120px]'>Visit</button>
      </div>
      <div className="flex-1 shadow-xl w-[200px] p-2 bg-[#F79BD3] rounded-2xl">
        <p className='text-orange-400 font-extrabold m-2'>Title</p>
        <button className='bg-[#3e78f5] rounded-xl shadow-lg text-yellow-50 px-4 py-1 ml-[120px]'>Visit</button>
      </div>
      </div>
    </div>
  )
}

export default Hero