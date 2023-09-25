import { ReactNode } from 'react';
import { Nunito } from 'next/font/google';
import { NextFont } from 'next/dist/compiled/@next/font';
import { Metadata } from 'next';

import '@/shared/styles/global.css';
import Navigation from '@/entities/navigation/ui/Navigation';
import Footer from '@/widgets/ui/Footer';
import { Providers } from '@/shared/lib/providers';
import styles from '@/shared/styles/MainLayout.module.scss';

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
                <Providers>
                    <Navigation />
                    <main className={styles.main}>{children}</main>
                    <Footer />
                </Providers>
            </body>
        </html>
    );
}
