import { TypeAnimation } from 'react-type-animation';

const TypeWriteEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        ' PineCoder.in',
        2000, 
        ' ',
        1000, 
        ' PineCoder.in',
        2000, 
        ' ',
        1000, 
      ]}
      wrapper="span"
      speed={20}
      className='text-red-600  font-bold'
      repeat={Infinity}
    />
  );
}

export default TypeWriteEffect;
