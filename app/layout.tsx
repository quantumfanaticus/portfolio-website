import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Karthik Miryala',
  description: 'Portfolio website of Karthik Miryala - Quantum Technologies Researcher and Educator',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
} 