import Link from 'next/link';
import { footerData } from '@/lib/data/footerData';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted py-8 text-muted-foreground">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-sm">
            &copy; {currentYear} {footerData.copyrightBaseText}
          </p>
        </div>
        <div className="flex space-x-6 text-sm">
          {footerData.links.map((link) => (
            <Link 
              key={link.text} 
              href={link.href} 
              className="hover:text-foreground transition-colors"
            >
              {link.text}
            </Link>
          ))}
          <Link href="/privacy-policy" className="hover:text-foreground transition-colors">
            Privacy Policy
          </Link>
          <a 
            href={`mailto:${footerData.contactEmail}`} 
            className="hover:text-foreground transition-colors"
          >
            {footerData.contactEmail}
          </a>
        </div>
      </div>
    </footer>
  );
}
