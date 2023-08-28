import { useRouter } from 'next/router';

/** Components */
import Button from '../../layouts/Button';

const BackArrow = () => {
    const router = useRouter();

    const handleGoBack = () => router.back();

    return (
        <Button type="button" onClick={handleGoBack}>
            Go back
        </Button>
    );
};

export default BackArrow;
