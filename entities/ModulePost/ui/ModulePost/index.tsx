import LinkAdapter from '../../../../shared/ui/components/LinkAdapter';
import Box from '../../../../shared/ui/layouts/Box';
import Typography from '../../../../shared/ui/layouts/Typography';
import Drawer from '../../../../shared/ui/components/Drawer';
import { TypographyVariantType } from '../../../../shared/types/typographyVariantType';
import styles from '../../../../app/styles/ModulePost.module.scss';

type ModulePostProps = {
    link: string;
    title: string;
    body: string;
    isLast?: boolean;
};

const ModulePost = ({ link, title, body, isLast = false }: ModulePostProps) => (
    <LinkAdapter link={link}>
        <Box flexDirection="column" styles={styles}>
            <Typography variant={TypographyVariantType.H2}>{title}</Typography>
            <Typography>{body}</Typography>
            {!isLast && <Drawer />}
        </Box>
    </LinkAdapter>
);

export default ModulePost;
