import { Shield, Megaphone, LineChart, Users, LucideIcon } from 'lucide-react';

export const approachSectionInfo = {
  heading: "Our Approach",
  description: "Our approach is grounded in deep analysis and strategic foresight. We partner closely with clients to understand their unique challenges and objectives, crafting bespoke communication strategies that are both proactive and adaptive. Rigorous planning and execution ensure measurable results and alignment with your core goals."
};

export interface ApproachItem {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  isEmergency?: boolean; // Optional flag
}

export const approachData: ApproachItem[] = [
  {
    icon: Shield,
    title: "Proactive Protection",
    description: "We identify and mitigate potential risks before they become crises.",
    features: [
      "Social media vulnerability audits",
      "Digital footprint minimization",
      "24/7 media sentiment tracking",
      "Early warning detection systems"
    ]
  },
  {
    icon: Megaphone,
    title: "Crisis Response",
    description: "24/7 rapid response and battle-tested strategies to protect your reputation.",
    features: [
      "24/7 crisis hotline",
      "Rapid response team deployment",
      "Media relations management",
      "Stakeholder communications"
    ],
    isEmergency: true // Mark this one specifically
  },
  {
    icon: LineChart,
    title: "Strategic Planning",
    description: "We develop comprehensive strategies to build and maintain your reputation.",
    features: [
      "Reputation management plans",
      "Crisis prevention strategies",
      "Brand positioning",
      "Message development"
    ]
  },
  {
    icon: Users,
    title: "Stakeholder Engagement",
    description: "Building and maintaining strong relationships with key stakeholders.",
    features: [
      "Community outreach programs",
      "Media relationship building",
      "Government relations",
      "Internal communications"
    ]
  }
];
