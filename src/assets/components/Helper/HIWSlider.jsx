import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import HIWCard from './HIWCard';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1300 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1300, min: 764 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const HIWSlider = () => {
  return (
    <Carousel 
      responsive={responsive} 
      additionalTransfrom={0} 
      arrows={false} 
      autoPlay={false}
      autoPlaySpeed={2000}
      centerMode={false}
      itemClass='item'
      infinite
      showDots={true}
    >
      <HIWCard 
        title="Step 1️⃣" 
        desc="Run Strategy on Your Platform"
        bullets={[
          "Build and run your strategies on popular platforms such as TradingView or Python.",
          "Utilize the extensive features and tools provided by these platforms to develop and backtest your trading strategies."
        ]}
      />
      <HIWCard 
        title="Step 2️⃣" 
        desc="Configure Signal Sending"
        bullets={[
          "Set up your system to send trade signals through webhook",
          "Ensure the configuration allows for seamless communication between your strategy and the trade execution platform."
        ]}
      />
      <HIWCard 
        title="Step 3️⃣" 
        desc="Send Signals to Bridge Service"
        bullets={[
          "Route your trade signals through any third-party bridge service for additional processing or routing.",
          "Take advantage of the flexibility and integrations offered by bridge services to enhance your trading setup."
        ]}
      />
      {/* <HIWCard 
        title="Step 4️⃣" 
        desc="Directly Send Signals to Broker"
        bullets={[
          "Directly send your configured trade signals to your chosen broker.",
          "Ensure the signals are correctly formatted and transmitted to execute trades as intended."
        ]}
      /> */}
    </Carousel>
  );
};

export default HIWSlider;
