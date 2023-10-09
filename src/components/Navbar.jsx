import { useState } from "react";
import { Link } from "react-scroll";
import { FaTimes, FaBars } from "react-icons/fa";


const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  
  const content = <>
    <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-indigo-100 transition">
      <ul className="text-center text-xl p-20">
        <Link spy={true} smooth={true} to="Home">
          <li className="my-4 py-4 border-b border-indigo-800 hover:bg-indigo-800 hover:rounded">Home</li>
        </Link >
        <Link spy={true} smooth={true} to="Gallery">
          <li className="my-4 py-4 border-b border-indigo-800 hover:bg-indigo-800 hover:rounded">Gallery</li>
        </Link>
        <Link spy={true} smooth={true} to="About">
          <li className="my-4 py-4 border-b border-indigo-800 hover:bg-indigo-800 hover:rounded">About</li>
        </Link>
        <Link spy={true} smooth={true} to="Contact">
          <li className="my-4 py-4 border-b border-indigo-800 hover:bg-indigo-800 hover:rounded">Contact</li>
        </Link>
      </ul>
    </div>
  </>
  
  return (
    <nav>
      <div className="fixed w-full h-10vh flex justify-between z-50 text-indigo-900 lg:py-5 px-4 md:px-20 py-4 shadow-md">
        <div className="flex items-center flex-1">
          <span className="text-3xl font-bold">Logo</span>
        </div>
        <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden">
          <div className="flex-10">
            <ul className="flex gap-8 mr-16 text-[18px]">
              <Link spy={true} smooth={true} to="Home">
                <li className="hover:text-indigo-600 transition border-b-2 border-slate-900 hover:border-indigo-600 cursor-pointer">Home</li>
              </Link>
              <Link spy={true} smooth={true} to="Gallery">
                <li className="hover:text-indigo-600 transition border-b-2 border-slate-900 hover:border-indigo-600 cursor-pointer">Gallery</li>
              </Link>
              <Link spy={true} smooth={true} to="About">
                <li className="hover:text-indigo-600 transition border-b-2 border-slate-900 hover:border-indigo-600 cursor-pointer">About</li>
              </Link>
              <Link spy={true} smooth={true} to="Contact">
                <li className="hover:text-indigo-600 transition border-b-2 border-slate-900 hover:border-indigo-600 cursor-pointer">Contact</li>
              </Link>
            </ul>
          </div>
        </div>
        <div>
          {click && content}
        </div>
        
        <button className="block sm:hidden transition" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </button>

      </div>
    </nav>
  );
};

export default Navbar;