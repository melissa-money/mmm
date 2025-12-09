import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Partners', href: '/partners' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b-4 border-black bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <a className="flex items-center gap-2">
                <div className="h-10 w-10 bg-primary border-2 border-black flex items-center justify-center font-heading font-bold text-xl">
                  M
                </div>
                <span className="font-heading text-xl font-bold tracking-tight hidden sm:block">
                  Millennial Money Marketing
                </span>
              </a>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href}>
                  <a
                    className={cn(
                      'px-3 py-2 text-sm font-medium transition-all hover:-translate-y-0.5 hover:text-primary font-heading uppercase tracking-wide',
                      isActive(item.href)
                        ? 'text-primary underline decoration-4 underline-offset-4'
                        : 'text-black'
                    )}
                  >
                    {item.name}
                  </a>
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
        <div className="md:hidden border-t-2 border-black bg-white">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href}>
                <a
                  className={cn(
                    'block px-3 py-2 text-base font-medium font-heading uppercase',
                    isActive(item.href)
                      ? 'bg-primary text-black border-2 border-black'
                      : 'text-black hover:bg-gray-100'
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              </Link>
            ))}
            <a 
              href="https://link.millennialmoneymarketing.com/widget/booking/5HjJ1VBH28PwTwAdzIQb" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full mt-4"
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
