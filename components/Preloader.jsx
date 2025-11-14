// components/PreloaderWrapper.jsx
'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image'
import Logo from '@/public/Logo/Mounir_Lagzouli_gray.svg'

export default function Preloader({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust loading time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="preloader"
            className="fixed inset-0 bg-[#141414] z-50 flex items-center justify-center"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
                        {/* <div
                          className="absolute inset-0 z-0"
                          style={{
                            background:
                              "radial-gradient(ellipse 80% 60% at 50% 0%, #141414, transparent 70%), transparent",
                          }}
                        /> */}
            <div className="relative">
              

              <motion.span 
              className="mix-blend-lighten"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}>
                    <Image alt='logo' src={Logo} className='size-[240px]  mix-blend-difference' width={100} height={100}/>

              </motion.span>

              
              {/* Double fade effect */}
              <motion.div
                className="absolute inset-0 bg-[#101010] mix-blend-lighten"
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ 
                  duration: 1, 
                  delay: 0.5, 
                  repeat: Infinity, 
                  repeatType: 'reverse' 
                }}
              />
            </div>
          </motion.div>
        )
        : (

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className={isLoading ? 'opacity-0' : 'opacity-100'}
            >
                {children}
            </motion.div>
        )}
      </AnimatePresence>

      {/* Main content - only visible after preloader */}
    </>
  );
}