import Topic from '../../shared/ui/components/Topic';
import Box from '../../shared/ui/layouts/Box';
import Chip from '../../shared/ui/layouts/Chip';
import styles from '../../app/styles/TagList.module.scss';

type TagListProps = {
    chips: string[];
};

const TagList = ({ chips = [] }: TagListProps) => (
    <div className={styles.tagListContainer}>
        <Box gap={24} width="250px">
            <Topic text="Tags" />
            <Box gap={12} width="100%">
                {chips.map((chip) => (
                    <Chip key={chip}>{chip}</Chip>
                ))}
            </Box>
        </Box>
    </div>
);

export default TagList;