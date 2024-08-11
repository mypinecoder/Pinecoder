import PropTypes from 'prop-types';

const HIWCard = ({ title, desc, bullets }) => {
  return (
    <div className='m-2 bg-gray-200 transition-all duration-300 rounded-lg cursor-grab active:cursor-grabbing'>
      <div className='border-2 p-4 border-gray-200 rounded-xl cursor-grab flex flex-col justify-between h-[70vh] sm:h-[50vh] md:h-[40vh] lg:h-[60vh] xl:h-[65vh]'>
        <div>
          <h1 className='text-3xl font-bold text-center mt-[1rem]'>
            {title}
          </h1>
          <p className='text-4xl opacity-65 mt-[1rem] font-bold text-center'>
            {desc}
          </p>
          <ul className='list-disc list-inside text-[20px] opacity-65 mt-[2rem]'>
            {bullets.map((bullet, index) => (
              <li key={index}>{bullet}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

HIWCard.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  bullets: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default HIWCard;
