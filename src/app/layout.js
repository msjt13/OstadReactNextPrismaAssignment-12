import BottomBar from '@/components/template/BottomBar';
import NavBar from '@/components/template/NavBar';

import './globals.css';
import { Inter } from 'next/font/google';
import getAllCategories from "@/utils/getAllCategories";

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default async function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <NavBar />
                {children}
                <BottomBar />
            </body>
        </html>
    );
}
