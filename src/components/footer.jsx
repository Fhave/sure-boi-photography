import { AiFillGoogleCircle, AiFillFacebook } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className='footer bg-[#BB951C] text-[#01443B] flex flex-col md:flex-row py-10 text-center items-center justify-around'>
      <div className='text px-4 mb-4 md:mb-0 md:w-1/3'>
        <h1 className='text-2xl font-bold'>Sure Boi Photography</h1>
      </div>
      <div className='links flex flex-wrap md:w-2/3'>
        <div className='flex flex-row items-center space-x-4 w-full md:w-1/2'>
          <AiFillGoogleCircle size={20} />
          <a
            href='https://www.google.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <p>Google</p>
          </a>
        </div>
        <div className='flex flex-row items-center space-x-4 w-full md:w-1/2'>
          <AiFillFacebook size={20} />
          <a
            href='https://www.facebook.com/p/Sure-Boi-Photograph-100068109513031/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <p>Facebook</p>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
