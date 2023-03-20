import LinkAdapter from '../../../../shared/ui/components/LinkAdapter';
import Box from '../../../../shared/ui/layouts/Box';
import Typography from '../../../../shared/ui/layouts/Typography';
import Drawer from '../../../../shared/ui/components/Drawer';

const ModulePost = ({ link, title, body }) => (
    <Box flexDirection="column" gap={24}>
        <Drawer />
        <Box>
            <LinkAdapter link={link}>
                <Typography>{title}</Typography>
                <Typography>{body}</Typography>
            </LinkAdapter>
        </Box>
    </Box>
);

export default ModulePost;
