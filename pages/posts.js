import MainContainer from "../layouts/MainLayout";
import LinkAdapter from "../components/LinkAdapter";

const Posts = ({posts}) => {

    return (
        <MainContainer keywords={"posts"} title={"Main"}>
            {posts.map(({id, title}) => (
                <li key={id}>
                    <LinkAdapter link={`/posts/${id}`} text={title} />
                </li>
            ))}
        </MainContainer>
    )
}

Posts.getInitialProps = async (ctx) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json()
    return { posts }
}

export default Posts;