import { Handshake, Users, TrendingUp, Star, CheckCircle, ArrowRight, Building2 } from 'lucide-react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

export default function Partners() {
  const featuredPartners = [
    {
      name: 'Gross Machining',
      industry: 'Manual Machining & Metal Fabrication',
      description: 'Skilled manual machinist providing traditional precision machining services and custom metal fabrication for construction, bakery equipment, laundromats, and more.',
      website: 'https://www.grossmachining.com',
      features: ['Manual Mill Work', 'Manual Lathe Operations', 'Custom Metal Fabrication', 'One-Off Custom Parts'],
      href: '/partners/gross-machining',
      color: 'bg-primary',
    },
    {
      name: 'Cactus Crew Thrift Store',
      industry: 'Thrift & Secondhand Retail',
      description: 'Phoenix locally family-owned thrift store offering an ever-changing inventory of furniture, vintage finds, clothing, tools, and household essentials. Veteran-owned and woman-owned, we\'re passionate about sustainability and keeping quality items out of landfills.',
      website: 'https://maps.app.goo.gl/1GNQf8kka8i7XqNY8',
      features: ['Family & Veteran Owned', 'Eco-Friendly & Sustainable', 'Negotiable Pricing', 'Ever-Changing Inventory'],
      href: '/partners/cactus-crew-thrift',
      color: 'bg-secondary',
    },
  ];

  const benefits = [
    {
      icon: Handshake,
      title: 'Mutual Growth',
      description: 'We believe in partnerships that create value for all parties. When our partners succeed, we all succeed.',
      color: 'bg-primary',
    },
    {
      icon: Users,
      title: 'Trusted Network',
      description: 'Our partners are carefully vetted businesses that share our commitment to excellence and customer satisfaction.',
      color: 'bg-secondary',
    },
    {
      icon: TrendingUp,
      title: 'Business Development',
      description: 'Access new markets and customers through strategic referrals and collaborative marketing efforts.',
      color: 'bg-accent',
    },
    {
      icon: Star,
      title: 'Quality Assurance',
      description: 'Every partner meets our high standards for quality, reliability, and professionalism.',
      color: 'bg-blue-400',
    },
  ];

  const partnershipCriteria = [
    'Strong reputation and proven track record',
    'Commitment to customer satisfaction',
    'Complementary services to our offerings',
    'Shared business values and ethics',
    'Reliable and dependable service delivery',
    'Professional certifications and licenses',
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-white border-b-4 border-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center space-x-2 bg-black text-white px-4 py-2 border-2 border-black shadow-[4px_4px_0px_0px_#CCFF00] mb-8 transform -rotate-2">
              <Handshake className="h-5 w-5" />
              <span className="font-heading font-bold uppercase tracking-wider">Trusted Partnerships</span>
            </div>

            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-black leading-tight mb-6">
              Meet Our <span className="bg-secondary px-2">Business Partners</span>
            </h1>

            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-10 font-sans">
              We partner with exceptional businesses to provide comprehensive solutions.
              Our network of trusted partners shares our commitment to quality, innovation, and customer success.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://link.millennialmoneymarketing.com/widget/booking/5HjJ1VBH28PwTwAdzIQb" target="_blank" rel="noopener noreferrer">
                <Button className="h-14 px-10 text-lg bg-black text-white hover:bg-primary hover:text-black border-2 border-black rounded-none font-heading font-bold shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all">
                  Become a Partner <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Featured Partners */}
        <section className="py-20 bg-gray-50 border-b-4 border-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-heading text-5xl font-bold text-black mb-6">
                Featured <span className="bg-primary px-2">Partners</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
                Industry-leading businesses we're proud to collaborate with
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
              {featuredPartners.map((partner, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all group"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 ${partner.color} border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}>
                      <Building2 className="h-8 w-8 text-black" />
                    </div>

                    <div className="text-right">
                      <div className="inline-block bg-black text-white px-3 py-1 border-2 border-black font-bold text-xs uppercase tracking-wider shadow-[2px_2px_0px_0px_#CCFF00]">
                        {partner.industry}
                      </div>
                    </div>
                  </div>

                  <h3 className="font-heading text-3xl font-bold text-black mb-4 group-hover:text-primary transition-colors">
                    {partner.name}
                  </h3>

                  <p className="text-gray-700 mb-6 text-lg leading-relaxed font-sans">
                    {partner.description}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-3 mb-8">
                    {partner.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm font-bold text-gray-800">
                        <CheckCircle className="h-5 w-5 text-black fill-secondary mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href={partner.href}>
                      <Button className="flex-1 bg-black text-white hover:bg-primary hover:text-black border-2 border-black rounded-none font-heading font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all">
                        View Full Profile <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center bg-white text-black hover:bg-black hover:text-white border-2 border-black rounded-none font-heading font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all h-10 px-4 py-2"
                    >
                      Visit Website
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white border-b-4 border-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-heading text-5xl font-bold text-black mb-6">
                Why <span className="bg-accent px-2">Partner With Us</span>?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
                Strategic partnerships that drive growth and create lasting value
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${benefit.color} border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6`}>
                    <benefit.icon className="h-8 w-8 text-black" />
                  </div>

                  <h3 className="font-heading text-xl font-bold text-black mb-4 uppercase">
                    {benefit.title}
                  </h3>

                  <p className="text-gray-700 leading-relaxed font-sans">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Criteria Section */}
        <section className="py-20 bg-gray-50 border-b-4 border-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-heading text-4xl font-bold text-black mb-6">
                  Partnership <span className="bg-primary px-2">Criteria</span>
                </h2>
                <p className="text-xl text-gray-600 font-sans">
                  We carefully select partners who align with our values and standards
                </p>
              </div>

              <div className="bg-white border-2 border-black p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                <div className="grid md:grid-cols-2 gap-6">
                  {partnershipCriteria.map((criterion, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4 bg-gray-50 p-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                    >
                      <CheckCircle className="h-6 w-6 text-black fill-secondary flex-shrink-0 mt-1" />
                      <span className="font-bold text-black font-sans">{criterion}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-black text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Interested in <span className="text-secondary">Partnering</span>?
            </h2>

            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-sans">
              Join our network of trusted partners and unlock new opportunities for growth.
              Let's build something great together.
            </p>

            <a href="https://link.millennialmoneymarketing.com/widget/booking/5HjJ1VBH28PwTwAdzIQb" target="_blank" rel="noopener noreferrer">
              <Button className="h-16 px-10 text-xl bg-secondary text-black hover:bg-white hover:text-black border-2 border-white rounded-none font-heading font-bold shadow-[6px_6px_0px_0px_#fff] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0px_0px_#fff] transition-all">
                Schedule Partnership Call
              </Button>
            </a>

            <div className="mt-8 text-sm font-bold text-gray-400 uppercase tracking-wider">
              Free consultation • No commitment • Partnership opportunities
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
