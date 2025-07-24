import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, HeartHandshake as Handshake, Star } from 'lucide-react';

const SponsorsSection = () => {
  const sponsorLogos = [
    "Sponsor Utama 1",
    "Sponsor Utama 2", 
    "Sponsor Utama 3",
    "Mitra Kolaborasi 1",
    "Mitra Kolaborasi 2",
    "Mitra Kolaborasi 3"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Dukungan Sponsor & Kolaborator
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bersama sponsor dan mitra kolaborasi, kita hadirkan semangat kebersamaan 
            yang luar biasa untuk seluruh peserta!
          </p>
        </motion.div>

        {/* Main message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="card-gradient border-0 shadow-2xl max-w-4xl mx-auto">
            <CardContent className="p-8 text-center">
              <div className="flex items-center justify-center gap-4 mb-6">
                <Heart className="w-8 h-8 text-red-500" />
                <Handshake className="w-8 h-8 text-blue-500" />
                <Star className="w-8 h-8 text-yellow-500" />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                Terima Kasih Para Pendukung!
              </h3>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Event Semangat Adhyaksa dapat terlaksana berkat dukungan luar biasa dari 
                para sponsor dan mitra kolaborasi yang peduli dengan semangat kebersamaan 
                dan kesehatan keluarga Indonesia.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Sponsor logos grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {sponsorLogos.map((sponsor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="card-gradient border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="w-full h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center mb-4">
                    <img  
                      className="max-w-full max-h-full object-contain" 
                      alt={`Logo ${sponsor}`}
                     src="https://images.unsplash.com/photo-1649000808933-1f4aac7cad9a" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-800">{sponsor}</h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Partnership benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl p-8 text-white shadow-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              🤝 Kekuatan Kolaborasi
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-3">🎯</div>
                <h4 className="font-bold text-lg mb-2">Visi Bersama</h4>
                <p className="text-sm opacity-90">
                  Membangun semangat kebersamaan dan kesehatan keluarga
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-3">💪</div>
                <h4 className="font-bold text-lg mb-2">Dukungan Penuh</h4>
                <p className="text-sm opacity-90">
                  Komitmen penuh untuk kesuksesan acara yang berkesan
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-3">🌟</div>
                <h4 className="font-bold text-lg mb-2">Dampak Positif</h4>
                <p className="text-sm opacity-90">
                  Menciptakan dampak positif untuk masyarakat luas
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SponsorsSection;