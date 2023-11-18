import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, Events, scrollSpy } from 'react-scroll';
import logo from '../assets/logo.png';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [showBackground, setShowBackground] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    // Initial fade after 2 seconds
    const initialFadeTimeout = setTimeout(() => {
      setShowBackground(false);
    }, 3000);

    // Check scroll position and update showBackground accordingly
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setShowBackground(false);
      } else {
        setShowBackground(true);
        setTimeout(() => {
          setShowBackground(false);
        }, 3000);
      }
    };

    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup function
    return () => {
      clearTimeout(initialFadeTimeout);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Use scrollSpy to detect scroll changes and update showBackground accordingly
  useEffect(() => {
    Events.scrollEvent.register('begin', (to, element) => {
      setShowBackground(false);
    });

    Events.scrollEvent.register('end', (to, element) => {
      setShowBackground(true);
    });

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  return (
    <header
      className={`nav px-4 absolute top-0 left-0 w-full ${
        showBackground ? 'bg-[#BB951C]' : 'bg-transparent'
      } transition-all duration-500`}
    >
      <div className='container mx-auto flex items-center justify-between'>
        <div className='logo'>
          <img src={logo} alt='' className='w-24' />
        </div>
        <div className='hidden md:flex space-x-16 text-xl text-[#01443B] font-bold'>
          <Link
            to='home'
            smooth={true}
            duration={500}
            className='hover:text-white cursor-pointer'
          >
            Home
          </Link>
          <Link
            to='about'
            smooth={true}
            duration={500}
            className='hover:text-white cursor-pointer'
          >
            About
          </Link>
          <Link
            to='services'
            smooth={true}
            duration={500}
            className='hover:text-white cursor-pointer'
          >
            Services
          </Link>
          <Link
            to='contact'
            smooth={true}
            duration={500}
            className='hover:text-white cursor-pointer'
          >
            Contact
          </Link>
        </div>
        <div className='md:hidden'>
          <button onClick={handleToggle}>
            {toggle ? (
              <FaTimes size={35} color='white' />
            ) : (
              <FaBars size={35} color='white' />
            )}
          </button>
        </div>
      </div>
      <nav
        className={`md:hidden text-right text-shadow ${
          toggle ? 'block' : 'hidden'
        }`}
      >
        <ul className='flex flex-col -mt- space-y-1 text-lg font-bold'>
          <li>
            <Link
              to='home'
              smooth={true}
              duration={500}
              className='text-[#01443B] cursor-pointer hover:text-white'
              onClick={handleToggle}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to='about'
              smooth={true}
              duration={500}
              className='text-[#01443B] cursor-pointer hover:text-white'
              onClick={handleToggle}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to='services'
              smooth={true}
              duration={500}
              className='text-[#01443B] cursor-pointer hover:text-white'
              onClick={handleToggle}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to='contact'
              smooth={true}
              duration={500}
              className='text-[#01443B] cursor-pointer hover:text-white'
              onClick={handleToggle}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
