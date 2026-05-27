import { Mail, Phone, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'
import optimusLogo from '../assets/optimus_dark_logo2.png'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerSections = {
    quickLinks: [
      { label: 'Home', href: '/' },
      { label: 'About Us', href: '/about' },
      { label: 'Services', href: '/services' },
      { label: 'Portfolio', href: '/portfolio' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Contact', href: '/contact' },
    ],
  }

  const socialLinks = [
    { icon: FaFacebook, label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61577942864518' },
    { icon: FaTwitter, label: 'Twitter', href: '#' },
    { icon: FaInstagram, label: 'Instagram', href: 'https://www.instagram.com/optimus_ecommerce/' },
    { icon: FaLinkedin, label: 'LinkedIn', href: '#' },
  ]

  const contactInfo = [
    {
      icon: Phone,
      label: '+91-9479889877',
      href: 'tel:+919479889877',
    },
    {
      icon: Mail,
      label: 'info@optimusecommerce.in',
      href: 'mailto:info@optimusecommerce.in',
    },
    {
      icon: MapPin,
      label: '203, Ahmed Nagar, Khajrana, Indore, MP - 452016',
      href: '#',
    },
  ]

  return (
    <footer className="border-t border-white/10 bg-black text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-16">

          {/* LEFT: Logo + tagline */}
          <div className="flex flex-col gap-6">
            {/* Logo */}
            <Link to="/" className="inline-block group self-start">
              <div className="overflow-hidden rounded-lg transition-transform duration-300 group-hover:scale-105">
                <img
                  src={optimusLogo}
                  alt="Optimus E-commerce Consultancy"
                  className="h-24 w-auto object-contain brightness-100 group-hover:brightness-110 transition-all duration-300"
                />
              </div>
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted partner for e-commerce success on Amazon, Flipkart, Meesho, and other marketplaces.
            </p>
          </div>

          {/* MIDDLE: Quick Links */}
          <div className="flex flex-col gap-3">
            <h4 className="text-base font-semibold tracking-wide uppercase text-white">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5">
              {footerSections.quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm hover:underline underline-offset-4 decoration-blue-500"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT: Contact Details + Follow Us */}
          <div className="flex flex-col gap-6">
            {/* Contact Information */}
            <div className="flex flex-col gap-3">
              <h4 className="text-base font-semibold tracking-wide uppercase text-white">
                Contact Us
              </h4>
              <div className="flex flex-col gap-3">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-start gap-3 text-gray-400 hover:text-blue-400 transition-colors duration-300 group"
                  >
                    <item.icon className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <span className="text-sm leading-snug">{item.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Follow Us */}
            <div className="flex flex-col gap-3">
              <h4 className="text-base font-semibold tracking-wide uppercase text-white">
                Follow Us
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all duration-300 group"
                  >
                    <social.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-10 md:mt-14 pt-6">
          <p className="text-center text-gray-500 text-sm">
            © {currentYear} Optimus E-commerce Consultancy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer