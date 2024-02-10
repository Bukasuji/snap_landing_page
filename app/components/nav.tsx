"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
  const [isFeaturesOpen, setIsFeaturesOpen] = useState<boolean>(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState<boolean>(false);


  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleFeaturesDropdown = () => {
    setIsFeaturesOpen(!isFeaturesOpen);
    setIsCompanyOpen(false);
  };

  const toggleCompanyDropdown = () => {
    setIsCompanyOpen(!isCompanyOpen);
    setIsFeaturesOpen(false);
  };

  const featureMenuItems = [
    { text: 'Todo list', icon: '/images/icon-todo.svg' },
    { text: 'Calendar', icon: '/images/icon-calendar.svg' },
    { text: 'Reminders', icon: '/images/icon-reminders.svg' },
    { text: 'Planning', icon: '/images/icon-planning.svg' },
  ];

  return (
    <nav className='flex justify-between xl:justify-normal mx-6 mt-0 pt-6 border  items-center xl:relative'>
      <div className=''>
        <Image
          src="/images/logo.svg"
          width={80}
          height={10}
          alt="logo"
          priority
        />
      </div>
      
      {/* Navigation Links for Tablets and Desktops */}
      <div className='hidden xl:block ml-16'>
            <ul className="space-x-10 flex border pt-4">
                    <li className='mb-5'>
                        <Link href="/" onClick={toggleFeaturesDropdown}>Feautures</Link>
                        <span className='mr-3 font-bold' onClick={toggleFeaturesDropdown}>
                            {!isFeaturesOpen ? 
                            <Image src="images/icon-arrow-down.svg"  className='inline ml-4' width={10} height={10} alt="arrow down"/> 
                            : <Image src="images/icon-arrow-up.svg"  className='inline ml-4' width={10} height={10} alt="arrow up"/> }
                        </span>

                        {isFeaturesOpen && (
                            <div className="ml-4">
                                {featureMenuItems.map((item, index) => (
                                <Link key={index} href="#">
                                    <div className="flex items-center text-gray-400 py-2">
                                    <Image src={item.icon} alt={item.text} className="mr-2 w-5 h-5" width={10} height={10}/>
                                    {item.text}
                                    </div>
                                </Link>
                                ))}
                            </div>
                        )}
                    </li>    
                            
                    <li className='mb-5'>
                        <Link href="/"  onClick={toggleFeaturesDropdown}>Company</Link>

                        <span className='mr-3 font-bold' onClick={toggleCompanyDropdown}>
                            {!isCompanyOpen ? 
                            <Image src="images/icon-arrow-down.svg"  className='inline ml-4' width={10} height={10} alt="arrow down"/> 
                            : <Image src="images/icon-arrow-up.svg"  className='inline ml-4' width={10} height={10} alt="arrow up"/> }
                        </span>

                        {isCompanyOpen && (
                            <div className="ml-4">
                                <Link href="#">
                                    <div className="flex items-center text-gray-400 py-2"> History </div>
                                    <div className="flex items-center text-gray-400 py-2"> Our Team</div>
                                    <div className="flex items-center text-gray-400 py-2"> Blog </div>
                                </Link>
                            </div>
                        )}

                    </li>
                    <li className='mb-5'>
                        <Link href="/"><span className='mr-3 font-bold hidden'>02</span>Careers</Link>
                    </li>

                    <li>
                        <Link href="/"><span className='mr-3 font-bold hidden '>03</span>About</Link>
                    </li>
            </ul>
      </div>
      
      {/* Navigation links for  Mobile Screens */}
      <div className='lg:hidden '>
        <div onClick={toggleMenu} className='ml-auto w-10'>
          <Image
            src="/images/icon-menu.svg"
            className='md:hidden ml-auto w-auto h-auto'
            width={40}
            height={40}
            alt="hamburger icon"
          />
        </div>
        {isMenuOpen && (
          <div>
            <div className="fixed top-0 left-0 h-screen w-[38%] bg-black opacity-50 z-40"></div>
            <div className="fixed top-0 right-0 h-full w-[62%] bg-white shadow-md overflow-y-auto text-black font-normal text-base">
                <div className='text-right text-3xl text-bold p-5 cursor-pointer' onClick={toggleMenu}>
                X
                </div>
                <ul className="pl-6 pt-2 border">
                    <li className='mb-5'>
                        <Link href="/" onClick={toggleFeaturesDropdown}>Feautures</Link>
                        <span className='mr-3 font-bold' onClick={toggleFeaturesDropdown}>
                            {!isFeaturesOpen ? 
                            <Image src="images/icon-arrow-down.svg"  className='inline ml-4' width={10} height={10} alt="arrow down"/> 
                            : <Image src="images/icon-arrow-up.svg"  className='inline ml-4' width={10} height={10} alt="arrow up"/> }
                        </span>

                        {isFeaturesOpen && (
                            <div className="ml-4">
                                {featureMenuItems.map((item, index) => (
                                <Link key={index} href="#">
                                    <div className="flex items-center text-gray-400 py-2">
                                    <Image src={item.icon} alt={item.text} className="mr-2 w-5 h-5" width={10} height={10}/>
                                    {item.text}
                                    </div>
                                </Link>
                                ))}
                            </div>
                        )}
                    </li>    
                            
                    <li className='mb-5'>
                        <Link href="/"  onClick={toggleFeaturesDropdown}>Company</Link>

                        <span className='mr-3 font-bold' onClick={toggleCompanyDropdown}>
                            {!isCompanyOpen ? 
                            <Image src="images/icon-arrow-down.svg"  className='inline ml-4' width={10} height={10} alt="arrow down"/> 
                            : <Image src="images/icon-arrow-up.svg"  className='inline ml-4' width={10} height={10} alt="arrow up"/> }
                        </span>

                        {isCompanyOpen && (
                            <div className="ml-4">
                                <Link href="#">
                                    <div className="flex items-center text-gray-400 py-2"> History </div>
                                    <div className="flex items-center text-gray-400 py-2"> Our Team</div>
                                    <div className="flex items-center text-gray-400 py-2"> Blog </div>
                                </Link>
                            </div>
                        )}

                    </li>
                    <li className='mb-5'>
                        <Link href="/"><span className='mr-3 font-bold hidden'>02</span>Careers</Link>
                    </li>
                    <li>
                        <Link href="/"><span className='mr-3 font-bold hidden '>03</span>About</Link>
                    </li>
                </ul>

                <ul>
                    <li className='ml-0 mt-8 text-center border'>
                        <Link href="/">Login</Link>
                    </li>
                    <div className='flex justify-center mt-4'>
                        <button className="bg-transparent hover:bg-blue-500 text-black font-normal hover:text-white py-2 px-16 border border-black hover:border-transparent rounded-xl">
                                Register
                        </button>
                    </div>
                </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
