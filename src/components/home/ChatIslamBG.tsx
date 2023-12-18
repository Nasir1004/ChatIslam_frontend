import Image from 'next/image';

const ChatIslamBG = () => {
  return (
    <section className="max-container padding-container pb-8 lg:pb-11 mt-16">
      <div className="px-10 md:px-16 pb-12">
        <Image
          src="/chatislam-bg.png"
          alt="chat islam"
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-auto"
          priority
        />
      </div>
    </section>
  );
};

export default ChatIslamBG;
