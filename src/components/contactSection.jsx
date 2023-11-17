import { useState } from 'react';
import axios from 'axios';
import img6 from '../assets/img6.jpg';

const ContactSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('https://email-server-ochre.vercel.app/send-email', {
        user: {
          from: 'omosiyobo@gmail.com',
          to: email,
          subject: 'Contact Form',
          text: 'We have received your message',
        },
        owner: {
          from: 'omosiyobo@gmail.com',
          to: 'omosiyobo@gmail.com', // Replace with the actual owner's email
          subject: 'New Form Submission',
          text: `You received a new form submission:\n\n${message}`,
        },
      });

      // You can add additional logic here, e.g., show a success message or redirect to a thank-you page.
      console.log('Emails sent successfully');
    } catch (error) {
      console.error('Error sending emails:', error);
      // Handle errors, e.g., display an error message to the user.
    }
  };

  return (
    <section id='contact' className='bg-gray-200 min-h-screen flex items-center justify-center py-16'>
    <div className='container mx-auto text-center'>
        <div className='flex flex-col sm:flex-row px-8 space-x-8'>
          <div className='form w-full sm:w-[50%] my-auto'>
            <h2 className='text-3xl font-bold mb-4'>Contact Us</h2>
            <p className='text-gray-700 mb-8'>
              Need me for an event? Let's talk!
            </p>
            <form onSubmit={handleSubmit} className='max-w-md mx-auto'>
              <div className='mb-4'>
                <label
                  htmlFor='name'
                  className='block text-sm font-medium text-gray-600'
                >
                  Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  className='mt-1 p-2 w-full border rounded-md'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium text-gray-600'
                >
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  className='mt-1 p-2 w-full border rounded-md'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='message'
                  className='block text-sm font-medium text-gray-600'
                >
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  rows='4'
                  className='mt-1 p-2 w-full border rounded-md'
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
              <button
                type='submit'
                className='bg-[#6c5ce7] text-white px-4 py-2 rounded pointer'
              >
                Submit
              </button>
            </form>
          </div>
          <div className='img w-full sm:w-[50%] my-auto'>
            <img src={img6} alt='' className='mx-auto' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
