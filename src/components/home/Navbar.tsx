import Link from 'next/link';

import { AppConfig } from '@/utils/AppConfig';
import MobileNav from './MobileNav';

const navMenus = [
  { title: 'Home', src: '/' },
  { title: 'Features', src: '/' },
  { title: 'About Us', src: '/' },
  { title: 'Contact Us', src: '/' },
];

const Navbar = () => {
  return (
    <header className='fixed top-0 w-full z-30'>
      <nav className="max-container padding-container flex justify-between items-center py-6 text-white bg-[#101010]">
        <div>
          <Link href="/" className="text-lg font-medium leading-[1.125rem]">{AppConfig.site_name}</Link>
        </div>
        <MobileNav menus={navMenus} />
        <ul className="hidden lg:flex items-center gap-[3.75rem]">
          {navMenus.map((menu, index) => (
            <li key={index} className="text-lg font-medium leading-[1.125rem]">
              <Link href={menu.src}>{menu.title}</Link>
            </li>
          ))}
        <li><Link href="/waitlist" className="py-2 px-3 bg-[#01302E] rounded-xl">Join Us</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
