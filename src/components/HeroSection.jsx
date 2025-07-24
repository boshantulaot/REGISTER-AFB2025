import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Bike, Users, Gift, Calendar } from 'lucide-react';

const HeroSection = ({ onScrollToForm }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full floating-animation"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-white/10 rounded-full floating-animation" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-white/10 rounded-full floating-animation" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-20 right-10 w-12 h-12 bg-white/10 rounded-full floating-animation" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            className="text-center lg:text-left slide-in-left"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Gabung dalam{' '}
              <span className="text-yellow-300 pulse-animation">
                Semangat Adhyaksa!
              </span>
              <div className="flex items-center justify-center lg:justify-start gap-4 mt-4">
                <Bike className="w-12 h-12 text-yellow-300" />
                <span className="text-3xl">🎉</span>
              </div>
            </motion.h1>

            <motion.p 
              className="text-xl md:text-2xl text-white/90 mb-8 font-medium"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Fun Bike & Festival Keluarga – Penuh Hadiah & Keseruan!
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-6 justify-center lg:justify-start mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="flex items-center gap-2 text-white/90">
                <Users className="w-5 h-5 text-yellow-300" />
                <span>Untuk Semua Keluarga</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <Gift className="w-5 h-5 text-yellow-300" />
                <span>Hadiah Menarik</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <Calendar className="w-5 h-5 text-yellow-300" />
                <span>Event Seru</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button 
                onClick={onScrollToForm}
                className="btn-primary text-white font-bold py-4 px-8 text-lg rounded-full hover:scale-105 transition-all duration-300"
                size="lg"
              >
                Daftar Sekarang 🚀
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div 
            className="relative slide-in-right"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              <img  
                className="w-full h-auto rounded-2xl shadow-2xl floating-animation" 
                alt="Fun Bike dan Festival Keluarga Semangat Adhyaksa"
                src="https://storage.googleapis.com/hostinger-horizons-assets-prod/07c128c4-80f6-46ea-9802-ab0dae155967/2cf27338aa00cc8cd779e488f3be0486.jpg" />
              
              {/* Floating badges */}
              <motion.div 
                className="absolute -top-4 -right-4 bg-yellow-400 text-purple-800 px-4 py-2 rounded-full font-bold shadow-lg"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                🎁 Hadiah Utama!
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-4 -left-4 bg-pink-400 text-white px-4 py-2 rounded-full font-bold shadow-lg"
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              >
                🚴‍♂️ Fun Bike
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;