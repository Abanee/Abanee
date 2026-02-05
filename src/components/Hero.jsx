import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
// --- 1. Updated Import with your specific filename ---
import profilePic from '../assets/Abanee.jpg'; 

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Transforming Data into Strategic Insights';
  const { scrollY } = useScroll();

  const parallaxY = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-burnt-orange/10 rounded-full blur-3xl"></div>

      <motion.div
        style={{ opacity }}
        className="container mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 z-10"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight"
            >
              Hi, I'm{' '}
              <span className="text-gradient glow-amber">Abaneesh M</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl sm:text-2xl text-warm-cream/80 font-light"
            >
              An Aspiring{' '}
              <span className="text-amber font-semibold">Data Analyst</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg text-warm-cream/70 min-h-[2rem]"
            >
              {typedText}
              <span className="animate-pulse">|</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-base sm:text-lg text-warm-cream/60 leading-relaxed max-w-2xl"
            >
              Proven ability to transform complex datasets into strategic,
              insight-driven solutions through advanced data manipulation and
              interactive dashboard development.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-amber via-sunset-gold to-burnt-orange rounded-full text-dark-charcoal font-semibold shadow-lg hover:shadow-amber/50 transition-all duration-300"
              >
                View Projects
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 glass-effect rounded-full text-warm-cream font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Get in Touch
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Side - Image with Floating Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex items-center justify-center"
          >
            {/* Floating "DATA ANALYST" text with parallax */}
            <motion.div
              style={{ y: parallaxY }}
              className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
            >
              <h2 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black text-white/5 whitespace-nowrap transform -rotate-12">
                DATA ANALYST
              </h2>
            </motion.div>

            {/* Profile Image Container */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative z-10 w-full max-w-md"
            >
              <div className="glass-effect rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20">
                <div className="aspect-square bg-gradient-to-br from-amber/20 via-sunset-gold/20 to-burnt-orange/20 flex items-center justify-center">
                  
                  {/* --- 2. FIXED ALIGNMENT HERE --- */}
                  <img 
                    src={profilePic} 
                    alt="Abaneesh M" 
                    // Added 'object-top' to prioritize the face alignment
                    className="w-full h-full object-cover object-top"
                  />

                </div>
              </div>

              {/* Floating decorative elements */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -top-6 -right-6 w-20 h-20 bg-amber/20 rounded-full blur-xl"
              ></motion.div>
              <motion.div
                animate={{
                  y: [0, 20, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -bottom-6 -left-6 w-32 h-32 bg-burnt-orange/20 rounded-full blur-xl"
              ></motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center text-warm-cream/50 hover:text-amber transition-colors"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ChevronDown size={24} />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;