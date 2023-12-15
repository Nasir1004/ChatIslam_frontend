import Image from "next/image"

const Video = () => {
  return (
    <section className="max-container padding-container py-10 md:py-10 lg:py-[4.3rem]">
        <div>
        <Image
          src="/user-video.png"
          alt="chat islam"
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-auto"
        />
        </div>
    </section>
  )
}

export default Video