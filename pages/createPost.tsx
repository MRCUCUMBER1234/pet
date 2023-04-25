import { useState } from 'react';

/** Components */
import Topic from '../shared/ui/components/Topic';

/** Layouts */
import MainContainer from '../shared/ui/layouts/MainLayout';
import Box from '../shared/ui/layouts/Box';

/** Models */
import Post from '../entities/Post/model/Post';

const CreatePost = () => {
    const [post, setPost] = useState(new Post());

    const onChangeInput = (type) => (e) => {
        switch (type) {
            default: {
                setPost((prevPost) => ({
                    ...prevPost,
                    [type]: e.target.value,
                }));
            }
        }
    };

    const onSubmit = () => {};

    return (
        <MainContainer keywords="posts" title="Main">
            <Box flexWrap="no-wrap">
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
