import { Users, Zap, Code, Calendar, Camera, Palette, UserCheck, Briefcase, CheckCircle, ArrowRight, Star, Quote } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

export default function VirtualAssistantPlacement() {
  const benefits = [
    'Reduce your workload and focus on growth',
    'Access skilled professionals at competitive rates',
    'Scale your team without overhead costs',
    'Work with vetted, reliable assistants',
    'Flexible engagement options',
    'Reduce work hours while increasing productivity',
  ];

  const process = [
    {
      step: '01',
      title: 'Consultation & Requirements',
      description: 'We discuss your business needs, workflow requirements, and the specific skills you need.',
      icon: UserCheck,
    },
    {
      step: '02',
      title: 'Talent Matching',
      description: 'We match you with pre-vetted virtual assistants who have the exact skills and experience you need.',
      icon: Users,
    },
    {
      step: '03',
      title: 'Onboarding & Training',
      description: 'We help onboard your new assistant and ensure they understand your systems and processes.',
      icon: Briefcase,
    },
    {
      step: '04',
      title: 'Ongoing Support',
      description: 'Continuous support to ensure your assistant delivers results and helps you scale efficiently.',
      icon: CheckCircle,
    },
  ];

  const skills = [
    {
      name: 'Automation Engineers',
      icon: Zap,
      tools: ['n8n', 'Make (Integromat)', 'Zapier', 'GoHighLevel'],
      color: 'bg-secondary',
    },
    {
      name: 'Technical Specialists',
      icon: Code,
      tools: ['Closebot', 'VAPI', 'AI Integration', 'Custom Workflows'],
      color: 'bg-primary',
    },
    {
      name: 'Creative Professionals',
      icon: Camera,
      tools: ['Video Editing', 'Graphic Design', 'Content Creation', 'Social Media'],
      color: 'bg-accent',
    },
    {
      name: 'Business Support',
      icon: Calendar,
      tools: ['Appointment Setting', 'Remote Closing', 'Executive Assistance', 'Team Management'],
      color: 'bg-black text-white',
    },
  ];

  const roles = [
    {
      title: 'Automation Engineers',
      description: 'Experts in n8n, Make, Zapier, and GoHighLevel who build workflows that save you hours every day.',
      icon: Zap,
      skills: ['Workflow Automation', 'API Integrations', 'Process Optimization', 'System Setup'],
    },
    {
      title: 'Video Editors',
      description: 'Professional editors who create engaging content for social media, YouTube, and marketing campaigns.',
      icon: Camera,
      skills: ['Short-form Content', 'YouTube Videos', 'Social Media Clips', 'Motion Graphics'],
    },
    {
      title: 'Social Media Managers',
      description: 'Strategic managers who grow your presence, engage audiences, and drive business results.',
      icon: Users,
      skills: ['Content Strategy', 'Community Management', 'Analytics', 'Ad Campaigns'],
    },
    {
      title: 'Appointment Setters',
      description: 'Skilled professionals who fill your calendar with qualified prospects ready to buy.',
      icon: Calendar,
      skills: ['Lead Qualification', 'Calendar Management', 'Follow-up Systems', 'CRM Management'],
    },
    {
      title: 'Remote Closers',
      description: 'Experienced sales professionals who convert leads into paying customers on your behalf.',
      icon: UserCheck,
      skills: ['Sales Calls', 'Objection Handling', 'Deal Closing', 'Pipeline Management'],
    },
    {
      title: 'Graphic Designers',
      description: 'Creative designers who bring your brand to life with stunning visuals and marketing materials.',
      icon: Palette,
      skills: ['Brand Design', 'Marketing Collateral', 'Social Graphics', 'Print Design'],
    },
    {
      title: 'Executive Assistants',
      description: 'Highly organized professionals who manage your schedule, emails, and daily operations.',
      icon: Briefcase,
      skills: ['Calendar Management', 'Email Management', 'Travel Planning', 'Admin Tasks'],
    },
    {
      title: 'Team Managers',
      description: 'Experienced leaders who oversee your team, ensuring productivity and quality standards.',
      icon: Users,
      skills: ['Team Leadership', 'Performance Management', 'Process Implementation', 'Training'],
    },
  ];

  const trendingSoftware = [
    'n8n', 'Make (Integromat)', 'Zapier', 'GoHighLevel', 'Closebot', 'VAPI',
    'HubSpot', 'Salesforce', 'ClickFunnels', 'ActiveCampaign', 'Monday.com',
    'Airtable', 'Notion', 'Slack', 'Asana', 'Trello',
  ];

  const stats = [
    { label: 'Virtual Assistants Placed', value: '200+', icon: '👥' },
    { label: 'Client Satisfaction Rate', value: '98%', icon: '⭐' },
    { label: 'Average Time Saved Weekly', value: '20hrs', icon: '⏰' },
    { label: 'Business Processes Automated', value: '500+', icon: '⚡' },
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
                  <Users className="h-5 w-5" />
                  <span className="font-heading font-bold uppercase tracking-wider">Virtual Assistant Placement</span>
                </div>

                <h1 className="font-heading text-5xl md:text-6xl font-bold text-black leading-tight mb-6">
                  <span className="bg-secondary px-2">Automate & Delegate</span> to Scale Your Business
                </h1>

                <p className="text-xl text-gray-700 mb-8 font-sans">
                  Hire the best engineers and professionals skilled in n8n, Make, Zapier, GoHighLevel,
                  Closebot, VAPI, and all trending automation software. Get expert video editors, social
                  media managers, appointment setters, remote closers, and more to help you scale effortlessly.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <a
                    href="https://link.millennialmoneymarketing.com/widget/booking/5HjJ1VBH28PwTwAdzIQb"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full sm:w-auto bg-black text-white hover:bg-primary hover:text-black border-2 border-black rounded-none font-heading font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all h-14 px-8 text-lg">
                      Find Your Perfect Assistant <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </a>
                </div>

                <div className="grid grid-cols-2 gap-4 border-2 border-black p-4 bg-gray-50 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <div className="text-center border-r-2 border-black">
                    <div className="text-3xl font-heading font-bold text-black">200+</div>
                    <div className="text-sm font-bold text-gray-600 uppercase">Assistants Placed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-heading font-bold text-black">20hrs</div>
                    <div className="text-sm font-bold text-gray-600 uppercase">Avg. Time Saved/Week</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white border-2 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  <div className="bg-primary border-2 border-black p-6 mb-8 transform rotate-1">
                    <h3 className="font-heading text-2xl font-bold text-black mb-4 uppercase">Your Business, Scaled</h3>
                    <div className="space-y-3 font-sans">
                      <div className="flex items-center justify-between bg-white border-2 border-black p-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        <span className="font-bold">Work Hours Reduced:</span>
                        <span className="bg-black text-white px-2 py-1 font-bold text-sm">-50%</span>
                      </div>
                      <div className="flex items-center justify-between bg-white border-2 border-black p-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        <span className="font-bold">Productivity Increase:</span>
                        <span className="bg-black text-white px-2 py-1 font-bold text-sm">+200%</span>
                      </div>
                      <div className="flex items-center justify-between bg-white border-2 border-black p-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        <span className="font-bold">Processes Automated:</span>
                        <span className="bg-black text-white px-2 py-1 font-bold text-sm">85%</span>
                      </div>
                      <div className="flex items-center justify-between bg-white border-2 border-black p-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        <span className="font-bold">Time with Family:</span>
                        <span className="bg-black text-white px-2 py-1 font-bold text-sm">+300%</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4 font-sans font-bold">
                    <div className="flex items-center justify-between border-b-2 border-gray-100 pb-2">
                      <span>⚡ Automation Setup:</span>
                      <span className="text-green-600 uppercase">✓ Complete</span>
                    </div>
                    <div className="flex items-center justify-between border-b-2 border-gray-100 pb-2">
                      <span>👥 Team Onboarding:</span>
                      <span className="text-green-600 uppercase">✓ Complete</span>
                    </div>
                    <div className="flex items-center justify-between border-b-2 border-gray-100 pb-2">
                      <span>📈 Growth Strategy:</span>
                      <span className="text-green-600 uppercase">✓ Active</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>💰 Revenue Growth:</span>
                      <span className="text-green-600 uppercase">+150%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 bg-gray-50 border-b-4 border-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl font-bold text-black mb-6">
                Expertise You Can <span className="text-primary">Trust</span>
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto font-sans">
                We connect you with professionals who are masters of their craft.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {skills.map((skill, index) => (
                <div key={index} className="bg-white border-2 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-transform">
                  <div className={`inline-flex items-center justify-center w-14 h-14 ${skill.color} border-2 border-black rounded-none mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}>
                    <skill.icon className={`h-7 w-7 ${skill.color.includes('text-white') ? 'text-white' : 'text-black'}`} />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-black mb-4">{skill.name}</h3>
                  <ul className="space-y-2 font-sans">
                    {skill.tools.map((tool, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-700 font-bold">
                        <CheckCircle className="h-4 w-4 text-black mr-2" />
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Roles Section */}
        <section className="py-20 bg-white border-b-4 border-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl font-bold text-black mb-6">
                Roles We <span className="bg-accent px-2">Fill</span>
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto font-sans">
                From technical experts to creative minds, we have the talent you need.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {roles.map((role, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-black text-white mb-4 border-2 border-black shadow-[4px_4px_0px_0px_#FF69B4]">
                    <role.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-black mb-2">{role.title}</h3>
                  <p className="text-sm text-gray-700 mb-4 font-sans">{role.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {role.skills.map((skill, i) => (
                      <span key={i} className="bg-gray-100 border border-black px-2 py-1 text-xs font-bold text-black">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Software Section */}
        <section className="py-20 bg-gray-50 border-b-4 border-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl font-bold text-black mb-6">
                Software Expertise
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto font-sans">
                Our assistants are proficient in the tools that power modern businesses.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {trendingSoftware.map((software, index) => (
                <span
                  key={index}
                  className="bg-white border-2 border-black px-6 py-3 font-bold text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform"
                >
                  {software}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-white border-b-4 border-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl font-bold text-black mb-6">
                Our Placement <span className="text-primary">Process</span>
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto font-sans">
                We make finding the perfect assistant simple and stress-free.
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

        {/* CTA Section */}
        <section className="py-20 bg-black text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-8">
              Ready to <span className="text-primary">Scale</span> Your Team?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-sans">
              Stop doing everything yourself. Hire a skilled virtual assistant and focus on what you do best.
            </p>
            <a
              href="https://link.millennialmoneymarketing.com/widget/booking/5HjJ1VBH28PwTwAdzIQb"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-primary text-black hover:bg-white hover:text-black border-2 border-white rounded-none font-heading font-bold shadow-[4px_4px_0px_0px_#ffffff] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#ffffff] transition-all h-16 px-10 text-xl">
                Find Your Assistant Now
              </Button>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
