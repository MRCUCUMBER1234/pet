import styles from '../../../../app/styles/Post.module.scss';
import Box from '../../../../shared/ui/layouts/Box';
import Typography from '../../../../shared/ui/layouts/Typography';
import MainContainer from '../../../../shared/ui/layouts/MainLayout';
import PostFooter from './PostFooter';
import BackArrow from '../../../../shared/ui/components/BackArrow';

const Post = ({ post: { title, body }, writer: { name }, postId }) => (
    <MainContainer keywords="posts" title={title}>
        <Box flexDirection="column" gap={24} mx={64} my={64}>
            <BackArrow />
            <p className={styles.post}>{`${postId} - ${title}`}</p>
            <Typography>{body}</Typography>
            <PostFooter name={name} />
        </Box>
    </MainContainer>
);

export default Post;
