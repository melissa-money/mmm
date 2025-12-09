import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star, TrendingUp, Users, Award, Zap, Shield, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden border-b-4 border-black">
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>
          
          <div className="container relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="inline-block bg-primary border-2 border-black px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-2">
                  <span className="font-heading font-bold text-black uppercase tracking-wider">#1 Marketing Agency in Phoenix</span>
                </div>
                
                <h1 className="font-heading text-5xl lg:text-7xl font-bold leading-tight text-black">
                  We help Businesses <span className="bg-primary px-2">Rank #1</span> on Google & Get more <span className="bg-secondary px-2">5 Star Reviews</span>
                </h1>
                
                <p className="text-xl text-gray-700 max-w-lg border-l-4 border-black pl-6 py-2">
                  Transform your business with proven marketing strategies that drive real results without spending a dime on ads.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="https://link.millennialmoneymarketing.com/widget/booking/5HjJ1VBH28PwTwAdzIQb" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full sm:w-auto h-14 px-8 text-lg bg-black text-white hover:bg-primary hover:text-black border-2 border-black rounded-none font-heading font-bold shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all">
                      Book Your Free Strategy Call
                    </Button>
                  </a>
                </div>

                <div className="flex flex-wrap gap-6 pt-4">
                  <div className="flex items-center gap-2">
                    <Check className="h-6 w-6 text-black bg-secondary p-1 border-2 border-black rounded-full" />
                    <span className="font-bold">No Long-term Contracts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-6 w-6 text-black bg-secondary p-1 border-2 border-black rounded-full" />
                    <span className="font-bold">Results in 30 Days</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-6 w-6 text-black bg-secondary p-1 border-2 border-black rounded-full" />
                    <span className="font-bold">Money-back Guarantee</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-secondary rounded-full border-4 border-black z-0 animate-pulse"></div>
                <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-primary rounded-full border-4 border-black z-0"></div>
                
                <Card className="relative z-10 border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] bg-white rounded-none overflow-hidden">
                  <CardHeader className="bg-black text-white border-b-4 border-black p-6">
                    <CardTitle className="font-heading text-3xl text-primary">Success Story</CardTitle>
                  </CardHeader>
                  <CardContent className="p-8 space-y-6">
                    <div className="flex justify-between items-center border-b-2 border-gray-200 pb-4">
                      <span className="font-heading text-xl font-bold">Google Ranking</span>
                      <span className="bg-primary px-3 py-1 border-2 border-black font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">#1 Position</span>
                    </div>
                    <div className="flex justify-between items-center border-b-2 border-gray-200 pb-4">
                      <span className="font-heading text-xl font-bold">5-Star Reviews</span>
                      <span className="bg-secondary px-3 py-1 border-2 border-black font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">+127 Reviews</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-heading text-xl font-bold">Revenue Increase</span>
                      <span className="bg-black text-white px-3 py-1 border-2 border-black font-bold shadow-[2px_2px_0px_0px_#FF69B4]">+284%</span>
                    </div>
                    
                    <div className="mt-8 pt-6 border-t-4 border-black">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Zap className="h-6 w-6 text-black fill-secondary" />
                          <span className="font-bold">Results in 30 days</span>
                        </div>
                        <div className="bg-accent px-3 py-1 border-2 border-black font-bold text-sm uppercase tracking-wider">
                          Guaranteed
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-black text-white border-b-4 border-black">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-6 border-2 border-white bg-gray-900 shadow-[8px_8px_0px_0px_#FF69B4] hover:-translate-y-2 transition-transform">
                <div className="font-heading text-6xl font-bold text-primary mb-2">150+</div>
                <div className="text-xl font-bold uppercase tracking-wider">Businesses Helped</div>
              </div>
              <div className="p-6 border-2 border-white bg-gray-900 shadow-[8px_8px_0px_0px_#CCFF00] hover:-translate-y-2 transition-transform">
                <div className="font-heading text-6xl font-bold text-secondary mb-2">98%</div>
                <div className="text-xl font-bold uppercase tracking-wider">Success Rate</div>
              </div>
              <div className="p-6 border-2 border-white bg-gray-900 shadow-[8px_8px_0px_0px_#FFD700] hover:-translate-y-2 transition-transform">
                <div className="font-heading text-6xl font-bold text-accent mb-2">5<Star className="inline h-10 w-10 -mt-2 fill-accent" /></div>
                <div className="text-xl font-bold uppercase tracking-wider">Average Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-white border-b-4 border-black">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="font-heading text-5xl font-bold mb-6">Our Premium Services</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Comprehensive digital marketing solutions designed to grow your business and increase your online presence.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Local Business Marketing",
                  desc: "Dominate your local market and get found by customers in your area.",
                  icon: MapPin,
                  color: "bg-primary"
                },
                {
                  title: "Ecommerce Marketing",
                  desc: "Scale your online store with proven strategies that drive sales.",
                  icon: TrendingUp,
                  color: "bg-secondary"
                },
                {
                  title: "Google Business Profile",
                  desc: "Optimize your profile to rank #1 on Google Maps and Search.",
                  icon: Star,
                  color: "bg-accent"
                },
                {
                  title: "Web Design",
                  desc: "High-converting websites that look great and drive results.",
                  icon: Zap,
                  color: "bg-blue-400"
                },
                {
                  title: "Review Management",
                  desc: "Automated systems to get more 5-star reviews from happy customers.",
                  icon: Shield,
                  color: "bg-purple-400"
                },
                {
                  title: "Business Funding",
                  desc: "Get the capital you need to grow your business operations.",
                  icon: Award,
                  color: "bg-orange-400"
                }
              ].map((service, index) => (
                <Card key={index} className="border-4 border-black rounded-none shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all group cursor-pointer">
                  <CardHeader className={`${service.color} border-b-4 border-black p-6`}>
                    <service.icon className="h-12 w-12 text-black" />
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="font-heading text-2xl font-bold mb-3">{service.title}</CardTitle>
                    <p className="text-gray-700 mb-6">{service.desc}</p>
                    <div className="flex items-center font-bold text-black group-hover:translate-x-2 transition-transform">
                      Learn More <span className="ml-2">→</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <a href="https://link.millennialmoneymarketing.com/widget/booking/5HjJ1VBH28PwTwAdzIQb" target="_blank" rel="noopener noreferrer">
                <Button className="h-14 px-10 text-lg bg-black text-white hover:bg-white hover:text-black border-2 border-black rounded-none font-heading font-bold shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all">
                  Get a Free Consultation
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Testimonials/Trust Section */}
        <section className="py-20 bg-gray-50 border-b-4 border-black">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="font-heading text-5xl font-bold mb-6">Why Choose Us?</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Don't just take our word for it. Here's why businesses trust us.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Award Winning", subtitle: "Top Agency 2024", icon: Award },
                { title: "Fast Results", subtitle: "Results in 30 Days", icon: Zap },
                { title: "Premium Service", subtitle: "White Glove Support", icon: Star },
                { title: "Guaranteed", subtitle: "Money Back Promise", icon: Shield },
              ].map((item, index) => (
                <div key={index} className="bg-white border-2 border-black p-6 text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary border-2 border-black rounded-full mb-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <item.icon className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-1">{item.title}</h3>
                  <p className="text-gray-600 font-medium">{item.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary border-b-4 border-black relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="container relative z-10 text-center">
            <div className="bg-white border-4 border-black p-8 md:p-12 max-w-4xl mx-auto shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="font-heading text-4xl md:text-6xl font-bold mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                Don't let your competitors dominate your market. Book your free strategy call today and discover how we can help you rank #1.
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 mb-10 text-left max-w-2xl mx-auto">
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-black bg-secondary rounded-full p-1 border border-black" />
                  <span className="font-bold">Quick 30-min call</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-black bg-secondary rounded-full p-1 border border-black" />
                  <span className="font-bold">Actionable insights</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-black bg-secondary rounded-full p-1 border border-black" />
                  <span className="font-bold">100% confidential</span>
                </div>
              </div>

              <div className="bg-black text-white p-6 mb-8 border-2 border-black transform rotate-1 max-w-lg mx-auto shadow-[4px_4px_0px_0px_#CCFF00]">
                <h3 className="font-heading text-2xl font-bold text-secondary mb-2">Limited Time Offer</h3>
                <div className="flex justify-between items-center border-b border-gray-700 pb-2 mb-2">
                  <span>Marketing Audit</span>
                  <span className="line-through text-gray-500">$500</span>
                </div>
                <div className="flex justify-between items-center text-xl font-bold">
                  <span>Your Investment Today:</span>
                  <span className="text-secondary text-3xl">$0</span>
                </div>
              </div>

              <a href="https://link.millennialmoneymarketing.com/widget/booking/5HjJ1VBH28PwTwAdzIQb" target="_blank" rel="noopener noreferrer">
                <Button className="w-full md:w-auto h-16 px-12 text-xl bg-black text-white hover:bg-secondary hover:text-black border-2 border-black rounded-none font-heading font-bold shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all">
                  Claim Your Free Audit Now
                </Button>
              </a>
              
              <p className="mt-4 text-sm font-bold text-red-600 animate-pulse">
                ⏰ Don't Wait - Spots Are Limited!
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
