import { useEffect, useState } from 'react';

const Index = () => {
  const [countdown, setCountdown] = useState(1.5);
  const phoneNumber = '+74951234567';

  useEffect(() => {
    const metrikaScript = document.createElement('script');
    metrikaScript.innerHTML = `
      (function(m,e,t,r,i,k,a){
        m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j=0;j<document.scripts.length;j++){
          if (document.scripts[j].src===r){return;}
        }
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
      })
      (window, document, "script", "https://mc.yandex.ru/metrika/tag.js?id=104761353", "ym");

      ym(104761353, "init", {
           ssr:true,
           webvisor:true,
           clickmap:true,
           ecommerce:"dataLayer",
           accurateTrackBounce:true,
           trackLinks:true
      });
    `;
    document.head.appendChild(metrikaScript);

    const noscript = document.createElement('noscript');
    noscript.innerHTML = '<div><img src="https://mc.yandex.ru/watch/104761353" style="position:absolute; left:-9999px;" alt="" /></div>';
    document.body.appendChild(noscript);

    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 0.1) {
          clearInterval(interval);
          window.location.href = `tel:${phoneNumber}`;
          return 0;
        }
        return prev - 0.1;
      });
    }, 100);

    return () => {
      clearInterval(interval);
      document.head.removeChild(metrikaScript);
      document.body.removeChild(noscript);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#123d6b] to-[#0a2b50] text-white text-center px-4">
      <img 
        src="https://vodochet.ru/assets/cache_image/img/company/logo_psg_240x0_818.png" 
        alt="ПСГ" 
        className="w-32 mb-6 animate-scale-in"
      />
      
      <h1 className="text-2xl md:text-3xl font-semibold mb-3 animate-fade-in">
        Соединяем с оператором ПСГ...
      </h1>
      
      <p className="text-lg mb-2 opacity-90 animate-fade-in">
        Звонок начнётся через <span className="font-bold text-[#00bfff]">{countdown.toFixed(1)}с</span>
      </p>
      
      <p className="text-base mb-8 opacity-80 animate-fade-in">
        Если звонок не начался автоматически, нажмите кнопку ниже 👇
      </p>

      <a 
        href={`tel:${phoneNumber}`}
        className="inline-block px-7 py-3.5 bg-[#00bfff] text-white text-lg font-semibold rounded-lg 
                   transition-all duration-300 hover:bg-[#0099cc] hover:scale-105 
                   active:scale-95 no-underline animate-scale-in"
      >
        📞 Позвонить инженеру
      </a>

      <footer className="absolute bottom-4 text-sm opacity-60">
        © ПСГ — Проект Сервис Групп
      </footer>
    </div>
  );
};

export default Index;