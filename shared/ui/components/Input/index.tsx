import React from 'react';
import cn from 'classnames';

import styles from '../../../../app/styles/Input.module.scss';

type InputProps = {
    name: string;
    isDirty: boolean;
    error: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void;
    onBlur: () => void;
    rows?: number;
    type?: 'input' | 'textarea';
};

const Input = ({ name, isDirty, error, value, onChange, onBlur, rows = 1, type = 'input' }: InputProps) => (
    <div className={styles.container}>
        <p className={styles.name}>{name}</p>
        {type === 'textarea' ? (
            <textarea
                className={cn(styles.input, styles.textarea)}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                rows={rows}
            />
        ) : (
            <input className={styles.input} type="text" value={value} onChange={onChange} onBlur={onBlur} />
        )}
        <p className={styles.error}>{isDirty && error}</p>
    </div>
);

export default Input;
