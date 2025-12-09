import { MapPin, Search, Star, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

export default function LocalBusinessMarketing() {
  const benefits = [
    'Rank #1 in local search results',
    'Attract customers in your service area',
    'Build trust with local community',
    'Increase foot traffic and phone calls',
    'Beat local competitors consistently',
    'Get found when customers need you most',
  ];

  const process = [
    {
      step: '01',
      title: 'Local Market Analysis',
      description: 'We analyze your local market, competitors, and identify opportunities for growth.',
      icon: Search,
    },
    {
      step: '02',
      title: 'Google My Business Optimization',
      description: 'Complete optimization of your Google Business Profile to maximize visibility.',
      icon: MapPin,
    },
    {
      step: '03',
      title: 'Local SEO Implementation',
      description: 'Strategic local SEO to help you rank higher in local search results.',
      icon: TrendingUp,
    },
    {
      step: '04',
      title: 'Review Management',
      description: 'Systematic approach to generating and managing customer reviews.',
      icon: Star,
    },
  ];

  const features = [
    'Local keyword research and optimization',
    'Google My Business management',
    'Local citation building and management',
    'Local content marketing strategy',
    'Review generation and response management',
    'Local link building campaigns',
    'Mobile optimization for local searches',
    'Local competitor analysis and monitoring',
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-white border-b-4 border-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center space-x-2 bg-black text-white px-4 py-2 border-2 border-black shadow-[4px_4px_0px_0px_#CCFF00] mb-8 transform -rotate-2">
                  <MapPin className="h-5 w-5" />
                  <span className="font-heading font-bold uppercase tracking-wider">Local Business Marketing</span>
                </div>

                <h1 className="font-heading text-5xl md:text-6xl font-bold text-black leading-tight mb-6">
                  Dominate Your <span className="bg-secondary px-2">Local Market</span> with Proven Strategies
                </h1>

                <p className="text-xl text-gray-700 mb-8 font-sans">
                  Get found by local customers when they need you most. Our comprehensive 
                  local marketing strategies help businesses rank #1 in local search results 
                  and attract more customers from their service area.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <a
                    href="https://link.millennialmoneymarketing.com/widget/booking/5HjJ1VBH28PwTwAdzIQb"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full sm:w-auto bg-black text-white hover:bg-primary hover:text-black border-2 border-black rounded-none font-heading font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all h-14 px-8 text-lg">
                      Start Your Local Domination <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </a>
                </div>

                <div className="grid grid-cols-2 gap-4 border-2 border-black p-4 bg-gray-50 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <div className="text-center border-r-2 border-black">
                    <div className="text-3xl font-heading font-bold text-black">87%</div>
                    <div className="text-sm font-bold text-gray-600 uppercase">Local Search Improvement</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-heading font-bold text-black">3x</div>
                    <div className="text-sm font-bold text-gray-600 uppercase">More Local Customers</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white border-2 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  <div className="bg-secondary border-2 border-black p-6 mb-8 transform rotate-1">
                    <h3 className="font-heading text-2xl font-bold text-black mb-4 uppercase">Local Search Results</h3>
                    <div className="space-y-3 font-sans">
                      <div className="flex items-center justify-between bg-white border-2 border-black p-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        <span className="font-bold">🏆 Your Business</span>
                        <span className="bg-black text-white px-2 py-1 font-bold text-sm">#1</span>
                      </div>
                      <div className="flex items-center justify-between bg-white/50 border-2 border-gray-300 p-3">
                        <span className="text-gray-500">Competitor A</span>
                        <span className="bg-gray-200 text-gray-600 px-2 py-1 font-bold text-sm">#2</span>
                      </div>
                      <div className="flex items-center justify-between bg-white/50 border-2 border-gray-300 p-3">
                        <span className="text-gray-500">Competitor B</span>
                        <span className="bg-gray-200 text-gray-600 px-2 py-1 font-bold text-sm">#3</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4 font-sans font-bold">
                    <div className="flex items-center justify-between border-b-2 border-gray-100 pb-2">
                      <span>Monthly Local Searches:</span>
                      <span className="text-green-600 uppercase">+285%</span>
                    </div>
                    <div className="flex items-center justify-between border-b-2 border-gray-100 pb-2">
                      <span>Google My Business Views:</span>
                      <span className="text-green-600 uppercase">+420%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Phone Calls:</span>
                      <span className="text-green-600 uppercase">+175%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50 border-b-4 border-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl font-bold text-black mb-6">
                Why Choose Our <span className="text-primary">Local Marketing</span> Services?
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto font-sans">
                We understand local markets and know exactly what it takes to help your business 
                stand out in your community.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-6 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform"
                >
                  <CheckCircle className="h-6 w-6 text-black flex-shrink-0" />
                  <span className="font-bold text-black font-sans">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-white border-b-4 border-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl font-bold text-black mb-6">
                Our Proven <span className="bg-accent px-2">Process</span>
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto font-sans">
                We follow a systematic approach to ensure your business dominates local search results.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-black p-8 text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-transform"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-black text-white rounded-full mb-6 border-2 border-black shadow-[4px_4px_0px_0px_#FF69B4]">
                    <step.icon className="h-8 w-8" />
                  </div>
                  
                  <div className="text-sm font-bold text-primary mb-2 uppercase tracking-wider">STEP {step.step}</div>
                  <h3 className="font-heading text-xl font-bold text-black mb-4">{step.title}</h3>
                  <p className="text-gray-700 font-sans">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50 border-b-4 border-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-heading text-4xl font-bold text-black mb-6">
                  Complete <span className="text-primary">Local Marketing</span> Solution
                </h2>
                
                <p className="text-xl text-gray-700 mb-8 font-sans">
                  Everything you need to dominate your local market and attract more customers 
                  from your service area.
                </p>

                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="bg-black text-white p-1">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <span className="text-black font-bold font-sans">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="bg-white border-2 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                  <h3 className="font-heading text-2xl font-bold mb-6 border-b-4 border-primary pb-2 inline-block">Local Marketing Package</h3>
                  
                  <div className="space-y-4 font-sans">
                    <div className="flex items-center justify-between border-b-2 border-gray-100 pb-2">
                      <span className="font-bold">✅ Google My Business Setup</span>
                      <span className="text-green-600 font-bold">INCLUDED</span>
                    </div>
                    <div className="flex items-center justify-between border-b-2 border-gray-100 pb-2">
                      <span className="font-bold">✅ Local SEO Optimization</span>
                      <span className="text-green-600 font-bold">INCLUDED</span>
                    </div>
                    <div className="flex items-center justify-between border-b-2 border-gray-100 pb-2">
                      <span className="font-bold">✅ Review Management</span>
                      <span className="text-green-600 font-bold">INCLUDED</span>
                    </div>
                    <div className="flex items-center justify-between border-b-2 border-gray-100 pb-2">
                      <span className="font-bold">✅ Local Citation Building</span>
                      <span className="text-green-600 font-bold">INCLUDED</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-bold">✅ Monthly Reporting</span>
                      <span className="text-green-600 font-bold">INCLUDED</span>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t-2 border-black">
                    <a
                      href="https://link.millennialmoneymarketing.com/widget/booking/5HjJ1VBH28PwTwAdzIQb"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="w-full bg-primary text-black hover:bg-black hover:text-white border-2 border-black rounded-none font-heading font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all h-12 text-lg">
                        Get Started Today
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
