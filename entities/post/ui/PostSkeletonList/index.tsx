import ContentLoader from 'react-content-loader';

export default function PostSkeletonList() {
    return (
        <ContentLoader height="90vh" width="100%">
            {new Array(5).fill(200).map((item, index) => (
                <rect key={index} y={(item + 24) * index} rx="4" ry="4" width="100%" height={item} />
            ))}
        </ContentLoader>
    );
}
