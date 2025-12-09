import { Star, MapPin, Search, MessageSquare, CheckCircle, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

export default function GoogleBusinessProfile() {
  const benefits = [
    'Rank higher in local search results',
    'Generate more 5-star reviews consistently',
    'Increase phone calls and website clicks',
    'Build trust with potential customers',
    'Stand out from competitors',
    'Get found when customers search locally',
  ];

  const process = [
    {
      step: '01',
      title: 'Profile Audit & Setup',
      description: 'Complete audit and optimization of your Google Business Profile for maximum visibility.',
      icon: Search,
    },
    {
      step: '02',
      title: 'Review Strategy',
      description: 'Implement systematic review generation and management strategies.',
      icon: Star,
    },
    {
      step: '03',
      title: 'Content Management',
      description: 'Regular posts, photos, and updates to keep your profile active and engaging.',
      icon: MessageSquare,
    },
    {
      step: '04',
      title: 'Performance Tracking',
      description: 'Monitor performance, track results, and optimize for continuous improvement.',
      icon: MapPin,
    },
  ];

  const features = [
    'Complete Google Business Profile optimization',
    'Professional photo uploads and management',
    'Regular post creation and scheduling',
    'Review generation and response management',
    'Q&A monitoring and responses',
    'Local keyword optimization',
    'Performance tracking and reporting',
    'Competitor monitoring and analysis',
  ];

  const stats = [
    { label: 'Average Review Increase', value: '127%', icon: '⭐' },
    { label: 'Profile Views Boost', value: '89%', icon: '👀' },
    { label: 'Phone Call Increase', value: '156%', icon: '📞' },
    { label: 'Website Click Growth', value: '203%', icon: '🔗' },
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
                  <Star className="h-5 w-5" />
                  <span className="font-heading font-bold uppercase tracking-wider">Google Business Profile Management</span>
                </div>

                <h1 className="font-heading text-5xl md:text-6xl font-bold text-black leading-tight mb-6">
                  Get More <span className="bg-secondary px-2">5-Star Reviews</span> & Attract Local Customers
                </h1>

                <p className="text-xl text-gray-700 mb-8 font-sans">
                  Transform your Google Business Profile into a customer magnet. Our professional 
                  management services help you rank higher in local searches, generate more reviews, 
                  and build the trust that converts browsers into buyers.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <a
                    href="https://link.millennialmoneymarketing.com/widget/booking/5HjJ1VBH28PwTwAdzIQb"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full sm:w-auto bg-black text-white hover:bg-primary hover:text-black border-2 border-black rounded-none font-heading font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all h-14 px-8 text-lg">
                      Boost Your Profile Today <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </a>
                </div>

                <div className="grid grid-cols-2 gap-4 border-2 border-black p-4 bg-gray-50 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <div className="text-center border-r-2 border-black">
                    <div className="text-3xl font-heading font-bold text-black">4.8⭐</div>
                    <div className="text-sm font-bold text-gray-600 uppercase">Average Client Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-heading font-bold text-black">+127%</div>
                    <div className="text-sm font-bold text-gray-600 uppercase">More Reviews Generated</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white border-2 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  <div className="bg-secondary border-2 border-black p-6 mb-8 transform rotate-1">
                    <h3 className="font-heading text-2xl font-bold text-black mb-4 uppercase">Your Business Profile</h3>
                    <div className="space-y-3 font-sans">
                      <div className="flex items-center justify-between bg-white border-2 border-black p-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        <span className="font-bold">Profile Rating:</span>
                        <span className="bg-black text-white px-2 py-1 font-bold text-sm">4.9 ⭐⭐⭐⭐⭐</span>
                      </div>
                      <div className="flex items-center justify-between bg-white border-2 border-black p-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        <span className="font-bold">Total Reviews:</span>
                        <span className="bg-black text-white px-2 py-1 font-bold text-sm">147 reviews</span>
                      </div>
                      <div className="flex items-center justify-between bg-white border-2 border-black p-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        <span className="font-bold">Monthly Views:</span>
                        <span className="bg-black text-white px-2 py-1 font-bold text-sm">2,847</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4 font-sans font-bold">
                    <div className="flex items-center justify-between border-b-2 border-gray-100 pb-2">
                      <span>📞 Phone Calls:</span>
                      <span className="text-green-600 uppercase">+156%</span>
                    </div>
                    <div className="flex items-center justify-between border-b-2 border-gray-100 pb-2">
                      <span>🌐 Website Visits:</span>
                      <span className="text-green-600 uppercase">+203%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>📍 Direction Requests:</span>
                      <span className="text-green-600 uppercase">+89%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gray-50 border-b-4 border-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl font-bold text-black mb-6">
                Proven Results for <span className="text-primary">Local Businesses</span>
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto font-sans">
                Our Google Business Profile management delivers measurable results that drive more customers to your business.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-black p-8 text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-transform"
                >
                  <div className="text-4xl mb-4">{stat.icon}</div>
                  <div className="text-3xl font-heading font-bold text-black mb-2">{stat.value}</div>
                  <div className="text-sm font-bold text-gray-600 uppercase">{stat.label}</div>
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
                Our Professional <span className="bg-accent px-2">Management Process</span>
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto font-sans">
                We follow a systematic approach to optimize your Google Business Profile for maximum impact.
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
                  Complete <span className="text-primary">Profile Management</span> Solution
                </h2>
                
                <p className="text-xl text-gray-700 mb-8 font-sans">
                  Everything you need to maintain a 5-star reputation and attract more local customers.
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
                  <h3 className="font-heading text-2xl font-bold mb-6 border-b-4 border-primary pb-2 inline-block">Management Package</h3>
                  
                  <div className="space-y-4 font-sans">
                    <div className="flex items-center justify-between border-b-2 border-gray-100 pb-2">
                      <span className="font-bold">✅ Profile Optimization</span>
                      <span className="text-green-600 font-bold">INCLUDED</span>
                    </div>
                    <div className="flex items-center justify-between border-b-2 border-gray-100 pb-2">
                      <span className="font-bold">✅ Review Management</span>
                      <span className="text-green-600 font-bold">INCLUDED</span>
                    </div>
                    <div className="flex items-center justify-between border-b-2 border-gray-100 pb-2">
                      <span className="font-bold">✅ Weekly Posts</span>
                      <span className="text-green-600 font-bold">INCLUDED</span>
                    </div>
                    <div className="flex items-center justify-between border-b-2 border-gray-100 pb-2">
                      <span className="font-bold">✅ Photo Updates</span>
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
