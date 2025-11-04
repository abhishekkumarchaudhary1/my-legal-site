'use client';

import Image from "next/image";
import styles from "./page.module.css";
import { motion } from "framer-motion";
import { AnimatedStats } from "./components/AnimatedStats";
import { useState, useEffect } from "react";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobileMenuOpen]);

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
            <h2>Hanvika compliance</h2>
          </div>
          
          {/* Desktop Navigation */}
          <nav className={styles.nav}>
            <a href="#home">Home</a>
            <a href="#about">About Us</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact Us</a>
          </nav>
          
          {/* Desktop Contact Info */}
          <div className={styles.contactInfo}>
            <span>📞 +91 9876543210</span>
            <span>✉️ info@legalconsultpro.com</span>
          </div>
          
          {/* Mobile Hamburger Button */}
          <button 
            className={styles.hamburger}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.hamburgerLineActive : ''}`}></span>
            <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.hamburgerLineActive : ''}`}></span>
            <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.hamburgerLineActive : ''}`}></span>
          </button>
        </div>
        
        {/* Mobile Navigation Menu */}
        <motion.nav 
          className={`${styles.mobileNav} ${isMobileMenuOpen ? styles.mobileNavOpen : ''}`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isMobileMenuOpen ? 1 : 0, 
            height: isMobileMenuOpen ? 'auto' : 0 
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className={styles.mobileNavContent}>
            <a href="#home" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About Us</a>
            <a href="#services" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</a>
            <div className={styles.mobileContactInfo}>
              <span>📞 +91 9876543210</span>
              <span>✉️ info@legalconsultpro.com</span>
            </div>
          </div>
        </motion.nav>
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
            Hanvika compliance is one of India&apos;s leading legal service providers. We empower multiple professional lawyers, CAs, and CSs to help each & every client through tax, audit, legal, startups, & More.
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
            Services
          </motion.h2>
          <motion.div 
            className={styles.servicesGrid}
            initial="initial"
            whileInView="animate"
            variants={staggerContainer}
            viewport={{ once: true }}
          >
            <motion.div className={styles.serviceCard} variants={cardVariants}>
              <div className={styles.serviceIcon}>📦</div>
              <h3>LMPC Registration: Clear Customs Without Delay</h3>
              <p>
                A Legal Metrology Packaged Commodities (LMPC) certificate is mandatory for importing or selling pre-packaged goods in India. We manage the entire LMPC registration process—documentation, filing, and final approval—so you can avoid customs seizures, costly delays, and penalties.
              </p>
              <ul>
                <li>Avoid costly seizure of goods at customs.</li>
                <li>Get your products to the market faster.</li>
                <li>Achieve full compliance with consumer protection laws.</li>
                <li>Build trust with clear and legal packaging details.</li>
              </ul>
              <motion.button 
                className={styles.serviceButton}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get a Free LMPC Consultation
              </motion.button>
            </motion.div>

            <motion.div className={styles.serviceCard} variants={cardVariants}>
              <div className={styles.serviceIcon}>♻️</div>
              <h3>EPR for Plastic Waste: Meet Your Sustainability Goals</h3>
              <p>
                If your business uses plastic packaging, EPR registration with CPCB is mandatory. We handle end-to-end EPR compliance—from registration and annual planning to PRO tie-ups and filings—so you stay compliant and strengthen your eco-friendly brand image.
              </p>
              <ul>
                <li>Hassle-free CPCB registration.</li>
                <li>Effective annual waste collection plan.</li>
                <li>Connect with authorized recyclers (PROs).</li>
                <li>Accurate annual returns and compliance.</li>
              </ul>
              <motion.button 
                className={styles.serviceButton}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Request an EPR Action Plan
              </motion.button>
            </motion.div>

            <motion.div className={styles.serviceCard} variants={cardVariants}>
              <div className={styles.serviceIcon}>🖥️</div>
              <h3>E-Waste Management: Comply with Confidence</h3>
              <p>
                Under the E-Waste Management Rules, 2022, producers and importers must ensure responsible disposal. We secure CPCB authorization, coordinate with certified recyclers, and manage all documentation and returns to keep you compliant and environmentally responsible.
              </p>
              <ul>
                <li>CPCB registration and authorization.</li>
                <li>Certified recycler coordination.</li>
                <li>Documentation and annual return filings.</li>
                <li>Take-back programs and awareness support.</li>
              </ul>
              <motion.button 
                className={styles.serviceButton}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Talk to an Expert Today
              </motion.button>
            </motion.div>

            <motion.div className={styles.serviceCard} variants={cardVariants}>
              <div className={styles.serviceIcon}>🔋</div>
              <h3>Battery Waste Management: Power Your Business Responsibly</h3>
              <p>
                Comply with the Battery Waste Management Rules, 2022. We simplify Battery EPR—from CPCB portal registration and collection planning to recycler tie-ups and reporting—so you meet all obligations safely and sustainably.
              </p>
              <ul>
                <li>Seamless CPCB portal registration.</li>
                <li>Waste collection and recycling plan.</li>
                <li>Authorized recycler onboarding.</li>
                <li>Compliance and reporting management.</li>
              </ul>
              <motion.button 
                className={styles.serviceButton}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started with a Free Assessment
              </motion.button>
            </motion.div>

            <motion.div className={styles.serviceCard} variants={cardVariants}>
              <div className={styles.serviceIcon}>🔐</div>
              <h3>Digital Signature Certificate (DSC): Secure Your Online Filings</h3>
              <p>
                Get a Class 3 DSC quickly for MCA, GST, Income Tax, DGFT, and e-tenders. We guide verification, ensure fast issuance, and support installation and renewals so your filings are secure and uninterrupted.
              </p>
              <ul>
                <li>Quick verification guidance.</li>
                <li>Fast Class 3 DSC issuance.</li>
                <li>Installation help and renewal reminders.</li>
              </ul>
              <motion.button 
                className={styles.serviceButton}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Apply for Your DSC Now
              </motion.button>
            </motion.div>

            <motion.div className={styles.serviceCard} variants={cardVariants}>
              <div className={styles.serviceIcon}>🏭</div>
              <h3>MSME / Udyam Registration: Unlock Government Benefits</h3>
              <p>
                Access priority sector lending, subsidies, tender preference, and protection against delayed payments. We register you correctly, explain eligible benefits, and help you claim schemes and collateral-free loans.
              </p>
              <ul>
                <li>Fast and accurate Udyam registration.</li>
                <li>Benefit discovery and guidance.</li>
                <li>Support for subsidies and loans.</li>
              </ul>
              <motion.button 
                className={styles.serviceButton}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Udyam Registration Today
              </motion.button>
            </motion.div>

            <motion.div className={styles.serviceCard} variants={cardVariants}>
              <div className={styles.serviceIcon}>💍</div>
              <h3>BIS Hallmarking: Build Unbreakable Customer Trust</h3>
              <p>
                Hallmarking is mandatory for gold and silver jewelry. We manage documentation, coordinate with hallmarking and assaying centers, and ensure full compliance so your brand stands for purity and trust.
              </p>
              <ul>
                <li>Documentation preparation and submission.</li>
                <li>Coordination with hallmarking centers.</li>
                <li>End-to-end compliance support.</li>
              </ul>
              <motion.button 
                className={styles.serviceButton}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Register for BIS Hallmarking
              </motion.button>
            </motion.div>

            <motion.div className={styles.serviceCard} variants={cardVariants}>
              <div className={styles.serviceIcon}>🌏</div>
              <h3>Import Export Code (IEC): Your License to Go Global</h3>
              <p>
                An IEC from DGFT is essential for international trade. We provide a seamless, error-free registration so you can clear customs, transact globally, and unlock export promotion schemes.
              </p>
              <ul>
                <li>Enter and expand in global markets.</li>
                <li>Unlock new revenue streams.</li>
                <li>Leverage export promotion benefits.</li>
              </ul>
              <motion.button 
                className={styles.serviceButton}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Apply for Your IEC Today
              </motion.button>
            </motion.div>

            <motion.div className={styles.serviceCard} variants={cardVariants}>
              <div className={styles.serviceIcon}>🚀</div>
              <h3>Startup India Registration: Fuel Your Innovative Idea</h3>
              <p>
                Get DPIIT recognition to access tax exemptions, funds, and faster IP processes. We ensure eligibility, craft a strong application, and guide you through availing benefits to build credibility and scale.
              </p>
              <ul>
                <li>Eligibility assessment and guidance.</li>
                <li>Compelling DPIIT application support.</li>
                <li>Help in availing tax and key benefits.</li>
              </ul>
              <motion.button 
                className={styles.serviceButton}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Begin Your Startup India Registration
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
              <h4>Let&apos;s Get In Touch</h4>
              <p>Business District, Mumbai-400001</p>
              <p>info@legalconsultpro.com</p>
              <p>+91 9876543210</p>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <p>&copy; 2025 - Hanvika compliance. All Rights Reserved</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
