'use client'

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';

import CloseIcon, { MenuIcon } from '@/utils/icons';


interface IProps {
  menus: { title: string; src: string }[];
}

const MobileNav = ({ menus }: IProps) => {
    const [isToggle, setIsToggle] = useState(false)

    const navbarRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (navbarRef.current && !navbarRef.current.contains(event.target as HTMLElement)) {
          setIsToggle(false);
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
  
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);

    const handleNavToggle = () => {
        setIsToggle(!isToggle)
    }

  return (
    <div ref={navbarRef} className="block lg:hidden">
      <button className="" onClick={handleNavToggle}>
        <MenuIcon />
      </button>
      {isToggle && (
        <div className="fixed top-0 left-0 w-full bg-[#101010] py-12 px-12 z-50 transition-all duration-1000 ease-in-out">
          <button className="absolute top-5 right-6" onClick={handleNavToggle}>
            <CloseIcon />
          </button>
          <ul className="flex flex-col items-center">
            {menus.map((menu) => (
              <li key={menu.src} className="text-white py-2">
                <Link href={menu.src}>{menu.title}</Link>
              </li>
            ))}
          </ul>
          <hr />
          <div className="flex justify-center mt-4">

          <button className="py-2 px-3 bg-[#01302E] rounded-xl">Join Us</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
