import Image from 'next/image'


const Ads = () => {
  return (
    <div>
         <div className="flex p-6 justify-between shadow-xl m-12 md:flex-1 rounded-2xl md:mx-2 bg-blue-100 h-[200px]">
          <Image className='flex ' src="https://media.istockphoto.com/id/1350022857/photo/app-designers-work-together-to-plan-user-interface-layouts-for-mobile-apps.jpg?s=1024x1024&w=is&k=20&c=2yw7TgHfjjamOdz32CXdg3w_ThZJ8P6ekfWYLUIv92w=" width={600} height={150} alt='ADS'/>
         </div> 
    </div>
  )
}

export default Ads