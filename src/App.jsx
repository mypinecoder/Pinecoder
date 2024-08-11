import './App.css';
import Background from './assets/components/Background';
import Navbar from './assets/components/Navbar';
import FeaturesandBenefits from './assets/components/FeaturesandBenefits';
import HowItWorks from './assets/components/HowItWorks'; // Ensure correct export style
import FAQ from './assets/components/FAQ';
import Contact from './assets/components/Contact';
import Footer from './assets/components/footer';
import backgroundImage from './assets/pexels-scottwebb-2824173.jpg';


function App() {
  return (
    <div className="relative w-full overflow-hidden">
      <Navbar />
      <Background />
      <div className='relative  py-16' style={{ backgroundImage: `url(${backgroundImage})`}}>
      <FeaturesandBenefits />
      <HowItWorks />
      <FAQ />
      </div>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
