// lib/data/footerData.ts

export interface FooterLink {
  text: string;
  href: string;
}

export interface FooterData {
  copyrightBaseText: string;
  links: FooterLink[];
  contactEmail: string;
}

export const footerData: FooterData = {
  copyrightBaseText: "CoPilot Agency. All rights reserved.",
  links: [
    { text: "Home", href: "/" },
    { text: "Services", href: "#services" },
    // Add other links here if needed in the future
  ],
  contactEmail: "contact@copilotagency.com",
};
