import './styles/global.css';
import { ReactNode } from 'react';
import { Nunito } from 'next/font/google';
import { NextFont } from 'next/dist/compiled/@next/font';
import { Metadata } from 'next';

import Navigation from '../entities/navigation/ui/Navigation';
import styles from './styles/MainLayout.module.scss';
import Footer from '../widgets/ui/Footer';

const nunito: NextFont = Nunito({ subsets: ['latin'] }); // импортируется в виде функции

type LayoutProps = {
    children: ReactNode;
};

export const metadata: Metadata = {
    title: 'Pet app',
    description: 'my pet app',
};

export default function RootLayout({ children }: LayoutProps) {
    return (
        <html lang="en">
            <body className={nunito.className}>
                <Navigation />
                <main className={styles.main}>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
