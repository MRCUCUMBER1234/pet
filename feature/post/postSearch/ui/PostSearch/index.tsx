'use client';

import React, { useEffect, useState } from 'react';

/** Components */
import Input from '../../../../../shared/ui/components/Input';

/** Lib */
import useDebounce from '../../../../../shared/lib/useDebounce';

/** Models */
import { usePosts } from '../../../../../entities/post/model/post';

function PostSearch() {
    const getPostsBySearch = usePosts((state) => state.getPostsBySearch);

    const [search, setSearch] = useState('');

    const debouncedSearch = useDebounce(search, 750);

    useEffect(() => {
        getPostsBySearch(debouncedSearch);
    }, [debouncedSearch, getPostsBySearch]);

    return (
        <Input
            type="input"
            placeholder="Input search term..."
            value={search}
            onChange={(e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) =>
                setSearch(e.target.value)
            }
            fullWidth
        />
    );
}

export default PostSearch;
