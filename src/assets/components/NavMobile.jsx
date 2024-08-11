import { XMarkIcon } from '@heroicons/react/24/solid'; // Import path might need adjustment based on version
import PropTypes from 'prop-types';

const NavMobile = ({ closeNav, showNav }) => {
    const navOpenStyle = showNav ? "translate-x-0" : "translate-x-[-100%]";
    
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        closeNav(); // Close the mobile menu after clicking a link
    };

    return (
        <>
            <div className={`fixed top-0 ${navOpenStyle} transform transition-transform duration-500 z-50 left-0 right-0 bottom-0 bg-black opacity-70 w-full h-full`} />
            <div className={`fixed top-0 ${navOpenStyle} transform transition-transform duration-300 delay-300 z-50 left-0 w-60 bg-gray-900 h-full flex flex-col items-center justify-center space-y-10 opacity-95`}>
                <XMarkIcon
                    onClick={closeNav}
                    className='absolute top-4 right-4 w-8 h-8 text-white cursor-pointer' 
                />
                <ul className='text-gray-300 space-y-8'>
                    <li>
                        <a className='text-xl sm:text-2xl hover:text-green-500 transition duration-300' href="#features" onClick={() => scrollToSection('features')}>Features & Benefits</a>
                    </li>
                    <li>
                    <a className="text-xl sm:text-2xl hover:text-green-500 transition duration-300" href="https://in.tradingview.com/u/mypinecoder/#published-scripts">PineScripts</a>
                    </li>
                    <li>
                        <a className='text-xl sm:text-2xl hover:text-green-500 transition duration-300' href="#how-it-works" onClick={() => scrollToSection('how-it-works')}>How It Works</a>
                    </li>
                    <li>
                        <a className='text-xl sm:text-2xl hover:text-green-500 transition duration-300' href="#faq" onClick={() => scrollToSection('faq')}>FAQ</a>
                    </li>
                    <li>
                        <a className='text-xl sm:text-2xl hover:text-green-500 transition duration-300' href="#contact" onClick={() => scrollToSection('contact')}>Contact</a>
                    </li>
                </ul>
                <a 
                    href="https://api.whatsapp.com/message/NUW4I5HBSG6HN1?autoload=1&app_absent=0" // Replace with your desired link
                    className="inline-block mt-4 py-2 px-4 bg-red-600 text-white rounded-md"
                >
                    Contact Us
                </a>
            </div>
        </>
    );
};

NavMobile.propTypes = {
    closeNav: PropTypes.func.isRequired,
    showNav: PropTypes.bool.isRequired,
};

export default NavMobile;
