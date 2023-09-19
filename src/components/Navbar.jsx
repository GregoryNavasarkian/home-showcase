import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import menu from '../assets/menu.svg';
import close from '../assets/close.svg';

const Navbar = () => {
  let [open, setOpen] = useState(false);

  let links = [
    { to: '/', text: 'Home' },
    { to: '/about', text: 'About' },
    { to: '/contact', text: 'Contact' },
  ];

  return (
    <header className='z-30'>
      <div className="shadow-md w-full fixed top-0 left-0 bg-indigo-100">
        <div className="md:flex items-center justify-between py-4 md:px-14 px-7">
          <div className='flex items-center font-bold text-2xl cursor-pointer font-[Poppins] flex-shrink-0'>
            <Link to='/'>Logo</Link>
          </div>
          <div
            className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
            onClick={() => setOpen(!open)}
          >
            <img src={open ? close : menu} alt="menu" className="text-slate-950 " />
          </div>

          <ul className={`md:flex flex-shrink-0 md:items-center md:pb-0 pb-12 absolute md:static left-0 w-full md:w-auto md:pl-0 pl-9 ${open
            ? "top-20 transition-all duration-300 ease-in"
            : "top-[-490px] transition-all duration-300 ease-in"
            }`}>
            {links.map((link, index) => (
              <li key={index} className="md:py-0 py-4 md:px-0 px-4">
                <Link
                  to={link.to}
                  className="text-indigo-950 font-[Poppins] font-bold text-xl p-2 hover:text-indigo-800 transition-all duration-100 ease-in"
                >
                  {link.text}
                </Link>
              </li>
            ))}
            <li className='pl-5 md:pl-2'>
              <button className="bg-indigo-900 text-indigo-50 font-[Poppins] font-bold text-xl p-2 hover:text-indigo-200 transition-all duration-100 ease-in rounded-md">Gallery</button>
            </li>
          </ul>

        </div>
      </div></header>
  )
}

export default Navbar;