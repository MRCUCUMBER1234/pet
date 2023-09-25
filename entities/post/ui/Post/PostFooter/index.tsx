import styles from '@/shared/styles/PostFooter.module.scss';
import Typography from '@/shared/ui/layouts/Typography';
import Drawer from '@/shared/ui/components/Drawer';

type PostFooterProps = {
    name: string;
};

export default function PostFooter({ name }: PostFooterProps) {
    return (
        <div className={styles.footer}>
            <Drawer />
            <Typography>{name}</Typography>
        </div>
    );
}
