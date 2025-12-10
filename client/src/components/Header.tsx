import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// Navigation header with reordered services
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [location] = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const services = [
    { name: 'Local Business Marketing', href: '/services/local-business-marketing' },
    { name: 'Google Business Profile', href: '/services/google-business-profile' },
    { name: 'Cold Email Lead Gen', href: '/services/cold-email-lead-gen' },
    { name: 'Email Deliverability', href: '/services/email-deliverability' },
    { name: 'Business Funding', href: '/services/business-funding' },
    { name: 'Web Design', href: '/services/web-design' },
    { name: 'Custom Automations', href: '/services/custom-automations' },
    { name: 'DBA Filing', href: '/services/dba-filing' },
    { name: 'Virtual Assistant Placement', href: '/services/virtual-assistant-placement' },
    { name: 'Ecommerce Marketing', href: '/services/ecommerce-marketing' },
  ];

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Partners', href: '/partners' },
    { name: 'Resources', href: '/resources' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location === path;

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b-4 border-black bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <span className="flex items-center gap-2 cursor-pointer">
                <div className="h-10 w-10 bg-primary border-2 border-black flex items-center justify-center font-heading font-bold text-xl">
                  M
                </div>
                <span className="font-heading text-xl font-bold tracking-tight hidden sm:block">
                  Millennial Money Marketing
                </span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/">
                <span className={cn(
                  'px-3 py-2 text-sm font-medium transition-all hover:-translate-y-0.5 hover:text-primary font-heading uppercase tracking-wide cursor-pointer',
                  isActive('/') ? 'text-primary underline decoration-4 underline-offset-4' : 'text-black'
                )}>
                  Home
                </span>
              </Link>

              {/* Services Dropdown */}
              <div className="relative inline-block text-left" ref={dropdownRef}>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className={cn(
                    'group inline-flex items-center px-3 py-2 text-sm font-medium transition-all hover:-translate-y-0.5 hover:text-primary font-heading uppercase tracking-wide focus:outline-none',
                    location.startsWith('/services') ? 'text-primary underline decoration-4 underline-offset-4' : 'text-black'
                  )}
                >
                  <span>Services</span>
                  <ChevronDown className={cn("ml-1 h-4 w-4 transition-transform", isServicesOpen ? "rotate-180" : "")} />
                </button>

                {isServicesOpen && (
                  <div className="absolute left-0 mt-2 w-72 origin-top-left bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-50">
                    <div className="py-1">
                      <Link href="/services">
                        <span
                          className="block px-4 py-3 text-sm font-bold text-black hover:bg-primary hover:text-black border-b-2 border-gray-100 uppercase tracking-wide cursor-pointer"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          All Services
                        </span>
                      </Link>
                      {services.map((service) => (
                        <Link key={service.name} href={service.href}>
                          <span
                            className={cn(
                              'block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary hover:pl-6 transition-all cursor-pointer',
                              isActive(service.href) ? 'bg-gray-50 text-primary font-bold' : ''
                            )}
                            onClick={() => setIsServicesOpen(false)}
                          >
                            {service.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {navigation.slice(1).map((item) => (
                <Link key={item.name} href={item.href}>
                  <span
                    className={cn(
                      'px-3 py-2 text-sm font-medium transition-all hover:-translate-y-0.5 hover:text-primary font-heading uppercase tracking-wide cursor-pointer',
                      isActive(item.href)
                        ? 'text-primary underline decoration-4 underline-offset-4'
                        : 'text-black'
                    )}
                  >
                    {item.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a href="https://link.millennialmoneymarketing.com/widget/booking/5HjJ1VBH28PwTwAdzIQb" target="_blank" rel="noopener noreferrer">
              <Button 
                className="bg-black text-white hover:bg-primary hover:text-black border-2 border-black rounded-none font-heading font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                Book a Call
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 text-black hover:bg-primary hover:text-black focus:outline-none border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t-2 border-black bg-white max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            <Link href="/">
              <span
                className={cn(
                  'block px-3 py-2 text-base font-medium font-heading uppercase cursor-pointer',
                  isActive('/') ? 'bg-primary text-black border-2 border-black' : 'text-black hover:bg-gray-100'
                )}
                onClick={() => setIsOpen(false)}
              >
                Home
              </span>
            </Link>

            {/* Mobile Services Dropdown */}
            <div className="space-y-1">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="w-full flex items-center justify-between px-3 py-2 text-base font-medium font-heading uppercase text-black hover:bg-gray-100"
              >
                <span>Services</span>
                <ChevronDown className={cn("h-5 w-5 transition-transform", isServicesOpen ? "rotate-180" : "")} />
              </button>
              
              {isServicesOpen && (
                <div className="pl-4 space-y-1 border-l-2 border-black ml-3 my-2">
                  <Link href="/services">
                    <span
                      className="block px-3 py-2 text-sm font-bold text-black hover:text-primary uppercase cursor-pointer"
                      onClick={() => setIsOpen(false)}
                    >
                      All Services
                    </span>
                  </Link>
                  {services.map((service) => (
                    <Link key={service.name} href={service.href}>
                      <span
                        className={cn(
                          'block px-3 py-2 text-sm text-gray-600 hover:text-primary cursor-pointer',
                          isActive(service.href) ? 'text-primary font-bold' : ''
                        )}
                        onClick={() => setIsOpen(false)}
                      >
                        {service.name}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navigation.slice(1).map((item) => (
              <Link key={item.name} href={item.href}>
                <span
                  className={cn(
                    'block px-3 py-2 text-base font-medium font-heading uppercase cursor-pointer',
                    isActive(item.href)
                      ? 'bg-primary text-black border-2 border-black'
                      : 'text-black hover:bg-gray-100'
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </span>
              </Link>
            ))}
            
            <a 
              href="https://link.millennialmoneymarketing.com/widget/booking/5HjJ1VBH28PwTwAdzIQb" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full mt-4 pb-4"
            >
              <Button className="w-full bg-black text-white hover:bg-primary hover:text-black border-2 border-black rounded-none font-heading font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all">
                Book a Call
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
