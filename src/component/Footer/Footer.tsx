import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="relative mt-auto text-gray-700 bg-gray-900 border-t border-gray-800">
        <div className="container px-4 py-16 mx-auto sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
            {/* Logo and Social Media */}
            <div className="max-w-md mb-10 ml-auto mr-8 space-y-6">
  <div className="flex items-center space-x-3">
    <h2 className="text-2xl font-bold text-right text-white">
      CSS <span className="text-purple-500">Craft</span>
    </h2>
  </div>
  <div className="flex justify-end space-x-4">
    {[
      { Icon: FaFacebookF, href: "https://facebook.com" },
      { Icon: FaTwitter, href: "https://twitter.com" },
      { Icon: FaLinkedinIn, href: "https://linkedin.com" },
      { Icon: FaInstagram, href: "https://instagram.com" },
      { Icon: FaGithub, href: "https://github.com/asyncnavi/craft-css-ui" },
    ].map(({ Icon, href }, index) => (
      <a 
        key={index} 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="p-2 text-gray-400 transition-all duration-300 bg-gray-800 rounded-full hover:text-white hover:bg-purple-500 hover:scale-110"
      >
        <Icon className="w-5 h-5" />
      </a>
    ))}
  </div>
</div>

            {/* Quick Links */}
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-2 lg:col-span-3">
              {/* Challenges */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Challenges</h3>
                <ul className="space-y-2">
                  {['Daily Target', 'Weekly Challenge', 'Monthly Contest', 'Leaderboard'].map((item, index) => (
                    <li key={index}>
                      <a href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-sm text-gray-400 transition-colors duration-300 hover:text-purple-400 hover:underline">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Resources</h3>
                <ul className="space-y-2">
                  {['CSS Tutorials', 'Best Practices', 'Tips & Tricks', 'Community Forum'].map((item, index) => (
                    <li key={index}>
                      <a href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-sm text-gray-400 transition-colors duration-300 hover:text-purple-400 hover:underline">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Company</h3>
                <ul className="space-y-2">
                  {['About Us', 'Contact', 'Privacy Policy', 'Terms of Service'].map((item, index) => (
                    <li key={index}>
                      <Link 
                        to={`/${item.toLowerCase().replace(' ', '-')}`} 
                        className="text-sm text-gray-400 transition-colors duration-300 hover:text-purple-400 hover:underline"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="flex flex-wrap justify-between gap-4 pt-12 mt-12 border-t border-gray-800">
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-purple-500" />
              <span className="text-sm text-gray-400">123 Chandigarh Universtiy,UIC </span>
            </div>
            <div className="flex items-center space-x-2">
              <FaPhone className="text-purple-500" />
              <a 
                href="tel:+1234567890" 
                className="text-sm text-gray-400 transition-colors duration-300 hover:text-purple-400"
              >
                +91 9888601907
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-purple-500" />
              <a 
                href="mailto:vanshdhalor04@gmail.com" 
                className="text-sm text-gray-400 transition-colors duration-300 hover:text-purple-400"
              >
                craftcss@gmail.com
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 mt-12 text-center border-t border-gray-800">
            <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} CSS Craft. All rights reserved.</p>
            <div className="flex justify-center mt-4 space-x-4">
              <a href="/privacy-policy" className="text-sm text-gray-400 transition-colors duration-300 hover:text-purple-400">Privacy Policy</a>
              <a href="/terms-of-service" className="text-sm text-gray-400 transition-colors duration-300 hover:text-purple-400">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed z-50 p-2 text-white transition-colors duration-300 bg-purple-600 rounded-full shadow-lg bottom-4 right-4 hover:bg-purple-700"
          aria-label="Scroll to top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </>
  );
};

export default Footer;