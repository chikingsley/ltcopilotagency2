import Link from 'next/link';
// import { footerData } from '@/lib/data/footerData';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted py-8 text-muted-foreground">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-sm">&copy; {currentYear} CoPilot Agency. All rights reserved.</p>
        </div>
        <div className="flex space-x-6 text-sm flex-wrap justify-center md:justify-end">
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <Link href="#services" className="hover:text-foreground transition-colors">
            Services
          </Link>
          <Link href="#approach" className="hover:text-foreground transition-colors">
            Approach
          </Link>
          <Link href="#industries" className="hover:text-foreground transition-colors">
            Industries
          </Link>
          <Link href="#contact" className="hover:text-foreground transition-colors">
            Contact
          </Link>
          <Link href="/privacy-policy" className="hover:text-foreground transition-colors">
            Privacy Policy
          </Link>
          <Link href="mailto:contact@copilotagency.com" className="hover:text-foreground transition-colors">
            contact@copilotagency.com
          </Link>
        </div>
      </div>
    </footer>
  );
}
