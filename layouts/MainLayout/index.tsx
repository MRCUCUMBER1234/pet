import Head from 'next/head';
import Navigation from '../../components/Navigation';

// @ts-ignore
const MainContainer = ({ children, keywords, title }) => (
    <>
        <Head>
            {/* @ts-ignore */}
            <meta keywords={`pet ${keywords}`} />
            <title>{title}</title>
        </Head>
        <div>
            <Navigation />
            {children}
        </div>
    </>
);

export default MainContainer;
