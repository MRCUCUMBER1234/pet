import Head from 'next/head';
import { ReactNode } from 'react';
import { Nunito } from 'next/font/google';
import { NextFont } from 'next/dist/compiled/@next/font';

import Navigation from '../../../../entities/navigation/ui/Navigation';
import styles from '../../../../app/styles/MainLayout.module.scss';
import Footer from '../../../../widgets/ui/Footer';

const nunito: NextFont = Nunito({ subsets: ['latin'] }); // импортируется в виле функции

type Metadata = {
    keywords: string[];
    title: string;
};

type MainContainerProps = {
    children: ReactNode;
};

export const metadata = {
    keywords: [],
    title: '',
};

const MainContainer = ({ children, keywords = [], title }: MainContainerProps & Metadata) => (
    <>
        <Head>
            {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
            {/* @ts-ignore */}
            <meta keywords={`pet ${keywords}`} />
            {/* eslint-disable-next-line @next/next/no-page-custom-font */}
            <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;400&display=swap" rel="stylesheet" />
            <title>{title}</title>
        </Head>
        <div className={nunito.className}>
            <Navigation title={title} />
            <div className={styles.main}>{children}</div>
            <Footer />
        </div>
    </>
);

export default MainContainer;
