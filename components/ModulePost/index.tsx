import LinkAdapter from '../LinkAdapter';
import Box from '../../layouts/Box';
import Typography from '../../layouts/Typography';
import Drawer from '../Drawer';

const ModulePost = ({ link, title, body }) => (
    <Box flexDirection="column" gap={24}>
        <Drawer />
        <Box>
            <Typography>
                <LinkAdapter link={link} text={title} />
            </Typography>
            <Typography>{body}</Typography>
        </Box>
    </Box>
);

export default ModulePost;
