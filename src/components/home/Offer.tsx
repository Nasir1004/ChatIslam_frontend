import Image from 'next/image';

const Offer = () => {
  return (
    <section className="max-container padding-container mb-36">
      <div className="w-full mx-auto h-full lg:rounded-[50%] lg:border border-white relative flex justify-center items-center lg:py-40">
        <Image
          className="absolute top-0 left-1/2 transform -translate-x-1/2 -mt-8 hidden lg:block"
          src="/map-bg.png"
          alt="Top Image"
          width={137}
          height={89}
        />
        <Image
          className="absolute top-1/2 left-0 transform -translate-y-1/2 -ml-16 hidden lg:block"
          src="/map-bg.png"
          alt="Left Image"
          width={137}
          height={89}
        />
        <Image
          className="absolute top-1/2 right-0 transform -translate-y-1/2 -mr-16 hidden lg:block"
          src="/map-bg.png"
          alt="Right Image"
          width={137}
          height={89}
        />
        <Image
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-16 hidden lg:block"
          src="/map-bg.png"
          alt="Bottom Image"
          width={137}
          height={89}
        />
        <div className="text-center lg:px-20">
          <p className="text-2xl lg:text-4xl text-center font-normal leading-[2.5rem]">
            Experience the richness, depth, and diversity of Islam through
            enlightening conversations with our friendly and knowledgeable AI.
            Whether you&apos;re a curious learner, an explorer, or simply
            seeking connection, Chat Islam AI is your portal to embracing and
            appreciating the Islamic faith
          </p>
        </div>
      </div>
    </section>
  );
};

export default Offer;
