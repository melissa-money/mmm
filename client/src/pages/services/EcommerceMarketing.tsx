import { ShoppingCart, TrendingUp, DollarSign, Users, CheckCircle, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

export default function EcommerceMarketing() {
  const benefits = [
    'Increase conversion rates by 40%+',
    'Scale revenue with profitable ad campaigns',
    'Build loyal customer relationships',
    'Optimize your sales funnel for maximum ROI',
    'Reduce cart abandonment significantly',
    'Expand to new markets and audiences',
  ];

  const process = [
    {
      step: '01',
      title: 'Store Analysis & Audit',
      description: 'Complete analysis of your store, competitors, and market opportunities.',
      icon: ShoppingCart,
    },
    {
      step: '02',
      title: 'Conversion Optimization',
      description: 'Optimize your store for maximum conversions and user experience.',
      icon: TrendingUp,
    },
    {
      step: '03',
      title: 'Marketing Campaigns',
      description: 'Launch targeted campaigns across multiple channels to drive traffic.',
      icon: Users,
    },
    {
      step: '04',
      title: 'Scale & Optimize',
      description: 'Continuously optimize and scale successful campaigns for growth.',
      icon: DollarSign,
    },
  ];

  const services = [
    'Conversion rate optimization (CRO)',
    'Email marketing automation',
    'Social media advertising (Facebook, Instagram, TikTok)',
    'Google Ads for ecommerce',
    'SEO for product pages',
    'Abandoned cart recovery',
    'Customer retention strategies',
    'Analytics and performance tracking',
  ];

  const results = [
    { metric: 'Average Revenue Increase', value: '156%', icon: '💰' },
    { metric: 'Conversion Rate Improvement', value: '43%', icon: '🎯' },
    { metric: 'Cart Abandonment Reduction', value: '67%', icon: '🛒' },
    { metric: 'Customer Lifetime Value', value: '+89%', icon: '❤️' },
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
                  <ShoppingCart className="h-5 w-5" />
                  <span className="font-heading font-bold uppercase tracking-wider">Ecommerce Marketing</span>
                </div>

                <h1 className="font-heading text-5xl md:text-6xl font-bold text-black leading-tight mb-6">
                  Scale Your <span className="bg-secondary px-2">Ecommerce Business</span> with Proven Strategies
                </h1>

                <p className="text-xl text-gray-700 mb-8 font-sans">
                  Transform your online store into a revenue-generating machine. Our data-driven 
                  ecommerce marketing strategies help you increase conversions, boost sales, 
                  and build a loyal customer base that keeps coming back.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <a
                    href="https://link.millennialmoneymarketing.com/widget/booking/5HjJ1VBH28PwTwAdzIQb"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full sm:w-auto bg-black text-white hover:bg-primary hover:text-black border-2 border-black rounded-none font-heading font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all h-14 px-8 text-lg">
                      Boost Your Sales Today <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </a>
                </div>

                <div className="grid grid-cols-2 gap-4 border-2 border-black p-4 bg-gray-50 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <div className="text-center border-r-2 border-black">
                    <div className="text-3xl font-heading font-bold text-black">2.3x</div>
                    <div className="text-sm font-bold text-gray-600 uppercase">Avg. Revenue Growth</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-heading font-bold text-black">43%</div>
                    <div className="text-sm font-bold text-gray-600 uppercase">Conversion Rate Increase</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white border-2 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  <div className="bg-primary border-2 border-black p-6 mb-8 transform rotate-1">
                    <h3 className="font-heading text-2xl font-bold text-black mb-4 uppercase">Sales Dashboard</h3>
                    <div className="space-y-3 font-sans">
                      <div className="flex items-center justify-between bg-white border-2 border-black p-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        <span className="font-bold">Monthly Revenue:</span>
                        <span className="font-bold text-green-600">$47,892</span>
                      </div>
                      <div className="flex items-center justify-between bg-white border-2 border-black p-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        <span className="font-bold">Conversion Rate:</span>
                        <span className="bg-black text-white px-2 py-1 font-bold text-sm">4.2%</span>
                      </div>
                      <div className="flex items-center justify-between bg-white border-2 border-black p-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        <span className="font-bold">Avg. Order Value:</span>
                        <span className="font-bold">$127</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4 font-sans font-bold">
                    <div className="flex items-center justify-between border-b-2 border-gray-100 pb-2">
                      <span>📈 Sales Growth:</span>
                      <span className="text-green-600 uppercase">+156%</span>
                    </div>
                    <div className="flex items-center justify-between border-b-2 border-gray-100 pb-2">
                      <span>🛒 Cart Recovery:</span>
                      <span className="text-green-600 uppercase">+67%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>📧 Email Revenue:</span>
                      <span className="text-green-600 uppercase">+234%</span>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -top-6 -left-6 bg-accent border-2 border-black text-black px-4 py-2 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-3">
                  💰 ROI: 467%
                </div>
                
                <div className="absolute -bottom-4 -right-4 bg-black text-white border-2 border-white px-4 py-2 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform rotate-3">
                  🚀 Sales +156%
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-20 bg-gray-50 border-b-4 border-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl font-bold text-black mb-6">
                Real Results for <span className="text-primary">Real Businesses</span>
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto font-sans">
                Our ecommerce marketing strategies deliver measurable results that directly impact your bottom line.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {results.map((result, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-black p-8 text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-transform"
                >
                  <div className="text-4xl mb-4">{result.icon}</div>
                  <div className="text-3xl font-heading font-bold text-black mb-2">{result.value}</div>
                  <div className="text-sm font-bold text-gray-600 uppercase">{result.metric}</div>
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
                Our Proven <span className="bg-accent px-2">Growth Process</span>
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto font-sans">
                We follow a systematic approach to scale your ecommerce business and maximize your ROI.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-black p-8 text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-transform"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-black text-white rounded-full mb-6 border-2 border-black shadow-[4px_4px_0px_0px_#CCFF00]">
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

        {/* Services Section */}
        <section className="py-20 bg-gray-50 border-b-4 border-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-heading text-4xl font-bold text-black mb-6">
                  Complete <span className="text-primary">Ecommerce Growth</span> Solution
                </h2>
                
                <p className="text-xl text-gray-700 mb-8 font-sans">
                  Everything you need to turn your online store into a profitable, 
                  scalable business that generates consistent revenue.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center gap-3 bg-white border-2 border-black p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      <CheckCircle className="h-5 w-5 text-black flex-shrink-0" />
                      <span className="text-black font-bold font-sans">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative mt-12 lg:mt-0">
                <div className="bg-black p-8 border-2 border-black shadow-[12px_12px_0px_0px_#CCFF00]">
                  <div className="text-center text-white mb-8">
                    <h3 className="font-heading text-3xl font-bold mb-2">Ready to Scale?</h3>
                    <p className="text-gray-300 font-sans">Get a free audit of your store today.</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 border-2 border-white">
                      <div className="text-sm text-gray-500 uppercase font-bold mb-1">Current Revenue</div>
                      <div className="text-2xl font-bold text-black">$10k - $50k / mo</div>
                    </div>
                    <div className="bg-white p-4 border-2 border-white">
                      <div className="text-sm text-gray-500 uppercase font-bold mb-1">Target Revenue</div>
                      <div className="text-2xl font-bold text-green-600">$100k+ / mo</div>
                    </div>
                    <a
                      href="https://link.millennialmoneymarketing.com/widget/booking/5HjJ1VBH28PwTwAdzIQb"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button className="w-full bg-primary text-black hover:bg-white hover:text-black border-2 border-primary hover:border-white rounded-none font-heading font-bold h-14 text-lg mt-4">
                        Get Your Free Audit
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
