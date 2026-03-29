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
      {/* Hero Section */}
      <section className="relative min-h-[50vh] bg-black">
        {/* Hero background image with overlay */}
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gradient-to-t from-amber-900/80 via-amber-800/40 to-transparent"></div>
          {/* Placeholder for hero image */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/60 to-orange-900/40 opacity-60"></div>
        </div>
        
        {/* CTA Button positioned over hero */}
        <div className="relative pt-32 px-6 max-w-7xl mx-auto">
          <button className="border border-white/60 text-white px-6 py-3 rounded-lg text-sm font-medium bg-transparent hover:bg-white/10 transition-colors">
            Explore Events
          </button>
        </div>
        
        <div className="h-32"></div> {/* Spacer */}
      </section>

      {/* Main Value Proposition */}
      <section className="bg-black py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-none tracking-tight mb-8">
            AI is changing<br />
            agents are transforming<br />
            the business landscape
          </h1>
          
          <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl">
            The next wave of product building is here and AI-native agents are leading the charge, which AI companies and developers need to embrace for competitive advantage.
          </p>
        </div>
      </section>

      {/* Events Section */}
      <section className="bg-black py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Events</h2>
          
          {/* Event Cards - Horizontal Scroll */}
          <div className="flex overflow-x-auto space-x-4 pb-4">
            {/* Featured Event Card */}
            <div className="flex-shrink-0 w-80 h-96 relative rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-200 via-orange-300 to-amber-400"></div>
              {/* Sepia/vintage filter overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/40 via-transparent to-amber-800/20" 
                   style={{filter: 'sepia(20%) saturate(80%) brightness(85%)'}}></div>
            </div>

            {/* Tech Workspace Card */}
            <div className="flex-shrink-0 w-64 h-80 relative rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-800 via-yellow-800 to-orange-800"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/60 via-transparent to-amber-800/30"
                   style={{filter: 'sepia(30%) saturate(70%) brightness(70%)'}}></div>
            </div>

            {/* Community Card */}
            <div className="flex-shrink-0 w-64 h-80 relative rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-700 via-orange-600 to-yellow-700"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/50 via-transparent to-amber-800/20"
                   style={{filter: 'sepia(25%) saturate(75%) brightness(80%)'}}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="bg-black px-6 pb-16">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
            Events — AGNT'Con
          </h3>
          
          <p className="text-gray-400 text-sm mb-4">
            Talks with builders and founders
          </p>
          
          <div className="flex space-x-4 text-xs">
            <span className="text-gray-500">Keynotes</span>
            <span className="text-gray-500">Panels</span>
          </div>
        </div>
      </section>

      {/* Global Events Section */}
      <section className="bg-black py-16 px-6">
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
                {/* Event image background */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-600 via-orange-500 to-yellow-600"
                     style={{filter: 'sepia(20%) saturate(80%) brightness(85%)'}}></div>
                
                {/* Bottom gradient for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                
                {/* Text overlay */}
                <div className="absolute bottom-4 left-4">
                  <h4 className="text-white font-semibold text-sm md:text-base">{event.title}</h4>
                  <p className="text-green-400 text-xs font-medium">{event.date} — {event.city}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-black py-16 px-6">
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
              <div key={index} className="bg-gray-900/60 rounded-xl p-5 cursor-pointer"
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
      <footer className="bg-gray-950/80 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Newsletter Signup */}
          <div className="mb-12">
            <div className="flex flex-col sm:flex-row gap-3 max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-gray-800/60 border border-gray-700 px-4 py-3 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-400 text-sm"
              />
              <button className="bg-transparent border border-white text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-white hover:text-black transition-colors">
                Subscribe
              </button>
            </div>
          </div>

          {/* Footer image collage placeholder */}
          <div className="mb-12 h-32 bg-gradient-to-r from-amber-900/40 to-orange-900/40 rounded-lg"
               style={{filter: 'sepia(30%) saturate(70%) brightness(60%)'}}></div>

          {/* Bottom links */}
          <div className="flex justify-between items-center text-xs">
            <a href="#" className="text-green-400 hover:text-green-300">
              Terms and conditions
            </a>
            <span className="text-green-400">
              All rights reserved by Agentic Summer
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}