import { ChevronDownIcon } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="px-12 py-24 max-w-7xl mx-auto">
        <div className="text-center space-y-8">
          <h1 className="text-7xl md:text-8xl font-medium tracking-tight">
            Agentic Summer
          </h1>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Join us for a series of AI-powered events across India this summer. 
            Learn, build, and connect with the next generation of AI builders.
          </p>
          <button className="bg-black text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-gray-800 transition-colors">
            Join the Movement
          </button>
        </div>
      </section>

      {/* Events Section */}
      <section className="px-12 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-medium mb-6">Upcoming Events</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the future of AI through hands-on workshops, hackathons, 
              and networking events in major cities across India.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Event Card 1 */}
            <div className="bg-black rounded-2xl overflow-hidden relative h-96">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-medium mb-2">AI & Startups</h3>
                <p className="text-white/80">March 2025 - Mumbai</p>
              </div>
            </div>

            {/* Event Card 2 */}
            <div className="bg-black rounded-2xl overflow-hidden relative h-96">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-medium mb-2">Build & Ship</h3>
                <p className="text-white/80">April 2025 - Delhi</p>
              </div>
            </div>

            {/* Event Card 3 */}
            <div className="bg-black rounded-2xl overflow-hidden relative h-96">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-medium mb-2">AI & Weekends</h3>
                <p className="text-white/80">February 2025 - Bangalore</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-12 py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-6xl font-medium text-center mb-16">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            {[
              "Who is this for?",
              "Do I need prior AI experience?",
              "Are events paid?",
              "Can I host or partner?",
              "What are the benefits of partnering?",
              "How do I apply to host an event?",
              "What criteria must I meet to be considered?"
            ].map((question, index) => (
              <div key={index} className="bg-black/5 rounded-2xl p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-medium">{question}</h3>
                  <ChevronDownIcon className="w-4 h-4 text-black" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative">
        {/* Background Image */}
        <div className="absolute inset-0 bg-gray-900" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
        
        <div className="relative px-12 py-24">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-start mb-16">
              {/* Newsletter Signup */}
              <div className="max-w-md">
                <h3 className="text-white text-3xl font-medium mb-6">
                  Subscribe to Get Updates.
                </h3>
                <div className="flex gap-2">
                  <div className="flex-1 bg-white/30 backdrop-blur-sm rounded-xl p-3">
                    <input 
                      type="email" 
                      placeholder="innercircle@gmail.com"
                      className="w-full bg-transparent text-white placeholder-white/80 text-sm focus:outline-none"
                    />
                  </div>
                  <button className="bg-white text-black px-4 py-3 rounded-xl font-medium">
                    Subscribe
                  </button>
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-20">
                <div>
                  <h4 className="text-white font-medium mb-4">Links</h4>
                  <div className="space-y-2 text-white/60">
                    <div>About Agentic Summer</div>
                    <div>Partner With Us</div>
                    <div>Contact Us</div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-white font-medium mb-4">Socials</h4>
                  <div className="space-y-2 text-white/60">
                    <div>Twitter</div>
                    <div>Join Community</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="flex justify-between items-center text-white text-sm">
              <div>Terms and conditions</div>
              <div>All rights reserved by innercircle</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}