import Head from "next/head";
import Navigation from "../../components/Navigation";

const MainContainer = ({ children, keywords, title }) => {
    return (
        <>
            <Head>
                <meta keywords={`pet ${keywords}`} />
                <title>{title}</title>
            </Head>
            <div>
                <Navigation />
                {children}
            </div>
        </>
    )
}

export default MainContainer;