
import React from "react";
import { Button, Navbar, NavbarToggle, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";

function Header() {
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
            //   className="bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:outline-none font-medium rounded-lg text-sm px-4 py-2 whitespace-nowrap"
            className="mt-4 md:mt-0 bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:outline-none font-medium rounded-lg text-sm px-4 py-2 whitespace-nowrap"
            >
              Sign In
            </button>
          </Link>
        </div>
        <Navbar.Toggle/>


        <div className="hidden md:block">
            <ul className="flex flex-row gap-5 ml-2">
                <Navbar.Link>
                    <Link to="/">Home</Link>
                </Navbar.Link>

                <Navbar.Link>
                    <Link to="/about">About</Link>
                </Navbar.Link>

                <Navbar.Link>
                    <Link to="/projects">Projects</Link>
                </Navbar.Link>

                
            </ul>
        </div>

        
      </div>
      
        
    </Navbar>
  );
}

export default Header;
