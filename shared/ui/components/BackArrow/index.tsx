import { useRouter } from 'next/router';

const BackArrow = () => {
    const router = useRouter();

    const handleGoBack = () => router.back();

    return (
        <button type="button" onClick={handleGoBack}>
            Go back
        </button>
    );
};

export default BackArrow;
