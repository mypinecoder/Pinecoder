import { useState, useEffect } from 'react';
import { Bars3CenterLeftIcon, Bars3Icon } from '@heroicons/react/24/solid'; // Adjust the import path if needed
import NavMobile from './NavMobile'; // Ensure this is the correct path

const Navbar = () => {
    const [scrollPosition, setScrollPosition] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY > 90);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setMenuOpen(prevMenuOpen => !prevMenuOpen);
    };

    const stickStyle = scrollPosition ? 'bg-gray-900 shadow-md' : 'bg-transparent';

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setMenuOpen(false); // Close the mobile menu after clicking a link
    };

    return (
        <>
            <div className={`fixed w-full p-4 top-0 z-50 transition-colors duration-300 ${stickStyle}`}>
                <div className="max-w-8xl mx-auto flex items-center justify-between px-6">
                    <a className='text-2xl font-bold text-white' href="#MainPage" onClick={() => scrollToSection('MainPage')}>
                        Pine<span className="text-red-600">Coder.in</span>
                    </a>
                    <div className='block lg:hidden flex items-center space-x-4'>
                        <a 
                            href="https://api.whatsapp.com/message/NUW4I5HBSG6HN1?autoload=1&app_absent=0" // Replace with your desired link
                            className="inline-block py-2 px-4 bg-red-600 text-white rounded-md"
                        >
                            Contact Us
                        </a>
                        <button onClick={toggleMenu} className="text-white">
                            {menuOpen ? <Bars3CenterLeftIcon className="w-8 h-8" /> : <Bars3Icon className="w-8 h-8" />}
                        </button>
                    </div>
                    <nav className={`hidden lg:flex items-center space-x-4 sm:space-x-9 text-white`}>
                        <a className="hover:text-green-500 transition duration-300" href="#features" onClick={() => scrollToSection('features')}>Features & Benefits</a>
                        <a className="hover:text-green-500 transition duration-300" href="https://in.tradingview.com/u/mypinecoder/#published-scripts">PineScripts</a>
                        <a className="hover:text-green-500 transition duration-300" href="#how-it-works" onClick={() => scrollToSection('how-it-works')}>How It Works</a>
                        <a className="hover:text-green-500 transition duration-300" href="#faq" onClick={() => scrollToSection('faq')}>FAQ</a>
                        <a className="hover:text-green-500 transition duration-300" href="#contact" onClick={() => scrollToSection('contact')}>Contact</a>
                        <a 
                            href="https://api.whatsapp.com/message/NUW4I5HBSG6HN1?autoload=1&app_absent=0" // Replace with your desired link
                            className="inline-block ml-4 py-2 px-4 bg-red-600 text-white rounded-md"
                        >
                            Contact Us
                        </a>
                    </nav>
                </div>
            </div>
            {menuOpen && <NavMobile closeNav={toggleMenu} showNav={menuOpen} />}
        </>
    );
};

export default Navbar;
