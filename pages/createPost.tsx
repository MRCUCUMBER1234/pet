import React, { useState } from 'react';

/** Components */
import Topic from '../shared/ui/components/Topic';

/** Layouts */
import MainContainer from '../shared/ui/layouts/MainLayout';
import Box from '../shared/ui/layouts/Box';

/** Models */
import Post from '../entities/Post/model/Post';

const CreatePost = () => {
    const [post, setPost] = useState(new Post());

    const onChangeInput = (type: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
        switch (type) {
            default: {
                setPost((prevPost) => ({
                    ...prevPost,
                    [type]: e.target.value,
                }));
            }
        }
    };

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const onSubmit = (): void => {};

    return (
        <MainContainer keywords={['posts']} title="Main">
            <Box flexWrap="nowrap">
                <Box gap={64} width="100%" px={64} my={64}>
                    <Topic text="Create Post" />
                    <form onSubmit={onSubmit}>
                        <Box flexDirection="column" gap={24}>
                            <input type="text" value={post.title} onInput={onChangeInput('title')} />
                            <input type="text" value={post.body} onInput={onChangeInput('body')} />
                            <input type="submit" value="Publish" />
                        </Box>
                    </form>
                </Box>
            </Box>
        </MainContainer>
    );
};

export default CreatePost;
