import ChatIslamBG from '@/components/home/ChatIslamBG';
import Discovery from '@/components/home/Discovery';
import JoinUs from '@/components/home/JoinUs';
import MadeFor from '@/components/home/MadeFor';
import Offer from '@/components/home/Offer';
import Video from '@/components/home/Video';
import WaitList from '@/components/home/WaitList';

const Home = () => {
  return (
    <>
      <WaitList />
      <ChatIslamBG />
      <Video />
      <Discovery />
      <MadeFor />
      <Offer />
      <JoinUs />
    </>
  );
};

export default Home;
