import { ReactNode } from 'react';

import styles from '../../../../app/styles/Typography.module.scss';
import { TypographyVariantType } from '../../../types/typographyVariantType';

type TypographyProps = {
    children: ReactNode;
    // eslint-disable-next-line react/require-default-props
    variant?: TypographyVariantType;
};

export default function Typography({ children, variant = TypographyVariantType.Body1 }: TypographyProps) {
    return <p className={styles[variant]}>{children}</p>;
}
