import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <header className='nav text-white p-4 absolute top-0 left-0 w-full'>
      <div className='container mx-auto flex items-center justify-between'>
        <div className='flex items-center'>
          <div className='mr-4'>
            <h1 className='text-2xl font-bold'></h1>
          </div>
        </div>
        <div className='logo'>
          <img src={logo} alt='' className='w-24' />
        </div>
        <div className='hidden md:flex space-x-6'>
          <a href='#home' className='hover:text-gray-300'>
            Home
          </a>
          <a href='#about' className='hover:text-gray-300'>
            About
          </a>
          <a href='#services' className='hover:text-gray-300'>
            Services
          </a>
          <a href='#contact' className='hover:text-gray-300'>
            Contact
          </a>
        </div>
        <div className='md:hidden'>
          <button
            onClick={handleToggle}
            className='text-xl text-white hover:text-gray-300'
          >
            {toggle ? <FaTimes color='white' /> : <FaBars color='white' />}
          </button>
        </div>
      </div>
      <nav className={`md:hidden ${toggle ? 'block' : 'hidden'}`}>
        <ul className='flex flex-col mt-2 space-y-1'>
          <li>
            <a href='#home' className='text-white' onClick={handleToggle}>
              Home
            </a>
          </li>
          <li>
            <a href='#about' className='text-white' onClick={handleToggle}>
              About
            </a>
          </li>
          <li>
            <a href='#services' className='text-white' onClick={handleToggle}>
              Services
            </a>
          </li>
          <li>
            <a href='#contact' className='text-white' onClick={handleToggle}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
