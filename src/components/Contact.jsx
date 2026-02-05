import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: '8d114d37-d3a9-4508-9513-0b897b08bd8c', // Replace with actual key
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        // --- MODIFICATION START: Play Success Sound ---
        // This plays a simple "success" chime. You can replace the URL with a local file path if you prefer.
        const successSound = new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3');
        successSound.play().catch((err) => console.log("Audio play interaction error:", err));
        // --- MODIFICATION END ---

        setSubmitSuccess(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitSuccess(false), 5000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com/in/abaneesh-m',
      color: 'from-amber to-sunset-gold',
    },
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/Abanee',
      color: 'from-sunset-gold to-burnt-orange',
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:abaneeshabanee87@gmail.com',
      color: 'from-burnt-orange to-amber',
    },
    {
      name: 'Phone',
      icon: Phone,
      href: 'tel:+918870517958',
      color: 'from-amber via-sunset-gold to-burnt-orange',
    },
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 relative">
      {/* Background gradient */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-sunset-gold/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-warm-cream/70 max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or
            just having a chat about data analytics
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-effect rounded-3xl p-6 sm:p-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-gradient mb-8">
                Send a Message
              </h3>

              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-gradient-to-r from-amber/20 to-sunset-gold/20 border border-amber/30 rounded-xl flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-amber" />
                  <span className="text-warm-cream">
                    Message sent successfully! I'll get back to you soon.
                  </span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="block text-warm-cream/80 font-medium"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b-2 border-white/20 focus:border-amber outline-none py-3 text-warm-cream transition-all duration-300 focus:border-b-4"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-warm-cream/80 font-medium"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b-2 border-white/20 focus:border-amber outline-none py-3 text-warm-cream transition-all duration-300 focus:border-b-4"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="block text-warm-cream/80 font-medium"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full bg-transparent border-b-2 border-white/20 focus:border-amber outline-none py-3 text-warm-cream transition-all duration-300 resize-none focus:border-b-4"
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-8 py-4 bg-gradient-to-r from-amber via-sunset-gold to-burnt-orange rounded-full text-dark-charcoal font-bold text-lg shadow-lg hover:shadow-amber/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-dark-charcoal border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center space-y-8"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gradient mb-6">
                Connect With Me
              </h3>
              <p className="text-warm-cream/70 leading-relaxed mb-8">
                Feel free to reach out through any of these platforms. I'm most
                active on LinkedIn and GitHub, where I share my latest projects
                and insights.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {socialLinks.map((link, idx) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={idx}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="glass-effect rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 bg-gradient-to-br ${link.color} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-amber/50 transition-all duration-300`}
                      >
                        <Icon className="w-6 h-6 text-dark-charcoal" />
                      </div>
                      <div>
                        <h4 className="text-warm-cream font-bold">
                          {link.name}
                        </h4>
                        <p className="text-warm-cream/60 text-sm">
                          {link.name === 'Email'
                            ? 'abaneeshabanee87@gmail.com'
                            : link.name === 'Phone'
                            ? '+91 8870517958'
                            : `@${link.name === 'LinkedIn' ? 'abaneesh-m' : 'Abanee'}`}
                        </p>
                      </div>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Location Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-effect rounded-2xl p-6 text-center"
            >
              <h4 className="text-xl font-bold text-gradient mb-2">
                Based in India
              </h4>
              <p className="text-warm-cream/70">
                Available for remote opportunities worldwide
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-20 text-center"
      >
        <div className="glass-effect rounded-2xl py-6 px-4 inline-block">
          <p className="text-warm-cream/70">
            Designed & Built by{' '}
            <span className="text-gradient font-bold">Abaneesh M</span>
          </p>
          <p className="text-warm-cream/50 text-sm mt-2">
            © 2026 All rights reserved
          </p>
        </div>
      </motion.footer>
    </section>
  );
};

export default Contact;