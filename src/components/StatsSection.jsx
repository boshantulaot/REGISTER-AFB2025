import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { useRegistration } from '@/hooks/useRegistration';
import { Users, Target, Trophy, Calendar } from 'lucide-react';

const StatsSection = () => {
  const { totalRegistrations } = useRegistration();
  const targetParticipants = 3000;
  const progressPercentage = Math.min((totalRegistrations / targetParticipants) * 100, 100);

  const stats = [
    {
      icon: Users,
      label: "Peserta Terdaftar",
      value: totalRegistrations,
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: Target,
      label: "Target Peserta",
      value: targetParticipants.toLocaleString(),
      color: "from-green-500 to-teal-500"
    },
    {
      icon: Trophy,
      label: "Hadiah Utama",
      value: "10+",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Calendar,
      label: "Hari Tersisa",
      value: "Soon",
      color: "from-pink-500 to-red-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Statistik & Progress
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Lihat perkembangan pendaftaran dan bergabunglah dengan ribuan peserta lainnya!
          </p>
        </motion.div>

        {/* Progress Bar Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="card-gradient border-0 shadow-2xl max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                  Progress Pendaftaran
                </h3>
                <div className="flex items-center justify-center gap-4 text-lg">
                  <span className="font-bold text-purple-600">
                    {totalRegistrations.toLocaleString()}
                  </span>
                  <span className="text-gray-500">/</span>
                  <span className="font-bold text-gray-700">
                    {targetParticipants.toLocaleString()} peserta
                  </span>
                </div>
              </div>
              
              <div className="relative">
                <div className="w-full bg-gray-200 rounded-full h-6 mb-4">
                  <motion.div 
                    className="progress-bar h-6 rounded-full flex items-center justify-end pr-4"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${progressPercentage}%` }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-white font-bold text-sm">
                      {progressPercentage.toFixed(1)}%
                    </span>
                  </motion.div>
                </div>
                
                <div className="text-center">
                  <p className="text-gray-600 font-medium">
                    🎯 Mari capai target {targetParticipants.toLocaleString()} peserta bersama-sama!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="card-gradient border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-gray-800 mb-2"
                  >
                    {stat.value}
                  </motion.div>
                  
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white shadow-2xl max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              🚀 Jangan Sampai Terlewat!
            </h3>
            <p className="text-lg mb-6">
              Bergabunglah dengan {totalRegistrations.toLocaleString()}+ peserta yang sudah mendaftar. 
              Semakin banyak peserta, semakin meriah acaranya!
            </p>
            <div className="flex items-center justify-center gap-4 text-sm">
              <span>⭐ Gratis</span>
              <span>🎁 Berhadiah</span>
              <span>👨‍👩‍👧‍👦 Keluarga</span>
              <span>🏆 Lucky Draw</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;