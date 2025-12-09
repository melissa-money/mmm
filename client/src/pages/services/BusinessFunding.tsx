import { DollarSign, CreditCard, TrendingUp, Zap, CheckCircle, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

export default function BusinessFunding() {
  const qualificationPaths = [
    {
      icon: CreditCard,
      title: 'Personal Credit',
      amount: '$15K - $150K',
      description: 'Qualify with good personal credit for 0% business credit lines and cards.',
      requirements: [
        '680 or better credit score',
        'On-time payment history',
        'Decent sized credit card history',
        '0% APR for up to 18 months',
      ],
      color: 'bg-blue-400',
    },
    {
      icon: TrendingUp,
      title: 'Income Verification',
      amount: 'Up to $100K',
      description: 'Qualify based on your verifiable personal income and manageable debts.',
      requirements: [
        'W2 if employed',
        'Last 2 years taxes if self-employed',
        'Manageable personal debts',
        'Verifiable income documentation',
      ],
      color: 'bg-green-400',
    },
    {
      icon: DollarSign,
      title: 'Business Financials',
      amount: 'Up to $1 Million',
      description: 'Leverage your business performance for larger funding opportunities.',
      requirements: [
        '$15K+ monthly deposits (last 90 days)',
        'Or 2 years profitable tax returns',
        'Business bank statements',
        'Strong business performance history',
      ],
      color: 'bg-orange-400',
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Apply For Funding',
      description: 'Within minutes, access the very best business funding options available on the entire funding marketplace.',
      icon: Zap,
    },
    {
      step: '02',
      title: 'Get Pre-Approved',
      description: 'Receive your free pre-approval with a soft pull that will not hurt your credit score.',
      icon: CheckCircle,
    },
    {
      step: '03',
      title: 'Receive the Funds',
      description: 'Have your funding deposited in as little as 24-72 hours and start growing your business.',
      icon: DollarSign,
    },
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
                  <DollarSign className="h-5 w-5" />
                  <span className="font-heading font-bold uppercase tracking-wider">Business Funding Services</span>
                </div>

                <h1 className="font-heading text-5xl md:text-6xl font-bold text-black leading-tight mb-6">
                  Get <span className="bg-primary px-2">$10K to $1 Million</span> in Business Funding Fast
                </h1>

                <p className="text-xl text-gray-700 mb-8 font-sans">
                  Access the capital you need to grow your business with multiple qualification
                  paths. Whether you have great credit, steady income, or strong business financials,
                  we can help you secure funding in as little as 24-72 hours.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <a
                    href="https://www.7figurescredit.com/?a_aid=millennialfunds"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full sm:w-auto bg-black text-white hover:bg-primary hover:text-black border-2 border-black rounded-none font-heading font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all h-14 px-8 text-lg">
                      Apply For Funding Now <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </a>
                </div>

                <div className="grid grid-cols-3 gap-4 border-2 border-black p-4 bg-gray-50 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <div className="text-center border-r-2 border-black last:border-r-0">
                    <div className="text-2xl font-heading font-bold text-black">$10K-$1M</div>
                    <div className="text-sm font-bold text-gray-600 uppercase">Range</div>
                  </div>
                  <div className="text-center border-r-2 border-black last:border-r-0">
                    <div className="text-2xl font-heading font-bold text-black">24-72hrs</div>
                    <div className="text-sm font-bold text-gray-600 uppercase">Speed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-heading font-bold text-black">0%</div>
                    <div className="text-sm font-bold text-gray-600 uppercase">APR Options</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white border-2 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  <div className="bg-primary border-2 border-black p-6 mb-8 transform rotate-1">
                    <h3 className="font-heading text-2xl font-bold text-black mb-4 uppercase">Funding Tiers</h3>
                    <div className="space-y-3 font-sans">
                      <div className="flex items-center justify-between bg-white border-2 border-black p-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        <span className="font-bold">Personal Credit</span>
                        <span className="bg-black text-white px-2 py-1 font-bold text-sm">$15K-$150K</span>
                      </div>
                      <div className="flex items-center justify-between bg-white border-2 border-black p-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        <span className="font-bold">Income Based</span>
                        <span className="bg-black text-white px-2 py-1 font-bold text-sm">Up to $100K</span>
                      </div>
                      <div className="flex items-center justify-between bg-white border-2 border-black p-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        <span className="font-bold">Business Financials</span>
                        <span className="bg-black text-white px-2 py-1 font-bold text-sm">Up to $1M</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 font-sans font-bold">
                    <div className="flex items-center justify-between border-b-2 border-gray-100 pb-2">
                      <span>Pre-Approval Time:</span>
                      <span className="text-green-600 uppercase">Minutes</span>
                    </div>
                    <div className="flex items-center justify-between border-b-2 border-gray-100 pb-2">
                      <span>Credit Impact:</span>
                      <span className="text-green-600 uppercase">No Hard Pull</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Funding Speed:</span>
                      <span className="text-green-600 uppercase">24-72 Hours</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Qualification Paths */}
        <section className="py-20 bg-gray-50 border-b-4 border-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl font-bold text-black mb-6">
                3 Ways to <span className="text-accent">Qualify</span>
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto font-sans">
                We have funding options for every stage of business. Choose the path that fits your situation best.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {qualificationPaths.map((path, index) => (
                <div key={index} className="bg-white border-2 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-transform h-full flex flex-col">
                  <div className={`w-16 h-16 ${path.color} border-2 border-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6`}>
                    <path.icon className="h-8 w-8 text-black" />
                  </div>
                  
                  <h3 className="font-heading text-2xl font-bold text-black mb-2">{path.title}</h3>
                  <div className="text-xl font-bold text-primary mb-4">{path.amount}</div>
                  <p className="text-gray-700 mb-6 font-sans">{path.description}</p>
                  
                  <div className="mt-auto">
                    <h4 className="font-bold text-black uppercase text-sm mb-3 border-b-2 border-black pb-1 inline-block">Requirements:</h4>
                    <ul className="space-y-2">
                      {path.requirements.map((req, i) => (
                        <li key={i} className="flex items-start text-sm text-gray-600 font-sans">
                          <span className="mr-2 text-black font-bold">•</span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
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
                Simple <span className="bg-secondary px-2">3-Step Process</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-12 relative">
              {/* Connecting Line (Desktop) */}
              <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-black z-0 transform -translate-y-1/2"></div>

              {process.map((step, index) => (
                <div key={index} className="relative z-10 bg-white p-6 text-center">
                  <div className="w-24 h-24 bg-black text-white border-4 border-white outline outline-2 outline-black rounded-full flex items-center justify-center mx-auto mb-6 shadow-[4px_4px_0px_0px_#CCFF00]">
                    <step.icon className="h-10 w-10" />
                  </div>
                  <div className="font-heading text-6xl font-bold text-gray-100 absolute top-0 left-1/2 transform -translate-x-1/2 -z-10 select-none">
                    {step.step}
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-black mb-4 mt-2">{step.title}</h3>
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
              Ready to Fund Your <span className="text-accent">Growth</span>?
            </h2>
            
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-sans">
              Don't let a lack of capital hold your business back. Get pre-approved in minutes
              without affecting your credit score.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://www.7figurescredit.com/?a_aid=millennialfunds" target="_blank" rel="noopener noreferrer">
                <Button className="h-16 px-10 text-xl bg-accent text-black hover:bg-white hover:text-black border-2 border-white rounded-none font-heading font-bold shadow-[6px_6px_0px_0px_#fff] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0px_0px_#fff] transition-all">
                  Get Pre-Approved Now
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
