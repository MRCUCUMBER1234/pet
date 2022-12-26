import styles from '../../styles/Post.module.scss';
import LinkAdapter from '../LinkAdapter';
import Box from '../../layouts/Box';

const Post = ({ link, title, body }) => (
    <div className={styles.post}>
        <Box flexDirection="column">
            <LinkAdapter link={link} text={title} />
            <LinkAdapter link={link} text={body} />
        </Box>
    </div>
);

export default Post;
