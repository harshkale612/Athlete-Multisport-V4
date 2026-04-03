import type { Metadata } from 'next';
import { Inter, Syne } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '../theme/ThemeProvider';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { generateHomeMetadata } from '../lib/seo';
import { generateWebSiteSchema } from '../lib/structuredData';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
});

export const metadata: Metadata = generateHomeMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const websiteSchema = generateWebSiteSchema();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Prevent FOUC: apply saved theme class before React hydrates */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('athlete-theme');if(t)document.documentElement.className=t;}catch(e){}})();`,
          }}
        />
        {/* Website structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={`${inter.variable} ${syne.variable} font-sans`} suppressHydrationWarning>
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow w-full" id="main-content" role="main">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
