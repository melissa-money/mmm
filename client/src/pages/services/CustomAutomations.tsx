import { Bot, Database, Share2, Zap, Clock, Target, CheckCircle, ArrowRight, TrendingUp, Shield, Users, Lightbulb, BarChart, MessageSquare, FileText, ShoppingCart, Calendar, Mail } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

export default function CustomAutomations() {
  const mainServices = [
    {
      icon: Database,
      title: 'Streamline Data Entry',
      subtitle: 'Eliminate tedious manual work',
      description: 'Say goodbye to hours of manual data entry and human error. Our intelligent automation solutions process information accurately and instantly, freeing your team to focus on what matters most.',
      benefits: [
        'Process invoices and receipts automatically',
        'Extract data from forms and documents',
        'Populate spreadsheets without manual input',
        'Update databases in real-time',
        'Reduce errors by up to 95%',
      ],
      stats: {
        label: 'Time Saved',
        value: '20+ hrs/week',
        icon: Clock,
      },
      color: 'bg-secondary',
    },
    {
      icon: Share2,
      title: 'Social Media Automation',
      subtitle: 'Effortless social media management',
      description: 'Keep your social media presence active and engaging without spending hours every day. Schedule posts, monitor engagement, and analyze performance with ease.',
      benefits: [
        'Auto-schedule content across platforms',
        'Track comments and messages in one place',
        'Generate performance reports automatically',
        'Optimize posting times with AI insights',
        'Never miss an engagement opportunity',
      ],
      stats: {
        label: 'Engagement Boost',
        value: '150%',
        icon: TrendingUp,
      },
      color: 'bg-primary',
    },
    {
      icon: Bot,
      title: 'Custom AI Solutions',
      subtitle: 'Built for your unique business',
      description: 'Every business faces unique challenges. We create bespoke AI automations tailored to your specific workflows, processes, and goals.',
      benefits: [
        'Custom workflow automation',
        'Intelligent document processing',
        'Automated customer communications',
        'Inventory and order management',
        'Integration with your existing tools',
      ],
      stats: {
        label: 'ROI Average',
        value: '340%',
        icon: Target,
      },
      color: 'bg-accent',
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery Call',
      description: 'We learn about your business, identify repetitive tasks, and understand your pain points.',
      icon: MessageSquare,
      duration: '30-60 min',
    },
    {
      step: '02',
      title: 'Workflow Analysis',
      description: 'Our team maps your current processes and identifies the best automation opportunities.',
      icon: BarChart,
      duration: '1-2 weeks',
    },
    {
      step: '03',
      title: 'Custom Development',
      description: 'We build and configure your custom automation solution, keeping you updated throughout.',
      icon: Zap,
      duration: '2-4 weeks',
    },
    {
      step: '04',
      title: 'Launch & Training',
      description: 'Deploy your automation and train your team to use it effectively.',
      icon: Users,
      duration: '1 week',
    },
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'Save 20+ Hours Weekly',
      description: 'Reclaim valuable time by eliminating repetitive manual tasks.',
    },
    {
      icon: Target,
      title: 'Reduce Errors by 95%',
      description: 'AI-powered automation ensures accuracy and consistency.',
    },
    {
      icon: TrendingUp,
      title: 'Scale Without Hiring',
      description: 'Handle more work without increasing headcount.',
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime guarantee.',
    },
    {
      icon: Lightbulb,
      title: 'Gain Competitive Edge',
      description: 'Move faster than competitors stuck in manual processes.',
    },
    {
      icon: Users,
      title: 'Happier Employees',
      description: 'Team focuses on meaningful work, not boring tasks.',
    },
  ];

  const useCases = [
    {
      industry: 'Retail & E-commerce',
      icon: ShoppingCart,
      challenge: 'Manual order processing and inventory updates',
      solution: 'Automated order routing, inventory sync, and customer notifications',
      result: 'Process 10x more orders with same team size',
    },
    {
      industry: 'Professional Services',
      icon: FileText,
      challenge: 'Time-consuming document creation and client communications',
      solution: 'Auto-generate contracts, proposals, and follow-up emails',
      result: 'Close deals 40% faster with consistent communication',
    },
    {
      industry: 'Healthcare & Wellness',
      icon: Calendar,
      challenge: 'Appointment scheduling and patient follow-ups',
      solution: 'Smart scheduling system with automated reminders and confirmations',
      result: 'Reduce no-shows by 70% and save 15 hours per week',
    },
    {
      industry: 'Marketing Agencies',
      icon: Mail,
      challenge: 'Client reporting and campaign management',
      solution: 'Automated report generation and multi-platform campaign tracking',
      result: 'Manage 3x more clients without additional staff',
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
                <div className="inline-flex items-center space-x-2 bg-black text-white px-4 py-2 border-2 border-black shadow-[4px_4px_0px_0px_#CCFF00] mb-8 transform -rotate-2">
                  <Bot className="h-5 w-5" />
                  <span className="font-heading font-bold uppercase tracking-wider">AI-Powered Automation</span>
                </div>

                <h1 className="font-heading text-5xl md:text-6xl font-bold text-black leading-tight mb-6">
                  Stop the busy work. <span className="bg-secondary px-2">Start growing.</span>
                </h1>

                <p className="text-xl text-gray-700 mb-8 font-sans">
                  We create powerful AI automations that handle the repetitive tasks draining your time.
                  Focus on strategy and growth while intelligent systems handle the busy work.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <a
                    href="https://link.millennialmoneymarketing.com/widget/booking/5HjJ1VBH28PwTwAdzIQb"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full sm:w-auto bg-black text-white hover:bg-primary hover:text-black border-2 border-black rounded-none font-heading font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all h-14 px-8 text-lg">
                      Get Your Free Automation Audit <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </a>
                </div>

                <div className="grid grid-cols-2 gap-4 border-2 border-black p-4 bg-gray-50 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <div className="text-center border-r-2 border-black">
                    <div className="text-3xl font-heading font-bold text-black">20+</div>
                    <div className="text-sm font-bold text-gray-600 uppercase">Hours Saved Weekly</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-heading font-bold text-black">340%</div>
                    <div className="text-sm font-bold text-gray-600 uppercase">Average ROI</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white border-2 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  <div className="bg-secondary border-2 border-black p-6 mb-8 transform rotate-1">
                    <h3 className="font-heading text-2xl font-bold text-black mb-4 uppercase">Automation Dashboard</h3>
                    <div className="space-y-3 font-sans">
                      <div className="flex items-center justify-between bg-white border-2 border-black p-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        <span className="font-bold">Tasks Automated:</span>
                        <span className="bg-black text-white px-2 py-1 font-bold text-sm">1,247 / week</span>
                      </div>
                      <div className="flex items-center justify-between bg-white border-2 border-black p-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        <span className="font-bold">Error Rate:</span>
                        <span className="bg-black text-white px-2 py-1 font-bold text-sm">0.01%</span>
                      </div>
                      <div className="flex items-center justify-between bg-white border-2 border-black p-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        <span className="font-bold">Processing Time:</span>
                        <span className="bg-black text-white px-2 py-1 font-bold text-sm">Instant</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4 font-sans font-bold">
                    <div className="flex items-center justify-between border-b-2 border-gray-100 pb-2">
                      <span>⚡ Data Entry:</span>
                      <span className="text-green-600 uppercase">Automated</span>
                    </div>
                    <div className="flex items-center justify-between border-b-2 border-gray-100 pb-2">
                      <span>📅 Scheduling:</span>
                      <span className="text-green-600 uppercase">Automated</span>
                    </div>
                    <div className="flex items-center justify-between border-b-2 border-gray-100 pb-2">
                      <span>📧 Follow-ups:</span>
                      <span className="text-green-600 uppercase">Automated</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>📊 Reporting:</span>
                      <span className="text-green-600 uppercase">Automated</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Services Section */}
        <section className="py-20 bg-gray-50 border-b-4 border-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl font-bold text-black mb-6">
                What We <span className="text-primary">Automate</span>
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto font-sans">
                From simple data entry to complex workflows, we build solutions that work for you.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {mainServices.map((service, index) => (
                <div key={index} className="bg-white border-2 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-transform flex flex-col">
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${service.color} border-2 border-black rounded-none mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}>
                    <service.icon className="h-8 w-8 text-black" />
                  </div>
                  
                  <h3 className="font-heading text-2xl font-bold text-black mb-2">{service.title}</h3>
                  <p className="text-sm font-bold text-gray-500 uppercase mb-4">{service.subtitle}</p>
                  <p className="text-gray-700 mb-6 font-sans flex-grow">{service.description}</p>
                  
                  <ul className="space-y-3 mb-8 font-sans">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-black mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-6 border-t-2 border-gray-100">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-600">
                        <service.stats.icon className="h-5 w-5 mr-2" />
                        <span className="text-sm font-bold uppercase">{service.stats.label}</span>
                      </div>
                      <span className="font-heading font-bold text-xl text-black">{service.stats.value}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-white border-b-4 border-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl font-bold text-black mb-6">
                Industry <span className="bg-accent px-2">Solutions</span>
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto font-sans">
                See how different industries are using our automation services to scale.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-gray-50 border-2 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                  <div className="flex items-center mb-6">
                    <div className="bg-black text-white p-3 border-2 border-black shadow-[2px_2px_0px_0px_#CCFF00] mr-4">
                      <useCase.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-black">{useCase.industry}</h3>
                  </div>
                  
                  <div className="space-y-4 font-sans">
                    <div>
                      <p className="text-xs font-bold text-gray-500 uppercase mb-1">The Challenge</p>
                      <p className="text-gray-700">{useCase.challenge}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-500 uppercase mb-1">Our Solution</p>
                      <p className="text-gray-700">{useCase.solution}</p>
                    </div>
                    <div className="bg-white border-2 border-black p-3 mt-2">
                      <p className="text-xs font-bold text-primary uppercase mb-1">The Result</p>
                      <p className="font-bold text-black">{useCase.result}</p>
                    </div>
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
                How We <span className="text-primary">Work</span>
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto font-sans">
                From discovery to deployment, we handle everything.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-black p-8 text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-transform"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-black text-white rounded-full mb-6 border-2 border-black shadow-[4px_4px_0px_0px_#FF69B4]">
                    <step.icon className="h-8 w-8" />
                  </div>
                  
                  <div className="text-sm font-bold text-primary mb-2 uppercase tracking-wider">STEP {step.step}</div>
                  <h3 className="font-heading text-xl font-bold text-black mb-2">{step.title}</h3>
                  <div className="text-xs font-bold text-gray-500 uppercase mb-4">{step.duration}</div>
                  <p className="text-gray-700 font-sans">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-black text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-8">
              Ready to <span className="text-primary">Automate</span> Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-sans">
              Schedule a free discovery call to discuss your needs and see how much time and money you could save.
            </p>
            <a
              href="https://link.millennialmoneymarketing.com/widget/booking/5HjJ1VBH28PwTwAdzIQb"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-primary text-black hover:bg-white hover:text-black border-2 border-white rounded-none font-heading font-bold shadow-[4px_4px_0px_0px_#ffffff] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#ffffff] transition-all h-16 px-10 text-xl">
                Book Your Discovery Call
              </Button>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
