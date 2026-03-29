'use client';

import { ChevronDownIcon } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with warm gradient */}
      <section className="relative min-h-[40vh] bg-gradient-to-b from-amber-900/20 via-black to-black">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/30 via-orange-900/20 to-black"></div>
        
        {/* CTA Button positioned in hero */}
        <div className="relative pt-20 px-6 max-w-7xl mx-auto">
          <button className="border border-white/50 text-white px-8 py-3 rounded-full text-sm font-medium bg-transparent hover:bg-white/10 transition-colors">
            Explore Events
          </button>
        </div>
        
        <div className="h-20"></div>
      </section>

      {/* Main Value Proposition */}
      <section className="bg-black py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight mb-8">
            AI is changing<br />
            agents are transforming<br />
            the business landscape
          </h1>
          
          <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl text-center mx-auto">
            The next wave of product building is here and AI-native agents are leading the charge, which AI companies and developers need to embrace for competitive advantage.
          </p>
        </div>
      </section>

      {/* Events Section */}
      <section className="bg-black py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Events</h2>
          
          {/* Event Cards - Horizontal Scroll */}
          <div className="flex overflow-x-auto space-x-4 pb-6">
            {/* Featured Event Card - larger */}
            <div className="flex-shrink-0 w-80 h-96 relative rounded-2xl overflow-hidden">
              {/* Photo background */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-300 via-orange-400 to-yellow-500"></div>
              <div className="absolute inset-0" style={{
                background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7))',
                filter: 'sepia(30%) saturate(80%) brightness(75%)'
              }}></div>
            </div>

            {/* Tech Workspace Card */}
            <div className="flex-shrink-0 w-64 h-80 relative rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-700 via-yellow-600 to-orange-700"></div>
              <div className="absolute inset-0" style={{
                background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.6))',
                filter: 'sepia(40%) saturate(70%) brightness(60%)'
              }}></div>
            </div>

            {/* Community Card */}
            <div className="flex-shrink-0 w-64 h-80 relative rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-600 via-orange-500 to-yellow-600"></div>
              <div className="absolute inset-0" style={{
                background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.6))',
                filter: 'sepia(35%) saturate(75%) brightness(70%)'
              }}></div>
            </div>
          </div>

          {/* Event Details with Tags */}
          <div className="mt-8">
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
              Events — AGNT'Con
            </h3>
            
            <p className="text-gray-400 text-sm mb-4">
              Talks with builders and founders
            </p>
            
            <div className="flex space-x-3">
              <span className="bg-gray-800/60 text-gray-300 px-3 py-1 rounded-full text-xs font-medium">
                Keynotes
              </span>
              <span className="bg-gray-800/60 text-gray-300 px-3 py-1 rounded-full text-xs font-medium">
                Panels
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Global Events Section */}
      <section className="bg-black py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Across the Globe</h2>
          
          {/* Location Cards - Horizontal Scroll */}
          <div className="flex overflow-x-auto space-x-4 pb-4">
            {[
              { title: "AGNT'Con", date: "March 2025", city: "Delhi" },
              { title: "AI & Weekends", date: "February 2025", city: "Bangalore" },
              { title: "AI & Weekends", date: "February 2025", city: "Mumbai" },
              { title: "AGNT'Con", date: "April 2025", city: "Chennai" }
            ].map((event, index) => (
              <div key={index} className="flex-shrink-0 w-56 h-72 relative rounded-2xl overflow-hidden">
                {/* Real event photo background */}
                <div 
                  className="absolute inset-0 bg-gradient-to-br from-amber-600 via-orange-500 to-yellow-600"
                  style={{filter: 'sepia(25%) saturate(80%) brightness(75%)'}}
                ></div>
                
                {/* Bottom gradient for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                {/* Text overlay at bottom */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="text-white font-semibold text-sm md:text-base mb-1">{event.title}</h4>
                  <p className="text-green-400 text-xs font-medium">{event.date} — {event.city}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-black py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-3">
            {[
              "Who is this for?",
              "Do I need prior AI experience?",
              "Are events paid?",
              "Can I host or partner?",
              "What are the benefits of partnering?",
              "How do I apply to host an event?",
              "What criteria must I meet to be considered?"
            ].map((question, index) => (
              <div key={index} className="bg-gray-900/40 rounded-xl p-4 cursor-pointer hover:bg-gray-900/60 transition-colors"
                   onClick={() => toggleFAQ(index)}>
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-medium text-sm md:text-base">{question}</h3>
                  <ChevronDownIcon 
                    className={`w-5 h-5 text-gray-400 transition-transform ${
                      openFAQ === index ? 'rotate-180' : ''
                    }`} 
                  />
                </div>
                {openFAQ === index && (
                  <div className="mt-3 text-gray-300 text-sm">
                    <p>Answer content would go here...</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Newsletter Signup */}
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row gap-3 max-w-lg">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-gray-900/60 border border-gray-700 px-4 py-3 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-400 text-sm"
              />
              <button className="bg-transparent border border-white text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-white hover:text-black transition-colors">
                Subscribe
              </button>
            </div>
          </div>

          {/* Footer background image */}
          <div className="mb-8 h-40 rounded-xl overflow-hidden relative">
            <div 
              className="w-full h-full bg-gradient-to-r from-green-900/60 via-amber-800/40 to-green-800/50"
              style={{filter: 'sepia(40%) saturate(60%) brightness(50%)'}}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>

          {/* Bottom links */}
          <div className="flex justify-between items-center text-xs">
            <a href="#" className="text-green-400 hover:text-green-300 transition-colors">
              Terms and conditions
            </a>
            <span className="text-green-400">
              All rights reserved by Inventoise
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}