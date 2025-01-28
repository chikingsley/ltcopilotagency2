export interface Testimonial {
  quote: string;
  name: string;
  designation: string;
  src: string;
}

export const testimonials: Testimonial[] = [
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
]; 