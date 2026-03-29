import { ChevronDownIcon } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-transparent">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="text-white text-xl font-bold">
            IO
          </div>
          
          {/* Nav Links */}
          <div className="flex space-x-8 text-white text-sm">
            <a href="#" className="hover:opacity-80">Events</a>
            <a href="#" className="hover:opacity-80">Partners</a>
            <a href="#" className="hover:opacity-80">Register</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
        {/* Hero Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-200 to-orange-300">
          {/* Placeholder for hero image - warm sepia tones */}
          <div className="w-full h-full bg-gradient-to-br from-amber-100 via-orange-200 to-amber-400 opacity-90"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative h-full max-w-7xl mx-auto px-6 flex items-end justify-between pb-16">
          {/* Left Side - Main Content */}
          <div className="max-w-md">
            <h1 className="text-6xl font-bold text-white mb-4 leading-tight font-serif">
              The Agentic<br />
              Summer Begins
            </h1>
            
            <p className="text-white/90 text-base mb-8 leading-relaxed max-w-sm">
              Agentic Summer is a 3-month campaign uniting builders and designers to explore and deploy Agentic AI in India.
            </p>
            
            <div className="flex space-x-3">
              <button className="bg-white text-black px-6 py-3 rounded-lg font-medium text-sm hover:bg-gray-100 transition-colors">
                Join in Now
              </button>
              <button className="bg-black/50 text-white px-6 py-3 rounded-lg font-medium text-sm border border-white/20 hover:bg-black/70 transition-colors">
                Explore Events
              </button>
            </div>
          </div>

          {/* Right Side - Partners */}
          <div className="text-white">
            <p className="text-xs mb-3 opacity-80">Supported by</p>
            <div className="grid grid-cols-3 gap-4 max-w-xs">
              <div className="text-white font-medium text-sm">base</div>
              <div className="text-white font-medium text-sm">ANTLER</div>
              <div className="text-white font-medium text-sm">zerion</div>
              <div className="text-white font-medium text-sm">zerion</div>
              <div className="text-white font-medium text-sm">coinbase</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-black mb-8 leading-relaxed font-serif">
            AI is shifting from chatbots to agents that think and act. India has the builders. Agentic Summer is where they move.
          </h2>
          
          <p className="text-gray-600 text-base leading-relaxed max-w-3xl mx-auto">
            The next wave of AI includes agents that think and act. This shift will redefine product building and business operations. India can lead with its builder ecosystem and AI-native generation. However, potential needs awareness, access, and action, which Agentic Summer provides through learning and collaboration.
          </p>
        </div>
      </section>

      {/* Event Types */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-black text-center mb-12 font-serif">
            Everything happens here
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div>
              <div className="bg-gradient-to-br from-orange-200 to-amber-300 h-64 rounded-xl mb-4"></div>
              <h3 className="text-xl font-semibold text-black mb-2">AI Talks — AGNT'Con</h3>
              <p className="text-gray-600 text-sm mb-3">Insightful talks with builders and founders</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs">3 Cities</span>
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs">Keynotes</span>
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs">Panels</span>
              </div>
            </div>

            {/* Card 2 */}
            <div>
              <div className="bg-gradient-to-br from-amber-200 to-orange-400 h-64 rounded-xl mb-4"></div>
              <h3 className="text-xl font-semibold text-black mb-2">AI Showcase & Clinics</h3>
              <p className="text-gray-600 text-sm mb-3">Hands-on sessions where you apply AI</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs">15 Clinics</span>
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs">Guided Building</span>
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs">Real Use Cases</span>
              </div>
            </div>

            {/* Card 3 */}
            <div>
              <div className="bg-gradient-to-br from-orange-300 to-amber-400 h-64 rounded-xl mb-4"></div>
              <h3 className="text-xl font-semibold text-black mb-2">AI Build — AI & Weekends</h3>
              <p className="text-gray-600 text-sm mb-3">Build real AI products with other builders</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs">Weekend Sprints</span>
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs">Fast Execution</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Gallery */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-black mb-6 font-serif">
            Across India. All summer.
          </h2>
          
          <button className="border border-black text-black px-6 py-3 rounded-lg font-medium text-sm mb-12 hover:bg-black hover:text-white transition-colors">
            Join In Now
          </button>
          
          {/* Horizontal Scrolling Gallery */}
          <div className="flex overflow-x-auto space-x-6 pb-4">
            {[
              { title: "AGNT'Con", subtitle: "March 2025 - Delhi" },
              { title: "AI & Weekends", subtitle: "February 2025 - Bangalore" },
              { title: "AI Showcase", subtitle: "April 2025 - Mumbai" },
              { title: "Build Sessions", subtitle: "May 2025 - Pune" },
              { title: "AI Clinics", subtitle: "June 2025 - Chennai" }
            ].map((event, index) => (
              <div key={index} className="flex-shrink-0 relative">
                <div className="w-80 h-60 bg-gradient-to-br from-amber-200 to-orange-300 rounded-xl relative overflow-hidden">
                  <div className="absolute bottom-4 left-4 bg-black/60 text-white px-3 py-2 rounded-lg">
                    <div className="text-sm font-semibold">{event.title}</div>
                    <div className="text-xs opacity-90">{event.subtitle}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-black text-center mb-12 font-serif">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-1">
            {[
              "Who is this for?",
              "Do I need prior AI experience?",
              "Are events paid?",
              "Can I host or partner?",
              "What are the benefits of partnering?",
              "How do I apply to host an event?",
              "What criteria must I meet to be considered?"
            ].map((question, index) => (
              <div key={index} className="border-b border-gray-200 py-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-medium text-black">{question}</h3>
                  <ChevronDownIcon className="w-5 h-5 text-gray-600" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white relative py-20">
        {/* Background watermark */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <div className="text-gray-900 text-9xl font-serif opacity-5 select-none">
            Agentic Summer
          </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
            {/* Newsletter */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-6">
                Subscribe To<br />
                Get Updates.
              </h3>
              
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-gray-800 border border-gray-600 px-4 py-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white"
                />
                <button className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-sm font-medium mb-6 text-gray-400 uppercase tracking-wide">
                Links
              </h4>
              <div className="space-y-4 text-gray-300">
                <div>About Agentic Summer</div>
                <div>Partner With Us</div>
                <div>Contact Us</div>
              </div>
            </div>

            {/* Socials */}
            <div>
              <h4 className="text-sm font-medium mb-6 text-gray-400 uppercase tracking-wide">
                Socials
              </h4>
              <div className="space-y-4 text-gray-300">
                <div>Twitter</div>
                <div>Join Community</div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex justify-between items-center mt-16 pt-8 border-t border-gray-800 text-gray-500 text-sm">
            <div>Terms and conditions</div>
            <div>All rights reserved Agentic Summer 2025</div>
          </div>
        </div>
      </footer>
    </div>
  );
}