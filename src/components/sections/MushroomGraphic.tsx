'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export const MushroomGraphic = () => {
  return (
    <div className="fixed bottom-0 inset-x-0 h-[85vh] pointer-events-none z-0 overflow-visible flex justify-center">
      <motion.div
        className="relative w-screen h-full opacity-50 origin-bottom"
        initial={{ scale: 0.2, y: '100%' }}
        animate={{ scale: 1, y: 0 }}
        transition={{
          duration: 1.8,
          ease: [0.25, 0.1, 0.25, 1],
          delay: 0.3
        }}
        style={{
          transform: `scale(${typeof window !== 'undefined' && window.innerWidth < 768 ? 3 : 1})`
        }}
      >
        <Image
          src="/assets/images/Mushroom-Graphic.svg"
          alt="Decorative Mushroom Graphic"
          fill
          sizes="100vw"
          className="object-contain object-bottom"
          priority
        />
      </motion.div>
    </div>
  );
}; 