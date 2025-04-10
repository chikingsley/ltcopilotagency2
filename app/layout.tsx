import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ui/theme-provider"
import { Toaster } from "@/components/ui/toaster";
import { CrisisBanner } from '@/components/ui/crisis-banner';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CoPilot Agency",
  description: "Strategic Communications & Crisis Management",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    // suppressHydrationWarning is important when forcing theme
    <html lang="en" suppressHydrationWarning>
      {/* Added pt-10 for banner height */}
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground pt-10`}>
        <ThemeProvider forcedTheme="dark">
          <CrisisBanner /> 
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
