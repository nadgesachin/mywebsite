import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';
import { useContext } from 'react';

export default function Header() {

    const userContext = useContext(UserContext);
    const navigate = useNavigate();

   
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    function toggleMobileMenu() {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }

    function logoutHandler() {
        userContext.setUser(userContext.user = null);
        navigate("/");
    }

    return (
        <header className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
            <nav className="container mx-auto max-w-screen-xl">
                <div className="flex flex-wrap justify-between items-center">
                <Link to="/" className="flex items-center">
                        <img
                            src="https://imgs.search.brave.com/wyN_6tKedJ1p9Rjur7CiP9sVkK-q-OA2QLkPsjz4TNo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nbWFydC5jb20v/ZmlsZXMvMTYvQ2hh/dC1JY29uLVBORy1J/bWFnZS5wbmc"
                            className="h-6 sm:h-9 mr-3"
                            alt="Flowbite Logo"
                        />
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">NS Technology</span>
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <button
                            onClick={toggleMobileMenu}
                            type="button"
                            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-expanded={isMobileMenuOpen}
                        >
                            {/* <span className="sr-only">Open main menu</span> */}
                            <svg
                                className={`w-6 h-6 ${isMobileMenuOpen ? 'hidden' : ''}`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                            </svg>
                            <svg
                                className={`w-6 h-6 ${isMobileMenuOpen ? '' : 'hidden'}`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                    <div className={`lg:flex flex-grow justify-end ${isMobileMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink  to="/" className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/service" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Service</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Contact Us</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}





{/* 
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';
import { useContext } from 'react';

export default function Header() {
    const userContext = useContext(UserContext);
    const navigate = useNavigate();

    function logoutHandler() {
        userContext.setUser(userContext.user = null);
        navigate("/");
    }
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://imgs.search.brave.com/wyN_6tKedJ1p9Rjur7CiP9sVkK-q-OA2QLkPsjz4TNo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nbWFydC5jb20v/ZmlsZXMvMTYvQ2hh/dC1JY29uLVBORy1J/bWFnZS5wbmc"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                        <h1 className='text-2xl font-semibold'></h1>
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <h1
                            className="text-white cursor-pointer bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                        Welcome Back !
                        </h1>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                        <li>
                                <NavLink
                                to={userContext.user?"/chat":"/"}
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/service"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Service
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/about"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/contact"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Contact Us
                                </NavLink>
                            </li>
                            
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
 */}
