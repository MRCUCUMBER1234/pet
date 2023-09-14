import React from 'react';
import cn from 'classnames';

import styles from '@/app/styles/Input.module.scss';

type InputProps = {
    name?: string;
    isDirty?: boolean;
    error?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void;
    onBlur?: () => void;
    rows?: number;
    type?: 'input' | 'textarea';
    placeholder?: string;
    fullWidth?: boolean;
};

const Input = ({
    name,
    isDirty = false,
    error = '',
    value,
    onChange,
    onBlur,
    rows = 1,
    type = 'input',
    placeholder = '',
    fullWidth = false,
}: InputProps) => (
    <div className={styles.container}>
        {name && <p className={styles.name}>{name}</p>}
        {type === 'textarea' ? (
            <textarea
                className={cn(styles.input, styles.textarea, { [styles.fullWidth]: fullWidth })}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                rows={rows}
                placeholder={placeholder}
            />
        ) : (
            <input
                className={cn(styles.input, { [styles.fullWidth]: fullWidth })}
                type="text"
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                placeholder={placeholder}
            />
        )}
        <p className={styles.error}>{isDirty && error}</p>
    </div>
);

export default Input;
