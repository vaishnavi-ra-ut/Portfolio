import { useEffect, useState } from 'react';
import Spline from './Spline';

const Hero3D = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    checkScreen(); // initial check
    window.addEventListener('resize', checkScreen);

    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  if (!isLargeScreen) return null;

  return (
    <section className="w-full h-screen relative">
      <div className="w-full h-full">
        <Spline />
      </div>
      
      {/* Scroll Arrow */}
      <a href="#about">
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white text-3xl animate-bounce z-10">
          ↓
        </div>
      </a>
    </section>
  );
};

export default Hero3D;
