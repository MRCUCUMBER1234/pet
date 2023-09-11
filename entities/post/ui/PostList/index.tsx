'use client';

import { useEffect } from 'react';
import { shallow } from 'zustand/esm/shallow';

/** Components */
import ModulePost from '../../../modulePost/ui/ModulePost';

/** Types */
import { PostType } from '../../model';
import { usePosts } from '../../model/Post';
import PostSearch from '../../../../feature/post/postSearch/ui/PostSearch';
import Box from '../../../../shared/ui/layouts/Box';

export default function PostList() {
    const [posts, loading, getAllPosts] = usePosts((state) => [state.posts, state.loading, state.getAllPosts], shallow);

    useEffect(() => {
        getAllPosts();
    }, [getAllPosts]);

    return (
        <Box width="100%" px={64} py={24}>
            <PostSearch />
            {loading ? (
                <h3>Loading...</h3>
            ) : (
                <>
                    {posts.map(({ id, title, body }, index: number) => (
                        <ModulePost
                            key={id}
                            link={`/posts/${id}`}
                            title={title}
                            body={body}
                            isLast={index === posts.length - 1}
                        />
                    ))}
                </>
            )}
        </Box>
    );
}
