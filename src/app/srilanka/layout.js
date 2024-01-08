import { Inter } from 'next/font/google';
import './globals.css';
import 'react-datepicker/dist/react-datepicker.css';
import Navbar from '@/components/srilanka/common/Navbar';
import Footer from '@/components/srilanka/common/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'E-Visa ',
};

export default function RootLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
