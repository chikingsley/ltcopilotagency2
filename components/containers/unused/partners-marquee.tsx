import Image from 'next/image';
import { Marquee } from "@/components/containers/unused/marquee";

export function PartnersMarquee() {
  return (
    <Marquee 
      pauseOnHover={true}
      speed={60}
      className="bg-black border-y border-zinc-800"
    >
      {Array(8).fill(null).map((_, index) => (
        <div key={index} className="flex items-center gap-16">
          <div className="relative w-32 h-16">
            <Image
              src="/alde-logo.png"
              alt="ALDE Party"
              fill
              className="object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
            />
          </div>
          <div className="relative w-32 h-16">
            <Image
              src="/logo-full.svg"
              alt="Liberalai"
              fill
              className="object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      ))}
    </Marquee>
  );
} 