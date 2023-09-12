import React, { ReactNode } from 'react';
import styles from '../../../../app/styles/Form.module.scss';

/** Components */
import Topic from '../../components/Topic';

/** Layouts */
import Box from '../Box';

type FormProps = {
    onSubmit: () => void;
    children: ReactNode;
    title: string;
};

const Form = ({ onSubmit, children, title }: FormProps) => (
    <Box gap={24} width="100%">
        <Topic text={title} />
        <form className={styles.form} onSubmit={onSubmit}>
            {children}
        </form>
    </Box>
);

export default Form;
