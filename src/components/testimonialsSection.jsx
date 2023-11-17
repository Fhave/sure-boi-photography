// src/components/TestimonialsSection.js
import React from 'react';

function TestimonialsSection() {
  return (
    <section className='bg-gray-100 py-16'>
      <div className='container mx-auto text-center'>
        <h2 className='text-3xl font-bold mb-4'>What Clients Say</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <div className='bg-white p-6 rounded-md shadow-md'>
            <p className='text-gray-700 mb-4'>
              "Amazing photography! Captured the essence of our special day with
              perfection."
            </p>
            <p className='font-bold'>- Jane Doe</p>
          </div>
          <div className='bg-white p-6 rounded-md shadow-md'>
            <p className='text-gray-700 mb-4'>
              "Professional, creative, and a pleasure to work with. Highly
              recommended!"
            </p>
            <p className='font-bold'>- John Smith</p>
          </div>
          <div className='bg-white p-6 rounded-md shadow-md'>
            <p className='text-gray-700 mb-4'>
              "Exceptional photography skills. Delivered exactly what we were
              looking for."
            </p>
            <p className='font-bold'>- Emily Johnson</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
