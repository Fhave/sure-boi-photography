import { Link } from 'react-scroll'; // Assuming you are using a library for smooth scrolling

const HeroSection = () => {
  return (
    <section
      id='home'
      className='bg flex items-center justify-center text-[#BB951C] text-shadow text-center h-screen'
    >
      <div className='container mx-auto'>
        <div className='flex flex-col sm:flex-row'>
          <div className='md:w-3/5 mx-auto pb-8 pt-80 text-center text-shadow'>
            <h2 className='text-4xl font-bold mb-4'>
              Capturing the Beauty of Your Every-Day Life
            </h2>
            <div className='flex flex-row text-center justify-center items-center text-lg font-bold mb-8 space-x-2'>
              <p>It's Your Special Day,</p>
              <Link to='contact' smooth={true} duration={500}>
                <button className='bg-[#01443B] text-white px-4 py-2 rounded pointer'>
                  Let's Talk
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
