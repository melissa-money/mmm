import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

export default function Contact() {
  const [isSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '(623) 263-5197',
      description: 'Mon-Thu 9AM-2PM, Fri 9AM-12PM',
      href: 'tel:(623)263-5197',
      color: 'bg-primary',
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@millennialmoneymarketing.com',
      description: 'We reply within 24 hours',
      href: 'mailto:info@millennialmoneymarketing.com',
      color: 'bg-secondary',
    },
    {
      icon: MapPin,
      title: 'Location',
      details: 'Phoenix, AZ',
      description: 'Serving nationwide',
      href: '#',
      color: 'bg-accent',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon-Thu: 9AM-2PM',
      description: 'Fri: 9AM-12PM, Weekends: Closed',
      href: '#',
      color: 'bg-blue-400',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-white border-b-4 border-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-black leading-tight mb-6">
              Let's Grow Your <span className="bg-primary px-2">Business Together</span>
            </h1>
            
            <p className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto font-sans">
              Ready to rank #1 on Google and get more 5-star reviews? Get in touch and let's discuss 
              how we can help your business achieve its marketing goals.
            </p>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white border-2 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="text-4xl mb-2">📞</div>
                <div className="font-heading font-bold text-xl text-black">Quick Response</div>
                <div className="text-sm font-bold text-gray-600 uppercase">Usually within 2 hours</div>
              </div>
              <div className="bg-white border-2 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="text-4xl mb-2">💬</div>
                <div className="font-heading font-bold text-xl text-black">Free Consultation</div>
                <div className="text-sm font-bold text-gray-600 uppercase">No sales pressure</div>
              </div>
              <div className="bg-white border-2 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="text-4xl mb-2">🎯</div>
                <div className="font-heading font-bold text-xl text-black">Custom Strategy</div>
                <div className="text-sm font-bold text-gray-600 uppercase">Tailored to your needs</div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="py-20 bg-gray-50 border-b-4 border-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <div className="inline-block bg-black text-white px-4 py-2 border-2 border-black shadow-[4px_4px_0px_0px_#FF69B4] mb-6 transform -rotate-1">
                  <span className="font-heading font-bold uppercase tracking-wider">Send Us a Message</span>
                </div>
                
                <p className="text-gray-700 mb-8 font-sans text-lg">
                  Fill out the form below and we'll get back to you within 24 hours with a custom 
                  strategy for your business.
                </p>

                {isSubmitted ? (
                  <div className="bg-secondary border-2 border-black p-8 text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                    <CheckCircle className="h-16 w-16 text-black mx-auto mb-4" />
                    <h3 className="font-heading text-2xl font-bold text-black mb-2">Thank You!</h3>
                    <p className="text-black font-bold mb-6">
                      Your message has been sent successfully. We'll get back to you within 24 hours.
                    </p>
                    <a href="https://link.millennialmoneymarketing.com/widget/booking/5HjJ1VBH28PwTwAdzIQb" target="_blank" rel="noopener noreferrer">
                      <Button className="bg-black text-white hover:bg-white hover:text-black border-2 border-black rounded-none font-heading font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all">
                        Or Book a Call Now
                      </Button>
                    </a>
                  </div>
                ) : (
                  <div className="w-full h-[624px] bg-white border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                    <iframe
                      src="https://link.millennialmoneymarketing.com/widget/form/Yyr5LX91FYEUqNae8qRP"
                      style={{ width: '100%', height: '100%', border: 'none' }}
                      id="inline-Yyr5LX91FYEUqNae8qRP"
                      title="Website Contact Form"
                    />
                  </div>
                )}
              </div>

              {/* Contact Information */}
              <div>
                <div className="inline-block bg-black text-white px-4 py-2 border-2 border-black shadow-[4px_4px_0px_0px_#CCFF00] mb-6 transform rotate-1">
                  <span className="font-heading font-bold uppercase tracking-wider">Get in Touch</span>
                </div>
                
                <p className="text-gray-700 mb-8 font-sans text-lg">
                  Prefer to talk directly? We're here to help. Choose the best way to reach us.
                </p>

                <div className="space-y-6 mb-10">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start space-x-4 bg-white p-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform">
                      <div className="flex-shrink-0">
                        <div className={`w-12 h-12 ${item.color} border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]`}>
                          <item.icon className="h-6 w-6 text-black" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-heading text-lg font-bold text-black mb-1 uppercase">{item.title}</h3>
                        {item.href !== '#' ? (
                          <a
                            href={item.href}
                            className="text-primary hover:text-black font-bold text-lg transition-colors underline decoration-2 underline-offset-2"
                          >
                            {item.details}
                          </a>
                        ) : (
                          <p className="text-black font-bold text-lg">{item.details}</p>
                        )}
                        <p className="text-sm font-bold text-gray-500 uppercase mt-1">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quick Action */}
                <div className="bg-primary border-2 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  <h3 className="font-heading text-2xl font-bold text-black mb-4">
                    Ready to Get Started Right Now?
                  </h3>
                  <p className="text-black font-bold mb-6">
                    Book a free 30-minute strategy call and get a custom marketing plan for your business.
                  </p>
                  <a href="https://link.millennialmoneymarketing.com/widget/booking/5HjJ1VBH28PwTwAdzIQb" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-black text-white hover:bg-white hover:text-black border-2 border-black rounded-none font-heading font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all h-14 text-lg">
                      Book Your Free Strategy Call
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-black text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Don't Wait – Your Competitors <span className="text-accent">Won't</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-sans">
              Every day you wait is another day your competitors are getting ahead. 
              Let's start growing your business today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:(623)263-5197">
                <Button className="h-16 px-10 text-xl bg-accent text-black hover:bg-white hover:text-black border-2 border-white rounded-none font-heading font-bold shadow-[6px_6px_0px_0px_#fff] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0px_0px_#fff] transition-all">
                  Call Now: (623) 263-5197
                </Button>
              </a>
            </div>

            <div className="mt-8 text-sm font-bold text-gray-400 uppercase tracking-wider">
              ⏰ Available Mon-Thu 9AM-2PM, Fri 9AM-12PM (Mountain Time)
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
