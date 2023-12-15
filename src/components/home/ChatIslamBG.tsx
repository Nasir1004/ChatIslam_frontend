import Image from 'next/image';

const ChatIslamBG = () => {
  return (
    <section className="max-container padding-container pb-8 lg:pb-11 mt-20">
      <div className="px-20 md:px-6 pb-12">
        <Image
          src="/chatislam-bg.png"
          alt="chatislam"
          width="15"
          height="5"
          sizes="100vw"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
};

export default ChatIslamBG;
