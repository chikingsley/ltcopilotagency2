import React from 'react';

export function CrisisBanner() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full bg-primary py-2 text-center text-sm text-primary-foreground shadow-md">
      <span>Facing an urgent issue? Call us now at </span>
      <a href="tel:+37069181186" className="font-semibold underline hover:opacity-80">
        +370 691 81186
      </a>
      <span> to speak to an expert.</span>
    </div>
  );
}
