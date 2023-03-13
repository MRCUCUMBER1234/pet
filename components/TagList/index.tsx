import Topic from '../Topic';
import Box from '../../layouts/Box';
import Chip from '../../layouts/Chip';
import styles from '../../styles/TagList.module.scss';

const TagList = ({ chips = [] }) => (
    <div className={styles.tagListContainer}>
        <Box gap={24} width="250px" my={64}>
            <Topic text="Tags" />
            <Box gap={12} width="100%">
                {chips.map((chip) => (
                    <Chip>{chip}</Chip>
                ))}
            </Box>
        </Box>
    </div>
);

export default TagList;
