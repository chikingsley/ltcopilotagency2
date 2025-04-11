'use client';

import React from 'react';
import { Header } from "@/components/containers/1-hero-section/header";
import { Footer } from "@/components/containers/6-footer/footer-section";
import { CrisisBanner } from '@/components/ui/crisis-banner';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen">
      <CrisisBanner />
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>
        
        <div className="max-w-3xl mx-auto prose prose-lg">
          <p className="text-lg mb-6">
            Last updated: April 11, 2025
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
          <p>
            CoPilot Agency (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Information We Collect</h2>
          <p>
            We collect personal information that you voluntarily provide to us when you:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Fill out our contact form</li>
            <li>Subscribe to our newsletter</li>
            <li>Request information about our services</li>
            <li>Engage with us via social media</li>
          </ul>
          <p>
            The personal information we may collect includes:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Company name</li>
            <li>Industry</li>
            <li>Message content</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">3. How We Use Your Information</h2>
          <p>
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Respond to your inquiries</li>
            <li>Provide the services you request</li>
            <li>Send you marketing communications (with your consent)</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Legal Basis for Processing (GDPR)</h2>
          <p>
            Under the General Data Protection Regulation (GDPR), we process your personal data based on the following legal grounds:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Consent:</strong> When you explicitly agree to the processing of your personal data</li>
            <li><strong>Contractual Necessity:</strong> When processing is necessary to fulfill a contract with you</li>
            <li><strong>Legitimate Interests:</strong> When processing is in our legitimate business interests and not overridden by your rights</li>
            <li><strong>Legal Obligation:</strong> When processing is necessary to comply with a legal obligation</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Data Retention</h2>
          <p>
            We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. For contact form submissions, we typically retain your information for up to 3 years from your last interaction with us.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Your Rights Under GDPR</h2>
          <p>
            If you are a resident of the European Economic Area (EEA), you have certain data protection rights, including:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>The right to access your personal data</li>
            <li>The right to rectify inaccurate personal data</li>
            <li>The right to erasure (the &quot;right to be forgotten&quot;)</li>
            <li>The right to restrict processing of your personal data</li>
            <li>The right to data portability</li>
            <li>The right to object to processing of your personal data</li>
            <li>The right to withdraw consent at any time</li>
          </ul>
          <p>
            To exercise these rights, please contact us at klaudija@copilotagency.com.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal data against unauthorized or unlawful processing, accidental loss, destruction, or damage.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">8. International Data Transfers</h2>
          <p>
            Your information may be transferred to and processed in countries outside of your country of residence. These countries may have data protection laws that are different from the laws of your country. We ensure that appropriate safeguards are in place to protect your personal data when it is transferred internationally.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">9. Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">10. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <p>
            Email: klaudija@copilotagency.com<br />
            CoPilot Agency<br />
            Šv. Stepono g. 38-16, LT-01312 Vilnius<br />
            Lithuania
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
