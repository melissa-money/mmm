import { MapPin, ShoppingCart, Star, Palette, Mail, Users, FileText, ArrowRight, CheckCircle, DollarSign } from 'lucide-react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

export default function Services() {
  const services = [
    {
      icon: MapPin,
      title: 'Local Business Marketing',
      description: 'Dominate your local market with proven strategies that put you ahead of the competition. Get found by customers when they need you most.',
      features: ['Local SEO Optimization', 'Citation Management', 'Local Content Strategy', 'Competitor Analysis'],
      href: '/services/local-business-marketing',
      color: 'bg-primary',
      stats: { improvement: '87%', customers: '3x' },
    },
    {
      icon: ShoppingCart,
      title: 'Ecommerce Marketing',
      description: 'Scale your online store with data-driven marketing strategies that drive sales and build customer loyalty.',
      features: ['Conversion Optimization', 'Email Marketing', 'Social Media Ads', 'Product SEO'],
      href: '/services/ecommerce-marketing',
      color: 'bg-secondary',
      stats: { improvement: '156%', customers: '2.3x' },
    },
    {
      icon: Star,
      title: 'Google Business Profile',
      description: 'Optimize your Google presence to attract more customers, generate reviews, and build local trust.',
      features: ['Profile Optimization', 'Review Management', 'Post Management', 'Q&A Management'],
      href: '/services/google-business-profile',
      color: 'bg-accent',
      stats: { improvement: '127%', customers: '4.8★' },
    },
    {
      icon: Palette,
      title: 'Web Design',
      description: 'Beautiful, conversion-focused websites that turn visitors into customers and represent your brand perfectly.',
      features: ['Responsive Design', 'SEO Optimization', 'Speed Optimization', 'User Experience'],
      href: '/services/web-design',
      color: 'bg-blue-400',
      stats: { improvement: '240%', customers: '3 sec' },
    },
    {
      icon: Mail,
      title: 'Email Deliverability Audit',
      description: 'Ensure your email marketing reaches the inbox with comprehensive deliverability testing and optimization.',
      features: ['Blacklist Scanning', 'DNS Configuration', 'Inbox Testing', 'Detailed Reports'],
      href: '/services/email-deliverability',
      color: 'bg-purple-400',
      stats: { improvement: '84%', customers: '100+' },
    },
    {
      icon: Users,
      title: 'Virtual Assistant Placement',
      description: 'Automate and delegate with skilled VAs trained in automation tools, content creation, and business support.',
      features: ['Automation Engineers', 'Video Editors', 'Social Media Managers', 'Executive Assistants'],
      href: '/services/virtual-assistant-placement',
      color: 'bg-orange-400',
      stats: { improvement: '200+', customers: '20hrs' },
    },
    {
      icon: FileText,
      title: 'DBA Filing Service',
      description: 'File your DBA with a strategic, keyword-rich business name that helps customers find you online.',
      features: ['SEO-Optimized Naming', 'Complete Paperwork', 'Name Availability Check', 'Fast Processing'],
      href: '/services/dba-filing',
      color: 'bg-gray-400',
      stats: { improvement: 'Keywords', customers: 'Found' },
    },
    {
      icon: DollarSign,
      title: 'Business Funding',
      description: 'Access $10K to $1M in business funding fast with multiple qualification paths and funding in 24-72 hours.',
      features: ['$15K-$150K Credit Lines', 'Income-Based Loans', 'SBA Loans to $1M', 'Fast 24-72hr Funding'],
      href: '/services/business-funding',
      color: 'bg-green-400',
      stats: { improvement: '$1M', customers: '24-72hrs' },
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
              Digital Marketing Services That <span className="bg-primary px-2">Deliver Results</span>
            </h1>
            
            <p className="text-xl text-gray-700 mb-10 max-w-4xl mx-auto font-sans">
              We help businesses rank #1 on Google, get more 5-star reviews, and grow their customer base 
              without spending a fortune on ads. Choose from our comprehensive suite of marketing services.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <a href="https://link.millennialmoneymarketing.com/widget/booking/5HjJ1VBH28PwTwAdzIQb" target="_blank" rel="noopener noreferrer">
                <Button className="h-14 px-10 text-lg bg-black text-white hover:bg-secondary hover:text-black border-2 border-black rounded-none font-heading font-bold shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all">
                  Get Your Free Marketing Audit
                </Button>
              </a>
            </div>

            {/* Trust Stats */}
            <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <div className="bg-white border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="font-heading text-4xl font-bold text-black mb-1">150+</div>
                <div className="text-sm font-bold uppercase tracking-wider text-gray-600">Businesses Helped</div>
              </div>
              <div className="bg-white border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="font-heading text-4xl font-bold text-black mb-1">98%</div>
                <div className="text-sm font-bold uppercase tracking-wider text-gray-600">Success Rate</div>
              </div>
              <div className="bg-white border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="font-heading text-4xl font-bold text-black mb-1">30 days</div>
                <div className="text-sm font-bold uppercase tracking-wider text-gray-600">To See Results</div>
              </div>
              <div className="bg-white border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="font-heading text-4xl font-bold text-black mb-1">5⭐</div>
                <div className="text-sm font-bold uppercase tracking-wider text-gray-600">Average Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-gray-50 border-b-4 border-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-heading text-5xl font-bold text-black mb-6">
                Choose Your <span className="bg-secondary px-2">Growth Strategy</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
                Each service is designed to work independently or together as part of a comprehensive 
                marketing strategy that drives real results.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all group"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 ${service.color} border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}>
                      <service.icon className="h-8 w-8 text-black" />
                    </div>
                    
                    <div className="text-right">
                      <div className="font-heading text-3xl font-bold text-black">{service.stats.improvement}</div>
                      <div className="text-sm font-bold uppercase tracking-wider text-gray-600">Avg. Improvement</div>
                    </div>
                  </div>

                  <h3 className="font-heading text-3xl font-bold text-black mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed font-sans text-lg">
                    {service.description}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm font-bold text-gray-800">
                        <CheckCircle className="h-5 w-5 text-black fill-secondary mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mb-8 p-4 bg-gray-100 border-2 border-black">
                    <div className="text-center">
                      <div className="font-heading text-2xl font-bold text-black">{service.stats.improvement}</div>
                      <div className="text-xs font-bold uppercase text-gray-600">Results</div>
                    </div>
                    <div className="text-center">
                      <div className="font-heading text-2xl font-bold text-black">{service.stats.customers}</div>
                      <div className="text-xs font-bold uppercase text-gray-600">Growth</div>
                    </div>
                  </div>

                  <Link href={service.href}>
                    <Button className="w-full bg-black text-white hover:bg-primary hover:text-black border-2 border-black rounded-none font-heading font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all">
                      Learn More <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
