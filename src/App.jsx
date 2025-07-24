import React, { useRef } from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import RegistrationForm from '@/components/RegistrationForm';
import StatsSection from '@/components/StatsSection';
import GallerySection from '@/components/GallerySection';
import SponsorsSection from '@/components/SponsorsSection';
import Footer from '@/components/Footer';

function App() {
  const registrationRef = useRef(null);

  const scrollToRegistration = () => {
    registrationRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <>
      <Helmet>
        <title>Semangat Adhyaksa - Fun Bike & Festival Keluarga | Daftar Sekarang</title>
        <meta 
          name="description" 
          content="Bergabunglah dalam event Semangat Adhyaksa - Fun Bike & Festival Keluarga yang penuh hadiah dan keseruan! Daftar gratis sekarang dan dapatkan kode registrasi untuk undian lucky draw." 
        />
        <meta name="keywords" content="fun bike, festival keluarga, semangat adhyaksa, event gratis, hadiah, lucky draw, keluarga indonesia" />
        <meta property="og:title" content="Semangat Adhyaksa - Fun Bike & Festival Keluarga" />
        <meta property="og:description" content="Event Fun Bike & Festival Keluarga yang penuh hadiah dan keseruan untuk seluruh keluarga Indonesia!" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen">
        <HeroSection onScrollToForm={scrollToRegistration} />
        <AboutSection />
        <div ref={registrationRef}>
          <RegistrationForm />
        </div>
        <StatsSection />
        <GallerySection />
        <SponsorsSection />
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;