import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted py-8 text-muted-foreground">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-sm">
            &copy; {currentYear} CoPilot Agency. All rights reserved.
          </p>
        </div>
        <div className="flex space-x-6 text-sm">
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          {/* Assuming you have a services section or page */}
          <Link href="#services" className="hover:text-foreground transition-colors">
            Services
          </Link>
          <a href="mailto:contact@copilotagency.com" className="hover:text-foreground transition-colors">
            contact@copilotagency.com
          </a>
        </div>
      </div>
    </footer>
  );
}
