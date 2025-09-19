'use client';

import Image from "next/image";
import styles from "./page.module.css";
import { motion } from "framer-motion";
import { AnimatedStats } from "./components/AnimatedStats";

export default function Home() {
  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <div className={styles.page}>
      {/* Header Navigation */}
      <header className={styles.header}>
        <div className={styles.navContainer}>
          <div className={styles.logo}>
            <h2>LegalConsult Pro</h2>
          </div>
          <nav className={styles.nav}>
            <a href="#home">Home</a>
            <a href="#about">About Us</a>
            <a href="#services">Services</a>
            <a href="#clients">Our Clients</a>
            <a href="#contact">Contact Us</a>
          </nav>
          <div className={styles.contactInfo}>
            <span>📞 +91 9876543210</span>
            <span>✉️ info@legalconsultpro.com</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className={styles.hero}>
        <motion.div 
          className={styles.heroContent}
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.h1 className={styles.heroTitle} variants={fadeInUp}>
            Simplify Legal and Regulatory Consulting Services
          </motion.h1>
          <motion.p className={styles.heroSubtitle} variants={fadeInUp}>
            LegalConsult Pro is one of India's leading legal service providers. We empower multiple professional lawyers, CAs, and CSs to help each & every client through tax, audit, legal, startups, & More.
          </motion.p>
          <motion.button 
            className={styles.ctaButton}
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Your Appointment
          </motion.button>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className={styles.services}>
        <div className={styles.container}>
          <motion.h2 
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Expertise Across Industries
          </motion.h2>
          <motion.div 
            className={styles.servicesGrid}
            initial="initial"
            whileInView="animate"
            variants={staggerContainer}
            viewport={{ once: true }}
          >
            <motion.div className={styles.serviceCard} variants={cardVariants}>
              <div className={styles.serviceIcon}>⚖️</div>
              <h3>Startup Registration</h3>
              <p>Assist you from the start of your business to create recognition of your business.</p>
              <motion.button 
                className={styles.serviceButton}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Visit Now
              </motion.button>
            </motion.div>
            <motion.div className={styles.serviceCard} variants={cardVariants}>
              <div className={styles.serviceIcon}>📋</div>
              <h3>Regulatory (BIS, CDSCO)</h3>
              <p>Numerous professionals to guide you for BIS, CDSCO, & ISO registration services.</p>
              <motion.button 
                className={styles.serviceButton}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Visit Now
              </motion.button>
            </motion.div>
            <motion.div className={styles.serviceCard} variants={cardVariants}>
              <div className={styles.serviceIcon}>🌱</div>
              <h3>Environmental Consultancy</h3>
              <p>Protecting, managing and restoring environment is vital for business. Our experts assist in environment services.</p>
              <motion.button 
                className={styles.serviceButton}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Visit Now
              </motion.button>
            </motion.div>
            <motion.div className={styles.serviceCard} variants={cardVariants}>
              <div className={styles.serviceIcon}>📄</div>
              <h3>Licensing</h3>
              <p>Guide many companies for various licenses such as Legal metrology, FSSAI License, Trade License, & More.</p>
              <motion.button 
                className={styles.serviceButton}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Visit Now
              </motion.button>
            </motion.div>
            <motion.div className={styles.serviceCard} variants={cardVariants}>
              <div className={styles.serviceIcon}>🏥</div>
              <h3>Medical Registration</h3>
              <p>Expert-driven platform offering seamless solutions for medical device registration and CDSCO compliance.</p>
              <motion.button 
                className={styles.serviceButton}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Visit Now
              </motion.button>
            </motion.div>
            <motion.div className={styles.serviceCard} variants={cardVariants}>
              <div className={styles.serviceIcon}>💄</div>
              <h3>Cosmetics Regulatory</h3>
              <p>Expert techniques to ensure your cosmetic products meet international standards.</p>
              <motion.button 
                className={styles.serviceButton}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Visit Now
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={styles.about}>
        <div className={styles.container}>
          <motion.div 
            className={styles.aboutContent}
            initial="initial"
            whileInView="animate"
            variants={staggerContainer}
            viewport={{ once: true }}
          >
            <motion.div className={styles.aboutText} variants={fadeInLeft}>
              <h2>Largest Service Provider</h2>
              <p>
                We are a consulting firm specializing in legal, accounting, tax, compliance, and regulatory services. 
                We provide end-to-end support for foreign companies looking to establish a business presence in India. 
                We manage all aspects of the setup process, including legal registrations, licenses, and compliances.
              </p>
              <p>
                Our services also extend to ancillary support such as manpower provisioning, ensuring a smooth and 
                successful business setup in India. Over time, the company has expanded its offerings to include 
                technology consulting, particularly focused on streamlining accounting, HR, and legal processes.
              </p>
            </motion.div>
            <motion.div className={styles.stats} variants={fadeInRight}>
              <AnimatedStats />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={styles.contact}>
        <div className={styles.container}>
          <motion.h2 
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Get In Touch
          </motion.h2>
          <motion.div 
            className={styles.contactContent}
            initial="initial"
            whileInView="animate"
            variants={staggerContainer}
            viewport={{ once: true }}
          >
            <motion.div className={styles.contactInfo} variants={fadeInLeft}>
              <motion.div 
                className={styles.contactItem}
                whileHover={{ scale: 1.05, x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className={styles.contactIcon}>📞</span>
                <span>+91 9876543210</span>
              </motion.div>
              <motion.div 
                className={styles.contactItem}
                whileHover={{ scale: 1.05, x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className={styles.contactIcon}>✉️</span>
                <span>info@legalconsultpro.com</span>
              </motion.div>
              <motion.div 
                className={styles.contactItem}
                whileHover={{ scale: 1.05, x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className={styles.contactIcon}>📍</span>
                <span>123 Business District, Mumbai, Maharashtra, 400001</span>
              </motion.div>
            </motion.div>
            <motion.div className={styles.contactForm} variants={fadeInRight}>
              <h3>Are You Ready To Start Registration With Us?</h3>
              <form>
                <motion.input 
                  type="text" 
                  placeholder="Your Name" 
                  required 
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
                <motion.input 
                  type="email" 
                  placeholder="Your Email" 
                  required 
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
                <motion.input 
                  type="tel" 
                  placeholder="Your Phone" 
                  required 
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
                <motion.textarea 
                  placeholder="Your Message" 
                  rows="4" 
                  required 
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
                <motion.button 
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerContent}>
            <div className={styles.footerSection}>
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact Us</a></li>
              </ul>
            </div>
            <div className={styles.footerSection}>
              <h4>Service Links</h4>
              <ul>
                <li><a href="#">LMPC Registration</a></li>
                <li><a href="#">MDR Registration</a></li>
                <li><a href="#">BIS Registration</a></li>
                <li><a href="#">Cosmetics Registration</a></li>
              </ul>
            </div>
            <div className={styles.footerSection}>
              <h4>Let's Get In Touch</h4>
              <p>Business District, Mumbai-400001</p>
              <p>info@legalconsultpro.com</p>
              <p>+91 9876543210</p>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <p>&copy; 2025 - LegalConsult Pro. All Rights Reserved</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
