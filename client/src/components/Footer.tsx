import { Link } from 'wouter';
import { Mail, Phone, MapPin, Youtube, Instagram, Linkedin, Music } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Local Business Marketing', href: '/services/local-business-marketing' },
    { name: 'Ecommerce Marketing', href: '/services/ecommerce-marketing' },
    { name: 'Google Business Profile', href: '/services/google-business-profile' },
    { name: 'Web Design', href: '/services/web-design' },
  ];

  const socialLinks = [
    { name: 'YouTube', icon: Youtube, href: 'https://www.youtube.com/@millennialmoneymom', color: 'hover:text-red-600' },
    { name: 'TikTok', icon: Music, href: 'https://tiktok.com/@millennial_money_mom', color: 'hover:text-pink-600' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/millennial_money_mom', color: 'hover:text-pink-600' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/company/millennial-money-marketing', color: 'hover:text-blue-600' },
  ];

  return (
    <footer className="bg-black text-white border-t-4 border-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/">
              <span className="flex items-center gap-2 mb-4 cursor-pointer">
                <img src="/favicon.png" alt="Millennial Money Marketing Logo" className="h-10 w-10 object-contain" />
                <span className="font-heading text-xl font-bold tracking-tight text-white">
                  Millennial Money Marketing
                </span>
              </span>
            </Link>
            
            <p className="text-gray-300 mb-6 max-w-md font-sans">
              Digital marketing agency helping businesses rank #1 on Google & get more 5-star reviews 
              without spending a dime on ads. Serving Phoenix, AZ and nationwide.
            </p>

            <div className="space-y-3 font-sans">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <a
                  href="tel:(623)263-5197"
                  className="text-gray-300 hover:text-primary transition-colors duration-200"
                >
                  (623) 263-5197
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:info@millennialmoneymarketing.com" className="text-gray-300 hover:text-primary transition-colors duration-200">
                  info@millennialmoneymarketing.com
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-gray-300">Phoenix, AZ (Nationwide Service)</span>
              </div>
            </div>

            {/* Certifications */}
            <div className="mt-6 mb-6">
              <a 
                href="https://experts.godaddy.com/melissa-gross" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block group"
              >
                <div className="bg-white p-3 border-2 border-white hover:border-primary transition-colors duration-200 shadow-[4px_4px_0px_0px_#fff] group-hover:shadow-[4px_4px_0px_0px_#C6F135] group-hover:translate-x-[-2px] group-hover:translate-y-[-2px]">
                  <img 
                    src="/images/godaddy-pro.png" 
                    alt="GoDaddy Pro Expert" 
                    className="h-8 w-auto object-contain" 
                  />
                  <div className="text-black text-xs font-bold mt-1 text-center font-heading uppercase tracking-wider">
                    Verified Expert
                  </div>
                </div>
              </a>
            </div>

            {/* Business Hours */}
            <div className="mt-6 p-4 border-2 border-white bg-gray-900 shadow-[4px_4px_0px_0px_#fff]">
              <h4 className="font-heading font-bold text-primary mb-2 uppercase">Business Hours</h4>
              <div className="text-sm text-gray-300 space-y-1 font-sans">
                <div className="flex justify-between border-b border-gray-700 pb-1">
                  <span>Monday - Thursday:</span>
                  <span>9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between border-b border-gray-700 pb-1 pt-1">
                  <span>Friday:</span>
                  <span>9:00 AM - 12:00 PM</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span>Weekend:</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-4 text-primary uppercase border-b-2 border-primary inline-block">Our Services</h3>
            <ul className="space-y-2 font-sans">
              {services.map((service) => (
                <li key={service.href}>
                  <Link href={service.href}>
                    <span className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200 block cursor-pointer">
                      → {service.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Client Resources */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-4 text-primary uppercase border-b-2 border-primary inline-block">Client Resources</h3>
            <ul className="space-y-2 font-sans mb-8">
              <li>
                <Link href="/resources/squarespace-invite">
                  <span className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200 block cursor-pointer">
                    → Invite Domain Manager (Squarespace)
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/resources/godaddy-delegate-access">
                  <span className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200 block cursor-pointer">
                    → Add Delegate Access (GoDaddy)
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/resources/gbp-manager-access">
                  <span className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200 block cursor-pointer">
                    → Add Manager (Google Business)
                  </span>
                </Link>
              </li>
            </ul>

            {/* Quick Links */}
            <h3 className="text-lg font-heading font-bold mb-4 text-primary uppercase border-b-2 border-primary inline-block">Quick Links</h3>
            <ul className="space-y-2 font-sans">
              <li>
                <Link href="/">
                  <span className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200 block cursor-pointer">
                    → Home
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <span className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200 block cursor-pointer">
                    → About Us
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200 block cursor-pointer">
                    → Contact
                  </span>
                </Link>
              </li>
              <li>
                <a
                  href="https://link.millennialmoneymarketing.com/widget/booking/5HjJ1VBH28PwTwAdzIQb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-primary hover:translate-x-1 transition-all duration-200 block"
                >
                  → Book a Call
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="text-sm font-heading font-bold mb-3 text-primary uppercase">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-white hover:text-primary border-2 border-white p-2 hover:bg-white hover:border-primary transition-all duration-200 shadow-[2px_2px_0px_0px_#fff] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]`}
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0 font-sans">
              © {currentYear} Millennial Money Marketing. All rights reserved.
            </div>
            
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm font-sans">
              <span className="text-primary flex items-center font-bold">
                Designed with love 💖
              </span>
              <div className="flex space-x-4 text-gray-400">
                <Link href="/privacy">
                  <span className="hover:text-white transition-colors duration-200 underline decoration-1 underline-offset-2 cursor-pointer">
                    Privacy Policy
                  </span>
                </Link>
                <Link href="/terms">
                  <span className="hover:text-white transition-colors duration-200 underline decoration-1 underline-offset-2 cursor-pointer">
                    Terms of Service
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
