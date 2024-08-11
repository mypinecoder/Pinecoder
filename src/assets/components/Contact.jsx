import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact">
            <div className='pt-10  pb-10 bg-gray-900'>
                <h1 className='text-gray-400 font-bold mb-14 text-2xl md:text-3xl text-center flex items-center justify-center underline'>
                    <FaWhatsapp className='mr-2 text-green-600' size={52} />
                    Contact <span className=''>US</span>
                </h1>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full max-w-7xl mx-auto px-4'>
                    <div>
                        <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold text-gray-400 mt-4'>
                            Get in Touch with <span className='text-red-600'>PineCoder.in</span> Today!
                        </h1>
                        <p className='text-sm md:text-base lg:text-lg text-gray-400 mt-4'>
                            Clients can avail our service by contacting us through WhatsApp and email.
                            We are dedicated to providing innovative solutions to fullfill your trading needs.
                        </p>
                        <div className='mt-6 md:mt-8 mb-6 md:mb-8'>
                            <a href='https://api.whatsapp.com/message/NUW4I5HBSG6HN1?autoload=1&app_absent=0' className='text-base md:text-lg lg:text-2xl text-gray-400 underline font-bold flex items-center'>
                                <FaWhatsapp className='w-6 h-6 md:w-8 md:h-8 mr-2 md:mr-4 text-green-600' aria-label="WhatsApp number" />+91 74994 62967
                            </a>
                            <a href="mailto:chaitanya.murarka@pinecoder.in" className='text-base md:text-lg lg:text-2xl text-gray-400 underline font-bold flex items-center mt-4'>
                                <EnvelopeIcon className='w-6 h-6 md:w-8 md:h-8 mr-2 md:mr-4 text-red-600' aria-label="Email address" />chaitanya.murarka@pinecoder.in
                            </a>
                        </div>
                    </div>
                    <div className='relative'>
                        <div className='overflow-hidden rounded-md shadow-md'>
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.0060622830833!2d79.11946787974789!3d21.15215703032146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c7e97b9391a7%3A0x9f8091016ef66e8c!2sShobha%20enterprises!5e0!3m2!1sen!2sin!4v1722704624057!5m2!1sen!2sin" 
                                width="100%" 
                                height="300" 
                                style={{ border: 0 }} 
                                allowFullScreen="" 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade" 
                                title="Map Location"
                            ></iframe>
                        </div>
                        <a 
                            href='https://api.whatsapp.com/message/NUW4I5HBSG6HN1?autoload=1&app_absent=0' // Replace with your desired link
                            className='block py-3 mt-6 w-full text-center text-gray-100 bg-red-700 hover:bg-red-800 rounded-md px-4 text-lg font-bold'
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
