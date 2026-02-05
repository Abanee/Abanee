import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, MapPin } from 'lucide-react';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-20 lg:py-32 relative">
      {/* Background gradient */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-sunset-gold/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient mb-4">
            About Me
          </h2>
          <p className="text-lg text-warm-cream/70 max-w-3xl mx-auto">
            Driven data analyst with expertise in transforming complex datasets
            into strategic insights
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-8 lg:gap-12"
        >
          {/* Education Column */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-gradient-to-br from-amber to-burnt-orange rounded-xl">
                <GraduationCap className="w-6 h-6 text-dark-charcoal" />
              </div>
              <h3 className="text-3xl font-bold text-gradient">Education</h3>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass-effect rounded-2xl p-6 sm:p-8 space-y-4 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-start justify-between flex-wrap gap-2">
                <div>
                  <h4 className="text-xl sm:text-2xl font-bold text-warm-cream">
                    B.E. Computer Science and Engineering
                  </h4>
                  <p className="text-amber font-medium mt-1">
                    Amrita College of Engineering and Technology, Nagercoil
                  </p>
                </div>
                <span className="text-warm-cream/70 font-medium">
                  2021 - 2025
                </span>
              </div>
              <div className="flex items-center gap-2 text-warm-cream/60">
                <MapPin size={16} />
                <span>Near Marthandam, Tamil Nadu</span>
              </div>
              <div className="inline-block px-4 py-2 glass-effect rounded-full">
                <span className="text-amber font-semibold">CGPA: 7.7</span>
              </div>
              <p className="text-warm-cream/70 leading-relaxed">
                Comprehensive education in computer science fundamentals, data
                structures, algorithms, and specialized coursework in data
                analytics and machine learning.
              </p>
            </motion.div>
          </motion.div>

          {/* Certifications Column */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-gradient-to-br from-sunset-gold to-burnt-orange rounded-xl">
                <Award className="w-6 h-6 text-dark-charcoal" />
              </div>
              <h3 className="text-3xl font-bold text-gradient">
                Certifications & Experience
              </h3>
            </div>

            {/* Data Analyst Badge */}
            <motion.div
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="relative glass-effect rounded-2xl p-6 sm:p-8 overflow-hidden group cursor-pointer"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber/20 via-sunset-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber to-burnt-orange rounded-lg flex items-center justify-center shadow-lg">
                    <Award className="w-6 h-6 text-dark-charcoal" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gradient glow-amber">
                      Data Analyst Professional
                    </h4>
                    <p className="text-warm-cream/70 text-sm">Certified Expert</p>
                  </div>
                </div>
                <p className="text-warm-cream/80">
                  Advanced proficiency in Python, SQL, Power BI, and Statistical
                  Analysis
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-3 py-1 bg-amber/20 rounded-full text-amber text-xs font-medium">
                    Python
                  </span>
                  <span className="px-3 py-1 bg-amber/20 rounded-full text-amber text-xs font-medium">
                    SQL
                  </span>
                  <span className="px-3 py-1 bg-amber/20 rounded-full text-amber text-xs font-medium">
                    Power BI
                  </span>
                  <span className="px-3 py-1 bg-amber/20 rounded-full text-amber text-xs font-medium">
                    Excel
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Python Full Stack Badge */}
            <motion.div
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="relative glass-effect rounded-2xl p-6 sm:p-8 overflow-hidden group cursor-pointer"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-burnt-orange/20 via-sunset-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-sunset-gold to-burnt-orange rounded-lg flex items-center justify-center shadow-lg">
                    <Award className="w-6 h-6 text-dark-charcoal" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gradient glow-amber">
                      Python Full Stack Developer
                    </h4>
                    <p className="text-warm-cream/70 text-sm">Certified Developer</p>
                  </div>
                </div>
                <p className="text-warm-cream/80">
                  Full-stack web development with Python, React, and modern
                  frameworks
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-3 py-1 bg-burnt-orange/20 rounded-full text-sunset-gold text-xs font-medium">
                    React
                  </span>
                  <span className="px-3 py-1 bg-burnt-orange/20 rounded-full text-sunset-gold text-xs font-medium">
                    Python
                  </span>
                  <span className="px-3 py-1 bg-burnt-orange/20 rounded-full text-sunset-gold text-xs font-medium">
                    APIs
                  </span>
                  <span className="px-3 py-1 bg-burnt-orange/20 rounded-full text-sunset-gold text-xs font-medium">
                    MySQL
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Professional Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 glass-effect rounded-2xl p-6 sm:p-10"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-gradient mb-6">
            Professional Summary
          </h3>
          <p className="text-warm-cream/80 leading-relaxed text-lg">
            Data analyst with a Bachelor's degree in Computer Science and strong
            expertise in Python, SQL, Excel, and Power BI. Proven ability to
            transform complex datasets into strategic, insight-driven solutions
            through advanced data manipulation and interactive dashboard
            development. Demonstrates exceptional analytical thinking,
            problem-solving precision, and attention to detail. A highly driven
            learner focused on emerging technologies, committed to delivering
            data-backed decisions that create measurable business value and
            performance improvement.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;