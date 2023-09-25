import Image from 'next/image';

/** Components */
import Box from '@/shared/ui/layouts/Box';

/** Assets */
import DinoPng from '@/shared/public/DinoSprites_vita.png';

const Dino = () => (
    <Box flexDirection="column" gap={24} mx={64} my={64}>
        <Image src={DinoPng} alt="Dino" width={500} height={500} />
    </Box>
);

export default Dino;
