import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { ScrollToTopButton } from "@/components/scroll-to-top";

const inter = Inter({ variable: "--font-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Amit Patil · Portfolio",
    template: "%s · Amit Patil",
  },
  description:
    "AI-Full Stack Developer building scalable applications and AI-driven solutions.",
  keywords: [
    "Amit Patil",
    "Portfolio",
    "Full Stack",
    "AI",
    "Data Science",
    "Next.js",
    "TypeScript",
  ],
  openGraph: {
    title: "Amit Patil · Portfolio",
    description:
      "AI-Full Stack Developer building scalable applications and AI-driven solutions.",
    url: "https://your-domain.com",
    siteName: "Amit Patil Portfolio",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Amit Patil Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL("https://your-domain.com"),
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={`${inter.variable} antialiased min-h-dvh bg-background text-foreground`}>
        <ThemeProvider attribute="class" forcedTheme="dark" disableTransitionOnChange>
          {children}
          <ScrollToTopButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
