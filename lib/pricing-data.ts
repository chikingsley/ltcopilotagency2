export interface PricingPlan {
  name: string;
  price: string;
  yearlyPrice: string;
  period: string;
  description: string;
  buttonText: string;
  href: string;
  isPopular: boolean;
  features: string[];
}

export const pricingPlans: PricingPlan[] = [
  {
    name: "Strategic Partner",
    price: "10000",
    yearlyPrice: "96000",
    period: "month",
    description: "Your strategic communications copilot for building and maintaining a strong reputation.",
    buttonText: "Schedule Consultation",
    href: "#consultation",
    isPopular: false,
    features: [
      "Unlimited strategic counsel",
      "Monthly communications strategy sessions",
      "Quarterly messaging refinement",
      "Stakeholder mapping & analysis",
      "Monthly risk assessment",
      "Basic media monitoring",
      "Early warning system setup",
      "Crisis response at preferential rates",
      "2 training sessions per month",
      "Basic crisis simulation quarterly",
      "Communications toolkit access",
      "Best practices documentation"
    ]
  },
  // ... rest of the pricing plans
]; 