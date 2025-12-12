import { Newspaper, Globe, Radio, TrendingUp, CheckCircle, ArrowRight, Share2, Award } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

// Service page for Press Release Services
export default function PressReleaseServices() {
  const tier1Channels = [
    'Digital Journal',
    'TheStreet',
    'NewsRamp',
    'USAToday',
    'DA80 Authority Sites',
  ];

  const tier2Channels = [
    'Local & National Digital News Media',
    'Broadcast News | TV, Radio, Magazine',
    'Financial Newswire Network',
    'News & Media Coverage - Local, Regional',
    'Canadian Broadcast News Network',
  ];

  const additionalChannels = [
    'Street Insider',
    'Benzinga',
    'MarketWatch',
    'Associated Press (AP)',
    'Google News',
  ];

  const benefits = [
    {
      title: 'Broad Coverage',
      description: 'Seamlessly distribute press releases to a wide network of media outlets, journalists, and online publications.',
      icon: Globe,
    },
    {
      title: 'Targeted Reach',
      description: 'Ensure your news reaches the right audience effectively, maximizing visibility for your brand.',
      icon: Target,
    },
    {
      title: 'Authority Building',
      description: 'Get featured on high-authority sites like USAToday, Digital Journal, and TheStreet to build trust and credibility.',
      icon: Award,
    },
    {
      title: 'SEO Boost',
      description: 'Gain valuable backlinks from reputable news sources to improve your search engine rankings.',
      icon: TrendingUp,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-12 sm:py-20 bg-white border-b-4 border-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div>
                <div className="inline-flex items-center space-x-2 bg-black text-white px-4 py-2 border-2 border-black shadow-[4px_4px_0px_0px_#FF69B4] mb-6 sm:mb-8 transform -rotate-2">
                  <Newspaper className="h-5 w-5" />
                  <span className="font-heading font-bold uppercase tracking-wider text-sm sm:text-base">Press Release Services</span>
                </div>

                <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl font-bold text-black leading-tight mb-4 sm:mb-6">
                  Get Featured on <span className="bg-secondary px-2 inline-block">Top News Sites</span>
                </h1>

                <p className="text-lg sm:text-xl text-gray-700 mb-6 sm:mb-8 font-sans">
                  Seamlessly distribute press releases to a wide network of media outlets, journalists, and online publications. 
                  Maximize visibility and reach your target audience effectively.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8 sm:mb-12">
                  <a
                    href="https://link.millennialmoneymarketing.com/widget/booking/5HjJ1VBH28PwTwAdzIQb"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full sm:w-auto bg-black text-white hover:bg-primary hover:text-black border-2 border-black rounded-none font-heading font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg whitespace-normal py-4 h-auto">
                      Start Your Distribution <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </a>
                </div>

                <div className="grid grid-cols-2 gap-4 border-2 border-black p-4 bg-gray-50 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <div className="text-center border-r-2 border-black">
                    <div className="text-2xl sm:text-3xl font-heading font-bold text-black">500+</div>
                    <div className="text-xs sm:text-sm font-bold text-gray-600 uppercase">News Outlets</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-heading font-bold text-black">DA 80+</div>
                    <div className="text-xs sm:text-sm font-bold text-gray-600 uppercase">Authority Sites</div>
                  </div>
                </div>
              </div>

              <div className="relative mt-8 lg:mt-0">
                <div className="bg-white border-2 border-black p-6 sm:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  <div className="bg-accent border-2 border-black p-4 sm:p-6 mb-6 sm:mb-8 transform rotate-1">
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-black mb-4 uppercase">Distribution Network</h3>
                    <div className="space-y-3 font-sans">
                      <div className="flex items-center gap-3 bg-white border-2 border-black p-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/USA_Today_logo.svg/1200px-USA_Today_logo.svg.png" alt="USA Today" className="h-6 object-contain" />
                        <span className="font-bold ml-auto">Tier 1</span>
                      </div>
                      <div className="flex items-center gap-3 bg-white border-2 border-black p-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        <span className="font-heading font-bold text-lg">Benzinga</span>
                        <span className="font-bold ml-auto">Financial</span>
                      </div>
                      <div className="flex items-center gap-3 bg-white border-2 border-black p-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        <span className="font-heading font-bold text-lg">Digital Journal</span>
                        <span className="font-bold ml-auto">Global</span>
                      </div>
                      <div className="flex items-center gap-3 bg-white border-2 border-black p-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        <span className="font-heading font-bold text-lg">Google News</span>
                        <span className="font-bold ml-auto">Search</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4 font-sans font-bold">
                    <div className="flex items-center justify-between border-b-2 border-gray-100 pb-2">
                      <span>📰 News Sites:</span>
                      <span className="text-green-600 uppercase">✓ Guaranteed</span>
                    </div>
                    <div className="flex items-center justify-between border-b-2 border-gray-100 pb-2">
                      <span>📺 Broadcast:</span>
                      <span className="text-green-600 uppercase">✓ TV & Radio</span>
                    </div>
                    <div className="flex items-center justify-between border-b-2 border-gray-100 pb-2">
                      <span>📈 Financial:</span>
                      <span className="text-green-600 uppercase">✓ Included</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>🔍 Visibility:</span>
                      <span className="text-green-600 uppercase">Maximum</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Distribution Channels Section */}
        <section className="py-12 sm:py-20 bg-gray-50 border-b-4 border-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-16">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-black mb-4 sm:mb-6">
                Extensive <span className="text-primary">Distribution Channels</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto font-sans">
                We distribute your news to the most authoritative platforms in the industry.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Tier 1 Column */}
              <div className="bg-white border-2 border-black p-6 sm:p-8 shadow-[6px_6px_0px_0px_#CCFF00] sm:shadow-[8px_8px_0px_0px_#CCFF00]">
                <div className="flex items-center gap-4 mb-6 border-b-2 border-black pb-4">
                  <div className="bg-black p-3 text-white">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-black uppercase">Tier 1: High Impact</h3>
                    <p className="text-xs font-bold text-gray-500">Authority & Trust</p>
                  </div>
                </div>
                <ul className="space-y-4">
                  {tier1Channels.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-black flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 font-sans text-base sm:text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tier 2 Column */}
              <div className="bg-white border-2 border-black p-6 sm:p-8 shadow-[6px_6px_0px_0px_#FF69B4] sm:shadow-[8px_8px_0px_0px_#FF69B4]">
                <div className="flex items-center gap-4 mb-6 border-b-2 border-black pb-4">
                  <div className="bg-black p-3 text-white">
                    <Share2 className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-black uppercase">Tier 2: Max Reach</h3>
                    <p className="text-xs font-bold text-gray-500">Comprehensive Coverage</p>
                  </div>
                </div>
                <ul className="space-y-4">
                  {tier2Channels.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-black flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 font-sans text-base sm:text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Additional Column */}
              <div className="bg-white border-2 border-black p-6 sm:p-8 shadow-[6px_6px_0px_0px_#FFD700] sm:shadow-[8px_8px_0px_0px_#FFD700]">
                <div className="flex items-center gap-4 mb-6 border-b-2 border-black pb-4">
                  <div className="bg-black p-3 text-white">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-black uppercase">Financial & Search</h3>
                    <p className="text-xs font-bold text-gray-500">Niche & Visibility</p>
                  </div>
                </div>
                <ul className="space-y-4">
                  {additionalChannels.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-black flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 font-sans text-base sm:text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 sm:py-20 bg-white border-b-4 border-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-16">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-black mb-4 sm:mb-6">
                Why Use Our <span className="bg-accent px-2 inline-block">Press Release Service?</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto font-sans">
                More than just news distribution - it's a powerful tool for growth and authority.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-black p-6 sm:p-8 text-left shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-transform"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-black text-white rounded-full mb-4 sm:mb-6 border-2 border-black shadow-[4px_4px_0px_0px_#FF69B4]">
                    <benefit.icon className="h-6 w-6 sm:h-8 sm:w-8" />
                  </div>
                  
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4">{benefit.title}</h3>
                  <p className="text-gray-700 font-sans text-base sm:text-lg">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-20 bg-black text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Ready to Make <span className="text-accent">Headlines?</span>
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-10 max-w-2xl mx-auto font-sans">
              Get your business featured on the world's most trusted news platforms today.
            </p>

            <a href="https://link.millennialmoneymarketing.com/widget/booking/5HjJ1VBH28PwTwAdzIQb" target="_blank" rel="noopener noreferrer">
              <Button className="w-full sm:w-auto h-14 sm:h-16 px-6 sm:px-10 text-lg sm:text-xl bg-accent text-black hover:bg-white hover:text-black border-2 border-white rounded-none font-heading font-bold shadow-[4px_4px_0px_0px_#fff] sm:shadow-[6px_6px_0px_0px_#fff] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0px_0px_#fff] transition-all whitespace-normal h-auto py-4">
                Book Your Strategy Call
              </Button>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

import { Target } from 'lucide-react';
