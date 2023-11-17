// src/components/PhotoSection.js
import React from 'react';

function PhotoSection() {
  return (
    <section className='container mx-auto my-10'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div className='mb-8'>
          <img
            src='https://via.placeholder.com/800x600'
            alt='Photograph 1'
            className='w-full h-64 object-cover rounded-md'
          />
        </div>
        <div className='mb-8'>
          <img
            src='https://via.placeholder.com/800x600'
            alt='Photograph 2'
            className='w-full h-64 object-cover rounded-md'
          />
        </div>
      </div>
    </section>
  );
}

export default PhotoSection;
