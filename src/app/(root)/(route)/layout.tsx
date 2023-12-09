import Footer from '@/components/home/Footer';
import Navbar from '@/components/home/Navbar';
import type { Metadata } from 'next';

export default function RouteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="mt-16 relative overflow-hidden">
      {children}
      </main>
      <Footer />
    </>
  );
}
