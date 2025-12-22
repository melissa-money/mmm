import { AlertTriangle, ShieldCheck, Phone, CheckCircle, ArrowRight, Lock, Unlock } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

// Service page for GBP Suspension Services
export default function GBPSuspension() {
  const commonIssues = [
    'Suspended for "Quality Issues"',
    'Suspended for "Deceptive Content"',
    'Hard Suspension (Removed from Maps)',
    'Soft Suspension (Pending Verification)',
    'Re-verification Loop',
    'Duplicate Listing Issues',
  ];

  const ourProcess = [
    {
      title: 'Analysis',
      description: 'We thoroughly review your profile and Google\'s guidelines to identify the exact cause of the suspension.',
      icon: AlertTriangle,
    },
    {
      title: 'Correction',
      description: 'We work with you to fix any profile issues, address policy violations, and prepare necessary documentation.',
      icon: ShieldCheck,
    },
    {
      title: 'Communication',
      description: 'We communicate directly with Google support on your behalf, speaking their language to resolve the issue.',
      icon: Phone,
    },
    {
      title: 'Reinstatement',
      description: 'We follow through until your profile is reinstated and visible to customers again.',
      icon: Unlock,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-12 sm:py-20 bg-white border-b-4 border-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div>
                <div className="inline-flex items-center space-x-2 bg-red-600 text-white px-4 py-2 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6 sm:mb-8 transform -rotate-2">
                  <Lock className="h-5 w-5" />
                  <span className="font-heading font-bold uppercase tracking-wider text-sm sm:text-base">Profile Suspended?</span>
                </div>

                <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl font-bold text-black leading-tight mb-4 sm:mb-6">
                  Unsuspend Your <span className="bg-red-200 px-2 inline-block">Google Business Profile</span>
                </h1>

                <p className="text-lg sm:text-xl text-gray-700 mb-6 sm:mb-8 font-sans">
                  We have a dedicated team to help unsuspend your Google Business Profiles. 
                  Don't let a suspension kill your local visibility and revenue.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8 sm:mb-12">
                  <a
                    href="https://link.millennialmoneymarketing.com/widget/booking/5HjJ1VBH28PwTwAdzIQb"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full sm:w-auto bg-black text-white hover:bg-primary hover:text-black border-2 border-black rounded-none font-heading font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg whitespace-normal py-4 h-auto">
                      Get Help Now <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </a>
                </div>

                <div className="p-6 bg-red-50 border-l-4 border-red-600">
                  <p className="font-sans text-gray-800 italic">
                    "Google has adopted a top-down 'the product will fix any issues' strategy that leaves most of us scratching our heads. We know how to speak Google Business Profile with Google."
                  </p>
                </div>
              </div>

              <div className="relative mt-8 lg:mt-0">
                <div className="bg-white border-2 border-black p-6 sm:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  <div className="bg-accent border-2 border-black p-4 sm:p-6 mb-6 sm:mb-8 transform rotate-1">
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-black mb-4 uppercase">We Fix These Issues</h3>
                    <div className="space-y-3 font-sans">
                      {commonIssues.map((issue, index) => (
                        <div key={index} className="flex items-center gap-3 bg-white border-2 border-black p-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                          <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0" />
                          <span className="font-bold text-sm sm:text-base">{issue}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-4 font-sans font-bold">
                    <div className="flex items-center justify-between border-b-2 border-gray-100 pb-2">
                      <span>🚫 Hard Suspension:</span>
                      <span className="text-red-600 uppercase">Removed</span>
                    </div>
                    <div className="flex items-center justify-between border-b-2 border-gray-100 pb-2">
                      <span>⚠️ Soft Suspension:</span>
                      <span className="text-orange-500 uppercase">Pending</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>✅ Our Goal:</span>
                      <span className="text-green-600 uppercase">Reinstated</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why It Happens Section */}
        <section className="py-12 sm:py-20 bg-gray-50 border-b-4 border-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-black mb-6">
                Why Is Google <span className="text-red-600">Not Helping?</span>
              </h2>
              <p className="text-lg text-gray-700 font-sans leading-relaxed">
                You will see that the process can be very confusing and Google just is not as helpful as we would all like. 
                At times, we just want someone to talk to on the phone to just tell us what to do. 
                However, Google has created a support network to do just the opposite.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white border-2 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="bg-black text-white w-12 h-12 flex items-center justify-center border-2 border-black mb-4">
                  <span className="font-heading font-bold text-xl">1</span>
                </div>
                <h3 className="font-heading text-xl font-bold mb-3">Confusing Process</h3>
                <p className="font-sans text-gray-700">
                  Google's automated systems often flag legitimate businesses, and the appeal process is opaque and frustrating.
                </p>
              </div>
              <div className="bg-white border-2 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="bg-black text-white w-12 h-12 flex items-center justify-center border-2 border-black mb-4">
                  <span className="font-heading font-bold text-xl">2</span>
                </div>
                <h3 className="font-heading text-xl font-bold mb-3">No Human Support</h3>
                <p className="font-sans text-gray-700">
                  It's nearly impossible to get a real person on the phone to explain why your listing was suspended.
                </p>
              </div>
              <div className="bg-white border-2 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="bg-black text-white w-12 h-12 flex items-center justify-center border-2 border-black mb-4">
                  <span className="font-heading font-bold text-xl">3</span>
                </div>
                <h3 className="font-heading text-xl font-bold mb-3">Re-verify Loop</h3>
                <p className="font-sans text-gray-700">
                  Profiles often get locked into a loop where they ask for verification over and over again without resolution.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How We Help Section */}
        <section className="py-12 sm:py-20 bg-white border-b-4 border-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-black mb-4">
                How We Get You <span className="bg-green-200 px-2">Back Online</span>
              </h2>
              <p className="text-xl text-gray-700 font-sans">
                We understand the system and we know how to talk to Google.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {ourProcess.map((step, index) => (
                <div key={index} className="relative group">
                  <div className="bg-white border-2 border-black p-6 h-full shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] group-hover:translate-x-[2px] group-hover:translate-y-[2px] group-hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all">
                    <div className="mb-4 text-primary">
                      <step.icon className="h-10 w-10" />
                    </div>
                    <h3 className="font-heading text-xl font-bold mb-3">{step.title}</h3>
                    <p className="font-sans text-gray-700 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-black text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Is Your Business <span className="text-red-500">Invisible?</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-sans">
              Every day your profile is suspended is a day you're losing customers to competitors. 
              Let us handle the headache and get you back on the map.
            </p>

            <a href="https://link.millennialmoneymarketing.com/widget/booking/5HjJ1VBH28PwTwAdzIQb" target="_blank" rel="noopener noreferrer">
              <Button className="h-16 px-10 text-xl bg-white text-black hover:bg-primary hover:text-black border-2 border-white rounded-none font-heading font-bold shadow-[6px_6px_0px_0px_#808080] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0px_0px_#808080] transition-all">
                Fix My Suspension Now
              </Button>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
