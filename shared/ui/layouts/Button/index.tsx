import { ReactNode } from 'react';
import cn from 'classnames';

import styles from '../../../../app/styles/Button.module.scss';

type ButtonProps = {
    children: ReactNode;
    type?: 'submit' | 'reset' | 'button';
    isIcon?: boolean;
    disabled?: boolean;
    onClick?: () => void;
};

const Button = ({ children, type = 'button', isIcon = false, disabled = false, onClick = () => ({}) }: ButtonProps) => (
    <button
        type={type}
        className={cn(styles.button, { [styles.buttonIcon]: isIcon })}
        disabled={disabled}
        onClick={onClick}
    >
        {children}
    </button>
);

export default Button;
