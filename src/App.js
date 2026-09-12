// src/App.js - Complete Updated Version with Custom Branding Nav Link
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Droplets,
  Menu,
  X,
  Phone,
  MessageCircle,
  CheckCircle,
  Shield,
  Truck,
  Award,
  Mail,
  MapPin,
  ChevronDown,
  Star,
  Factory,
  FlaskConical,
  Microscope,
  Package,
  Users,
  Quote,
  Sparkles,
  Palette,
  Building2,
  Cog,
  TestTube,
  Warehouse,
} from 'lucide-react';

// ============================================
// STATIC DATA
// ============================================

// Oxeneon Sub-Categories
const oxeneonSizes = [
  {
    id: 'oxeneon-200ml',
    size: '200 ml',
    tag: 'Event Cup / Mini Pack',
    description: 'Perfect for meetings, events & functions',
    icon: '🥤',
  },
  {
    id: 'oxeneon-250ml',
    size: '250 ml',
    tag: 'Pocket Pack / Events',
    description: 'Convenient for travel & gatherings',
    icon: '🧴',
  },
  {
    id: 'oxeneon-500ml',
    size: '500 ml',
    tag: 'Travel & Fitness Pack',
    description: 'Ideal for gym, office & travel',
    icon: '💧',
  },
  {
    id: 'oxeneon-700ml',
    size: '700 ml',
    tag: 'On-the-Go Premium',
    description: 'Premium hydration for active lifestyle',
    icon: '✨',
  },
  {
    id: 'oxeneon-1L',
    size: '1 Liter',
    tag: 'Daily Hydration Pack',
    description: 'Perfect for home & office use',
    icon: '🏺',
  },
];

// Static Products Data
const products = [
  {
    id: 'oxeneon-flagship',
    name: 'Oxeneon Pure Water',
    capacity: '200ml · 250ml · 500ml · 700ml · 1L',
    description: 'Our flagship brand — premium packaged drinking water available in 5 convenient sizes for every need.',
    image: 'https://images.unsplash.com/photo-1616118132534-3812ab0f62c2?w=500&h=500&fit=crop&crop=center&auto=format',
    badge: '⭐ Flagship Brand',
    isFlagship: true,
  },
  {
    id: 'event-cup',
    name: 'Event Cup',
    capacity: '200ml / 250ml',
    description: 'Perfect for events, meetings, and corporate gatherings. Our event cups are designed for convenience and hygiene with secure sealing.',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400&h=400&fit=crop&crop=center&auto=format',
    badge: 'Bulk Order',
  },
  {
    id: 'portable-bottle',
    name: 'Portable Bottle',
    capacity: '500ml / 1L',
    description: 'Convenient for travel, gym, and daily hydration. Made with BPA-free material for your safety and health.',
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop&crop=center&auto=format',
  },
  {
    id: 'water-jar',
    name: 'Water Jar',
    capacity: '20 Liters',
    description: 'Ideal for homes, offices, and commercial spaces. Our 20L jars come with a secure seal for lasting freshness.',
    image: 'https://images.unsplash.com/photo-1616118132534-3812ab0f62c2?w=400&h=400&fit=crop&crop=center&auto=format',
    badge: 'Subscription Available',
  },
];

// Factory Features
const factoryFeatures = [
  {
    icon: Droplets,
    title: 'Advanced Filtration',
    description: 'Multi-stage RO, UV & Ozonation purification process ensuring 100% pure water.',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Cog,
    title: 'Fully Automated Bottling Line',
    description: 'Zero-human-contact automated bottling ensures maximum hygiene at every step.',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Microscope,
    title: 'In-House Quality Testing Lab',
    description: 'Rigorous microbiological & pH analysis conducted on every batch before dispatch.',
    color: 'from-purple-500 to-indigo-500',
  },
  {
    icon: Warehouse,
    title: 'Sanitized Storage & Warehousing',
    description: 'Temperature-controlled, sanitized warehouse ensures freshness retention.',
    color: 'from-amber-500 to-orange-500',
  },
];

// Leadership Team
const leadership = [
  {
    id: 1,
    name: 'Managing Director',
    designation: 'Founder & MD',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=faces',
    quote:
      'Our core objective is to deliver global-standard drinking water to every household at accessible prices. Purity is not a luxury — it is a right.',
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    id: 2,
    name: 'Operations Head',
    designation: 'Director of Operations',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=faces',
    quote:
      'By integrating state-of-the-art automated machinery, we ensure complete hygiene and minimal human touch at every stage of production.',
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    id: 3,
    name: 'Quality Assurance Director',
    designation: 'Head of QA',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&h=300&fit=crop&crop=faces',
    quote:
      'Every single bottle of Oxeneon undergoes stringent quality checks to match national standards. We never compromise on purity.',
    gradient: 'from-purple-500 to-indigo-600',
  },
];

// FAQs data
const faqs = [
  {
    question: 'What is the minimum order quantity?',
    answer: 'For home delivery, the minimum order is 2 water bottle crates.',
  },
  {
    question: 'How long does delivery take?',
    answer: 'We deliver within 24-48 hours in serviceable areas. Express delivery is available for urgent orders.',
  },
];

