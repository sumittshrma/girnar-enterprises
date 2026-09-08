import React, { useState } from 'react';
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
} from 'lucide-react';

// --- Types ---
interface Product {
  id: string;
  name: string;
  capacity: string;
  description: string;
  price: string;
  image: string;
  badge?: string;
}

interface FAQ {
  question: string;
  answer: string;
}

// --- Data ---
const products: Product[] = [
  {
    id: 'event-cup',
    name: 'Event Cup',
    capacity: '200ml / 250ml',
    description: 'Perfect for events, meetings, and corporate gatherings.',
    price: '₹10 / cup',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400&h=400&fit=crop&crop=center&auto=format',
    badge: 'Bulk Order',
  },
  {
    id: 'portable-bottle',
    name: 'Portable Bottle',
    capacity: '500ml / 1L',
    description: 'Convenient for travel, gym, and daily hydration.',
    price: '₹25 / bottle',
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop&crop=center&auto=format',
  },
  {
    id: 'water-jar',
    name: 'Water Jar',
    capacity: '20 Liters',
    description: 'Ideal for homes, offices, and commercial spaces.',
    price: '₹80 / jar',
    image: 'https://images.unsplash.com/photo-1616118132534-3812ab0f62c2?w=400&h=400&fit=crop&crop=center&auto=format',
    badge: 'Subscription Available',
  },
];

const faqs: FAQ[] = [
  {
    question: 'What is the minimum order quantity?',
    answer: 'For home delivery, the minimum order is 2 jars (20L each). For events, we offer custom bulk packaging starting from 50 cups.',
  },
  {
    question: 'How long does delivery take?',
    answer: 'We deliver within 24-48 hours in serviceable areas. Express delivery is available for urgent orders.',
  },
  {
    question: 'Is there a security deposit for jars?',
    answer: 'Yes, a refundable deposit of ₹100 per jar is applicable, which will be returned upon return of the jar.',
  },
];

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

// --- Components ---

// Header / Navbar
const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = ['Home', 'About Us', 'Products', 'Quality Process', 'Contact Us'];

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
            <Droplets className="h-8 w-8 text-cyan-600" fill="#0284C7" stroke="none" />
            <span className="text-xl md:text-2xl font-bold text-slate-800 tracking-tight">
              Girnar <span className="text-cyan-700">Enterprises</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(' ', '-')}`}
                className="text-slate-700 hover:text-cyan-700 transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* CTA & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-all shadow-md hover:shadow-emerald-200/50"
            >
              <MessageCircle className="h-4 w-4" />
              Order on WhatsApp
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-full hover:bg-slate-100 transition-colors"
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
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-sm border-b border-cyan-100/30 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(' ', '-')}`}
                  className="block text-slate-700 hover:text-cyan-700 font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link}
                </a>
              ))}
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-all w-full justify-center"
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

// Hero Section
const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-cyan-50/30 to-white">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMjg0QzciIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="inline-flex items-center gap-2 bg-cyan-100/60 backdrop-blur-sm px-4 py-1.5 rounded-full text-cyan-800 text-sm font-medium mb-6 border border-cyan-200/30">
              <Shield className="h-4 w-4" />
              <span>FSSAI & BIS Certified</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
              Pure, Refreshing, & Safe
              <span className="block text-cyan-700">Drinking Water</span>
              <span className="text-lg md:text-xl font-normal text-slate-600 block mt-3">
                for Every Hydration Need.
              </span>
            </h1>
            <p className="text-slate-600 text-lg mt-4 max-w-lg leading-relaxed">
              Multi-stage purification with zero human contact. Experience the
              purest water delivered to your doorstep.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-cyan-700 hover:bg-cyan-800 text-white px-6 py-3 rounded-full font-medium transition-all shadow-lg hover:shadow-cyan-200/50"
              >
                Order Water Now
              </a>
              <a
                href="#products"
                className="inline-flex items-center gap-2 border-2 border-cyan-600 text-cyan-700 hover:bg-cyan-50 px-6 py-3 rounded-full font-medium transition-all"
              >
                Explore Products
              </a>
            </div>
            {/* Floating Badges */}
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-cyan-100">
                <CheckCircle className="h-5 w-5 text-emerald-500" />
                <span className="text-sm font-medium text-slate-700">7-Stage Filtered</span>
              </div>
              <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-cyan-100">
                <Award className="h-5 w-5 text-amber-500" />
                <span className="text-sm font-medium text-slate-700">100% Hygienic</span>
              </div>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="relative flex justify-center"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 bg-gradient-to-br from-cyan-200/40 via-cyan-100/30 to-white rounded-full flex items-center justify-center shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-300/20 to-transparent rounded-full blur-2xl" />
              <img
                src="https://images.unsplash.com/photo-1616118132534-3812ab0f62c2?w=400&h=400&fit=crop&crop=center&auto=format"
                alt="Pure Water Bottle"
                className="w-48 h-48 md:w-64 md:h-64 object-contain drop-shadow-xl"
              />
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg border border-cyan-100 animate-float">
                <Droplets className="h-6 w-6 text-cyan-600" />
              </div>
              <div className="absolute -bottom-2 -left-2 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg border border-cyan-100 animate-float-delayed">
                <Shield className="h-6 w-6 text-emerald-500" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// USP Section
