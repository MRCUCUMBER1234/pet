'use client';

import { useEffect } from 'react';
import { shallow } from 'zustand/shallow';

/** Components */
import ModulePost from '../../../modulePost/ui/ModulePost';

/** Types */
import { usePosts } from '../../model/Post';
import { PostSearch } from '../../../../feature/post/postSearch/ui';
import Box from '../../../../shared/ui/layouts/Box';
import PostSkeletonList from './PostSkeletonList';

function PostList() {
    const [posts, loading, getAllPosts] = usePosts((state) => [state.posts, state.loading, state.getAllPosts], shallow);

    useEffect(() => {
        getAllPosts();
    }, [getAllPosts]);

    return (
        <Box width="100%" px={64} py={24}>
            <PostSearch />
            {loading ? (
                <PostSkeletonList />
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

export default PostList;