// Testimonials data
const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Regular Customer',
    content: 'The water is absolutely pure and refreshing. I love the convenience of home delivery.',
    rating: 5,
  },
  {
    name: 'Rahul Patel',
    role: 'Event Organizer',
    content: 'We used Girnar for our corporate event. The packaging was premium and the service was impeccable.',
    rating: 5,
  },
  {
    name: 'Dr. Anita Desai',
    role: 'Health Enthusiast',
    content: 'As a doctor, I recommend Girnar water to my patients for its purity and mineral content.',
    rating: 5,
  },
];

// ============================================
// COMPONENTS
// ============================================

// ---------- Header / Navbar ----------
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [hoveredLink, setHoveredLink] = useState(null);

  // ✅ Updated: "Custom Branding" link added (points to #custom-branding)
  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Products', id: 'products' },
    { label: 'Factory', id: 'factory' },
    { label: 'Quality Process', id: 'quality-process' },
    { label: 'Custom Branding', id: 'custom-branding' },
    { label: 'Leadership', id: 'leadership' },
    { label: 'About Us', id: 'about-us' },
    { label: 'Contact Us', id: 'contact-us' },
  ];

  // Scrollspy
  useEffect(() => {
    let ticking = false;

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;

      let currentSection = 'home';
      navLinks.forEach((link) => {
        const element = document.getElementById(link.id);
        if (element) {
          const sectionTop = element.offsetTop;
          const sectionBottom = sectionTop + element.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            currentSection = link.id;
          }
        }
      });

      setActiveSection(currentSection);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateActiveSection);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateActiveSection();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setIsMenuOpen(false);

    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.offsetTop - headerOffset;
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth',
        });
        setActiveSection(id);
      }
    }, 200);
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-cyan-100/30 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Droplets className="h-7 w-7 md:h-8 md:w-8 text-cyan-600" fill="#0284C7" stroke="none" />
            <span className="text-lg md:text-2xl font-bold text-slate-800 tracking-tight">
              Girnar <span className="text-cyan-700">Beverages</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center space-x-1 text-sm font-medium relative">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              const isHovered = hoveredLink === link.id;

              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  onMouseEnter={() => setHoveredLink(link.id)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className={`relative px-3 py-2 rounded-lg transition-colors duration-200 ${
                    isActive
                      ? 'text-cyan-600 font-semibold'
                      : 'text-slate-700 hover:text-cyan-600'
                  }`}
                >
                  {link.label}

                  {isActive && (
                    <motion.span
                      layoutId="activeSection"
                      className="absolute left-0 right-0 -bottom-0.5 h-[3px] rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 shadow-[0_0_12px_rgba(6,182,212,0.8)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}

                  {!isActive && isHovered && (
                    <motion.span
                      layoutId="hoverUnderline"
                      className="absolute left-2 right-2 -bottom-0.5 h-[2px] rounded-full bg-cyan-300/70"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* CTA & Mobile Menu Button */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <a
              href="https://wa.me/919542163369"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-all shadow-md hover:shadow-emerald-200/50"
            >
              <MessageCircle className="h-4 w-4" />
              Order on WhatsApp
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              className="xl:hidden p-2 rounded-full hover:bg-slate-100 active:bg-slate-200 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
            className="xl:hidden bg-white border-b border-cyan-100/30 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1 max-h-[calc(100vh-4rem)] overflow-y-auto">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={(e) => handleNavClick(e, link.id)}
                    className={`relative flex items-center justify-between px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                      isActive
                        ? 'text-cyan-700 bg-cyan-50'
                        : 'text-slate-700 active:bg-slate-100'
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.9)]" />
                      )}
                      {link.label}
                    </span>
                    {isActive && (
                      <span className="text-[10px] uppercase tracking-wider font-bold text-cyan-600 bg-cyan-100 px-2 py-0.5 rounded-full">
                        Now
                      </span>
                    )}
                  </a>
                );
              })}

              <a
                href="https://wa.me/919542163369"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white px-4 py-3 rounded-xl text-sm font-medium transition-all w-full justify-center mt-3 shadow-md"
              >
                <MessageCircle className="h-4 w-4" />
                Order on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

// ---------- Hero Section ----------
const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-cyan-50/40 to-white"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMjg0QzciIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />
      <div className="absolute top-20 -left-20 w-96 h-96 bg-cyan-300/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-1.5 rounded-full text-cyan-800 text-xs md:text-sm font-medium mb-6 border border-cyan-200/60 shadow-sm">
              <Shield className="h-4 w-4" />
              <span>FSSAI & BIS Certified</span>
              <span className="w-1 h-1 rounded-full bg-cyan-400" />
              <span className="text-cyan-600">Trusted by 5000+ Homes</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 leading-[1.25] tracking-tight pb-2">
              Pure, Refreshing, &
              <span className="block bg-gradient-to-r from-cyan-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent leading-[1.3] pb-2">
                Safe Drinking Water
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-500 font-medium mt-4">
              for Every Hydration Need.
            </p>

            <p className="text-slate-600 text-base md:text-lg mt-5 max-w-lg leading-relaxed">
              Multi-stage purification with zero human contact. Experience the
              purest water delivered to your doorstep — untouched, untampered.
            </p>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-5 text-sm text-slate-600">
              <span className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-cyan-600" />
                7-Stage Purified
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-cyan-600" />
                Mineral Enriched
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-cyan-600" />
                Zero Contact
              </span>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="#contact-us"
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-cyan-700 to-cyan-600 hover:from-cyan-800 hover:to-cyan-700 text-white px-7 py-3.5 rounded-full font-semibold transition-all shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-[1.02]"
              >
                Enquire Now
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a
                href="#products"
                className="inline-flex items-center gap-2 border-2 border-cyan-600 text-cyan-700 hover:bg-cyan-50 px-7 py-3.5 rounded-full font-semibold transition-all"
              >
                Explore Products
              </a>
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-cyan-100">
                <CheckCircle className="h-4 w-4 text-emerald-500" />
                <span className="text-xs md:text-sm font-medium text-slate-700">
                  Safety Tested Water
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-cyan-100">
                <Award className="h-4 w-4 text-amber-500" />
                <span className="text-xs md:text-sm font-medium text-slate-700">
                  100% Hygienic
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="relative flex justify-center items-center"
          >
            <div className="relative">
              <motion.div
                animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.15, 0.4] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-300/40 to-blue-300/30 blur-2xl"
              />

              <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-br from-cyan-200/50 via-cyan-100/40 to-white rounded-full flex items-center justify-center shadow-[0_20px_60px_-15px_rgba(6,182,212,0.4)] border border-white/60 backdrop-blur-sm">
                <div className="absolute inset-4 rounded-full border-2 border-dashed border-cyan-300/40" />

                <motion.img
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  src="https://images.unsplash.com/photo-1616118132534-3812ab0f62c2?w=500&h=500&fit=crop&crop=center&auto=format"
                  alt="Pure Water Bottle"
                  className="relative w-44 h-44 sm:w-52 sm:h-52 md:w-64 md:h-64 object-contain drop-shadow-2xl z-10"
                />

                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-2 -right-2 md:top-2 md:right-2 bg-white shadow-xl rounded-2xl px-3 py-2 flex items-center gap-2 border border-cyan-100"
                >
                  <div className="w-8 h-8 rounded-full bg-cyan-100 flex items-center justify-center">
                    <Droplets className="h-4 w-4 text-cyan-700" />
                  </div>
                  <div className="leading-tight">
                    <p className="text-[10px] text-slate-500 font-medium">Brand</p>
                    <p className="text-xs font-bold text-slate-800">Oxeneon</p>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  className="absolute -bottom-2 -left-2 md:bottom-2 md:left-2 bg-white shadow-xl rounded-2xl px-3 py-2 flex items-center gap-2 border border-cyan-100"
                >
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                    <Shield className="h-4 w-4 text-emerald-600" />
                  </div>
                  <div className="leading-tight">
                    <p className="text-[10px] text-slate-500 font-medium">Certified</p>
                    <p className="text-xs font-bold text-slate-800">FSSAI & BIS</p>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="absolute top-1/3 -left-4 md:-left-6 bg-white shadow-lg rounded-full p-2.5 border border-cyan-100"
                >
                  <Award className="h-5 w-5 text-amber-500" />
                </motion.div>

                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
                  className="absolute bottom-1/3 -right-4 md:-right-6 bg-white shadow-lg rounded-full p-2.5 border border-cyan-100"
                >
                  <Truck className="h-5 w-5 text-cyan-600" />
                </motion.div>
              </div>

              <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-6 left-1/4 text-cyan-400/60"
              >
                <Droplets className="h-6 w-6" fill="currentColor" stroke="none" />
              </motion.div>

              <motion.div
                animate={{ y: [0, 12, 0], rotate: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-4 right-1/4 text-blue-400/60"
              >
                <Droplets className="h-5 w-5" fill="currentColor" stroke="none" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ---------- USP Section ----------
const USP = () => {
  const usps = [
    {
      icon: <Droplets className="h-8 w-8 text-cyan-700" />,
      title: 'Multi-Stage Purification',
      description: 'RO + UV water with essential minerals for taste and health.',
    },
    {
      icon: <Shield className="h-8 w-8 text-cyan-700" />,
      title: 'Untouched by Hand',
      description: 'Zero human contact bottling ensures maximum hygiene and safety.',
    },
    {
      icon: <Truck className="h-8 w-8 text-cyan-700" />,
      title: 'Express Timely Delivery',
      description: 'Reliable and punctual delivery to your doorstep, every time.',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Why Choose Us</h2>
          <p className="text-slate-600 mt-2 max-w-2xl mx-auto">
            We deliver purity, safety, and convenience with every drop.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {usps.map((usp, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/60 backdrop-blur-md border border-cyan-100/40 rounded-2xl p-8 shadow-xl hover:shadow-cyan-100/40 transition-shadow duration-300"
            >
              <div className="bg-cyan-50/60 w-16 h-16 rounded-2xl flex items-center justify-center mb-5 border border-cyan-100/30">
                {usp.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-800">{usp.title}</h3>
              <p className="text-slate-600 mt-2">{usp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ---------- Products Section ----------
const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
    setTimeout(() => setSelectedProduct(null), 300);
  };

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Products & Services</h2>
          <p className="text-slate-600 mt-2">Quality packaging for every need.</p>
        </motion.div>

        {/* OXENEON FLAGSHIP HERO */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative mb-14 rounded-3xl overflow-hidden bg-gradient-to-br from-cyan-700 via-cyan-600 to-blue-700 p-8 md:p-12 shadow-2xl"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-200 rounded-full blur-3xl" />
          </div>

          <div className="relative grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-3 text-white">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold mb-4 border border-white/30">
                <Sparkles className="h-4 w-4" />
                <span>Flagship Brand</span>
              </div>

              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Oxeneon <span className="text-cyan-200">Pure Water</span>
              </h3>

              <p className="text-cyan-50/90 mt-4 text-base md:text-lg max-w-xl leading-relaxed">
                Our premium packaged drinking water brand — available in 5 convenient sizes
                for every occasion, from corporate events to daily hydration.
              </p>

              <div className="flex flex-wrap gap-3 mt-6 text-xs md:text-sm">
                <span className="flex items-center gap-1.5 bg-white/15 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20">
                  <CheckCircle className="h-3.5 w-3.5 text-cyan-200" />
                  7-Stage Purified
                </span>
                <span className="flex items-center gap-1.5 bg-white/15 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20">
                  <CheckCircle className="h-3.5 w-3.5 text-cyan-200" />
                  Mineral Enriched
                </span>
                <span className="flex items-center gap-1.5 bg-white/15 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20">
                  <CheckCircle className="h-3.5 w-3.5 text-cyan-200" />
                  Zero Contact Bottling
                </span>
              </div>

              <a
                href="https://wa.me/919542163369?text=Hi%20Girnar%20Beverages%2C%20I%27m%20interested%20in%20Oxeneon%20Pure%20Water."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-cyan-700 hover:bg-cyan-50 px-6 py-3 rounded-full font-semibold mt-6 transition-all shadow-lg"
              >
                <MessageCircle className="h-5 w-5" />
                Order Oxeneon
              </a>
            </div>

            <div className="md:col-span-2 flex justify-center">
              <motion.img
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                src="https://images.unsplash.com/photo-1616118132534-3812ab0f62c2?w=500&h=500&fit=crop&crop=center&auto=format"
                alt="Oxeneon Pure Water"
                className="w-52 h-52 md:w-64 md:h-64 object-contain drop-shadow-2xl"
              />
            </div>
          </div>

          <div className="relative mt-10 md:mt-12">
            <p className="text-white/90 text-sm font-semibold uppercase tracking-wider mb-4 text-center md:text-left">
              Available Sizes
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4">
              {oxeneonSizes.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.03 }}
                  className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 text-center shadow-lg border border-white/40 cursor-pointer transition-all"
                >
                  <div className="text-3xl mb-1">{item.icon}</div>
                  <p className="text-base md:text-lg font-bold text-cyan-700">{item.size}</p>
                  <p className="text-[11px] md:text-xs font-semibold text-slate-700 mt-1 leading-tight">
                    {item.tag}
                  </p>
                  <p className="text-[10px] md:text-[11px] text-slate-500 mt-1 leading-tight hidden sm:block">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* OTHER PRODUCTS GRID */}
        <div className="grid md:grid-cols-3 gap-8">
          {products
            .filter((p) => !p.isFlagship)
            .map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl border border-cyan-100/40 overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group"
              >
                <div className="relative h-56 bg-gradient-to-br from-cyan-50 to-white overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {product.badge && (
                    <span className="absolute top-4 left-4 bg-cyan-700/90 text-white text-xs font-medium px-3 py-1 rounded-full backdrop-blur-sm">
                      {product.badge}
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800">{product.name}</h3>
                  <p className="text-sm text-cyan-700 font-medium">{product.capacity}</p>
                  <p className="text-slate-600 mt-2 text-sm line-clamp-2">{product.description}</p>

                  <button
                    onClick={() => openModal(product)}
                    className="mt-4 w-full bg-transparent border-2 border-cyan-600 text-cyan-700 hover:bg-cyan-600 hover:text-white px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg"
                  >
                    Read More
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </button>
                </div>
              </motion.div>
            ))}
        </div>

        {/* Extra Banners */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <div className="bg-gradient-to-r from-cyan-100/40 to-cyan-50/60 backdrop-blur-sm p-6 rounded-2xl border border-cyan-200/30 text-center md:text-left">
            <h4 className="text-xl font-bold text-slate-800">Bulk / Party Orders</h4>
            <p className="text-slate-600">Custom packaging for events, weddings, and corporate functions.</p>
            <a href="#contact-us" className="inline-block mt-3 text-cyan-700 font-medium hover:underline">Contact us</a>
          </div>
          <div className="bg-gradient-to-r from-emerald-100/40 to-emerald-50/60 backdrop-blur-sm p-6 rounded-2xl border border-emerald-200/30 text-center md:text-left">
            <h4 className="text-xl font-bold text-slate-800">Monthly Subscription</h4>
            <p className="text-slate-600">Never run out of water. Get regular deliveries at discounted rates.</p>
            <a href="#contact-us" className="inline-block mt-3 text-emerald-700 font-medium hover:underline">Subscribe now</a>
          </div>
        </div>
      </div>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {isModalOpen && selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="relative bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-slate-100 transition-colors duration-200"
              >
                <X className="h-6 w-6 text-slate-700" />
              </button>

              <div className="relative h-72 md:h-96 bg-gradient-to-br from-cyan-50 to-white overflow-hidden rounded-t-3xl">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
                {selectedProduct.badge && (
                  <span className="absolute top-4 left-4 bg-cyan-700/90 text-white text-xs font-medium px-3 py-1 rounded-full backdrop-blur-sm">
                    {selectedProduct.badge}
                  </span>
                )}
              </div>

              <div className="p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-800">
                  {selectedProduct.name}
                </h3>
                <p className="text-cyan-700 font-medium text-lg mt-1">
                  {selectedProduct.capacity}
                </p>

                <div className="mt-6">
                  <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">
                    Product Description
                  </h4>
                  <p className="text-slate-700 leading-relaxed">{selectedProduct.description}</p>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <a
                    href={`https://wa.me/919542163369?text=Hi%20Girnar%20Beverages%2C%20I%27m%20interested%20in%20your%20${encodeURIComponent(selectedProduct.name)}%20(${encodeURIComponent(selectedProduct.capacity)})`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3.5 rounded-full font-medium transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Order on WhatsApp
                  </a>
                  <a
                    href="#contact-us"
                    onClick={closeModal}
                    className="flex-1 bg-cyan-50 hover:bg-cyan-100 text-cyan-700 px-6 py-3.5 rounded-full font-medium transition-all duration-300 border border-cyan-200 flex items-center justify-center gap-2"
                  >
                    <Mail className="h-5 w-5" />
                    Inquire Now
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

// ---------- Factory Showcase Section ----------
const FactoryShowcase = () => {
  return (
    <section id="factory" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-cyan-100/60 px-4 py-1.5 rounded-full text-cyan-800 text-sm font-medium mb-4">
            <Factory className="h-4 w-4" />
            <span>Our Facility</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
            Inside Our Factory
          </h2>
          <p className="text-slate-600 mt-2 max-w-2xl mx-auto">
            State-of-the-art automation, hygiene, and quality control at every step.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden shadow-2xl mb-12"
        >
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600&h=600&fit=crop&crop=center&auto=format"
            alt="Automated Manufacturing Plant"
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
            <h3 className="text-2xl md:text-3xl font-bold">100% Automated Production Line</h3>
            <p className="text-cyan-100 text-sm md:text-base mt-2 max-w-2xl">
              From water intake to final packaging — every step is fully automated to eliminate human contact and ensure uncompromised purity.
            </p>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {factoryFeatures.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl border border-cyan-100/40 p-6 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}
                >
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <h4 className="text-lg font-bold text-slate-800 leading-tight">
                  {feature.title}
                </h4>
                <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// ---------- Leadership Section (Proprietary: 1 Director + 2 Partners) ----------
const Leadership = () => {
  // Director data
  const director = {
    name: 'Director',
    designation: 'Founder & Managing Director',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=faces',
    quote:
      'Our core objective is to deliver global-standard drinking water to every household at accessible prices. Purity is not a luxury — it is a right.',
    gradient: 'from-cyan-500 to-blue-600',
  };

  // Partners data (2 partners)
  const partners = [
    {
      id: 'partner-1',
      name: 'Partner 1',
      designation: 'Operations Head',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=faces',
      quote:
        'By integrating state-of-the-art automated machinery, we ensure complete hygiene and minimal human touch at every stage of production.',
      gradient: 'from-emerald-500 to-teal-600',
    },
    {
      id: 'partner-2',
      name: 'Partner 2',
      designation: 'Quality Assurance Head',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop&crop=faces',
      quote:
        'Every single bottle of Oxeneon undergoes stringent quality checks to match national standards. We never compromise on purity.',
      gradient: 'from-purple-500 to-indigo-600',
    },
  ];

  return (
    <section id="leadership" className="py-20 bg-slate-50/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-cyan-100/60 px-4 py-1.5 rounded-full text-cyan-800 text-sm font-medium mb-4">
            <Users className="h-4 w-4" />
            <span>Our Leadership</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
            Messages From Our Director & Partners
          </h2>
          <p className="text-slate-600 mt-2 max-w-2xl mx-auto">
            The vision and commitment that drive Girnar Beverages forward.
          </p>
        </motion.div>

        {/* ============================
            ROW 1: Director (Full Width)
            ============================ */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative bg-white rounded-3xl border border-cyan-100/40 p-6 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden mb-8 group"
        >
          {/* Decorative gradient blob */}
          <div
            className={`absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gradient-to-br ${director.gradient} opacity-10 group-hover:opacity-20 transition-opacity blur-3xl`}
          />

          {/* Quote icon */}
          <Quote className="absolute top-6 right-6 h-10 w-10 text-cyan-200" />

          <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
            {/* Profile Image */}
            <div className="relative flex-shrink-0">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${director.gradient} rounded-full blur-md opacity-60`}
              />
              <img
                src={director.image}
                alt={director.name}
                className="relative w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-white shadow-xl"
              />
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-bold text-slate-800">
                {director.name}
              </h3>
              <p
                className={`text-sm md:text-base font-semibold mt-1 bg-gradient-to-r ${director.gradient} bg-clip-text text-transparent`}
              >
                {director.designation}
              </p>

              <p className="text-slate-600 text-base md:text-lg mt-5 leading-relaxed italic">
                "{director.quote}"
              </p>

              <div
                className={`mt-5 h-1 w-20 rounded-full bg-gradient-to-r ${director.gradient}`}
              />
            </div>
          </div>
        </motion.div>

        {/* ============================
            ROW 2: Two Partners (50/50 grid)
            ============================ */}
        <div className="grid md:grid-cols-2 gap-8">
          {partners.map((partner, idx) => (
            <motion.div
              key={partner.id}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative bg-white rounded-3xl border border-cyan-100/40 p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              {/* Decorative gradient blob */}
              <div
                className={`absolute -top-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-br ${partner.gradient} opacity-10 group-hover:opacity-20 transition-opacity blur-2xl`}
              />

              {/* Quote icon */}
              <Quote className="absolute top-6 right-6 h-8 w-8 text-cyan-200" />

              {/* Profile Image */}
              <div className="relative mb-5">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${partner.gradient} rounded-full blur-md opacity-60`}
                />
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="relative w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-4 border-white shadow-xl"
                />
              </div>

              {/* Name & Role */}
              <h3 className="text-lg md:text-xl font-bold text-slate-800">
                {partner.name}
              </h3>
              <p
                className={`text-sm font-semibold mt-0.5 bg-gradient-to-r ${partner.gradient} bg-clip-text text-transparent`}
              >
                {partner.designation}
              </p>

              {/* Quote */}
              <p className="text-slate-600 text-sm md:text-base mt-5 leading-relaxed italic">
                "{partner.quote}"
              </p>

              {/* Bottom accent line */}
              <div
                className={`mt-6 h-1 w-16 rounded-full bg-gradient-to-r ${partner.gradient}`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ---------- Quality Process ----------
const QualityProcess = () => {
  const steps = [
    { title: 'Sand & Carbon Filtration', desc: 'Removes impurities and sediments.' },
    { title: 'Reverse Osmosis (RO)', desc: 'High-pressure membrane filtration for purity.' },
    { title: 'UV Sterilization', desc: 'Eliminates bacteria and viruses.' },
  ];

  return (
    <section id="quality-process" className="py-20 bg-slate-50/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
            Quality & Purification Process
          </h2>
          <p className="text-slate-600 mt-2">Every drop goes through rigorous purification.</p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-cyan-200/60 -translate-x-1/2" />
          <div className="space-y-8 md:space-y-0 relative">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ x: idx % 2 === 0 ? -30 : 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center gap-6 md:gap-12 ${
                  idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`w-full md:w-5/12 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-cyan-100/40 shadow-lg">
                    <h3 className="text-xl font-bold text-slate-800">{step.title}</h3>
                    <p className="text-slate-600">{step.desc}</p>
                  </div>
                </div>
                <div className="hidden md:flex w-2/12 justify-center relative">
                  <div className="w-8 h-8 bg-cyan-700 rounded-full border-4 border-white shadow-lg z-10 flex items-center justify-center text-white text-sm font-bold">
                    {idx + 1}
                  </div>
                </div>
                <div className="w-full md:w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-wrap justify-center gap-6 p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-cyan-100/30"
        >
          <div className="flex items-center gap-3">
            <Award className="h-6 w-6 text-amber-500" />
            <span className="text-sm font-medium text-slate-700">
              FSSAI License: 13626010000424
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Shield className="h-6 w-6 text-emerald-500" />
            <span className="text-sm font-medium text-slate-700">BIS (ISI) Certified</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle className="h-6 w-6 text-cyan-600" />
            <span className="text-sm font-medium text-slate-700">ISO 9001:2015</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// ---------- Custom Labeling Service Section ----------
// ✅ Section id="custom-branding" — matches the header nav link
const CustomLabeling = () => {
  return (
    <section id="custom-branding" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900 p-8 md:p-14 shadow-2xl"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
          </div>

          <div className="relative grid md:grid-cols-2 gap-10 items-center">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full text-cyan-200 text-xs md:text-sm font-semibold mb-5 border border-white/20">
                <Palette className="h-4 w-4" />
                <span>Custom Branding Service</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Personalized{' '}
                <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                  Water Bottle Labels
                </span>
              </h2>

              <p className="text-slate-300 mt-5 text-base md:text-lg leading-relaxed max-w-xl">
                Make your special occasion truly memorable with our custom sticker
                and labeling service. Perfect for weddings, corporate events, hotels,
                and personal gifting.
              </p>

              <div className="flex flex-wrap gap-3 mt-6">
                <span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm border border-white/20">
                  <Sparkles className="h-4 w-4 text-cyan-300" />
                  Weddings
                </span>
                <span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm border border-white/20">
                  <Building2 className="h-4 w-4 text-cyan-300" />
                  Corporate Events
                </span>
                <span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm border border-white/20">
                  <Award className="h-4 w-4 text-cyan-300" />
                  Hotels & Resorts
                </span>
              </div>

              <a
                href={`https://wa.me/919542163369?text=${encodeURIComponent(
                  "Hi Girnar Beverages, I'm interested in custom sticker/labeling service for my event. Please share more details."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-7 py-3.5 rounded-full font-semibold mt-8 transition-all shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-[1.02]"
              >
                <MessageCircle className="h-5 w-5" />
                Enquire Custom Stickers
              </a>

              <p className="text-xs text-slate-400 mt-4">
                Minimum order: 100 bottles · Delivery in 5-7 working days
              </p>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <motion.div
                  animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.2, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/40 to-blue-500/30 blur-3xl"
                />
                <img
                  src="https://images.unsplash.com/photo-1616118132534-3812ab0f62c2?w=500&h=500&fit=crop&crop=center&auto=format"
                  alt="Custom Labeled Bottle"
                  className="relative w-60 h-60 md:w-80 md:h-80 object-contain drop-shadow-2xl"
                />

                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-2 -right-4 bg-white rounded-2xl px-4 py-2 shadow-xl border border-cyan-100"
                >
                  <p className="text-[10px] text-slate-500 font-medium">Your Brand</p>
                  <p className="text-xs font-bold text-cyan-700">Your Design</p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// ---------- About Us ----------
const About = () => {
  return (
    <section id="about-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
              About Girnar Beverages
            </h2>
            <p className="text-slate-600 mt-4 leading-relaxed">
              Girnar Beverages is committed to providing the highest quality drinking water
              to our community. We believe that access to pure, safe water is a fundamental right,
              and we strive to deliver it with utmost hygiene and reliability.
            </p>
            <p className="text-slate-600 mt-4 leading-relaxed">
              Our state-of-the-art purification plant ensures that every drop meets international
              standards. We maintain a zero-contact bottling environment to guarantee purity.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <div className="bg-cyan-50 p-3 rounded-full">
                <Shield className="h-6 w-6 text-cyan-700" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-800">Hygiene First</h4>
                <p className="text-sm text-slate-600">Rigorous cleaning protocols</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1584824486509-112e4181ff6b?w=600&h=400&fit=crop&crop=center&auto=format"
              alt="Water purification plant"
              className="rounded-2xl shadow-xl border border-cyan-100/40"
            />
            <div className="absolute -bottom-4 -right-4 bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-cyan-100">
              <span className="text-sm font-bold text-cyan-700">100% Pure</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// ---------- Contact ----------
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    requirement: 'home',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Name: ${formData.name}, Phone: ${formData.phone}, Address: ${formData.address}, Requirement: ${formData.requirement}`;
    window.open(`https://wa.me/919542163369?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="contact-us" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Contact Us</h2>
          <p className="text-slate-600">Reach out to us for orders, queries, or partnerships.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/60 backdrop-blur-md p-8 rounded-2xl border border-cyan-100/40 shadow-xl"
          >
            <h3 className="text-xl font-bold text-slate-800 mb-6">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-cyan-200/50 bg-white/70 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-cyan-200/50 bg-white/70 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                required
              />
              <input
                type="text"
                name="address"
                placeholder="Delivery Address"
                value={formData.address}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-cyan-200/50 bg-white/70 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                required
              />
              <select
                name="requirement"
                value={formData.requirement}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-cyan-200/50 bg-white/70 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
              >
                <option value="home">Home Delivery</option>
                <option value="bulk">Bulk Order</option>
                <option value="subscription">Subscription</option>
                <option value="custom-label">Custom Sticker / Labeling</option>
                <option value="other">Other</option>
              </select>
              <button
                type="submit"
                className="w-full bg-cyan-700 hover:bg-cyan-800 text-white py-3 rounded-xl font-medium transition-all shadow-md hover:shadow-cyan-200/50 flex items-center justify-center gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                Send via WhatsApp
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="grid grid-cols-2 gap-4">
              <a
                href="tel:+919542163369"
                className="flex flex-col items-center justify-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-cyan-100/40 shadow-lg hover:shadow-xl transition-all"
              >
                <Phone className="h-8 w-8 text-cyan-700" />
                <span className="text-sm font-medium text-slate-700 mt-2">Call Us</span>
              </a>
              <a
                href="https://wa.me/919542163369"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-6 bg-emerald-50/60 backdrop-blur-sm rounded-2xl border border-emerald-100/40 shadow-lg hover:shadow-xl transition-all"
              >
                <MessageCircle className="h-8 w-8 text-emerald-600" />
                <span className="text-sm font-medium text-slate-700 mt-2">
                  Chat on WhatsApp
                </span>
              </a>
            </div>

            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-cyan-100/40 shadow-lg">
              <h4 className="font-semibold text-slate-800 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-cyan-700" />
                Manufacturing Address
              </h4>
              <div className="mt-3 text-sm text-slate-600 space-y-1">
                <p className="font-medium text-slate-800">GIRNAR BEVERAGES</p>
                <p>Plot No: 696, Gaganvihar Colony,</p>
                <p>Balapur Mandal, Rangareddy Dist,</p>
                <p>Telangana - 500005</p>
                <p className="mt-2 text-xs text-slate-500">
                  FSSAI Lic. No.: 13626010000424
                </p>
              </div>
            </div>

            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-cyan-100/40 shadow-lg">
              <h4 className="font-semibold text-slate-800 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-cyan-700" />
                Registered Office
              </h4>
              <div className="mt-3 text-sm text-slate-600 space-y-1">
                <p>15-1-52, Flat No. 303,</p>
                <p>SUKH SHANTI APARTMENTS,</p>
                <p>Old Feelkhana, Opp to Mahaveer Plaza,</p>
                <p>Hyderabad, Telangana - 500012</p>
              </div>
            </div>

            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-cyan-100/40 shadow-lg">
              <h4 className="font-semibold text-slate-800 flex items-center gap-2">
                <Truck className="h-5 w-5 text-cyan-700" />
                Serviceable Areas
              </h4>
              <div className="flex flex-wrap gap-2 mt-3">
                {[
                  'Hyderabad',
                  'Secunderabad',
                  'Balapur',
                  'Kandukur',
                  'Feelkhana',
                  'Old City',
                  'Rangareddy',
                ].map((area) => (
                  <span
                    key={area}
                    className="bg-cyan-50/80 px-3 py-1 rounded-full text-xs font-medium text-slate-700 border border-cyan-100/30"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ---------- Testimonials & FAQ ----------
const TestimonialsFAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  return (
    <section className="py-20 bg-slate-50/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                What Our Customers Say
              </h3>
              <div className="space-y-4">
                {testimonials.map((t, idx) => (
                  <div
                    key={idx}
                    className="bg-white/60 backdrop-blur-sm p-5 rounded-2xl border border-cyan-100/40 shadow-sm"
                  >
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <p className="text-slate-700 mt-2">"{t.content}"</p>
                    <div className="flex items-center gap-3 mt-3">
                      <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center font-bold text-cyan-700">
                        {t.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800 text-sm">{t.name}</p>
                        <p className="text-xs text-slate-500">{t.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Frequently Asked Questions
              </h3>
              <div className="space-y-3">
                {faqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className="bg-white/60 backdrop-blur-sm rounded-2xl border border-cyan-100/40 overflow-hidden shadow-sm"
                  >
                    <button
                      onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                      className="w-full flex items-center justify-between p-4 text-left"
                    >
                      <span className="font-medium text-slate-800">{faq.question}</span>
                      <ChevronDown
                        className={`h-5 w-5 text-cyan-600 transition-transform ${
                          openFAQ === idx ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {openFAQ === idx && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="px-4 pb-4 text-slate-600 text-sm"
                        >
                          {faq.answer}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ---------- Footer ----------
const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2">
              <Droplets className="h-8 w-8 text-cyan-400" fill="#0284C7" stroke="none" />
              <span className="text-xl font-bold">Girnar Beverages</span>
            </div>
            <p className="text-sm text-slate-300 mt-3">
              Pure, refreshing, and safe drinking water for all.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-slate-300 hover:text-white transition-colors text-sm">
                FB
              </a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors text-sm">
                IG
              </a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors text-sm">
                X
              </a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors text-sm">
                YT
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#factory" className="hover:text-white transition-colors">
                  Factory
                </a>
              </li>
              <li>
                <a href="#custom-branding" className="hover:text-white transition-colors">
                  Custom Branding
                </a>
              </li>
              <li>
                <a href="#leadership" className="hover:text-white transition-colors">
                  Leadership
                </a>
              </li>
              <li>
                <a href="#contact-us" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Certifications</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>GSTIN: 36AGQPB4234K3Z8</li>
              <li>FSSAI License: 13626010000424</li>
              <li>BIS (ISI) Certified</li>
              <li>ISO 9001:2015</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Contact</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" /> +91 9542163369
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" /> +91 9246999310
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" /> info@girnarBeverages.com
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" /> Hyderabad, India
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-700/50 mt-8 pt-6 text-center text-sm text-slate-400">
          &copy; {new Date().getFullYear()} Girnar Beverages. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

// ---------- Main App ----------
const App = () => {
  return (
    <div className="font-sans antialiased">
      <Header />
      <Hero />
      <USP />
      <Products />
      <FactoryShowcase />
      <QualityProcess />
      
      <CustomLabeling />
      <Leadership />
      <About />
      <Contact />
      <TestimonialsFAQ />
      <Footer />
    </div>
  );
};

export default App;
