import { Wrench, ExternalLink, Info, Search } from 'lucide-react';
import { useState, useMemo } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

export default function Resources() {
  const [searchQuery, setSearchQuery] = useState('');
  const tools = [
    {
      name: 'GoHighLevel',
      description: 'All-in-one marketing platform for agencies and local businesses with CRM, email marketing, SMS, funnel builder, and automation tools.',
      link: 'https://www.gohighlevel.com/?fp_ref=millennial-money-mom91',
      color: 'bg-primary',
    },
    {
      name: 'Bouncer',
      description: 'Powerful, secure email verification platform to validate email addresses and improve deliverability.',
      link: 'https://withlove.usebouncer.com/3nfi6s3gi0x0',
      color: 'bg-secondary',
    },
    {
      name: 'Apify',
      description: 'Web scraping and automation platform. Get free $5 credits to use for data extraction and web automation.',
      link: 'https://apify.com?fpr=8fke5w3',
      color: 'bg-accent',
    },
    {
      name: '1Password',
      description: 'Try 1Password Business free for 14 days. Secure password management for teams and businesses.',
      link: 'https://1password.partnerlinks.io/075e37n5v4iw',
      color: 'bg-blue-400',
    },
    {
      name: 'Notion',
      description: 'Run your whole business in one tool. All-in-one workspace for notes, docs, wikis, and project management.',
      link: 'https://affiliate.notion.so/tje3sqtkukro',
      color: 'bg-purple-400',
    },
    {
      name: 'Google Ads',
      description: 'Get started with Google Ads and reach customers searching for businesses like yours. Advertising platform to drive traffic and grow your business.',
      link: 'https://business.google.com/us/google-ads/welcome-offer/?utm_source=ads-refer&utm_medium=refer-program&utm_campaign=sv-copylinkbutton',
      color: 'bg-orange-400',
    },
    {
      name: 'Google Workspace',
      description: 'Get 10% off Google Workspace - Professional email, cloud storage, and collaboration tools including Gmail, Drive, Docs, and Calendar for businesses.',
      link: 'https://referworkspace.app.goo.gl/jQXr',
      color: 'bg-green-400',
    },
    {
      name: 'Credit Repair Cloud',
      description: 'This Free Webclass Is For Entrepreneurs, Small Business Owners, & Those Just Getting Started',
      link: 'https://get.creditrepaircloud.com/l9zjpnofac8e',
      color: 'bg-gray-400',
    },
  ];

  const filteredTools = useMemo(() => {
    if (!searchQuery.trim()) {
      return tools;
    }

    const query = searchQuery.toLowerCase();
    return tools.filter((tool) => {
      const nameMatch = tool.name.toLowerCase().includes(query);
      const descriptionMatch = tool.description.toLowerCase().includes(query);
      return nameMatch || descriptionMatch;
    });
  }, [searchQuery]);

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-white border-b-4 border-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center space-x-2 bg-black text-white px-4 py-2 border-2 border-black shadow-[4px_4px_0px_0px_#FF69B4] mb-8 transform -rotate-2">
              <Wrench className="h-5 w-5" />
              <span className="font-heading font-bold uppercase tracking-wider">Recommended Resources</span>
            </div>

            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-black leading-tight mb-6">
              Tools & <span className="bg-primary px-2">Resources</span>
            </h1>

            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-10 font-sans">
              We've curated a collection of powerful tools and resources that we use and recommend
              to help businesses succeed. These are the platforms that power modern marketing and business growth.
            </p>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-12 bg-gray-50 border-b-4 border-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-6 w-6 text-black" />
                </div>
                <input
                  type="text"
                  placeholder="Search tools by name or description..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full pl-12 pr-4 py-4 text-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:outline-none focus:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus:translate-x-[2px] focus:translate-y-[2px] transition-all font-sans"
                />
              </div>
              {searchQuery && (
                <div className="mt-4 text-sm font-bold text-gray-600 uppercase tracking-wider">
                  Found <span className="text-black">{filteredTools.length}</span> {filteredTools.length === 1 ? 'tool' : 'tools'}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Tools Grid */}
        <section className="py-20 bg-white border-b-4 border-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="bg-blue-100 border-2 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-12 flex items-start space-x-4">
                <Info className="h-6 w-6 text-black flex-shrink-0 mt-1" />
                <div className="text-left">
                  <p className="text-sm font-sans text-black">
                    <strong className="font-bold uppercase">Affiliate Disclosure:</strong> Some of the links below are affiliate links,
                    which means we may earn a commission if you make a purchase through these links at no additional cost to you.
                    We only recommend tools we personally use and trust to deliver value for your business.
                  </p>
                </div>
              </div>

              {filteredTools.length === 0 ? (
                <div className="text-center py-20 border-2 border-black border-dashed">
                  <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="font-heading text-2xl font-bold text-black mb-2">No tools found</h3>
                  <p className="text-gray-600 font-sans">Try adjusting your search terms</p>
                </div>
              ) : (
                <div className="space-y-8">
                  {filteredTools.map((tool, index) => (
                    <div
                      key={index}
                      className="bg-white border-2 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all group"
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                        <div className="flex-1">
                          <div className="flex items-center gap-4 mb-3">
                            <div className={`w-4 h-4 ${tool.color} border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]`}></div>
                            <h3 className="font-heading text-3xl font-bold text-black group-hover:text-primary transition-colors">
                              {tool.name}
                            </h3>
                          </div>
                          <p className="text-gray-700 leading-relaxed font-sans text-lg">
                            {tool.description}
                          </p>
                        </div>
                        <div className="flex-shrink-0">
                          <a
                            href={tool.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button className="w-full md:w-auto bg-black text-white hover:bg-primary hover:text-black border-2 border-black rounded-none font-heading font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all h-12 px-6">
                              Learn More <ExternalLink className="ml-2 h-4 w-4" />
                            </Button>
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-black text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Need Help Choosing the <span className="text-accent">Right Tools</span>?
            </h2>
            
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-sans">
              Not sure which tools are right for your business? Schedule a free consultation
              and we'll help you build the perfect marketing tech stack for your goals.
            </p>

            <a href="https://link.millennialmoneymarketing.com/widget/booking/5HjJ1VBH28PwTwAdzIQb" target="_blank" rel="noopener noreferrer">
              <Button className="h-16 px-10 text-xl bg-accent text-black hover:bg-white hover:text-black border-2 border-white rounded-none font-heading font-bold shadow-[6px_6px_0px_0px_#fff] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0px_0px_#fff] transition-all">
                Schedule Free Consultation
              </Button>
            </a>

            <div className="mt-8 text-sm font-bold text-gray-400 uppercase tracking-wider">
              Free 30-minute session • No commitment • Expert guidance
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
