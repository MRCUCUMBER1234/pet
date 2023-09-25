import styles from '@/shared/styles/Post.module.scss';
import Box from '@/shared/ui/layouts/Box';
import Typography from '@/shared/ui/layouts/Typography';
import BackArrow from '@/shared/ui/components/BackArrow';
import PostFooter from './PostFooter';
import { PostType } from '../../model';
import WriterType from '../../../writer/model';

type PostProps = {
    post: PostType;
    writer: WriterType;
    postId: string;
};

function Post({ post: { title, body }, writer: { name }, postId }: PostProps) {
    return (
        <Box styles={{ width: '100%', justifyContent: 'flex-start' }}>
            <Box styles={{ maxWidth: '900px', width: '100%', flexDirection: 'column', gap: '24px', marginTop: '24px' }}>
                <BackArrow />
                <p className={styles.post}>{`${postId} - ${title}`}</p>
                <Typography>{body}</Typography>
                <PostFooter name={name} />
            </Box>
        </Box>
    );
}

export default Post;
