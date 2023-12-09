const WaitList = () => {
  return (
    <section className="max-container padding-container pt-14">
        <h1 className="text-center text-4xl md:text-5xl lg:text-[4rem] font-bold leading-[110%]">Explore Islam with Chat Islam AI</h1>
        <p className="text-center text-xl lg:text-2xl font-normal leading-[180%] mt-3">Your Personal Guide to Understanding Islam, 24/7</p>
        <div className="flex flex-col md:flex-row gap-4 mt-11 max-w-[43.75rem] mx-auto">
            <input className="py-[0.8125rem] px-6 w-full bg-white text-black border border-[#CBD5E1] outline-none rounded-3xl placeholder:text-black" placeholder="Enter your Email" />
            <button className="text-lg md:text-xl font-medium whitespace-nowrap py-2 px-3 bg-[#01302E] rounded-3xl">Join our waitlist</button>
        </div>
    </section>
  )
}

export default WaitList