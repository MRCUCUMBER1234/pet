import MainContainer from "../layouts/MainLayout/mainLayout";
import LinkAdapter from "../components/LinkAdapter";
import { IPost } from "../types/Post";

const Posts = ({ posts }) => {

    return (
        <MainContainer keywords={"posts"} title={"Main"}>
            {posts.map(({id, title}: IPost) => (
                <li key={id}>
                    <LinkAdapter link={`/posts/${id}`} text={title} />
                </li>
            ))}
        </MainContainer>
    )
}

Posts.getInitialProps = async (ctx) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts: IPost[] = await res.json()
    return { posts };
}

export default Posts;