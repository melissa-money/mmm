import { Mail, Shield, Settings, MailCheck, FileText, CheckCircle, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

export default function EmailDeliverability() {
  const benefits = [
    'Increase email marketing ROI by ensuring messages reach inboxes',
    'Protect your sender reputation and domain authority',
    'Reduce bounce rates and improve engagement metrics',
    'Avoid spam filters and blacklist issues',
    'Expert guidance from certified email deliverability specialists',
    'Maximize campaign effectiveness and conversion rates',
  ];

  const process = [
    {
      step: '01',
      title: 'Initial Assessment & Blacklist Scan',
      description: 'Scan your domain and IP addresses against 100+ major blacklists to identify any existing issues.',
      icon: Shield,
    },
    {
      step: '02',
      title: 'DNS Records Audit',
      description: 'Verify SPF, DKIM, DMARC, and MX records are properly configured for optimal deliverability.',
      icon: Settings,
    },
    {
      step: '03',
      title: 'Inbox Placement Testing',
      description: 'Test email delivery across Gmail, Outlook, Yahoo, Apple Mail, and other major providers.',
      icon: MailCheck,
    },
    {
      step: '04',
      title: 'Report & Implementation',
      description: 'Receive detailed audit report with actionable recommendations and ongoing monitoring guidance.',
      icon: FileText,
    },
  ];

  const services = [
    'Comprehensive blacklist analysis (100+ lists)',
    'DNS configuration audit (SPF, DKIM, DMARC)',
    'MX records and domain authentication setup',
    'Inbox placement testing across major providers',
    'Detailed audit report with priority issues',
    'Actionable recommendations for improvement',
    'Step-by-step removal guidance for blacklist listings',
    'Ongoing monitoring suggestions',
    'Sender reputation protection strategies',
  ];

  const results = [
    { metric: 'Blacklists Scanned', value: '100+', icon: '🛡️' },
    { metric: 'Average Inbox Rate Increase', value: '84%', icon: '📬' },
    { metric: 'Bounce Rate Reduction', value: '67%', icon: '📉' },
    { metric: 'Client Success Rate', value: '98%', icon: '⭐' },
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
                  <Mail className="h-5 w-5" />
                  <span className="font-heading font-bold uppercase tracking-wider">Email Deliverability Services</span>
                </div>

                <h1 className="font-heading text-5xl md:text-6xl font-bold text-black leading-tight mb-6">
                  Ensure Your Emails Land in the <span className="bg-secondary px-2">Inbox</span>, Not Spam
                </h1>

                <p className="text-xl text-gray-700 mb-8 font-sans">
                  Poor email deliverability can severely impact your marketing ROI and brand reputation.
                  Our comprehensive email deliverability assessment and optimization service ensures your
                  marketing campaigns reach their intended destination every time.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <a
                    href="https://link.millennialmoneymarketing.com/widget/booking/5HjJ1VBH28PwTwAdzIQb"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full sm:w-auto bg-black text-white hover:bg-primary hover:text-black border-2 border-black rounded-none font-heading font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all h-14 px-8 text-lg">
                      Get Your Deliverability Audit <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </a>
                </div>

                <div className="grid grid-cols-2 gap-4 border-2 border-black p-4 bg-gray-50 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <div className="text-center border-r-2 border-black">
                    <div className="text-3xl font-heading font-bold text-black">100+</div>
                    <div className="text-sm font-bold text-gray-600 uppercase">Blacklists Scanned</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-heading font-bold text-black">84%</div>
                    <div className="text-sm font-bold text-gray-600 uppercase">Avg. Inbox Rate Increase</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white border-2 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  <div className="bg-primary border-2 border-black p-6 mb-8 transform rotate-1">
                    <h3 className="font-heading text-2xl font-bold text-black mb-4 uppercase">Deliverability Dashboard</h3>
                    <div className="space-y-3 font-sans">
                      <div className="flex items-center justify-between bg-white border-2 border-black p-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        <span className="font-bold">Inbox Placement Rate:</span>
                        <span className="bg-black text-white px-2 py-1 font-bold text-sm">94.2%</span>
                      </div>
                      <div className="flex items-center justify-between bg-white border-2 border-black p-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        <span className="font-bold">Spam Folder Rate:</span>
                        <span className="bg-black text-white px-2 py-1 font-bold text-sm">2.1%</span>
                      </div>
                      <div className="flex items-center justify-between bg-white border-2 border-black p-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        <span className="font-bold">Bounce Rate:</span>
                        <span className="bg-black text-white px-2 py-1 font-bold text-sm">1.2%</span>
                      </div>
                      <div className="flex items-center justify-between bg-white border-2 border-black p-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        <span className="font-bold">Sender Score:</span>
                        <span className="bg-black text-white px-2 py-1 font-bold text-sm">98/100</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4 font-sans font-bold">
                    <div className="flex items-center justify-between border-b-2 border-gray-100 pb-2">
                      <span>🛡️ Blacklist Status:</span>
                      <span className="text-green-600 uppercase">✓ Clean</span>
                    </div>
                    <div className="flex items-center justify-between border-b-2 border-gray-100 pb-2">
                      <span>🔐 SPF/DKIM/DMARC:</span>
                      <span className="text-green-600 uppercase">✓ Configured</span>
                    </div>
                    <div className="flex items-center justify-between border-b-2 border-gray-100 pb-2">
                      <span>📧 DNS Records:</span>
                      <span className="text-green-600 uppercase">✓ Optimized</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>📊 Engagement Rate:</span>
                      <span className="text-green-600 uppercase">+127%</span>
                    </div>
                  </div>
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
                Proven <span className="text-primary">Email Deliverability</span> Results
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto font-sans">
                Our comprehensive email deliverability service delivers measurable improvements that directly impact your email marketing success.
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
                Our Optimization <span className="bg-accent px-2">Process</span>
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto font-sans">
                We follow a systematic approach to identify and fix deliverability issues.
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
                  Complete <span className="text-primary">Deliverability</span> Solution
                </h2>
                
                <p className="text-xl text-gray-700 mb-8 font-sans">
                  Everything you need to ensure your emails reach the inbox and drive results.
                </p>

                <div className="space-y-4">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="bg-black text-white p-1">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <span className="text-black font-bold font-sans">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="bg-white border-2 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                  <h3 className="font-heading text-2xl font-bold mb-6 border-b-4 border-primary pb-2 inline-block">Deliverability Package</h3>
                  
                  <div className="space-y-4 font-sans">
                    <div className="flex items-center justify-between border-b-2 border-gray-100 pb-2">
                      <span className="font-bold">✅ Blacklist Scan</span>
                      <span className="text-green-600 font-bold">INCLUDED</span>
                    </div>
                    <div className="flex items-center justify-between border-b-2 border-gray-100 pb-2">
                      <span className="font-bold">✅ DNS Audit</span>
                      <span className="text-green-600 font-bold">INCLUDED</span>
                    </div>
                    <div className="flex items-center justify-between border-b-2 border-gray-100 pb-2">
                      <span className="font-bold">✅ Inbox Testing</span>
                      <span className="text-green-600 font-bold">INCLUDED</span>
                    </div>
                    <div className="flex items-center justify-between border-b-2 border-gray-100 pb-2">
                      <span className="font-bold">✅ Detailed Report</span>
                      <span className="text-green-600 font-bold">INCLUDED</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-bold">✅ Fix Recommendations</span>
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
