import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Trophy, Heart, Star, Zap } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: Trophy,
      title: "Hadiah Utama Menarik",
      description: "Berbagai hadiah menarik menanti para peserta terbaik"
    },
    {
      icon: Heart,
      title: "Kegiatan Keluarga",
      description: "Event yang dirancang untuk kebersamaan seluruh anggota keluarga"
    },
    {
      icon: Star,
      title: "Pengalaman Tak Terlupakan",
      description: "Ciptakan momen berharga bersama keluarga dan komunitas"
    },
    {
      icon: Zap,
      title: "Energi Positif",
      description: "Rasakan semangat dan energi positif dari seluruh peserta"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16 fade-in-up"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Tentang Kegiatan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Semangat Adhyaksa adalah event Fun Bike dan Festival Keluarga yang menghadirkan kebersamaan, 
            kegembiraan, dan semangat sportivitas untuk seluruh kalangan. Mari bergabung dalam petualangan 
            seru yang penuh hadiah dan keseruan!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="card-gradient border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 h-full">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional info section */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl p-8 text-white shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              🎯 Highlight Acara
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold">🚴‍♂️</div>
                <p className="font-semibold">Fun Bike Seru</p>
              </div>
              <div>
                <div className="text-3xl font-bold">🎪</div>
                <p className="font-semibold">Festival Keluarga</p>
              </div>
              <div>
                <div className="text-3xl font-bold">🏆</div>
                <p className="font-semibold">Lucky Draw</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;