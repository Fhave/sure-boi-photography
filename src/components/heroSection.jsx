import img1 from '../assets/img1.jpg';

const HeroSection = () => {
  return (
    <section
      id='home'
      className='bg flex items-center justify-center text-white text-center h-screen'
    >
      <div className='container mx-auto'>
        <div className='flex flex-col sm:flex-row'>
          <div className='md:w-3/5 md:ml-8 lg:ml-16 pb-8 pt-24 text-center'>
            <h2 className='text-4xl font-bold mb-4'>
              Capturing the Beauty of Your Every Day Life
            </h2>
            <p className='text-lg mb-8'>
              Explore the moments, cherish the memories.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
