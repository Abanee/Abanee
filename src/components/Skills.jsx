import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Database,
  BarChart3,
  Brain,
  FileSpreadsheet,
  GitBranch,
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code2,
      color: 'from-amber to-sunset-gold',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'SQL', level: 85 },
        { name: 'Microsoft Excel', level: 88 },
      ],
    },
    {
      title: 'Data Visualization',
      icon: BarChart3,
      color: 'from-sunset-gold to-burnt-orange',
      skills: [
        { name: 'Power BI', level: 85 },
        { name: 'Tableau', level: 75 },
        { name: 'Excel Dashboards', level: 82 },
      ],
    },
    {
      title: 'Database Management',
      icon: Database,
      color: 'from-burnt-orange to-amber',
      skills: [
        { name: 'MySQL', level: 80 },
        { name: 'PostgreSQL', level: 78 },
      ],
    },
    {
      title: 'Data Analysis',
      icon: Brain,
      color: 'from-amber via-sunset-gold to-burnt-orange',
      skills: [
        { name: 'Statistical Analysis', level: 85 },
        { name: 'Data Modeling', level: 80 },
        { name: 'Predictive Analytics', level: 75 },
      ],
    },
    {
      title: 'Python Libraries',
      icon: FileSpreadsheet,
      color: 'from-sunset-gold to-amber',
      skills: [
        { name: 'Pandas', level: 90 },
        { name: 'NumPy', level: 88 },
        { name: 'Matplotlib', level: 85 },
        { name: 'Seaborn', level: 82 },
      ],
    },
    {
      title: 'Other Tools',
      icon: GitBranch,
      color: 'from-burnt-orange via-sunset-gold to-amber',
      skills: [
        { name: 'Jupyter Notebook', level: 90 },
        { name: 'Git', level: 85 },
        { name: 'MS Office Suite', level: 88 },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="skills" className="py-20 lg:py-32 relative">
      {/* Background gradient */}
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-amber/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-warm-cream/70 max-w-3xl mx-auto">
            Comprehensive expertise across data analytics, visualization, and
            development tools
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: 5,
                  z: 50,
                }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="glass-effect rounded-2xl p-6 sm:p-8 hover:bg-white/10 transition-all duration-300 cursor-pointer"
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Header with Icon */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center shadow-lg`}
                  >
                    <Icon className="w-6 h-6 text-dark-charcoal" />
                  </div>
                  <h3 className="text-xl font-bold text-warm-cream">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skillIdx}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-warm-cream/90 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-amber font-semibold text-sm">
                          {skill.level}%
                        </span>
                      </div>
                      {/* Progress Bar */}
                      <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: idx * 0.1 }}
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 glass-effect rounded-2xl p-8 sm:p-10 text-center"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-gradient mb-6">
            Core Competencies
          </h3>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {[
              'ETL Pipelines',
              'KPI Design',
              'Data Modeling',
              'Machine Learning',
              'NLP & Sentiment Analysis',
              'Web Scraping',
              'API Integration',
              'Dashboard Development',
              'Statistical Analysis',
              'Business Intelligence',
            ].map((competency, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 glass-effect rounded-full text-warm-cream font-medium hover:bg-gradient-to-r hover:from-amber hover:to-burnt-orange hover:text-dark-charcoal transition-all duration-300 cursor-pointer"
              >
                {competency}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;