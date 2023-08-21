import Image from "next/image"


const Sidebar = () => {
  return (
    <div>
       <div className=" md:flex md:mx-10 p-3 shadow-xl md:max-h-[600px] hidden rounded-2xl bg-[#EA1179]">
        <Image src='/images/sae.png' width={230} height={600} alt='ADS' />
      </div>
    </div>
  )
}

export default Sidebar