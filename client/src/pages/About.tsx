import { CheckCircle, Award, Users, Target } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

export default function About() {
  const achievements = [
    'Former Fortune 250 Marketing Executive',
    'Built successful ecommerce business',
    'Transformed husband\'s local service business',
    'Helped 100+ businesses achieve online success',
  ];

  const values = [
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'We focus on measurable outcomes that directly impact your bottom line.',
      color: 'bg-primary',
    },
    {
      icon: Users,
      title: 'Personal Approach',
      description: 'Every business is unique, and we tailor our strategies accordingly.',
      color: 'bg-secondary',
    },
    {
      icon: Award,
      title: 'Proven Expertise',
      description: 'Years of corporate and entrepreneurial experience working for you.',
      color: 'bg-accent',
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
              {/* Content */}
              <div>
                <div className="inline-block bg-primary border-2 border-black px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-2 mb-6">
                  <span className="font-heading font-bold text-black uppercase tracking-wider">Meet The Founder</span>
                </div>
                
                <h1 className="font-heading text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
                  From Corporate Success to <span className="bg-secondary px-2">Local Marketing Expert</span>
                </h1>
                
                <p className="text-xl text-gray-700 mb-8 leading-relaxed border-l-4 border-black pl-6 py-2">
                  Hi, I'm Melissa. I understand the struggle of building a successful business 
                  while maintaining work-life balance. My journey from Fortune 250 executive to 
                  entrepreneurial success has given me unique insights into what really works.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-black bg-secondary rounded-full p-1 border-2 border-black flex-shrink-0" />
                      <span className="text-black font-bold">{achievement}</span>
                    </div>
                  ))}
                </div>

                <a href="https://link.millennialmoneymarketing.com/widget/booking/5HjJ1VBH28PwTwAdzIQb" target="_blank" rel="noopener noreferrer">
                  <Button className="h-14 px-8 text-lg bg-black text-white hover:bg-primary hover:text-black border-2 border-black rounded-none font-heading font-bold shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all">
                    Book a Call with Melissa
                  </Button>
                </a>
              </div>

              {/* Photo Placeholder */}
              <div className="relative flex justify-center">
                <div className="w-3/4 sm:w-2/3 bg-white border-4 border-black p-4 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                  <div className="aspect-square bg-gray-200 border-2 border-black overflow-hidden relative">
                    <img
                      src="https://storage.googleapis.com/msgsndr/nhEbwJlZ6WrgquZ6cQwb/media/68c89dc10aed916f7671d77a.png"
                      alt="Melissa, Founder & CEO of Millennial Money Marketing"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="font-heading text-2xl font-bold text-black">Melissa</h3>
                    <p className="font-sans font-bold text-gray-600 uppercase tracking-wider">Founder & CEO</p>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-6 right-0 sm:right-12 bg-accent border-2 border-black px-4 py-2 font-heading font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform rotate-3">
                  ⭐ 5-Star Rated
                </div>
                
                <div className="absolute -bottom-6 left-0 sm:left-12 bg-primary border-2 border-black px-4 py-2 font-heading font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-3">
                  💼 Fortune 250 Experience
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-gray-50 border-b-4 border-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-heading text-5xl font-bold text-black mb-6">
                My <span className="bg-primary px-2">Journey</span>
              </h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              <div className="bg-white border-2 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform">
                <h3 className="font-heading text-2xl font-bold text-black mb-4 uppercase border-b-2 border-black inline-block">Corporate Success</h3>
                <p className="text-gray-700 leading-relaxed font-sans text-lg">
                  I spent years climbing the corporate ladder as a marketing executive at a Fortune 250 company. 
                  While I gained invaluable experience in large-scale marketing strategies, I always felt something 
                  was missing – the personal connection and direct impact on business owners who were building 
                  their dreams.
                </p>
              </div>

              <div className="bg-white border-2 border-black p-8 shadow-[8px_8px_0px_0px_#CCFF00] hover:-translate-y-1 transition-transform ml-0 md:ml-12">
                <h3 className="font-heading text-2xl font-bold text-black mb-4 uppercase border-b-2 border-black inline-block">Entrepreneurial Leap</h3>
                <p className="text-gray-700 leading-relaxed font-sans text-lg">
                  As a mom seeking time freedom and the ability to be present for my family, I made the bold 
                  decision to leave corporate and start my own ecommerce business. This experience taught me 
                  firsthand the challenges that small business owners face and what it really takes to succeed 
                  in today's digital landscape.
                </p>
              </div>

              <div className="bg-white border-2 border-black p-8 shadow-[8px_8px_0px_0px_#FF69B4] hover:-translate-y-1 transition-transform">
                <h3 className="font-heading text-2xl font-bold text-black mb-4 uppercase border-b-2 border-black inline-block">Transforming Local Business</h3>
                <p className="text-gray-700 leading-relaxed font-sans text-lg">
                  When my husband's local service business was struggling to get noticed online, I applied my 
                  marketing expertise to transform his digital presence. The results were incredible – within 
                  months, he went from struggling to find customers to being booked solid with 5-star reviews 
                  flooding in.
                </p>
              </div>

              <div className="bg-white border-2 border-black p-8 shadow-[8px_8px_0px_0px_#FFD700] hover:-translate-y-1 transition-transform ml-0 md:ml-12">
                <h3 className="font-heading text-2xl font-bold text-black mb-4 uppercase border-b-2 border-black inline-block">Helping Others Succeed</h3>
                <p className="text-gray-700 leading-relaxed font-sans text-lg">
                  That's when I realized my true calling – helping other local business owners achieve the same 
                  success. I founded Millennial Money Marketing to bridge the gap between corporate-level 
                  marketing strategies and local business needs. Today, I'm proud to help businesses across 
                  the country rank #1 on Google and build the customer base they deserve.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-white border-b-4 border-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-heading text-5xl font-bold text-black mb-6">
                Our <span className="bg-secondary px-2">Values</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
                These principles guide everything we do and ensure you get the results you deserve.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
                >
                  <div className={`inline-flex items-center justify-center w-20 h-20 ${value.color} border-2 border-black rounded-none mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}>
                    <value.icon className="h-10 w-10 text-black" />
                  </div>
                  
                  <h3 className="font-heading text-2xl font-bold text-black mb-4 uppercase">
                    {value.title}
                  </h3>
                  
                  <p className="text-gray-700 font-sans text-lg">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-black text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Ready to <span className="text-accent">Transform</span> Your Business?
            </h2>
            
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-sans">
              Let's have a conversation about your business goals and how we can help you achieve them. 
              No sales pressure – just honest advice and actionable insights.
            </p>

            <a href="https://link.millennialmoneymarketing.com/widget/booking/5HjJ1VBH28PwTwAdzIQb" target="_blank" rel="noopener noreferrer">
              <Button className="h-16 px-10 text-xl bg-accent text-black hover:bg-white hover:text-black border-2 border-white rounded-none font-heading font-bold shadow-[6px_6px_0px_0px_#fff] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0px_0px_#fff] transition-all">
                Schedule Your Free Strategy Call
              </Button>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
