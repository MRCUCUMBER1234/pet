'use client';

import React, { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

/** Components */
import Input from '@/shared/ui/components/Input';

/** Lib */
import useDebounce from '@/shared/lib/useDebounce';

function PostSearch() {
    const router = useRouter();
    const pathname = usePathname();

    const [search, setSearch] = useState('');

    const debouncedSearch = useDebounce(search, 750);

    useEffect(() => {
        router.push(`${pathname}?q=${debouncedSearch}`);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debouncedSearch]);

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
