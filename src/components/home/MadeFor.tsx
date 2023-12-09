const VALUES = [
    {title: "Islamic Finance", desc: "empowering Islamic finance with instant, accurate insights on Sharia-compliant principles and ethical investment options", bg: "#1FCFF1"},
    {title: "Pharmacology", desc: "Reliable plarform for providing authetic islamic perspective on pharmacology and medcine practices", bg: "#FFD512"},
    {title: "No Bias, Just Facts", desc: "Access reliable information without any bias or agenda", bg: "#9945FF"},
    {title: "Quran Science", desc: "Cater to the growing interest of Muslims by offering scholar insights and linguistic analysis of Quranic verses", bg: "#AABDBC"},
]

const MadeFor = () => {
  return (
    <section className="max-container padding-container py-10 pb-28">
        <div className="md:px-12 lg:px-16">
            <div className="flex gap-20">
                <div className="hidden lg:block w-2/6 bg-[url(/decoration-bg.png),_url(/decoration-bg.png)] bg-[length:51%] bg-no-repeat bg-[position:top_left,right_43%_bottom]"></div>
                <div className="w-full lg:w-4/6 flex flex-wrap gap-10">
                    {VALUES.map((data, index) => (
                        <div key={`what_for_${index}`} className="lg:pl-8 flex-1 w-full lg:w-[48%]">
                            <h4 className={`text-2xl md:text-[1.75rem] font-medium leading-8 px-3 whitespace-nowrap border-l `} style={{borderLeftColor: `${data.bg}`}}>{data.title}</h4>
                            <p className="text-base font-normal leadinng-[1.70rem] pl-3 mt-3 w-full">{data.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default MadeFor