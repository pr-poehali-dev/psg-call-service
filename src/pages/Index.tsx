import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [countdown, setCountdown] = useState(1.5);
  const phoneNumber = '+74951234567';

  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = `tel:${phoneNumber}`;
    }, 1500);

    const interval = setInterval(() => {
      setCountdown((prev) => Math.max(0, prev - 0.1));
    }, 100);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#123d6b] via-[#0a2b50] to-[#061a33]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,191,255,0.1)_0%,_transparent_70%)]" />
      
      <div className="relative z-10 flex flex-col items-center text-center px-6 animate-fade-in">
        <div className="mb-8 animate-scale-in">
          <img 
            src="https://vodochet.ru/assets/cache_image/img/company/logo_psg_240x0_818.png" 
            alt="ПСГ" 
            className="w-32 h-auto mx-auto drop-shadow-2xl"
          />
        </div>

        <h1 className="text-3xl md:text-4xl font-semibold text-white mb-4">
          Соединяем с оператором ПСГ...
        </h1>

        <div className="mb-8 flex items-center gap-3">
          <div className="relative w-12 h-12">
            <div className="absolute inset-0 rounded-full border-4 border-[#00bfff] border-t-transparent animate-spin" />
            <div className="absolute inset-2 rounded-full bg-[#00bfff] opacity-20" />
          </div>
          <p className="text-lg text-white/90">
            {countdown > 0 ? `${countdown.toFixed(1)} сек` : 'Звоним...'}
          </p>
        </div>

        <p className="text-white/80 mb-8 max-w-md">
          Если звонок не начался автоматически, нажмите кнопку ниже 👇
        </p>

        <Button 
          onClick={handleCall}
          className="bg-[#00bfff] hover:bg-[#0099cc] text-white font-semibold px-8 py-6 text-lg rounded-lg shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,191,255,0.5)]"
        >
          <Icon name="Phone" size={24} className="mr-2" />
          Позвонить инженеру
        </Button>
      </div>

      <footer className="absolute bottom-6 text-white/60 text-sm">
        © ПСГ — Проект Сервис Групп
      </footer>
    </div>
  );
};

export default Index;
