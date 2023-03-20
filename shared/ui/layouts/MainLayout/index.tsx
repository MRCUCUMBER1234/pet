import Head from 'next/head';
import Navigation from '../../../../entities/Navigation/ui/Navigation';
import styles from '../../../../app/styles/MainLayout.module.scss';

// @ts-ignore
const MainContainer = ({ children, keywords, title }) => (
    <>
        <Head>
            {/* @ts-ignore */}
            <meta keywords={`pet ${keywords}`} />
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
