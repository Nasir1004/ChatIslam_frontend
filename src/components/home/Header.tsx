import Link from "next/link"

const Header = () => {
  return (
    <section className="max-container padding-container pt-14">
        <h1 className="text-center text-4xl md:text-5xl lg:text-[4rem] font-bold leading-[110%]">Explore Islam with Chat Islam AI</h1>
        <p className="text-center text-xl lg:text-2xl font-normal leading-[180%] mt-3">Your Personal Guide to Understanding Islam, 24/7</p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-11">
            <button className="text-lg md:text-2xl font-normal leading-[2.4rem] whitespace-nowrap py-2 px-6 text-[#475569] bg-white rounded-3xl">Make Donation</button>
            <Link href='/request-demo' className="text-lg md:text-2xl font-normal leading-[2.4rem] whitespace-nowrap py-2 px-6 bg-[#01302E] rounded-3xl">Request Demo</Link>
        </div>
    </section>
  )
}

export default Header