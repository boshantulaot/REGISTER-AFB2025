import { useState, useEffect } from 'react';

export const useRegistration = () => {
  const [registrations, setRegistrations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const whatsappGroupLink = 'https://chat.whatsapp.com/HhC46Vh2csoFNZ3YVnQ3zw';

  useEffect(() => {
    const savedRegistrations = localStorage.getItem('adhyaksa-registrations');
    if (savedRegistrations) {
      setRegistrations(JSON.parse(savedRegistrations));
    }
  }, []);

  const generateRegistrationCode = () => {
    const today = new Date();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const currentCount = registrations.length + 1;
    const sequenceNumber = String(currentCount).padStart(4, '0');
    
    return `ADHYAKSA-${month}${day}-${sequenceNumber}`;
  };

  const isPhoneNumberExists = (phoneNumber) => {
    return registrations.some(reg => reg.phoneNumber === phoneNumber);
  };

  const addRegistration = async (formData) => {
    setIsLoading(true);
    
    try {
      if (isPhoneNumberExists(formData.phoneNumber)) {
        throw new Error('Nomor WhatsApp sudah terdaftar. Satu nomor hanya berlaku untuk satu peserta.');
      }

      const registrationCode = generateRegistrationCode();
      const timestamp = new Date().toISOString();
      
      const newRegistration = {
        id: Date.now(),
        name: formData.name,
        phoneNumber: formData.phoneNumber,
        institution: formData.institution || '',
        registrationCode,
        timestamp,
      };

      const updatedRegistrations = [...registrations, newRegistration];
      setRegistrations(updatedRegistrations);
      localStorage.setItem('adhyaksa-registrations', JSON.stringify(updatedRegistrations));

      await sendWhatsAppMessage(formData.name, formData.phoneNumber, registrationCode);
      
      setIsLoading(false);
      return { success: true, registrationCode };
    } catch (error) {
      setIsLoading(false);
      throw error;
    }
  };

  const sendWhatsAppMessage = async (name, phoneNumber, registrationCode) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const message = `Halo ${name}, pendaftaran Anda berhasil! Kode registrasi Anda: ${registrationCode}. Simpan kode ini untuk undian lucky draw di hari acara. Silakan bergabung ke grup WhatsApp resmi melalui link berikut: ${whatsappGroupLink}. Terima kasih telah bergabung!`;
    
    console.log(`WhatsApp message sent to ${phoneNumber}: ${message}`);
    
    return { success: true };
  };

  return {
    registrations,
    isLoading,
    addRegistration,
    totalRegistrations: registrations.length,
  };
};