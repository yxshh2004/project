import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DoctorBuddy - Consult Doctors Online | Healthcare Platform',
  description: 'Connect with certified doctors through secure online consultations. Get expert medical advice from the comfort of your home, 24/7. Book appointments instantly with top healthcare professionals.',
  keywords: 'online doctor consultation, telemedicine, healthcare, medical advice, doctor appointment, virtual consultation',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}