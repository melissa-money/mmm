import { ArrowRight, CheckCircle, Globe, Mail, UserPlus, Settings } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

// Resource page for adding delegate access on GoDaddy
export default function GoDaddyDelegateAccess() {
  const steps = [
    {
      title: 'Login and Account Settings',
      description: 'Login to your GoDaddy account. Click your name on the top right corner, then click "Account Settings" from the dropdown menu.',
      icon: Settings,
    },
    {
      title: 'Delegate Access',
      description: 'On the Account Settings page, look for the "Delegate Access" option on the left side menu (or in the main area depending on your view) and click it.',
      icon: UserPlus,
    },
    {
      title: 'Invite to Access',
      description: 'Click the "Invite to Access" button to start the process of adding a new delegate.',
      icon: UserPlus,
    },
    {
      title: 'Fill in Delegate Info',
      description: 'Fill in the name as "Melissa" and the email address below. Then click "Invite" on the middle right side.',
      email: 'admin@millennialmoneymarketing.com',
      icon: Mail,
    },
    {
      title: 'Confirmation',
      description: 'Once this is complete, we will receive an email and accept the request. Note: If we send you a request instead, you will need to check your email to accept it.',
      icon: CheckCircle,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-12 sm:py-20 bg-white border-b-4 border-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 bg-black text-white px-4 py-2 border-2 border-black shadow-[4px_4px_0px_0px_#FF69B4] mb-6 sm:mb-8 transform -rotate-2">
                <Globe className="h-5 w-5" />
                <span className="font-heading font-bold uppercase tracking-wider text-sm sm:text-base">Client Resource</span>
              </div>

              <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl font-bold text-black leading-tight mb-6">
                How to Add <span className="bg-secondary px-2 inline-block">Delegate Access</span> on GoDaddy
              </h1>

              <p className="text-lg sm:text-xl text-gray-700 mb-8 font-sans max-w-2xl mx-auto">
                Follow this simple guide to grant us access to manage your GoDaddy products safely and securely.
              </p>
            </div>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-12 sm:py-20 bg-gray-50 border-b-4 border-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {steps.map((step, index) => (
                  <div key={index} className="bg-white border-2 border-black p-6 sm:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col sm:flex-row gap-6 items-start">
                    <div className="flex-shrink-0 bg-black text-white w-12 h-12 flex items-center justify-center border-2 border-black font-heading font-bold text-xl shadow-[4px_4px_0px_0px_#CCFF00]">
                      {index + 1}
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-heading text-2xl font-bold text-black mb-3">{step.title}</h3>
                      <p className="text-lg text-gray-700 font-sans leading-relaxed">
                        {step.description}
                      </p>
                      {step.email && (
                        <div className="mt-4 bg-gray-100 p-4 border-2 border-black inline-block">
                          <code className="font-mono text-primary font-bold text-lg break-all">
                            {step.email}
                          </code>
                        </div>
                      )}
                    </div>
                    <div className="hidden sm:block text-gray-200">
                      <step.icon className="h-16 w-16" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Help Section */}
        <section className="py-12 sm:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-black mb-6">
              Need Help?
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto font-sans">
              If you're having trouble finding these settings or need assistance, don't hesitate to reach out to our support team.
            </p>
            <a href="/contact">
              <Button className="bg-black text-white hover:bg-primary hover:text-black border-2 border-black rounded-none font-heading font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all h-12 px-8 text-lg">
                Contact Support <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
