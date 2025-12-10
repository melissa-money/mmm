import { Mail, Target, Zap, Rocket, CheckCircle, ArrowRight, Database, MessageSquare } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

export default function ColdEmailLeadGen() {
  const infrastructure = [
    'Register & configure sending domains',
    'Set up inboxes & warmup tools',
    'Configure DNS records (SPF/DKIM/DMARC)',
    'Cold email software access & configuration',
    'Run deliverability tests & spam-screening',
    'Ongoing technical monitoring',
  ];

  const strategy = [
    'Strategy kick-off call to identify ICP',
    'Craft custom offer angles & CTAs',
    'Fully configured campaign setup',
    'Custom email sequences using proven frameworks',
    'Spintax variations for better deliverability',
    'A/B testing of subject lines & copy',
  ];

  const process = [
    {
      step: '01',
      title: 'Infrastructure Setup',
      description: 'We build your entire sending engine from scratch - domains, inboxes, and technical records - so you never risk your main domain.',
      icon: Database,
    },
    {
      step: '02',
      title: 'Lead Sourcing',
      description: 'We identify and verify your ideal prospects using premium data sources to ensure high relevance and low bounce rates.',
      icon: Target,
    },
    {
      step: '03',
      title: 'Creative Strategy',
      description: 'We craft compelling, personalized email sequences that cut through the noise and get responses from decision makers.',
      icon: MessageSquare,
    },
    {
      step: '04',
      title: 'Launch & Scale',
      description: 'We launch your campaigns, monitor performance daily, and scale up what works to fill your calendar on autopilot.',
      icon: Rocket,
    },
  ];

  const results = [
    { metric: 'Open Rate', value: '60%+', icon: '📧' },
    { metric: 'Reply Rate', value: '5-15%', icon: '💬' },
    { metric: 'Leads/Month', value: '20-50+', icon: '🎯' },
    { metric: 'ROI', value: '10x', icon: '💰' },
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
                <div className="inline-flex items-center space-x-2 bg-black text-white px-4 py-2 border-2 border-black shadow-[4px_4px_0px_0px_#FF69B4] mb-8 transform -rotate-2">
                  <Mail className="h-5 w-5" />
                  <span className="font-heading font-bold uppercase tracking-wider">Cold Email Lead Gen System</span>
                </div>

                <h1 className="font-heading text-5xl md:text-6xl font-bold text-black leading-tight mb-6">
                  Your Automated <span className="bg-secondary px-2">Cold Email Machine</span>
                </h1>

                <p className="text-xl text-gray-700 mb-8 font-sans">
                  Stop chasing leads manually. We build a complete, done-for-you cold email infrastructure 
                  that fills your calendar with qualified sales calls on autopilot.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <a
                    href="https://link.millennialmoneymarketing.com/widget/booking/5HjJ1VBH28PwTwAdzIQb"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full sm:w-auto bg-black text-white hover:bg-primary hover:text-black border-2 border-black rounded-none font-heading font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all h-14 px-8 text-lg">
                      Start Your Campaign <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </a>
                </div>

                <div className="grid grid-cols-2 gap-4 border-2 border-black p-4 bg-gray-50 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <div className="text-center border-r-2 border-black">
                    <div className="text-3xl font-heading font-bold text-black">Done-For-You</div>
                    <div className="text-sm font-bold text-gray-600 uppercase">Complete Setup</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-heading font-bold text-black">Autopilot</div>
                    <div className="text-sm font-bold text-gray-600 uppercase">Lead Generation</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white border-2 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  <div className="bg-accent border-2 border-black p-6 mb-8 transform rotate-1">
                    <h3 className="font-heading text-2xl font-bold text-black mb-4 uppercase">System Dashboard</h3>
                    <div className="space-y-3 font-sans">
                      <div className="flex items-center justify-between bg-white border-2 border-black p-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        <span className="font-bold">Active Campaigns:</span>
                        <span className="bg-black text-white px-2 py-1 font-bold text-sm">3 Running</span>
                      </div>
                      <div className="flex items-center justify-between bg-white border-2 border-black p-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        <span className="font-bold">Emails Sent (This Week):</span>
                        <span className="bg-black text-white px-2 py-1 font-bold text-sm">1,250</span>
                      </div>
                      <div className="flex items-center justify-between bg-white border-2 border-black p-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        <span className="font-bold">Open Rate:</span>
                        <span className="bg-black text-white px-2 py-1 font-bold text-sm">68%</span>
                      </div>
                      <div className="flex items-center justify-between bg-white border-2 border-black p-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        <span className="font-bold">Replies Received:</span>
                        <span className="bg-black text-white px-2 py-1 font-bold text-sm">42 Leads</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4 font-sans font-bold">
                    <div className="flex items-center justify-between border-b-2 border-gray-100 pb-2">
                      <span>🚀 Infrastructure:</span>
                      <span className="text-green-600 uppercase">✓ Ready</span>
                    </div>
                    <div className="flex items-center justify-between border-b-2 border-gray-100 pb-2">
                      <span>🎯 Lead List:</span>
                      <span className="text-green-600 uppercase">✓ Verified</span>
                    </div>
                    <div className="flex items-center justify-between border-b-2 border-gray-100 pb-2">
                      <span>✍️ Copywriting:</span>
                      <span className="text-green-600 uppercase">✓ Optimized</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>📅 Calendar:</span>
                      <span className="text-green-600 uppercase">Filling Up!</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What's Included Section */}
        <section className="py-20 bg-gray-50 border-b-4 border-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl font-bold text-black mb-6">
                What's <span className="text-primary">Included</span>
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto font-sans">
                We handle everything from technical setup to creative strategy.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Infrastructure Column */}
              <div className="bg-white border-2 border-black p-8 shadow-[8px_8px_0px_0px_#CCFF00]">
                <div className="flex items-center gap-4 mb-6 border-b-2 border-black pb-4">
                  <div className="bg-black p-3 text-white">
                    <Settings className="h-6 w-6" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-black uppercase">Infrastructure Setup</h3>
                </div>
                <ul className="space-y-4">
                  {infrastructure.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-black flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 font-sans text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Strategy Column */}
              <div className="bg-white border-2 border-black p-8 shadow-[8px_8px_0px_0px_#FF69B4]">
                <div className="flex items-center gap-4 mb-6 border-b-2 border-black pb-4">
                  <div className="bg-black p-3 text-white">
                    <Zap className="h-6 w-6" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-black uppercase">Creative Strategy</h3>
                </div>
                <ul className="space-y-4">
                  {strategy.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-black flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 font-sans text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-white border-b-4 border-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl font-bold text-black mb-6">
                How It <span className="bg-accent px-2">Works</span>
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto font-sans">
                From zero to fully automated lead generation in 4 simple steps.
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

        {/* CTA Section */}
        <section className="py-20 bg-black text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Ready to Automate Your <span className="text-accent">Lead Gen?</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-sans">
              Let us build your cold email machine so you can focus on closing deals.
            </p>

            <a href="https://link.millennialmoneymarketing.com/widget/booking/5HjJ1VBH28PwTwAdzIQb" target="_blank" rel="noopener noreferrer">
              <Button className="h-16 px-10 text-xl bg-accent text-black hover:bg-white hover:text-black border-2 border-white rounded-none font-heading font-bold shadow-[6px_6px_0px_0px_#fff] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0px_0px_#fff] transition-all">
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

import { Settings } from 'lucide-react';
