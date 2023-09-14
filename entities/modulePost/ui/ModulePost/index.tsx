import LinkAdapter from '@/shared/ui/components/LinkAdapter';
import Typography from '@/shared/ui/layouts/Typography';
import Drawer from '@/shared/ui/components/Drawer';
import { TypographyVariantType } from '@/shared/types';
import styles from '@/app/styles/ModulePost.module.scss';

type ModulePostProps = {
    link: string;
    title: string;
    body: string;
    isLast?: boolean;
};

const ModulePost = ({ link, title, body, isLast = false }: ModulePostProps) => (
    <div className={styles.modulePost}>
        <LinkAdapter link={link}>
            <Typography variant={TypographyVariantType.H2}>{title}</Typography>
            <Typography variant={TypographyVariantType.Body2}>{body}</Typography>
            {!isLast && <Drawer />}
        </LinkAdapter>
    </div>
);

export default ModulePost;
