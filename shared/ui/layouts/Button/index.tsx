'use client';

import { ReactNode } from 'react';
import cn from 'classnames';

import styles from '@/app/styles/Button.module.scss';

type ButtonProps = {
    children: ReactNode;
    type?: 'submit' | 'reset' | 'button';
    isIcon?: boolean;
    disabled?: boolean;
    onClick?: () => void;
    isPure?: boolean;
};

const Button = ({
    children,
    type = 'button',
    isIcon = false,
    disabled = false,
    onClick = () => ({}),
    isPure = false,
}: ButtonProps) => (
    <button
        type={type}
        className={cn(styles.pureButton, { [styles.buttonIcon]: isIcon, [styles.button]: !isPure })}
        disabled={disabled}
        onClick={onClick}
    >
        {children}
    </button>
);

export default Button;
