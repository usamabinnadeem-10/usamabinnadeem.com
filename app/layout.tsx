import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

// Modern, clean font for the design-forward aesthetic
const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://usamabinnadeem.com'),
  title: "Usama Bin Nadeem | Software Engineer",
  description: "Fullstack Software Engineer with 4+ years of experience crafting seamless digital experiences. Specializing in web development, API design, and cloud solutions.",
  keywords: ["Software Engineer", "Web Developer", "Fullstack Developer", "React", "Next.js", "TypeScript", "Node.js", "Freelance Developer"],
  authors: [{ name: "Usama Bin Nadeem" }],
  alternates: {
    canonical: "https://usamabinnadeem.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://usamabinnadeem.com",
    siteName: "Usama Bin Nadeem",
    title: "Usama Bin Nadeem | Software Engineer",
    description: "Fullstack Software Engineer with 4+ years of experience crafting seamless digital experiences.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Usama Bin Nadeem - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Usama Bin Nadeem | Software Engineer",
    description: "Fullstack Software Engineer with 4+ years of experience crafting seamless digital experiences.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your Google Search Console verification code here when you have it
    // google: 'your-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black overscroll-y-none">
      <body className={`${inter.variable} ${jakarta.variable} antialiased`}>
        <ThemeProvider>
          <Navbar />
          <main className="min-h-dvh pt-16 md:pt-20">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
