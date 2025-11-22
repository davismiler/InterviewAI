import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Github, Linkedin, Send, Download, Eye, FileText, X, Code2, MessageSquare, User, MessageCircle } from 'lucide-react';
import AnimatedCard from './AnimatedCard';
import { Card, CardHeader, CardContent, CardFooter, CardTitle } from '@/components/ui/card';

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: 'kalpsenghani0601@gmail.com',
    href: 'mailto:kalpsenghani0601@gmail.com',
    bg: 'bg-blue-700',
    iconColor: 'text-white',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/kalpsenghani',
    href: 'https://github.com/kalpsenghani',
    bg: 'bg-gray-700',
    iconColor: 'text-white',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/kalpsenghani',
    href: 'https://linkedin.com/in/kalpsenghani',
    bg: 'bg-blue-800',
    iconColor: 'text-white',
  },
];

// LeetCode SVG
const LeetCodeIcon = () => (
  <svg width="32" height="32" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M35.5 36.5L14 25.5L35.5 14.5" stroke="#FFA116" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 25.5H35.5" stroke="#000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
// HackerRank SVG
const HackerRankIcon = () => (
  <svg width="32" height="32" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="8" width="34" height="34" rx="8" fill="#2EC866"/>
    <path d="M25 15V35" stroke="#fff" strokeWidth="4" strokeLinecap="round"/>
    <path d="M18 25H32" stroke="#fff" strokeWidth="4" strokeLinecap="round"/>
  </svg>
);
// Stack Overflow SVG
const StackOverflowIcon = () => (
  <svg width="32" height="32" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="8" width="34" height="34" rx="8" fill="#F48024"/>
    <path d="M18 35V30H32V35" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
    <path d="M20 28L30 32" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
    <path d="M22 24L32 28" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
    <path d="M24 20L34 24" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
  </svg>
);

const codingPlatforms = [
  {
    icon: LeetCodeIcon,
    label: 'LeetCode',
    href: 'https://leetcode.com',
    bg: 'bg-white',
    iconColor: '',
  },
  {
    icon: HackerRankIcon,
    label: 'HackerRank',
    href: 'https://hackerrank.com',
    bg: 'bg-white',
    iconColor: '',
  },
  {
    icon: StackOverflowIcon,
    label: 'Stack Overflow',
    href: 'https://stackoverflow.com',
    bg: 'bg-white',
    iconColor: '',
  },
];

const DeveloperStats = () => (
  <Card className="glowing-card bg-gray-900/70 border-gray-800 rounded-xl transition-all duration-300 overflow-hidden h-full flex flex-col justify-center">
    <CardHeader>
      <CardTitle className="text-3xl font-bold text-white mb-2">Developer Stats</CardTitle>
      <p className="text-gray-400 text-sm">Real-time achievements & metrics</p>
    </CardHeader>
    <CardContent>
      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg p-4 border border-blue-500/30">
          <div className="text-2xl font-bold text-blue-400 mb-1">15+</div>
          <div className="text-xs text-gray-300">Projects Built</div>
        </div>
        <div className="bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-lg p-4 border border-green-500/30">
          <div className="text-2xl font-bold text-green-400 mb-1">6</div>
          <div className="text-xs text-gray-300">Technologies</div>
        </div>
        <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg p-4 border border-purple-500/30">
          <div className="text-2xl font-bold text-purple-400 mb-1">2</div>
          <div className="text-xs text-gray-300">Certifications</div>
        </div>
        <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-lg p-4 border border-orange-500/30">
          <div className="text-2xl font-bold text-orange-400 mb-1">3+</div>
          <div className="text-xs text-gray-300">Years Experience</div>
        </div>
      </div>

      {/* Social Icons */}
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-white mb-4 text-center">Connect With Me</h4>
        <div className="flex justify-center">
          <div id="SocailIcons" className="relative">
            {/* Instagram */}
            <a href="https://instagram.com/kalpsenghani" target="_blank" rel="noopener noreferrer" className="icons instaIcon group">
              <span className="iconName">Instagram</span>
              <div className="icon insta">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
            </a>

            {/* LinkedIn */}
            <a href="https://linkedin.com/in/kalpsenghani" target="_blank" rel="noopener noreferrer" className="icons linkedin group">
              <span className="iconName">LinkedIn</span>
              <div className="icon link">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
            </a>

            {/* YouTube */}
            <a href="https://www.youtube.com/@kalpsenghani8581" target="_blank" rel="noopener noreferrer" className="icons youtube group">
              <span className="iconName">YouTube</span>
              <div className="icon tube">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
            </div>
          </a>
          </div>
        </div>
      </div>

      {/* Coding Platforms */}
      <div className="border-t border-gray-700 pt-4">
        <h4 className="text-sm font-semibold text-gray-300 mb-3">Coding Platforms</h4>
        <div className="flex gap-3">
        {codingPlatforms.map((platform) => (
          <a
            key={platform.label}
            href={platform.href}
            target="_blank"
            rel="noopener noreferrer"
              className={`w-12 h-12 flex items-center justify-center rounded-full bg-transparent text-2xl transition-all duration-300 hover:bg-white/10 hover:shadow-[0_0_12px_3px_rgba(36,160,255,0.2)] hover:scale-110`}
            aria-label={platform.label}
              title={platform.label}
          >
            <platform.icon />
          </a>
        ))}
        </div>
            </div>
    </CardContent>
  </Card>
);

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    collaborationType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate collaboration type selection
    if (!formData.collaborationType) {
      setSubmitStatus({
        type: 'error',
        message: 'Please select a collaboration type.'
      });
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '82927390-3cc2-4ef8-8ce2-2249f91f37cc',
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          collaborationType: formData.collaborationType,
          message: formData.message,
          subject: 'New Contact Form Submission'
        })
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you for your message! I will get back to you soon.'
        });
        setFormData({ firstName: '', lastName: '', email: '', collaborationType: '', message: '' });
      } else {
        throw new Error(data.message || 'Something went wrong');
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="form-container">
      <h2 className="text-2xl font-bold text-white mb-4">Let's Talk</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="flex gap-4">
          <div className="form-group flex-1">
            <label htmlFor="firstName">First Name</label>
            <input 
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First name"
              required
            />
          </div>
          
          <div className="form-group flex-1">
            <label htmlFor="lastName">Last Name</label>
            <input 
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last name"
              required
            />
          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input 
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
              required
            />
          </div>
        
        <div className="form-group">
          <label>Collaboration Type</label>
          <div className="flex gap-3 mt-2">
            <button
              type="button"
              onClick={() => setFormData(prev => ({ ...prev, collaborationType: 'collaboration' }))}
              className={`flex-1 py-3 px-4 rounded-lg border transition-all duration-300 ${
                formData.collaborationType === 'collaboration'
                  ? 'bg-purple-600 border-purple-500 text-white'
                  : 'bg-transparent border-gray-600 text-gray-300 hover:border-purple-500 hover:text-white'
              }`}
            >
              Collaboration
            </button>
            <button
              type="button"
              onClick={() => setFormData(prev => ({ ...prev, collaborationType: 'Freelance' }))}
              className={`flex-1 py-3 px-4 rounded-lg border transition-all duration-300 ${
                formData.collaborationType === 'Freelance'
                  ? 'bg-purple-600 border-purple-500 text-white'
                  : 'bg-transparent border-gray-600 text-gray-300 hover:border-purple-500 hover:text-white'
              }`}
            >
              Freelance
            </button>
            <button
              type="button"
              onClick={() => setFormData(prev => ({ ...prev, collaborationType: 'project' }))}
              className={`flex-1 py-3 px-4 rounded-lg border transition-all duration-300 ${
                formData.collaborationType === 'project'
                  ? 'bg-purple-600 border-purple-500 text-white'
                  : 'bg-transparent border-gray-600 text-gray-300 hover:border-purple-500 hover:text-white'
              }`}
            >
              Project
            </button>
          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message"
              required
            />
          </div>
        
          {submitStatus.type && (
            <div className={`p-4 rounded-lg ${
              submitStatus.type === 'success' ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'
            }`}>
              {submitStatus.message}
            </div>
          )}
        
        <button 
            type="submit" 
            disabled={isSubmitting}
          className="form-submit-btn"
          >
          {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={16} />
        </button>
        </form>
    </div>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="section-container">
      <div className="text-center mb-12">
        <h2 className="section-title">Let's connect</h2>
          </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Left: Developer Stats, Contact Methods, Coding Platforms */}
        <DeveloperStats />
        {/* Right: Contact Form */}
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
