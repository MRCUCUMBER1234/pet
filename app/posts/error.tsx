'use client';

export default function ErrorWrapper({ error }: { error: Error }) {
    return (
        <>
            <h1>Oops!... </h1>
            <p>{error.message}</p>
        </>
    );
}
