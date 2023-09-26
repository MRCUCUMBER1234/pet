import Topic from '@/shared/ui/components/Topic';
import Box from '@/shared/ui/layouts/Box';
import Chip from '@/widgets/ui/Chip';
import styles from '@/shared/styles/TagList.module.scss';
import { getTags } from '@/entities/tags/services';

export default async function Tags() {
    const tags = await getTags();

    return (
        <div className={styles.tagListContainer}>
            <Box gap={24} width="250px">
                <Topic text="Tags" />
                <Box gap={12} width="100%">
                    {tags.map((tag) => (
                        <Chip key={tag} tag={tag}>
                            {tag}
                        </Chip>
                    ))}
                </Box>
            </Box>
        </div>
    );
}
