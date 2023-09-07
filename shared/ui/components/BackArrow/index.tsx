'use client';

import { useRouter } from 'next/navigation';

/** Components */
import Button from '../../layouts/Button';

export default function BackArrow() {
    const router = useRouter();

    const handleGoBack = () => router.back();

    return (
        <Button type="button" onClick={handleGoBack}>
            Go back
        </Button>
    );
}
