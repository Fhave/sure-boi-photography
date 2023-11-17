// src/components/GallerySection.js
import React from 'react';

function GallerySection() {
  return (
    <section className='container mx-auto my-10 text-center'>
      <h2 className='text-3xl font-bold mb-4'>Photo Gallery</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        <img
          src='https://via.placeholder.com/800x600'
          alt='Gallery Photo 1'
          className='w-full h-64 object-cover rounded-md mb-4'
        />
        <img
          src='https://via.placeholder.com/800x600'
          alt='Gallery Photo 2'
          className='w-full h-64 object-cover rounded-md mb-4'
        />
        <img
          src='https://via.placeholder.com/800x600'
          alt='Gallery Photo 3'
          className='w-full h-64 object-cover rounded-md mb-4'
        />
        {/* Add more gallery photos as needed */}
      </div>
    </section>
  );
}

export default GallerySection;
