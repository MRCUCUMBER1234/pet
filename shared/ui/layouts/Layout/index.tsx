import Head from 'next/head';
import { ReactNode } from 'react';
import { Nunito } from 'next/font/google';
import { NextFont } from 'next/dist/compiled/@next/font';

import cn from 'classnames';
import Navigation from '../../../../entities/navigation/ui/Navigation';
import styles from '../../../../app/styles/MainLayout.module.scss';
import Footer from '../../../../widgets/ui/Footer';

const nunito: NextFont = Nunito({ subsets: ['latin'] }); // импортируется в виде функции

type Metadata = {
    keywords: string[];
    title: string;
};

type LayoutProps = {
    children: ReactNode;
};

export const metadata = {
    keywords: [],
    title: '',
};

const Layout = ({ children, keywords = [], title }: LayoutProps & Metadata) => (
    <html lang="en">
        <body>
            {/* <Head> */}
            {/*     /!* eslint-disable-next-line @typescript-eslint/ban-ts-comment *!/ */}
            {/*     /!* @ts-ignore *!/ */}
            {/*     <meta keywords={`pet ${keywords}`} /> */}
            {/*     /!* eslint-disable-next-line @next/next/no-page-custom-font *!/ */}
            {/*     <link */}
            {/*         href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;400&display=swap" */}
            {/*         rel="stylesheet" */}
            {/*     /> */}
            {/*     <title>{title}</title> */}
            {/* </Head> */}
            <Navigation title={title} />
            <main className={cn(nunito.className, styles.main)}>{children}</main>
            <Footer />
        </body>
    </html>
);

export default Layout;