const USP: React.FC = () => {
  const usps = [
    {
      icon: <Droplets className="h-8 w-8 text-cyan-700" />,
      title: 'Multi-Stage Purification',
      description: 'RO + UV + Ozonated water with essential minerals for taste and health.',
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
    <section id="about-us" className="py-20 bg-gradient-to-b from-white to-slate-50/50">
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

// Products Section
const Products: React.FC = () => {
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

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-cyan-100/40 overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative h-56 bg-gradient-to-br from-cyan-50 to-white overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
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
                <p className="text-slate-600 mt-1 text-sm">{product.description}</p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-lg font-bold text-slate-800">{product.price}</span>
                  <a
                    href="https://wa.me/919999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-1"
                  >
                    Order <span className="h-3 w-3">→</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Extra Banners */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <div className="bg-gradient-to-r from-cyan-100/40 to-cyan-50/60 backdrop-blur-sm p-6 rounded-2xl border border-cyan-200/30 text-center md:text-left">
            <h4 className="text-xl font-bold text-slate-800">Bulk / Party Orders</h4>
            <p className="text-slate-600">Custom packaging for events, weddings, and corporate functions.</p>
            <a href="#contact" className="inline-block mt-3 text-cyan-700 font-medium hover:underline">Contact us</a>
          </div>
          <div className="bg-gradient-to-r from-emerald-100/40 to-emerald-50/60 backdrop-blur-sm p-6 rounded-2xl border border-emerald-200/30 text-center md:text-left">
            <h4 className="text-xl font-bold text-slate-800">Monthly Subscription</h4>
            <p className="text-slate-600">Never run out of water. Get regular deliveries at discounted rates.</p>
            <a href="#contact" className="inline-block mt-3 text-emerald-700 font-medium hover:underline">Subscribe now</a>
          </div>
        </div>
      </div>
    </section>
  );
};

// Quality Process
const QualityProcess: React.FC = () => {
  const steps = [
    { title: 'Sand & Carbon Filtration', desc: 'Removes impurities and sediments.' },
    { title: 'Reverse Osmosis (RO)', desc: 'High-pressure membrane filtration for purity.' },
    { title: 'UV Sterilization', desc: 'Eliminates bacteria and viruses.' },
    { title: 'Ozonation & Mineral Fortification', desc: 'Adds essential minerals and ensures freshness.' },
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
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Quality & Purification Process</h2>
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

        {/* Trust Badges */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-wrap justify-center gap-6 p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-cyan-100/30"
        >
          <div className="flex items-center gap-3">
            <Award className="h-6 w-6 text-amber-500" />
            <span className="text-sm font-medium text-slate-700">FSSAI License: 1234567890</span>
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

// About Us
const About: React.FC = () => {
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">About Girnar Enterprises</h2>
            <p className="text-slate-600 mt-4 leading-relaxed">
              Girnar Enterprises is committed to providing the highest quality drinking water
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

// Contact & WhatsApp Integration
const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', address: '', requirement: 'home' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Name: ${formData.name}, Phone: ${formData.phone}, Address: ${formData.address}, Requirement: ${formData.requirement}`;
    window.open(`https://wa.me/919999999999?text=${encodeURIComponent(message)}`, '_blank');
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
          {/* Form */}
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

          {/* Action Cards & Serviceable Areas */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="grid grid-cols-2 gap-4">
              <a
                href="tel:+919999999999"
                className="flex flex-col items-center justify-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-cyan-100/40 shadow-lg hover:shadow-xl transition-all"
              >
                <Phone className="h-8 w-8 text-cyan-700" />
                <span className="text-sm font-medium text-slate-700 mt-2">Call Us</span>
              </a>
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-6 bg-emerald-50/60 backdrop-blur-sm rounded-2xl border border-emerald-100/40 shadow-lg hover:shadow-xl transition-all"
              >
                <MessageCircle className="h-8 w-8 text-emerald-600" />
                <span className="text-sm font-medium text-slate-700 mt-2">Chat on WhatsApp</span>
              </a>
            </div>
            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-cyan-100/40 shadow-lg">
              <h4 className="font-semibold text-slate-800 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-cyan-700" />
                Serviceable Areas
              </h4>
              <div className="flex flex-wrap gap-2 mt-3">
                {['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Hyderabad', 'Pune', 'Ahmedabad'].map((area) => (
                  <span key={area} className="bg-cyan-50/80 px-3 py-1 rounded-full text-xs font-medium text-slate-700 border border-cyan-100/30">
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

// Testimonials & FAQ
const TestimonialsFAQ: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  return (
    <section className="py-20 bg-slate-50/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Testimonials */}
          <div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-slate-800 mb-6">What Our Customers Say</h3>
              <div className="space-y-4">
                {testimonials.map((t, idx) => (
                  <div key={idx} className="bg-white/60 backdrop-blur-sm p-5 rounded-2xl border border-cyan-100/40 shadow-sm">
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

          {/* FAQ Accordion */}
          <div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Frequently Asked Questions</h3>
              <div className="space-y-3">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="bg-white/60 backdrop-blur-sm rounded-2xl border border-cyan-100/40 overflow-hidden shadow-sm">
                    <button
                      onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                      className="w-full flex items-center justify-between p-4 text-left"
                    >
                      <span className="font-medium text-slate-800">{faq.question}</span>
                      <ChevronDown className={`h-5 w-5 text-cyan-600 transition-transform ${openFAQ === idx ? 'rotate-180' : ''}`} />
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

// Footer
const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2">
              <Droplets className="h-8 w-8 text-cyan-400" fill="#0284C7" stroke="none" />
              <span className="text-xl font-bold">Girnar Enterprises</span>
            </div>
            <p className="text-sm text-slate-300 mt-3">Pure, refreshing, and safe drinking water for all.</p>
            <div className="flex gap-4 mt-4">
              <a href="/" className="text-slate-300 hover:text-white transition-colors text-sm">FB</a>
              <a href="/" className="text-slate-300 hover:text-white transition-colors text-sm">IG</a>
              <a href="/" className="text-slate-300 hover:text-white transition-colors text-sm">X</a>
              <a href="/" className="text-slate-300 hover:text-white transition-colors text-sm">YT</a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about-us" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Products</a></li>
              <li><a href="#contact-us" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Certifications</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>FSSAI License: 1234567890</li>
              <li>BIS (ISI) Certified</li>
              <li>ISO 9001:2015</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Contact</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +91 9999999999</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> info@girnarenterprises.com</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Mumbai, India</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-700/50 mt-8 pt-6 text-center text-sm text-slate-400">
          &copy; {new Date().getFullYear()} Girnar Enterprises. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

// Main App Component
const App: React.FC = () => {
  return (
    <div className="font-sans antialiased">
      <Header />
      <Hero />
      <USP />
      <Products />
      <QualityProcess />
      <About />
      <Contact />
      <TestimonialsFAQ />
      <Footer />
    </div>
  );
};

export default App;
