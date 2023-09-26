'use client';

import Button from '@/shared/ui/layouts/Button';
import Box from '@/shared/ui/layouts/Box';

export default function ErrorWrapper({ error, reset }: { error: Error; reset: () => void }) {
    return (
        <Box flexDirection="column" alignItems="center">
            <h1>🧨 Oops!... </h1>
            <p>{error.message}</p>
            <Button onClick={reset}>Try again</Button>
        </Box>
    );
}
