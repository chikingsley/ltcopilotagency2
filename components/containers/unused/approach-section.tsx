'use client';

import { Shield, MessageSquare, Command } from "lucide-react";

export function ApproachSection() {
  return (
    <section className="bg-black py-20">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6 text-zinc-100">Our Approach</h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            We combine proactive protection, strategic response, and continuous training to ensure your organization is prepared for any challenge.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {/* Proactive Protection */}
          <div className="bg-zinc-900 p-6 rounded-lg">
            <div className="bg-yellow-400 w-10 h-10 rounded-lg flex items-center justify-center mb-4">
              <Shield className="h-5 w-5 text-black" />
            </div>
            <h3 className="text-xl font-bold mb-3">Proactive Protection</h3>
            <p className="text-zinc-400 mb-4 text-sm">
              We identify and mitigate potential risks before they become crises, protecting your reputation 24/7.
            </p>
            <ul className="space-y-2 text-zinc-400 text-sm">
              <li className="flex items-start">
                <div className="w-1 h-1 bg-yellow-400 rounded-full mt-2 mr-2 flex-shrink-0" />
                Social media vulnerability audits
              </li>
              <li className="flex items-start">
                <div className="w-1 h-1 bg-yellow-400 rounded-full mt-2 mr-2 flex-shrink-0" />
                Digital footprint minimization
              </li>
              <li className="flex items-start">
                <div className="w-1 h-1 bg-yellow-400 rounded-full mt-2 mr-2 flex-shrink-0" />
                24/7 media sentiment tracking
              </li>
              <li className="flex items-start">
                <div className="w-1 h-1 bg-yellow-400 rounded-full mt-2 mr-2 flex-shrink-0" />
                Early warning detection systems
              </li>
            </ul>
          </div>

          {/* Strategic Communications */}
          <div className="bg-zinc-900 p-6 rounded-lg">
            <div className="bg-yellow-400 w-10 h-10 rounded-lg flex items-center justify-center mb-4">
              <MessageSquare className="h-5 w-5 text-black" />
            </div>
            <h3 className="text-xl font-bold mb-3">Strategic Communications</h3>
            <p className="text-zinc-400 mb-4 text-sm">
              Crafting and delivering messages that resonate with your audience and achieve your objectives.
            </p>
            <ul className="space-y-2 text-zinc-400 text-sm">
              <li className="flex items-start">
                <div className="w-1 h-1 bg-yellow-400 rounded-full mt-2 mr-2 flex-shrink-0" />
                Message development and testing
              </li>
              <li className="flex items-start">
                <div className="w-1 h-1 bg-yellow-400 rounded-full mt-2 mr-2 flex-shrink-0" />
                Stakeholder engagement plans
              </li>
              <li className="flex items-start">
                <div className="w-1 h-1 bg-yellow-400 rounded-full mt-2 mr-2 flex-shrink-0" />
                Media relations strategy
              </li>
              <li className="flex items-start">
                <div className="w-1 h-1 bg-yellow-400 rounded-full mt-2 mr-2 flex-shrink-0" />
                Digital campaign management
              </li>
            </ul>
          </div>

          {/* Training & Development */}
          <div className="bg-zinc-900 p-6 rounded-lg">
            <div className="bg-yellow-400 w-10 h-10 rounded-lg flex items-center justify-center mb-4">
              <Shield className="h-5 w-5 text-black" />
            </div>
            <h3 className="text-xl font-bold mb-3">Training & Development</h3>
            <p className="text-zinc-400 mb-4 text-sm">
              Preparing your team through comprehensive training and simulations for any scenario.
            </p>
            <ul className="space-y-2 text-zinc-400 text-sm">
              <li className="flex items-start">
                <div className="w-1 h-1 bg-yellow-400 rounded-full mt-2 mr-2 flex-shrink-0" />
                Custom crisis simulations
              </li>
              <li className="flex items-start">
                <div className="w-1 h-1 bg-yellow-400 rounded-full mt-2 mr-2 flex-shrink-0" />
                Media interview training
              </li>
              <li className="flex items-start">
                <div className="w-1 h-1 bg-yellow-400 rounded-full mt-2 mr-2 flex-shrink-0" />
                Team role assignments
              </li>
              <li className="flex items-start">
                <div className="w-1 h-1 bg-yellow-400 rounded-full mt-2 mr-2 flex-shrink-0" />
                Response protocol training
              </li>
            </ul>
          </div>

          {/* Crisis Management */}
          <div className="bg-black p-6 rounded-lg border border-red-900/50 hover:border-red-800/50 transition-colors">
            <div className="relative">
              <div className="bg-red-500 w-10 h-10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-5 w-5 text-white animate-pulse" />
              </div>
              <div className="absolute -inset-1 bg-red-500/20 rounded-lg blur-sm animate-pulse" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-red-500">Crisis Management</h3>
            <p className="text-zinc-400 mb-4 text-sm">
              24/7 rapid response and battle-tested strategies to protect your reputation.
            </p>
            <div className="space-y-3">
              <div>
                <h4 className="text-sm font-semibold mb-2 flex items-center text-red-400">
                  <Command className="h-4 w-4 mr-2" />
                  Rapid Response
                </h4>
                <ul className="space-y-1 text-zinc-400 text-sm">
                  <li className="flex items-start">
                    <div className="w-1 h-1 bg-red-500 rounded-full mt-2 mr-2 flex-shrink-0" />
                    24/7 crisis hotline
                  </li>
                  <li className="flex items-start">
                    <div className="w-1 h-1 bg-red-500 rounded-full mt-2 mr-2 flex-shrink-0" />
                    War room activation
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-2 flex items-center text-red-400">
                  <Shield className="h-4 w-4 mr-2" />
                  Recovery
                </h4>
                <ul className="space-y-1 text-zinc-400 text-sm">
                  <li className="flex items-start">
                    <div className="w-1 h-1 bg-red-500 rounded-full mt-2 mr-2 flex-shrink-0" />
                    Damage assessment
                  </li>
                  <li className="flex items-start">
                    <div className="w-1 h-1 bg-red-500 rounded-full mt-2 mr-2 flex-shrink-0" />
                    Recovery strategy
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 