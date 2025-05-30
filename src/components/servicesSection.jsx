import { useState, useEffect } from 'react';
import { Events, scrollSpy } from 'react-scroll';

const ServiceItem = ({ title, index, handleHover }) => (
  <div
    className='w-full sm:w-1/2 md:w-1/3 p-4 mb-20 relative cursor-pointer'
    onMouseEnter={() => handleHover(index)}
  >
    <div className='h-full flex flex-col justify-center'>
      <h3 className='absolute top-96 sm:top-48 md:top-24 text-[25px] font-semibold mb-2'>
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

  useEffect(() => {
    Events.scrollEvent.register('begin', () => {});
    Events.scrollEvent.register('end', () => {});

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  useEffect(() => {
    const sectionHeight = window.innerHeight;
    console.log(sectionHeight);
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition < sectionHeight * 1.5) {
        setHoveredService(0);
      } else {
        setHoveredService(1);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getHoveredClass1 = () =>
    hoveredService !== null ? `service${hoveredService}` : 'service0';
  const getHoveredClass2 = () =>
    hoveredService !== null ? `services${hoveredService}` : 'services0';

  const services = [
    { title: 'Wedding Day Coverage' },
    { title: 'Event Coverage' },
  ];

  return (
    <div className='relative text-[#01443B]'>
      <div className={`bgimg ${getHoveredClass1()}`}></div>
      <section
        id='services'
        className={`py-16 h-screen absolute top-0 left-0 right-0 bottom-0 ${getHoveredClass2()} transition-all duration-500 ease-in-out`}
        style={{ zIndex: 1 }}
      >
        <div className='container mx-auto text-center'>
          <h2 className='text-3xl font-bold mb-8 text-center sm:text-left ml-0 sm:ml-4'>
            What Do You Need
          </h2>
          <div className='flex flex-col justify-center'>
            {services.map((service, index) => (
              <ServiceItem
                key={index}
                title={service.title}
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
