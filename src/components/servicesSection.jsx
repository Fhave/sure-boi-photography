import { useState } from 'react';
import img1 from '../assets/img1.jpg';
import img7 from '../assets/img7.jpg';

const ServiceItem = ({ title, imageSrc, index, handleHover }) => (
  <div className='w-full sm:w-1/2 md:w-1/3 p-4 mb-20 relative'>
    <div
      className='h-full flex flex-col justify-center'
      onMouseEnter={() => handleHover(index)}
    >
      <h3 className='absolute top-32 text-3xl font-semibold mb-2 text-white'>
        {title}
      </h3>
    </div>
  </div>
);

const ServicesSection = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const handleHover = (index) => {
    setHoveredService(index);
  };

  const getHoveredClass1 = () =>
    hoveredService !== null ? `service${hoveredService}` : 'service0';
  const getHoveredClass2 = () =>
    hoveredService !== null ? `services${hoveredService}` : 'services0';

  const services = [
    { title: 'Wedding Day Coverage', imageSrc: img7 },
    { title: 'Event Coverage', imageSrc: img1 },
  ];

  return (
    <div className='relative'>
      <div className={`bgimg ${getHoveredClass1()}`}></div>
      <section
        id='services'
        className={`py-16 h-screen absolute top-0 left-0 right-0 bottom-0 ${getHoveredClass2()}`}
        style={{ zIndex: 1 }}
      >
        <div className='container mx-auto text-center'>
          <h2 className='text-3xl text-white font-bold mb-8'>
            What Do You Need
          </h2>
          <div className='flex flex-col justify-center'>
            {services.map((service, index) => (
              <ServiceItem
                key={index}
                title={service.title}
                imageSrc={service.imageSrc}
                index={index}
                handleHover={handleHover}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesSection;
