import { ReactNode } from 'react';
import CSS from 'csstype';

interface Box {
    flexDirection?: CSS.Property.FlexDirection;
    alignItems?: string;
    justifyContent?: string;
    flexWrap?: CSS.Property.FlexWrap;
    flexGrow?: number;
    width?: string;
    height?: string;
    gap?: number;
    mx?: number;
    my?: number;
    px?: number;
    py?: number;
    position?: CSS.Property.Position;
    top?: number | 'auto';
    styles?: CSS.Properties;
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
        position = 'static',
        top = 'auto',
        styles = {},
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
                position,
                top,
                ...styles,
            }}
        >
            {children}
        </div>
    );
};

export default Box;
