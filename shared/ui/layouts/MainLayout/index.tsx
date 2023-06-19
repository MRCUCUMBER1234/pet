import Head from 'next/head';
import { ReactNode } from 'react';

import Navigation from '../../../../entities/Navigation/ui/Navigation';
import styles from '../../../../app/styles/MainLayout.module.scss';

type MainContainerProps = {
    children: ReactNode;
    keywords: string[];
    title: string;
};

const MainContainer = ({ children, keywords = [], title }: MainContainerProps) => (
    <>
        <Head>
            {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
            {/* @ts-ignore */}
            <meta keywords={`pet ${keywords}`} />
            {/* eslint-disable-next-line @next/next/no-page-custom-font */}
            <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;400&display=swap" rel="stylesheet" />
            <title>{title}</title>
        </Head>
        <div>
            <Navigation />
            <div className={styles.main}>{children}</div>
        </div>
    </>
);

export default MainContainer;
