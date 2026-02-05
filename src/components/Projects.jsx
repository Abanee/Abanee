import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Calendar, BarChart3 } from 'lucide-react';
// Make sure this path is correct
import socialImage from '../assets/So.jpg';
import socialImages from '../assets/Ur.jpg';
import socialImagess from '../assets/Cl.jpg';
import socialImagesss from '../assets/Az.jpg';

const Projects = () => {
  const projects = [
    {
      title: 'Automated Social Media Engagement Analysis',
      description:
        'Full-featured desktop analytics application analyzing social media engagement with automated preprocessing, EDA, and interactive visualization dashboard. Implemented ML models using LGBMRegressor and CatBoostClassifier.',
      technologies: [
        'Python',
        'Tkinter',
        'Pandas',
        'NumPy',
        'Scikit-learn',
        'LightGBM',
        'CatBoost',
        'NLP',
        'Matplotlib',
      ],
      date: 'Oct 2025',
      github: 'https://github.com/Abanee/Automatve-social-media-enagagement-analysis-in-tkinder.git',
      image: socialImage, 
      color: 'from-amber to-sunset-gold',
    },
    {
      title: 'Urban Development and Sentiment Analysis',
      description:
        'Urban analytics platform integrating 5,000+ infrastructure records with social media sentiment across 15 Indian cities. Applied NLP, geospatial analysis, and developed comprehensive analytics using Power BI.',
      technologies: [
        'Python',
        'Power BI',
        'SQL',
        'Pandas',
        'NLP',
        'Geospatial Analysis',
        'Social Media APIs',
      ],
      date: 'Oct 2025',
      github: 'https://github.com/Abanee/Urban-Development-and-Sentiment-Analysis',
      image: socialImages,
      color: 'from-sunset-gold to-burnt-orange',
    },
    {
      title: 'Clinical Trial Patient Analytics',
      description:
        'Designed normalized MySQL database for 500+ clinical trial patients using fact and dimension modeling. Developed Power BI dashboards tracking adherence, compliance, and outcomes with 99.8% data accuracy.',
      technologies: [
        'MySQL',
        'SQL',
        'Power BI',
        'Python',
        'Pandas',
        'NumPy',
        'DAX',
        'Statistical Analysis',
      ],
      date: 'Sep 2025',
      github: 'https://github.com/Abaneee/internship',
      image: socialImagess,
      color: 'from-burnt-orange to-amber',
    },
    {
      title: 'Amazon Sales Performance Analysis',
      description:
        'Analyzed Amazon sales data to evaluate product performance across different regions and sales channels, identifying opportunities for improving sales and profitability. Utilized SQL queries for data extraction, followed by data cleaning and organization.',
      technologies: [
        'Python',
        'Power BI',
        'SQL',
        'Pandas',
        'Geospatial Analysis',
      ],
      date: 'Oct 2025',
      github: 'https://github.com/Abanee/Data-Analyis.git',
      image: socialImagesss,
      color: 'from-sunset-gold to-burnt-orange',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="projects" className="py-20 lg:py-32 relative">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-burnt-orange/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-warm-cream/70 max-w-3xl mx-auto">
            Real-world data analytics solutions demonstrating expertise in data
            pipelines, ML, and interactive dashboards
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8 lg:space-y-12"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              className="glass-effect rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-500 group"
            >
              <div className="grid lg:grid-cols-2 gap-8">
                
                {/* --- VISUAL SECTION --- */}
                <div className="p-6 sm:p-8 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl"
                    style={{
                      border: '8px solid rgba(255, 191, 0, 0.2)',
                      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
                    }}
                  >
                    {/* 1. BACKGROUND IMAGE (Sharper now) */}
                    {/* Logic: Only show if it's a real file path containing '/' */}
                    {project.image && project.image.toString().includes('/') && (
                        <>
                            <img 
                                src={project.image} 
                                alt="Dashboard Background" 
                                /* UPDATED CLASSES: 
                                   - Changed blur-sm to blur-[1px] (much clearer)
                                   - Changed opacity-50 to opacity-70 (brighter) 
                                */
                                className="absolute inset-0 w-full h-full object-cover blur-[1px] opacity-70 transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Overlay to keep text readable (increased slightly to 50% to balance the brighter image) */}
                            <div className="absolute inset-0 bg-black/50"></div>
                        </>
                    )}

                    {/* 2. TEXT OVERLAY */}
                    <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-espresso/60 to-dark-charcoal/60 sm:bg-transparent">
                        <div className="text-center space-y-4">
                          <div
                            className={`w-20 h-20 mx-auto bg-gradient-to-br ${project.color} rounded-2xl flex items-center justify-center shadow-lg`}
                          >
                            <BarChart3 className="w-10 h-10 text-dark-charcoal" />
                          </div>
                          <h4 className="text-2xl font-bold text-gradient">
                            Power BI Dashboard
                          </h4>
                          <p className="text-warm-cream/90 font-medium drop-shadow-md">
                            Interactive Analytics & Visualizations
                          </p>
                          <div className="flex gap-2 justify-center">
                            <div className="w-3 h-3 bg-amber rounded-full animate-pulse"></div>
                            <div className="w-3 h-3 bg-sunset-gold rounded-full animate-pulse delay-75"></div>
                            <div className="w-3 h-3 bg-burnt-orange rounded-full animate-pulse delay-150"></div>
                          </div>
                        </div>
                    </div>
                  </motion.div>
                </div>

                {/* --- DETAILS SECTION --- */}
                <div className="p-6 sm:p-8 flex flex-col justify-center space-y-6">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <Calendar className="w-5 h-5 text-amber" />
                      <span className="text-warm-cream/70 font-medium">
                        {project.date}
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-warm-cream mb-4">
                      {project.title}
                    </h3>
                    <p className="text-warm-cream/80 leading-relaxed text-base sm:text-lg">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-amber font-semibold mb-3">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 glass-effect rounded-full text-warm-cream text-sm font-medium hover:bg-white/20 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${project.color} rounded-full text-dark-charcoal font-semibold shadow-lg hover:shadow-amber/50 transition-all duration-300`}
                    >
                      <Github className="w-5 h-5" />
                      View on GitHub
                    </motion.a>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-6 py-3 glass-effect rounded-full text-warm-cream font-semibold hover:bg-white/20 transition-all duration-300"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Live Demo
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20"
        >
          <h3 className="text-3xl sm:text-4xl font-bold text-gradient text-center mb-12">
            Professional Experience
          </h3>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="glass-effect rounded-2xl p-6 sm:p-8 space-y-4 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-start justify-between flex-wrap gap-2">
                <div>
                  <h4 className="text-xl sm:text-2xl font-bold text-warm-cream">
                    Data Analyst Intern
                  </h4>
                  <p className="text-amber font-medium mt-1">
                    Infotact Solutions (Remote)
                  </p>
                </div>
                <span className="text-warm-cream/70 font-medium">
                  Sept 2025 - Dec 2025
                </span>
              </div>
              <ul className="space-y-3 text-warm-cream/80">
                <li className="flex gap-3">
                  <span className="text-amber mt-1">•</span>
                  <span>
                    Built modern data pipelines by collecting large-scale data
                    via APIs and web scraping, processing with ETL and Kafka
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-amber mt-1">•</span>
                  <span>
                    Applied NLP, sentiment analysis, and Power BI to extract
                    insights from unstructured data
                  </span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              className="glass-effect rounded-2xl p-6 sm:p-8 space-y-4 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-start justify-between flex-wrap gap-2">
                <div>
                  <h4 className="text-xl sm:text-2xl font-bold text-warm-cream">
                    Data Analyst Intern
                  </h4>
                  <p className="text-amber font-medium mt-1">
                    Besant Technologies (Remote)
                  </p>
                </div>
                <span className="text-warm-cream/70 font-medium">
                  Jul 2025 - Aug 2025
                </span>
              </div>
              <ul className="space-y-3 text-warm-cream/80">
                <li className="flex gap-3">
                  <span className="text-amber mt-1">•</span>
                  <span>
                    Built automated analytics solutions using Power BI, SQL, and
                    Power Query
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-amber mt-1">•</span>
                  <span>
                    Gained hands-on experience in data modeling, KPI design, and
                    business intelligence
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;