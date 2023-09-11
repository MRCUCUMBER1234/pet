'use client';

import React, { useEffect, useState } from 'react';

/** Styles */
import styles from '../../../../../app/styles/Search.module.scss';

/** Components */
import Input from '../../../../../shared/ui/components/Input';

/** Lib */
import useDebounce from '../../../../../shared/lib/useDebounce';

/** Models */
import { usePosts } from '../../../../../entities/post/model/Post';

function PostSearch() {
    const getPostsBySearch = usePosts((state) => state.getPostsBySearch);

    const [search, setSearch] = useState('');

    const debouncedSearch = useDebounce(search, 750);

    useEffect(() => {
        getPostsBySearch(debouncedSearch);
    }, [debouncedSearch, getPostsBySearch]);

    return (
        <form className={styles.form}>
            <Input
                type="input"
                placeholder="Input search term..."
                value={search}
                onChange={(e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) =>
                    setSearch(e.target.value)
                }
                fullWidth
            />
        </form>
    );
}

export default PostSearch;
