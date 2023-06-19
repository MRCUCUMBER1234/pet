import { ReactNode } from 'react';

type FlexDirection =
    | 'column'
    | 'inherit'
    | '-moz-initial'
    | 'initial'
    | 'revert'
    | 'unset'
    | 'column-reverse'
    | 'row'
    | 'row-reverse'
    | undefined;

type FlexWrap =
    | '-moz-initial'
    | 'inherit'
    | 'initial'
    | 'revert'
    | 'revert-layer'
    | 'unset'
    | 'nowrap'
    | 'wrap'
    | 'wrap-reverse'
    | undefined;

interface Box {
    flexDirection?: FlexDirection;
    alignItems?: string;
    justifyContent?: string;
    flexWrap?: FlexWrap;
    flexGrow?: number;
    width?: string;
    height?: string;
    gap?: number;
    mx?: number;
    my?: number;
    px?: number;
    py?: number;
}

interface BoxProps extends Box {
    children: ReactNode;
}

const Box = ({ children, ...props }: BoxProps) => {
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
