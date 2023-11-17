import { Helmet } from 'react-helmet';
import Header from './components/header';
import HeroSection from './components/heroSection';
// import PhotoSection from './components/PhotoSection';
import AboutSection from './components/aboutSection';
import ServicesSection from './components/servicesSection';
// import TestimonialsSection from './components/TestimonialsSection';
// import GallerySection from './components/GallerySection';
import ContactSection from './components/contactSection';
import Footer from './components/footer';
import './App.css';

function App() {
  return (
    <div className='bg-gray-100 min-h-screen'>
      {/* <Helmet>
        <title>Professional Wedding Photography - Jamzy Studio</title>
        <meta
          name='description'
          content='Capture the magic of your special day with our professional wedding photography services. Browse our portfolio and contact us for bookings.'
        />
        <meta
          name='keywords'
          content='wedding photography, wedding photographer, professional wedding photos, bridal photography, engagement photography'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta httpEquiv='content-language' content='en-us' />
        <meta name="robots" content="index, follow" />
        <meta name='author' content='Jamzy Studio' />
        <meta name="google-site-verification" content="rcIwVleYfv1_T8ENOKHCBVl60RJCVsHBhfHyH3lSQqM" />
      </Helmet> */}
      <Header />
      <HeroSection />
      {/* <PhotoSection /> */}
      <AboutSection />
      <ServicesSection />
      {/* <TestimonialsSection /> */}
      {/* <GallerySection /> */}
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
