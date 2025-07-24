import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Phone, Mail, MapPin, Instagram, Youtube, MessageCircle } from 'lucide-react';

const Footer = () => {
  const { toast } = useToast();

  const handleContactClick = (type) => {
    toast({
      title: "Fitur Kontak",
      description: "🚧 Fitur ini belum diimplementasikan—tapi jangan khawatir! Anda bisa memintanya di prompt berikutnya! 🚀",
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Kontak Panitia",
      value: "+62 812-3456-7890",
      action: () => handleContactClick("phone")
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@semangatdhyaksa.com",
      action: () => handleContactClick("email")
    },
    {
      icon: MapPin,
      label: "Lokasi",
      value: "Jakarta, Indonesia",
      action: () => handleContactClick("location")
    }
  ];

  const socialMedia = [
    {
      icon: Instagram,
      label: "Instagram",
      handle: "@semangatdhyaksa",
      action: () => handleContactClick("instagram")
    },
    {
      icon: Youtube,
      label: "YouTube",
      handle: "Semangat Adhyaksa",
      action: () => handleContactClick("youtube")
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      handle: "Chat Panitia",
      action: () => handleContactClick("whatsapp")
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-purple-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <h3 className="text-3xl font-bold mb-4 text-yellow-300">
              Semangat Adhyaksa
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Fun Bike & Festival Keluarga yang menghadirkan kebersamaan, 
              kegembiraan, dan semangat sportivitas untuk seluruh kalangan.
            </p>
            
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <span className="text-2xl">🚴‍♂️</span>
              <span className="text-2xl">👨‍👩‍👧‍👦</span>
              <span className="text-2xl">🎉</span>
              <span className="text-2xl">🏆</span>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-6 text-yellow-300">Kontak Panitia</h4>
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                    <contact.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">{contact.label}</p>
                    <button
                      onClick={contact.action}
                      className="text-white hover:text-yellow-300 transition-colors duration-200"
                    >
                      {contact.value}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-6 text-yellow-300">Media Sosial</h4>
            <div className="space-y-4 mb-8">
              {socialMedia.map((social, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                    <social.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">{social.label}</p>
                    <button
                      onClick={social.action}
                      className="text-white hover:text-yellow-300 transition-colors duration-200"
                    >
                      {social.handle}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <Button
              onClick={() => handleContactClick("whatsapp")}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-full transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Chat WhatsApp Panitia
            </Button>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-center md:text-left">
              © 2024 Semangat Adhyaksa. Semua hak dilindungi.
            </p>
            
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <button
                onClick={() => handleContactClick("privacy")}
                className="hover:text-white transition-colors duration-200"
              >
                Kebijakan Privasi
              </button>
              <button
                onClick={() => handleContactClick("terms")}
                className="hover:text-white transition-colors duration-200"
              >
                Syarat & Ketentuan
              </button>
            </div>
          </div>

          <div className="text-center mt-6">
            <p className="text-gray-500 text-sm">
              🌟 Dibuat dengan ❤️ untuk semangat kebersamaan Indonesia
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;