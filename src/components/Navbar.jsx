import React, { useState } from 'react'
import Logo from './Logo'
import { navItems } from './data/navitems'
import { NavLink } from 'react-router'
import { FaMoon, FaSun } from "react-icons/fa";
import { IoMdClose, IoMdMenu } from "react-icons/io";


import Search from './Search'

const Navbar = () => {

    const [isMenuOpen, setIsmenuOpen] = useState(false)

    const toggleMobileMenu = () => {
        setIsmenuOpen(!isMenuOpen)
    }


    const [isDarkMode, setIsDarkMode] = useState(false)
    const toggleDarkMode = () => setIsDarkMode(!isDarkMode)

    return (
        <nav className='bg-white shadow-md'>
            {/* desktop menu and mobile button */}
            <div className='container max-w-7xl mx-auto px-4 py-3 flex justify-between  items-center gap-4 '>
                {/* logo */}
                <div>
                    <Logo />
                </div>
                {/* menu items */}
                <ul className=' hidden md:flex items-center gap-5 text-gray-700'>
                    {
                        navItems.map((items) => (
                            <li key={items.id}><NavLink className={({ isActive }) =>
                                `font-medium transition ${isActive
                                    ? "text-secondary border-b-2 border-secondary"
                                    : "text-primary hover:text-secondary"
                                }`
                            }
                                to={items.to}>{items.name}</NavLink></li>
                        ))
                    }
                </ul>
                {/* seatch */}
                <div className='md:flex hidden items-center space-x-4'>
                    <div>
                        <Search />
                    </div>
                    {/* dark mode */}
                    <div className={`w-14 h-8 flex items-center bg-[#E8E8EA] rounded-full p-1 cursor-pointer transition-all duration-300 ${isDarkMode ? "justify-end" : "justify-start"
                        }`}>
                        <button onClick={toggleDarkMode} className='w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center  transition-transform duration-300'>
                            {
                                isDarkMode ? <FaMoon className='text-gray-500' /> : <FaSun className='text-yellow-500' />
                            }
                        </button>
                    </div>
                </div>

                {/* mobile menu bar */}
                <div className='md:hidden block'>
                    <button onClick={toggleMobileMenu} className='cursor-pointer'>
                        {
                            isMenuOpen ? <IoMdClose className='size-6 text-gray-600' /> : <IoMdMenu className='size-6 text-gray-600' />
                        }
                    </button>
                </div>
            </div>
            {/* mobile menu items */}
            {
                isMenuOpen && <div className='md:hidden bg-white shadow-md'>
                    <ul className='flex flex-col items-center  space-y-4 text-gray-800 py-4'>
                        {
                            navItems.map((items) => (
                                <li onClick={toggleMobileMenu} key={items.id}><NavLink className={({ isActive }) =>
                                    `font-medium transition ${isActive
                                        ? "text-secondary border-b-2 border-secondary"
                                        : "text-primary hover:text-secondary"
                                    }`
                                }
                                    to={items.to}>{items.name}</NavLink></li>
                            ))
                        }
                        <Search/>
                    </ul>
                </div>
            }
        </nav>
    )
}

export default Navbar