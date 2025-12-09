import { FileText, Search, Lightbulb, Shield, CheckCircle, ArrowRight, AlertCircle, Sparkles } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

export default function DBAFiling() {
  const whyDBA = [
    {
      title: 'You Picked a "Cool" Name',
      description: 'Started as "Phoenix Rising LLC" but nobody searching "plumber near me" will find you. Oops.',
      icon: AlertCircle,
    },
    {
      title: 'SEO Wasn\'t on Your Mind',
      description: 'Your legal business name sounded great at 2am, but now you realize "keywords" should have been involved.',
      icon: Search,
    },
    {
      title: 'You Want Multiple Brands',
      description: 'Run a bakery AND a dog grooming service? DBAs let you operate under different names without creating new LLCs.',
      icon: Sparkles,
    },
    {
      title: 'Legal Requirements',
      description: 'Some states require a DBA if you\'re operating under anything other than your legal business name. Boring but necessary.',
      icon: Shield,
    },
  ];

  const proTips = [
    {
      title: 'Put Keywords in Your DBA',
      description: 'Instead of "Sunset Services LLC," go with "Phoenix Emergency Plumber - Sunset Services." See the difference? Google does too.',
      example: 'Bad: "Blue Sky LLC" → Good: "Blue Sky Roofing Phoenix"',
    },
    {
      title: 'Think Like Your Customer',
      description: 'What are they typing into Google? "Wedding photographer Phoenix"? Put those exact words in your DBA.',
      example: 'Bad: "Captured Moments" → Good: "Phoenix Wedding Photographer - Captured Moments"',
    },
    {
      title: 'Location Matters',
      description: 'Adding your city name helps you dominate local searches. "Phoenix" or "Scottsdale" in your DBA = more local visibility.',
      example: 'Bad: "Tech Repairs" → Good: "Scottsdale iPhone Repair & Tech Services"',
    },
    {
      title: 'Be Specific, Not Clever',
      description: 'Clever names are fun but customers search for services, not puns. Save the creativity for your logo.',
      example: 'Bad: "The Mane Event" → Good: "Phoenix Hair Salon & Extensions - The Mane Event"',
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Name Strategy Session',
      description: 'We analyze your market, research keywords, and help you craft a DBA name that actually gets found online.',
      icon: Lightbulb,
    },
    {
      step: '02',
      title: 'Name Availability Check',
      description: 'Before you fall in love with a name, we verify it\'s available and not already taken by competitors.',
      icon: Search,
    },
    {
      step: '03',
      title: 'We Handle the Paperwork',
      description: 'Forms, filings, county registrations - we deal with all the bureaucratic fun stuff so you don\'t have to.',
      icon: FileText,
    },
    {
      step: '04',
      title: 'Get Your Certificate',
      description: 'Receive your official DBA certificate and start operating under your new, SEO-friendly business name.',
      icon: Shield,
    },
  ];

  const benefits = [
    'Strategic business name with built-in SEO keywords',
    'Increase online visibility and local search rankings',
    'Professional handling of all DBA paperwork and filings',
    'Name availability research and trademark screening',
    'Compliance with Arizona state and county requirements',
    'Fast processing and official DBA certificate delivery',
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
                  <FileText className="h-5 w-5" />
                  <span className="font-heading font-bold uppercase tracking-wider">DBA Filing Service</span>
                </div>

                <h1 className="font-heading text-5xl md:text-6xl font-bold text-black leading-tight mb-6">
                  We Handle the Paperwork. <span className="bg-secondary px-2">You Get Found.</span>
                </h1>

                <p className="text-xl text-gray-700 mb-8 font-sans">
                  Most businesses pick names that sound cool but tank their SEO. We help you file a DBA (Doing Business As) with keywords baked in so customers can actually find you.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <a
                    href="https://link.millennialmoneymarketing.com/widget/booking/5HjJ1VBH28PwTwAdzIQb"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full sm:w-auto bg-black text-white hover:bg-primary hover:text-black border-2 border-black rounded-none font-heading font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all h-14 px-8 text-lg">
                      Get Your DBA Filed <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white border-2 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  <div className="bg-accent border-2 border-black p-6 mb-8 transform rotate-1">
                    <h3 className="font-heading text-2xl font-bold text-black mb-4 uppercase">The SEO Secret</h3>
                    <p className="font-sans font-bold text-lg">
                      "Phoenix Emergency Plumber" ranks better than "Smith Services LLC".
                    </p>
                  </div>
                  
                  <div className="space-y-4 font-sans font-bold">
                    <div className="flex items-center justify-between border-b-2 border-gray-100 pb-2">
                      <span>📝 Paperwork:</span>
                      <span className="text-green-600 uppercase">Handled</span>
                    </div>
                    <div className="flex items-center justify-between border-b-2 border-gray-100 pb-2">
                      <span>🔍 Name Search:</span>
                      <span className="text-green-600 uppercase">Included</span>
                    </div>
                    <div className="flex items-center justify-between border-b-2 border-gray-100 pb-2">
                      <span>🚀 SEO Strategy:</span>
                      <span className="text-green-600 uppercase">Included</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>📜 Certificate:</span>
                      <span className="text-green-600 uppercase">Delivered</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why DBA Section */}
        <section className="py-20 bg-gray-50 border-b-4 border-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl font-bold text-black mb-6">
                Why Your Business <span className="text-primary">Needs a DBA</span>
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto font-sans">
                Let's be honest: most entrepreneurs pick their business name at midnight after three coffees, file their LLC, and never think about SEO until it's too late.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {whyDBA.map((reason, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-transform"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-black text-white mb-4 border-2 border-black shadow-[4px_4px_0px_0px_#CCFF00]">
                    <reason.icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-black mb-3">{reason.title}</h3>
                  <p className="text-gray-700 font-sans">{reason.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-secondary border-2 border-black p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-start gap-4">
                <Lightbulb className="h-8 w-8 text-black flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-heading text-2xl md:text-3xl font-bold mb-3 text-black">
                    The Pro Move: Keywords in Your Business Name
                  </h3>
                  <p className="text-lg text-gray-800 font-sans font-bold">
                    Here's what they don't teach you in business school: putting your main service keywords directly in your DBA is like giving Google a cheat sheet. Want to rank for "Phoenix HVAC repair"? Put those exact words in your business name. It's not sexy, but it works.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pro Tips Section */}
        <section className="py-20 bg-white border-b-4 border-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl font-bold text-black mb-6">
                The SEO <span className="bg-accent px-2">Naming Playbook</span>
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto font-sans">
                Stop being clever. Start being searchable. Here's how to name your DBA so customers can actually find you.
              </p>
            </div>

            <div className="space-y-8">
              {proTips.map((tip, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all"
                >
                  <h3 className="font-heading text-2xl font-bold mb-3 text-black">{tip.title}</h3>
                  <p className="text-lg text-gray-700 mb-4 font-sans">{tip.description}</p>
                  <div className="bg-gray-100 border-l-4 border-black p-4 font-mono text-sm md:text-base text-black font-bold">
                    {tip.example}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gray-50 border-b-4 border-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl font-bold text-black mb-6">
                Our DBA <span className="text-primary">Filing Process</span>
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto font-sans">
                We make filing a DBA painless and help you choose a name that works as hard as you do.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {process.map((step, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-transform"
                >
                  <div className="flex items-start gap-6">
                    <div className="font-heading text-5xl font-bold text-gray-200">{step.step}</div>
                    <div className="flex-1">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-black text-white mb-4 border-2 border-black shadow-[4px_4px_0px_0px_#FF69B4]">
                        <step.icon className="h-6 w-6" />
                      </div>
                      <h3 className="font-heading text-2xl font-bold mb-3 text-black">{step.title}</h3>
                      <p className="text-gray-700 font-sans">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's Included Section */}
        <section className="py-20 bg-white border-b-4 border-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-heading text-4xl font-bold text-black mb-6">
                  What's <span className="bg-secondary px-2">Included</span>
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-12">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 bg-gray-50 border-2 border-black p-4 hover:bg-gray-100 transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                  >
                    <CheckCircle className="h-6 w-6 text-black flex-shrink-0 mt-1" />
                    <span className="text-black font-bold font-sans">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="bg-black text-white p-8 md:p-12 text-center border-2 border-black shadow-[8px_8px_0px_0px_#CCFF00]">
                <h3 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                  Ready to Get Found Online?
                </h3>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto font-sans">
                  Let's file your DBA with a name that customers can actually search for and find. Because "cool" doesn't pay the bills - being discoverable does.
                </p>
                <a
                  href="https://link.millennialmoneymarketing.com/widget/booking/5HjJ1VBH28PwTwAdzIQb"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-white text-black hover:bg-primary hover:text-black border-2 border-white rounded-none font-heading font-bold shadow-[4px_4px_0px_0px_#CCFF00] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#CCFF00] transition-all h-14 px-8 text-lg">
                    Start Your DBA Filing
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
