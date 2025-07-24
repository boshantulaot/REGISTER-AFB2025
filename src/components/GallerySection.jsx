import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const GallerySection = () => {
  const galleryImages = [
    {
      title: "Fun Bike Keluarga",
      description: "Keseruan bersepeda bersama keluarga"
    },
    {
      title: "Festival Meriah",
      description: "Suasana festival yang penuh warna"
    },
    {
      title: "Hadiah Menarik",
      description: "Berbagai hadiah menanti para peserta"
    },
    {
      title: "Kebersamaan",
      description: "Momen kebersamaan yang tak terlupakan"
    },
    {
      title: "Semangat Adhyaksa",
      description: "Energi positif dari seluruh peserta"
    },
    {
      title: "Acara Seru",
      description: "Berbagai kegiatan menarik untuk semua"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Galeri Kegiatan
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Lihat keseruan dan kemeriahan acara Semangat Adhyaksa dari tahun-tahun sebelumnya!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="card-gradient border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden">
                <div className="relative">
                  <img  
                    className="w-full h-64 object-cover" 
                    alt={image.title}
                   src="https://images.unsplash.com/photo-1674980630304-dccf73fd176c" />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                    <p className="text-sm opacity-90">{image.description}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Poster Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-3xl font-bold text-gradient mb-8">
            Poster Acara Tahun Ini
          </h3>
          
          <Card className="card-gradient border-0 shadow-2xl max-w-2xl mx-auto">
            <CardContent className="p-8">
              <img  
                className="w-full h-auto rounded-xl shadow-lg" 
                alt="Poster Semangat Adhyaksa Fun Bike dan Festival Keluarga"
               src="https://images.unsplash.com/photo-1609911720098-5b010b7c00cd" />
              
              <div className="mt-6 p-6 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl">
                <p className="text-gray-700 font-medium text-lg">
                  🎉 Semangat Adhyaksa - Fun Bike & Festival Keluarga
                </p>
                <p className="text-gray-600 mt-2">
                  Acara yang dinanti-nanti untuk seluruh keluarga Indonesia!
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;