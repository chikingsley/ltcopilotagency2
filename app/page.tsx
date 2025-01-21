'use client';  // Required for Framer Motion in Next.js 13+

import React, { useState } from 'react';
import { ChevronRight, Shield, Megaphone, Users, AlertTriangle, Check, ArrowRight, Globe, Target, Building, Info, Radio, Database, Eye, Command, MessageSquare, Video, Users2, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { Marquee } from "@/components/ui/marquee";

// Add packages data
const packages = [
  {
    name: "Strategic Partner",
    price: "10,000",
    description: "Your strategic communications copilot for building and maintaining a strong reputation.",
    features: [
      {
        title: "Strategic Communications",
        items: [
          "Unlimited strategic counsel",
          "Monthly communications strategy sessions",
          "Quarterly messaging refinement",
          "Stakeholder mapping & analysis"
        ]
      },
      {
        title: "Risk Management",
        items: [
          "Monthly risk assessment",
          "Basic media monitoring",
          "Early warning system setup",
          "Crisis response at preferential rates"
        ]
      },
      {
        title: "Training & Development",
        items: [
          "2 training sessions per month",
          "Basic crisis simulation quarterly",
          "Communications toolkit access",
          "Best practices documentation"
        ]
      }
    ],
    cta: "Schedule Consultation"
  },
  {
    name: "Command Center",
    price: "18,000",
    description: "Full-spectrum communications partner with comprehensive crisis coverage.",
    featured: true,
    features: [
      {
        title: "Crisis Management",
        items: [
          "Unlimited crisis response coverage",
          "24/7 crisis team access",
          "War room activation",
          "Stakeholder communications",
          "Media response coordination"
        ]
      },
      {
        title: "Proactive Management",
        items: [
          "Everything in Strategic Partner",
          "Proactive media relations",
          "Political monitoring",
          "Monthly C-suite training",
          "Reputation audit & tracking"
        ]
      },
      {
        title: "Risk Prevention",
        items: [
          "Advanced crisis simulations",
          "Monthly risk register updates",
          "Competitor monitoring",
          "Social media monitoring"
        ]
      }
    ],
    cta: "Talk to Crisis Team"
  }
];

const services = {
  political: {
    icon: Target,
    title: "Political & Campaign",
    description: "Strategic communications and crisis management for political campaigns, parties, and public figures.",
    capabilities: [
      {
        title: "Campaign Strategy",
        description: "Comprehensive communication strategy development for political campaigns at all levels.",
        features: [
          "Message development & testing",
          "Voter outreach strategy",
          "Coalition building",
          "Opposition research",
          "Rapid response systems"
        ]
      },
      {
        title: "Political Crisis Management",
        description: "Rapid response and reputation protection for political figures and organizations.",
        features: [
          "24/7 crisis response",
          "Scandal management",
          "Media relations",
          "Narrative control",
          "Stakeholder communications"
        ]
      }
    ]
  },
  training: {
    icon: Users,
    title: "Executive Training",
    description: "Comprehensive training programs for leaders and communications teams.",
    capabilities: [
      {
        title: "Media Training",
        description: "Prepare executives and spokespeople for media interactions.",
        features: [
          "Interview techniques",
          "Message delivery",
          "Body language coaching",
          "Crisis response training",
          "Press conference preparation"
        ]
      },
      {
        title: "Crisis Simulation",
        description: "Real-world crisis scenarios and response training.",
        features: [
          "Custom scenario development",
          "Team response assessment",
          "Protocol testing",
          "Leadership evaluation",
          "Response optimization"
        ]
      }
    ]
  },
  international: {
    icon: Globe,
    title: "International Relations",
    description: "Cross-border communications and reputation management.",
    capabilities: [
      {
        title: "Global Communications",
        description: "Strategic communications across borders and cultures.",
        features: [
          "Multi-language strategy",
          "Cultural adaptation",
          "International media relations",
          "Cross-border crisis management",
          "Global stakeholder engagement"
        ]
      },
      {
        title: "EU Affairs",
        description: "Specialized communications for European Union matters.",
        features: [
          "EU policy communications",
          "Regulatory communications",
          "Cross-border coordination",
          "EU stakeholder management",
          "Multi-market campaigns"
        ]
      }
    ]
  },
  digital: {
    icon: Shield,
    title: "Digital Reputation",
    description: "Online reputation management and crisis response.",
    capabilities: [
      {
        title: "Digital Crisis Management",
        description: "Rapid response for online reputation threats.",
        features: [
          "Social media monitoring",
          "Online crisis response",
          "Digital threat assessment",
          "Narrative management",
          "Online sentiment analysis"
        ]
      },
      {
        title: "Proactive Digital Strategy",
        description: "Building a strong online presence.",
        features: [
          "Digital brand protection",
          "Social listening programs",
          "Online reputation building",
          "Digital risk assessment",
          "Content strategy"
        ]
      }
    ]
  }
};

interface ServiceButtonProps {
  isActive: boolean;
  icon: React.ElementType;
  title: string;
  onClick: () => void;
}

const ServiceButton = ({ isActive, icon: Icon, title, onClick }: ServiceButtonProps) => {
  return (
    <motion.button
      onClick={onClick}
      className={`flex items-center px-6 py-3 rounded-lg font-semibold relative ${
        isActive 
          ? 'bg-yellow-400 text-black' 
          : 'bg-black text-white hover:bg-zinc-800'
      }`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Icon className="h-5 w-5 mr-2" />
      {title}
      {!isActive && (
        <motion.div
          className="absolute inset-0 rounded-lg border border-yellow-400/30"
          initial={{ opacity: 0.5 }}
          animate={{ 
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.02, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      )}
    </motion.button>
  );
};

export default function Home() {
  const [activeTab, setActiveTab] = useState('political');

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <motion.header 
        className="container mx-auto px-4 py-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <nav className="flex justify-between items-center mb-16">
          <Image
            src="/logo-3x-copilot agency.svg"
            alt="CoPilot Agency"
            width={150}
            height={56}
            priority
            className="h-12 w-auto"
          />
          <div className="space-x-8">
            <a href="#services" className="hover:text-yellow-400">Services</a>
            <a href="#expertise" className="hover:text-yellow-400">Expertise</a>
            <a href="#approach" className="hover:text-yellow-400">Our Approach</a>
            <button className="bg-yellow-400 text-black px-6 py-2 rounded">
              Crisis Line 24/7
            </button>
          </div>
        </nav>
        
        <motion.div 
          className="max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-5xl font-bold mb-6">
            Strategic Communications & Crisis Management for High-Stakes Situations
          </h1>
          <p className="text-xl mb-8">
            When reputation matters most, global leaders trust CoPilot Agency for strategic communications and crisis management. Available 24/7 for immediate response.
          </p>
          <div className="flex space-x-4">
            <button className="bg-yellow-400 text-black px-8 py-3 rounded-lg flex items-center">
              Contact Crisis Team <ChevronRight className="ml-2" />
            </button>
            <button className="border border-yellow-400 text-yellow-400 px-8 py-3 rounded-lg">
              Schedule Consultation
            </button>
          </div>
        </motion.div>
      </motion.header>

      {/* Partners Marquee */}
      <Marquee 
        pauseOnHover={true}
        speed={20}
        className="bg-black border-y border-zinc-800"
      >
        {Array(8).fill(null).map((_, index) => (
          <div key={index} className="flex items-center gap-16">
            <div className="relative w-32 h-16">
              <Image
                src="/alde-logo.png"
                alt="ALDE Party"
                fill
                className="object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="relative w-32 h-16">
              <Image
                src="/logo-full.svg"
                alt="Liberalai"
                fill
                className="object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        ))}
      </Marquee>

      {/* Interactive Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Our Services</h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Expert solutions for complex communications challenges across sectors and scenarios.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(services).map(([key, service]) => (
              <ServiceButton
                key={key}
                isActive={activeTab === key}
                icon={service.icon}
                title={service.title}
                onClick={() => setActiveTab(key)}
              />
            ))}
          </div>

          <motion.div 
            className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            {services[activeTab].capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                className="bg-black rounded-xl p-8"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-2xl font-bold text-white mb-4">
                  {capability.title}
                </h3>
                <p className="text-zinc-400 mb-6">
                  {capability.description}
                </p>
                <ul className="space-y-4">
                  {capability.features.map((feature, featureIndex) => (
                    <motion.li
                      key={feature}
                      className="flex items-center text-white"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (index * 0.1) + (featureIndex * 0.1) }}
                    >
                      <ChevronRight className="h-5 w-5 text-yellow-400 mr-2" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="bg-zinc-900 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container px-4"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Industries We Serve</h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              We partner with organizations across various sectors, delivering strategic communication solutions that drive meaningful impact and create lasting change.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              "Political Organizations",
              "Government Agencies",
              "Think Tanks",
              "NGOs",
              "Public Institutions",
              "Trade Associations",
              "Educational Institutions",
              "Advocacy Groups",
              "International Organizations",
              "Political Campaigns",
              "Religious Organizations",
              "Policy Research Centers",
              "Diplomatic Missions"
            ].map((industry) => (
              <motion.button
                key={industry}
                className="bg-black hover:bg-zinc-800 text-white px-6 py-3 rounded-lg text-sm transition-all border border-zinc-800 hover:border-yellow-400"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                {industry}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 bg-zinc-900">
        <AnimatedTestimonials 
          testimonials={[
            {
              quote: "Their crisis management expertise is unparalleled. When we faced a critical situation, their team's rapid response and strategic guidance helped us navigate through it successfully. They're not just consultants, they're trusted partners.",
              name: "Ian Marquez",
              designation: "CEO, Global Communications Corp",
              src: "/ian_marq.jpeg"
            },
            {
              quote: "Their political communications strategy transformed our campaign. The team's ability to craft compelling messages and manage complex stakeholder relationships was instrumental in our success. They deliver results when it matters most.",
              name: "Sarah Chen",
              designation: "Political Campaign Director",
              src: "/sarah_chen.jpg"
            },
            {
              quote: "In the fast-paced tech industry, reputation management is crucial. Their team's proactive approach to crisis prevention and digital communications strategy has been invaluable. They understand our industry and deliver solutions that work.",
              name: "Michael Thompson",
              designation: "Director of Communications, Tech Global",
              src: "/michael_thompson.jpg"
            }
          ]}
          autoplay={true}
        />
      </section>

      {/* Approach Section */}
      <section className="py-20">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Approach</h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              We combine proactive protection, strategic response, and continuous training to ensure your organization is prepared for any challenge.
            </p>
          </div>

          <div className="space-y-16">
            {/* First Row - Three Columns */}
            <div className="grid md:grid-cols-3 gap-8">
              {/* Proactive Protection */}
              <div className="bg-zinc-900 p-8 rounded-lg">
                <div className="bg-yellow-400 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="h-6 w-6 text-black" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Proactive Protection</h3>
                <p className="text-zinc-400 mb-6">
                  We identify and mitigate potential risks before they become crises, protecting your reputation 24/7.
                </p>
                <ul className="space-y-3 text-zinc-400">
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
              <div className="bg-zinc-900 p-8 rounded-lg">
                <div className="bg-yellow-400 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <MessageSquare className="h-6 w-6 text-black" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Strategic Communications</h3>
                <p className="text-zinc-400 mb-6">
                  Crafting and delivering messages that resonate with your audience and achieve your objectives.
                </p>
                <ul className="space-y-3 text-zinc-400">
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
              <div className="bg-zinc-900 p-8 rounded-lg">
                <div className="bg-yellow-400 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <Users className="h-6 w-6 text-black" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Training & Development</h3>
                <p className="text-zinc-400 mb-6">
                  Preparing your team through comprehensive training and simulations for any scenario.
                </p>
                <ul className="space-y-3 text-zinc-400">
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
            </div>

            {/* Second Row - Crisis Management */}
            <div className="bg-black p-8 rounded-lg border border-zinc-800">
              <div className="flex items-start mb-8">
                <div className="bg-yellow-400 w-12 h-12 rounded-lg flex items-center justify-center">
                  <Target className="h-6 w-6 text-black" />
                </div>
                <div className="ml-6">
                  <h3 className="text-2xl font-bold mb-4">Crisis Management</h3>
                  <p className="text-zinc-400 max-w-3xl">
                    When crises occur, we deploy battle-tested strategies and rapid response protocols to protect and defend your reputation.
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-3 flex items-center">
                    <Command className="h-5 w-5 text-yellow-400 mr-2" />
                    Rapid Response
                  </h4>
                  <ul className="space-y-2 text-zinc-400">
                    <li className="flex items-start">
                      <div className="w-1 h-1 bg-yellow-400 rounded-full mt-2 mr-2 flex-shrink-0" />
                      24/7 crisis hotline
                    </li>
                    <li className="flex items-start">
                      <div className="w-1 h-1 bg-yellow-400 rounded-full mt-2 mr-2 flex-shrink-0" />
                      War room activation
                    </li>
                    <li className="flex items-start">
                      <div className="w-1 h-1 bg-yellow-400 rounded-full mt-2 mr-2 flex-shrink-0" />
                      Immediate team deployment
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 flex items-center">
                    <Globe className="h-5 w-5 text-yellow-400 mr-2" />
                    Media Management
                  </h4>
                  <ul className="space-y-2 text-zinc-400">
                    <li className="flex items-start">
                      <div className="w-1 h-1 bg-yellow-400 rounded-full mt-2 mr-2 flex-shrink-0" />
                      Media monitoring
                    </li>
                    <li className="flex items-start">
                      <div className="w-1 h-1 bg-yellow-400 rounded-full mt-2 mr-2 flex-shrink-0" />
                      Statement development
                    </li>
                    <li className="flex items-start">
                      <div className="w-1 h-1 bg-yellow-400 rounded-full mt-2 mr-2 flex-shrink-0" />
                      Press relationship management
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 flex items-center">
                    <Shield className="h-5 w-5 text-yellow-400 mr-2" />
                    Reputation Recovery
                  </h4>
                  <ul className="space-y-2 text-zinc-400">
                    <li className="flex items-start">
                      <div className="w-1 h-1 bg-yellow-400 rounded-full mt-2 mr-2 flex-shrink-0" />
                      Damage assessment
                    </li>
                    <li className="flex items-start">
                      <div className="w-1 h-1 bg-yellow-400 rounded-full mt-2 mr-2 flex-shrink-0" />
                      Recovery strategy
                    </li>
                    <li className="flex items-start">
                      <div className="w-1 h-1 bg-yellow-400 rounded-full mt-2 mr-2 flex-shrink-0" />
                      Stakeholder rebuilding
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto px-4"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Your Communications Copilot</h2>
            <p className="text-xl mb-8">
              Strategic partnership packages designed to protect and enhance your reputation across all scenarios.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg) => (
              <motion.div 
                key={pkg.name}
                className={`bg-zinc-900 rounded-xl p-8 relative ${
                  pkg.featured ? 'border-2 border-yellow-400' : ''
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {pkg.featured && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}

                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">${pkg.price}</span>
                  <span className="text-zinc-400">/month</span>
                </div>
                <p className="text-zinc-400 mb-8">{pkg.description}</p>

                {pkg.features.map((feature, index) => (
                  <div key={index} className="mb-8">
                    <h4 className="text-lg font-semibold mb-4 text-yellow-400">
                      {feature.title}
                    </h4>
                    <ul className="space-y-3">
                      {feature.items.map((item) => (
                        <li key={item} className="flex items-start">
                          <Check className="text-yellow-400 mr-2" />
                          <span className="text-zinc-200">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                <motion.button 
                  className={`w-full py-3 rounded-lg font-semibold mt-4 flex items-center justify-center ${
                    pkg.featured 
                      ? 'bg-yellow-400 text-black hover:bg-yellow-500'
                      : 'border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {pkg.cta}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Crisis CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="bg-red-600 p-12 rounded-lg text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <AlertTriangle className="h-16 w-16 mx-auto mb-6 text-white" />
            <h2 className="text-3xl font-bold mb-4">Facing a Crisis?</h2>
            <p className="text-xl mb-8">Our team is available 24/7 for immediate response</p>
            <div className="flex justify-center space-x-4">
              <motion.button 
                className="bg-white text-red-600 px-8 py-3 rounded-lg font-bold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Call Crisis Line
              </motion.button>
              <motion.button 
                className="border-2 border-white px-8 py-3 rounded-lg font-bold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Email Crisis Team
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
