import styles from '../../../../../app/styles/PostFooter.module.scss';
import Typography from '../../../../../shared/ui/layouts/Typography';
import Drawer from '../../../../../shared/ui/components/Drawer';

type PostFooterProps = {
    name: string;
};

const PostFooter = ({ name }: PostFooterProps) => (
    <div className={styles.footer}>
        <Drawer />
        <Typography>{name}</Typography>
    </div>
);

export default PostFooter;
