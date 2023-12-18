const JoinWaitList = () => {
  return (
    <div className="max-container padding-container">
        <div className="flex flex-col lg:w-[37.5rem] mx-auto mt-20 md:mt-28">
        <div className="">
            <h3 className="text-xl md:text-2xl font-semibold text-center">Join WaitList</h3>
        </div>
        <div className="flex flex-col gap-[1.81rem] mt-12">
            <div className="flex flex-col gap-2">
                <label htmlFor="fullName" className="text-base font-medium">Full Name</label>
                <input id="fullName" className="bg-[#282828] px-5 py-3 outline-none rounded" placeholder="John Doe" />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-base font-medium">Email</label>
                <input id="email" className="bg-[#282828] px-5 py-3 outline-none rounded" placeholder="Johndoe@gmail.com" />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-base font-medium">Message (Optional)</label>
                <textarea id="message" className="bg-[#282828] px-5 py-3 outline-none rounded" placeholder="Write your messge here"></textarea>
            </div>
            <button className="flex justify-center items-center text-xl font-medium bg-[#01302E] py-3 px-3 mt-[1.57rem] rounded">Send Message</button>
        </div>
        </div>
    </div>
  )
}

export default JoinWaitList