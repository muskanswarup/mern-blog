
import React, { useState } from "react";
import { Button, Navbar, TextInput } from "flowbite-react";
import { Link , useLocation} from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon, FaBars } from "react-icons/fa";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const path = useLocation().pathname;

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar className="border-b-2 p-4">
      <div className="flex justify-between w-full">
        <Link
          to="/"
          className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
        >
          <span className="px-2 py-1 bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 rounded-lg text-white">
            Musk's
          </span>
          Blog
        </Link>

        <form className="flex items-center hidden lg:inline">
          <div className="relative">
            <TextInput type="text" placeholder="Search..." className="pl-10" />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <AiOutlineSearch className="text-gray-500" />
            </div>
          </div>
        </form>
      </div>

      <div className="flex items-center space-x-2">
        <Button
          color="primary"
          className="rounded-full w-14 h-12 mt-2 border-2 border-gray-400 items-center justify-center lg:hidden"
        >
          <AiOutlineSearch />
        </Button>

        <div className="flex gap-2 md:order-2">
          <Button
            color="primary"
            className="rounded-full w-14 h-12 mt-2 border-2 border-gray-400 items-center justify-center md:hidden"
          >
            <FaMoon />
          </Button>
          <Link to="/sign-in" className="text-white">
            <button
              type="button"
              className="mt-4 md:mt-0 bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:outline-none font-medium rounded-lg text-sm px-4 py-2 whitespace-nowrap"
            >
              Sign In
            </button>
          </Link>
        </div>
        <button
          onClick={toggleNavbar}
          className="text-gray-500 hover:text-gray-700 focus:outline-none md:hidden"
        >
          <FaBars />
        </button>
      </div>

      <div className={`${isOpen ? "block" : "hidden"} md:block`} >
        <ul className="flex md:flex-row gap-5 ml-2">
          <Navbar.Link className={path === '/' ? 'text-teal-500' : 'text-black'}  active={path === '/'} as={'div'}>
            <Link to="/">Home</Link>
          </Navbar.Link>
          <Navbar.Link active={path === '/about'} className={path === '/about' ? 'text-teal-500' : 'text-black'} as={'div'}>
            <Link to="/about">About</Link>
          </Navbar.Link>
          <Navbar.Link active={path === '/projects'} className={path === '/projects' ? 'text-teal-500' : 'text-black'} as={'div'}> 
            <Link to="/projects">Projects</Link>
          </Navbar.Link>
        </ul>
      </div>
    </Navbar>
  );
}

export default Header;
