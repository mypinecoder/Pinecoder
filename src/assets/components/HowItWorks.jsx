import HIWSlider from './Helper/HIWSlider';

const HowItWorks = () => {
  return (
    <section id='how-it-works' >
    <div className=' p-8'>
      <h1 className='text-3xl font-bold text-gray-900 underline text-center'>
        How it <span className='text-red-600'>Works</span>
      </h1>
      <div className='w-[80%] pt-[1rem] md:pt-[3rem] mx-auto'>
        <HIWSlider />
      </div>
    </div>
    </section>
  );
};

export default HowItWorks;
