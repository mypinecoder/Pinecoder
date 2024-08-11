import { useState, useEffect, useRef } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'; // Import the icons
import faqs from './FAQData'; // Adjust the path as needed

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const faqRef = useRef(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (faqRef.current && !faqRef.current.contains(event.target)) {
        setActiveIndex(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <section id='faq' >
      
    <div className="flex justify-center items-center mx-4 md:mx-12 lg:mx-24 p-4 md:p-8 lg:p-12">
      <div className="w-full max-w-4xl" ref={faqRef}>
        <h2 className="text-center font-bold mb-4 text-gray-900 underline md:mb-10 lg:mb-14">
          <span className="block text-2xl md:hidden">FAQ</span>
          <span className="hidden md:block text-2xl md:text-3xl">
            Frequently Asked <span className="text-red-600">Questions</span>
          </span>
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-4 py-2 bg-gray-200 focus:outline-none focus:bg-gray-400"
              >
                <div className="flex justify-between items-center">
                  <span className="text-sm md:text-base lg:text-lg text-gray-700">
                    {faq.question}
                  </span>
                  <span>
                    {activeIndex === index ? (
                      <FiChevronUp className="w-5 h-5" />
                    ) : (
                      <FiChevronDown className="w-5 h-5" />
                    )}
                  </span>
                </div>
              </button>
              {activeIndex === index && (
                <div className="px-4 py-2 text-gray-900 bg-gray-100 whitespace-pre-line text-gray-900 text-l">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
};

export default FAQ;
