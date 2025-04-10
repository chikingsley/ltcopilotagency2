import { Shield, LucideIcon } from 'lucide-react';

export interface FormSectionData {
  icon: LucideIcon;
  heading: string;
  description: string;
  placeholders: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    company: string;
    message: string;
    industry: string; // Keep industry placeholder for consistency if needed elsewhere
  };
  buttonText: {
    default: string;
    submitting: string;
  };
  toastMessages: {
    success: {
      title: string;
      description: string;
    };
    error: {
      title: string;
      descriptionDefault: string; // Default error message
      descriptionUnexpected: string; // Unexpected error message
    };
  };
}

export const formSectionData: FormSectionData = {
  icon: Shield,
  heading: "Ready to Discuss Your Needs?",
  description: "Get in touch today to schedule a confidential consultation. We're here to help you navigate complex communication challenges and protect your reputation.",
  placeholders: {
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email Address",
    phone: "Phone (Optional)",
    company: "Company (Optional)",
    message: "Your Message", // Removed (Optional) as it's clearer in context
    industry: "Select Industry (Optional)",
  },
  buttonText: {
    default: "Send Message",
    submitting: "Sending...",
  },
  toastMessages: {
    success: {
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll be in touch soon.",
    },
    error: {
      title: "Uh oh! Something went wrong.",
      descriptionDefault: "There was a problem sending your message. Please try again later.",
      descriptionUnexpected: "An unexpected error occurred. Please try again later.",
    },
  },
};
