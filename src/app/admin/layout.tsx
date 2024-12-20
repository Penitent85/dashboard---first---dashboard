import type { Metadata } from 'next';
import Link from 'next/link';
import Sidebar from '@/components/sidebar/page';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className='flex'>
      <div className='w-[20%]'>
        <Sidebar />
      </div>
      <div className='w-[80%]'>
        {children}
      </div>
      
    </main>
  );
}
