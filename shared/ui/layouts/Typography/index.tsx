import { ReactNode } from 'react';

import styles from '../../../../app/styles/Typography.module.scss';
import { TypographyVariantType } from '../../../types/typographyVariantType';

type TypographyProps = {
    children: ReactNode;
    variant?: TypographyVariantType;
};

const Typography = ({ children, variant = TypographyVariantType.Body1 }: TypographyProps) => (
    <p className={styles[variant]}>{children}</p>
);

export default Typography;
