const Box = ({ children, ...props }) => {
    const {
        flexDirection = 'row',
        alignItems = 'flex-start',
        justifyContent = 'flex-start',
        flexWrap = 'wrap',
        flexGrow = 0,
        width = 'auto',
        height = 'auto',
        gap = 0,
        mx = 0,
        my = 0,
        px = 0,
        py = 0,
    } = props;
    return (
        <div
            style={{
                display: 'flex',
                flexDirection,
                alignItems,
                justifyContent,
                flexWrap,
                gap,
                margin: `${my}px ${mx}px`,
                padding: `${py}px ${px}px`,
                width,
                height,
                flexGrow,
            }}
        >
            {children}
        </div>
    );
};

export default Box;
