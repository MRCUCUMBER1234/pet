import Box from '@/shared/ui/layouts/Box';

type TagsProps = {
    tags: string[];
};

export default function Tags({ tags }: TagsProps) {
    return (
        <Box gap={4}>
            {tags.map((tag) => (
                <span key={tag} style={{ color: tag }}>{`#${tag}`}</span>
            ))}
        </Box>
    );
}
