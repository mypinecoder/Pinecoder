import { useEffect } from 'react';
import PropTypes from 'prop-types';
import features from './featuresData';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function FeaturesandBenefits() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  function FeatureBox({ icon, title, description, delay }) {
    return (
      <div
        data-aos="zoom-in"
        data-aos-anchor-placement="top-center"
        data-aos-delay={delay}
        className="bg-gray-200 bg-opacity-90 border border-gray-200 rounded-lg p-6 w-full sm:w-80 transition-shadow duration-300 ease-in-out hover:shadow-lg min-h-[320px] flex flex-col items-center justify-center"
      >
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-l text-center">{description}</p>
      </div>
    );
  }

  FeatureBox.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    delay: PropTypes.number.isRequired,
  };

  return (
    <section id="features" >
      <div className="relative z-10 text-center p-8">
        <h1 className="text-3xl font-bold mb-8 mt-9 text-gray-900 underline">
          Features and <span className="text-red-600">Benefits</span>
        </h1>

        <div className="flex flex-wrap text-center justify-center gap-6">
          {features.map((feature, index) => (
            <div key={index} className="flex justify-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-6">
              <FeatureBox
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 200}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
