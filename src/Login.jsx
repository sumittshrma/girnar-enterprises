// src/Login.jsx - With Back Button
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Droplets,
  User,
  Lock,
  Eye,
  EyeOff,
  Shield,
  AlertCircle,
  CheckCircle,
  Sparkles,
  ArrowLeft,
} from 'lucide-react';

const Login = ({ onLogin, onBack }) => {
  const [adminId, setAdminId] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Demo credentials
  const DEMO_CREDENTIALS = {
    adminId: 'admin',
    password: 'admin123',
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setIsLoading(true);

    await new Promise(resolve => setTimeout(resolve, 1000));

    if (adminId === DEMO_CREDENTIALS.adminId && password === DEMO_CREDENTIALS.password) {
      setSuccess('Login successful! Redirecting...');
      setTimeout(() => {
        onLogin(true);
      }, 1000);
    } else {
      setError('Invalid Admin ID or Password. Please try again.');
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-950 to-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl"></div>
        </div>
        
        {/* Floating Water Drops Animation */}
        <div className="absolute top-10 left-[10%] animate-float-slow">
          <Droplets className="h-8 w-8 text-cyan-400/20" />
        </div>
        <div className="absolute bottom-20 right-[15%] animate-float-delayed">
          <Droplets className="h-12 w-12 text-cyan-400/15" />
        </div>
        <div className="absolute top-1/3 right-[5%] animate-float-slower">
          <Droplets className="h-6 w-6 text-cyan-400/20" />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="w-full max-w-md relative z-10"
      >
        {/* Back Button */}
        <button
          onClick={onBack}
          className="absolute -top-16 left-0 flex items-center gap-2 text-cyan-200/60 hover:text-cyan-200 transition-colors group"
        >
          <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Back to Website</span>
        </button>

        {/* Main Card */}
        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-2xl shadow-cyan-500/10">
          {/* Logo Section */}
          <div className="text-center mb-8">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-cyan-500/30 rounded-3xl blur-2xl"></div>
              <div className="relative inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-3xl shadow-2xl shadow-cyan-500/30 mb-4">
                <Droplets className="h-12 w-12 text-white" fill="#0284C7" stroke="none" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-white tracking-tight">
              Girnar <span className="text-cyan-400">Beverages</span>
            </h1>
            <p className="text-cyan-200/60 text-sm mt-2 font-light tracking-wide">
              Admin Panel Login
            </p>
            <div className="flex items-center justify-center gap-2 mt-3">
              <span className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-400/30"></span>
              <Shield className="h-4 w-4 text-cyan-400/40" />
              <span className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-400/30"></span>
            </div>
          </div>

          {/* Alert Messages */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-start gap-3"
            >
              <AlertCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-red-200 text-sm font-medium">Login Failed</p>
                <p className="text-red-300/70 text-xs mt-0.5">{error}</p>
              </div>
            </motion.div>
          )}

          {success && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl flex items-start gap-3"
            >
              <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-emerald-200 text-sm font-medium">Success!</p>
                <p className="text-emerald-300/70 text-xs mt-0.5">{success}</p>
              </div>
            </motion.div>
          )}

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Admin ID Field */}
            <div>
              <label className="block text-sm font-medium text-cyan-100/80 mb-1.5">
                Admin ID
              </label>
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/40 group-focus-within:text-cyan-300 transition-colors">
                  <User className="h-5 w-5" />
                </div>
                <input
                  type="text"
                  value={adminId}
                  onChange={(e) => setAdminId(e.target.value)}
                  placeholder="Enter your Admin ID"
                  className="w-full pl-12 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all duration-300"
                  required
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 opacity-0 group-focus-within:opacity-100 transition-opacity">
                  <div className="h-1.5 w-1.5 rounded-full bg-cyan-400/50 animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-cyan-100/80 mb-1.5">
                Password
              </label>
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300/40 group-focus-within:text-cyan-300 transition-colors">
                  <Lock className="h-5 w-5" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full pl-12 pr-12 py-3.5 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all duration-300"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-cyan-300/40 hover:text-cyan-300 transition-colors"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full relative group mt-2"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white font-medium py-3.5 rounded-2xl transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3">
                {isLoading ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Logging in...
                  </>
                ) : (
                  <>
                    <Shield className="h-5 w-5" />
                    Login to Admin Panel
                    <Sparkles className="h-4 w-4 opacity-70" />
                  </>
                )}
              </div>
            </button>
          </form>
        </div>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-xs text-cyan-200/30 flex items-center justify-center gap-2">
            <Shield className="h-3 w-3" />
            Secure Admin Access
            <span className="w-px h-3 bg-cyan-200/20"></span>
            Protected by SSL Encryption
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;