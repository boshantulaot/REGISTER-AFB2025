import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useRegistration } from '@/hooks/useRegistration';
import { UserPlus, Phone, Building, CheckCircle, MessageSquare } from 'lucide-react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    institution: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [registrationCode, setRegistrationCode] = useState('');
  
  const { addRegistration, isLoading } = useRegistration();
  const { toast } = useToast();
  const whatsappGroupLink = 'https://chat.whatsapp.com/HhC46Vh2csoFNZ3YVnQ3zw';

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.phoneNumber.trim()) {
      toast({
        title: "Error",
        description: "Nama lengkap dan nomor WhatsApp wajib diisi!",
        variant: "destructive",
      });
      return;
    }

    const phoneRegex = /^(\+62|62|0)[0-9]{9,13}$/;
    if (!phoneRegex.test(formData.phoneNumber.replace(/\s/g, ''))) {
      toast({
        title: "Error",
        description: "Format nomor WhatsApp tidak valid!",
        variant: "destructive",
      });
      return;
    }

    try {
      const result = await addRegistration(formData);
      setRegistrationCode(result.registrationCode);
      setIsSubmitted(true);
      
      toast({
        title: "Pendaftaran Berhasil! 🎉",
        description: `Kode registrasi Anda: ${result.registrationCode}. Cek WhatsApp Anda untuk link grup.`,
      });

    } catch (error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  if (isSubmitted) {
    return (
      <section id="registration" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <Card className="card-gradient border-0 shadow-2xl">
              <CardContent className="p-12 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8"
                >
                  <CheckCircle className="w-12 h-12 text-white" />
                </motion.div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-6">
                  Pendaftaran Berhasil! 🎉
                </h2>
                
                <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl p-6 text-white mb-8">
                  <p className="text-lg mb-2">Kode Registrasi Anda:</p>
                  <p className="text-2xl md:text-3xl font-bold tracking-wider">
                    {registrationCode}
                  </p>
                </div>
                
                <div className="space-y-4 text-gray-600 mb-8">
                  <p className="text-lg">
                    ✅ Pesan WhatsApp berisi kode registrasi dan link grup telah dikirim ke nomor Anda.
                  </p>
                  <p className="text-lg">
                    🎫 Simpan kode ini untuk undian lucky draw di hari acara.
                  </p>
                  <p className="text-lg">
                    ➡️ Silakan cek WhatsApp Anda untuk bergabung ke grup resmi.
                  </p>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="mb-4"
                >
                  <Button
                    onClick={() => window.open(whatsappGroupLink, '_blank')}
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full text-lg"
                  >
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Buka Grup WhatsApp
                  </Button>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <Button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', phoneNumber: '', institution: '' });
                      setRegistrationCode('');
                    }}
                    variant="outline"
                    className="w-full bg-transparent border-purple-500 text-purple-500 hover:bg-purple-50 hover:text-purple-600 font-bold py-3 px-8 rounded-full"
                  >
                    Daftarkan Peserta Lain
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="registration" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12 fade-in-up"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Formulir Pendaftaran
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Daftarkan diri Anda sekarang dan dapatkan kode registrasi untuk undian lucky draw!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <Card className="card-gradient border-0 shadow-2xl">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center justify-center gap-3">
                <UserPlus className="w-8 h-8 text-purple-500" />
                Daftar Peserta
              </CardTitle>
            </CardHeader>
            
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-lg font-semibold text-gray-700 flex items-center gap-2">
                    <UserPlus className="w-5 h-5 text-purple-500" />
                    Nama Lengkap *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Masukkan nama lengkap Anda"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="text-lg py-4"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phoneNumber" className="text-lg font-semibold text-gray-700 flex items-center gap-2">
                    <Phone className="w-5 h-5 text-purple-500" />
                    Nomor WhatsApp Aktif *
                  </Label>
                  <Input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="tel"
                    placeholder="Contoh: 08123456789"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    required
                    className="text-lg py-4"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    💡 Satu nomor WhatsApp hanya berlaku untuk satu peserta
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="institution" className="text-lg font-semibold text-gray-700 flex items-center gap-2">
                    <Building className="w-5 h-5 text-purple-500" />
                    Instansi/Komunitas (Opsional)
                  </Label>
                  <Input
                    id="institution"
                    name="institution"
                    type="text"
                    placeholder="Nama instansi atau komunitas Anda"
                    value={formData.institution}
                    onChange={handleInputChange}
                    className="text-lg py-4"
                  />
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full btn-primary text-white font-bold py-4 text-xl rounded-full hover:scale-105 transition-all duration-300"
                    size="lg"
                  >
                    {isLoading ? (
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Memproses Pendaftaran...
                      </div>
                    ) : (
                      'Daftar Sekarang 🚀'
                    )}
                  </Button>
                </motion.div>
              </form>

              <div className="mt-8 p-6 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-xl border-l-4 border-yellow-400">
                <p className="text-gray-700 font-medium">
                  📱 Setelah mendaftar, Anda akan menerima pesan WhatsApp berisi kode registrasi 
                  dan link untuk bergabung ke grup WhatsApp resmi acara!
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default RegistrationForm;