import React, { useEffect, useState } from 'react';

type Validation = {
    isEmpty?: boolean;
    minLength?: number;
    maxLength?: number;
};

const useErrorMessage = (minLength = 0, maxLength = 0) => ({
    isEmpty: 'Field is empty',
    minLengthError: `Minimum ${minLength} characters required`,
    maxLengthError: `Maximum ${maxLength} characters required`,
});

const useValidation = (value: string, validations: Validation) => {
    const errorMessages = useErrorMessage(validations.minLength, validations.maxLength);

    const [isEmpty, setIsEmpty] = useState(errorMessages.isEmpty);
    const [minLengthError, setMinLengthError] = useState('');
    const [maxLengthError, setMaxLengthError] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        Object.keys(validations).forEach((validation) => {
            // eslint-disable-next-line default-case
            switch (validation) {
                case 'isEmpty':
                    if (value) setIsEmpty('');
                    else setIsEmpty(errorMessages.isEmpty);
                    break;
                case 'minLength':
                    if (value.length < validations[validation]) {
                        setMinLengthError(errorMessages.minLengthError);
                    } else setMinLengthError('');
                    break;
                case 'maxLength':
                    if (value.length > validations[validation]) {
                        setMaxLengthError(errorMessages.maxLengthError);
                    } else setMaxLengthError('');
                    break;
            }
        });
    }, [validations, value]);

    useEffect(() => {
        setError(isEmpty || minLengthError || maxLengthError);
    }, [isEmpty, minLengthError, maxLengthError]);

    return {
        isEmpty,
        minLengthError,
        maxLengthError,
        error,
    };
};

const useInput = (initialValue: string, validations: Validation) => {
    const [value, setValue] = useState(initialValue);
    const [isDirty, setIsDirty] = useState(false);
    const valid = useValidation(value, validations);

    const onChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.target.value);
    };

    const onBlur = () => {
        setIsDirty(true);
    };

    return {
        value,
        isDirty,
        onChange,
        onBlur,
        ...valid,
    };
};

export default useInput;
