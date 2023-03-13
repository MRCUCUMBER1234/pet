import styles from '../../../styles/PostFooter.module.scss';
import Typography from '../../../layouts/Typography';
import Drawer from '../../Drawer';

const PostFooter = ({ name }) => (
    <div className={styles.footer}>
        <Drawer />
        <Typography>{name}</Typography>
    </div>
);

export default PostFooter;
