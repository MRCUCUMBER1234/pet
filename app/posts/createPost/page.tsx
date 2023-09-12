'use client';

import React from 'react';
import { redirect } from 'next/navigation';

/** Components */
import Form from '../../../shared/ui/layouts/Form';
import Input from '../../../shared/ui/components/Input';

/** Layouts */
import Box from '../../../shared/ui/layouts/Box';
import Button from '../../../shared/ui/layouts/Button';

/** Models */
import { usePosts } from '../../../entities/post/model/post';
// import { postModel } from '../../../entities/post/model';

/** Utils */
import { useInput } from '../../../shared/lib/form';
import { shallow } from 'zustand/esm/shallow';

export default function Page() {
    const [loading, addPost] = usePosts((state) => [state.loading, state.addPost], shallow);

    const title = useInput('', { isEmpty: true, minLength: 5, maxLength: 50 });
    const body = useInput('', { isEmpty: true, minLength: 50 });

    const onSubmit = async () => {
        try {
            await addPost({ id: '', userId: '', title: title.value, body: body.value });
            redirect('/posts');
        } catch (error) {
            console.error('There was an error!', error);
        }
    };

    return (
        <Box flexWrap="nowrap" width="100%">
            <Form onSubmit={onSubmit} title="Create Post">
                <Box flexDirection="column" gap={24} width="100%">
                    <Input
                        name="Title"
                        isDirty={title.isDirty}
                        error={title.error}
                        value={title.value}
                        onChange={title.onChange}
                        onBlur={title.onBlur}
                    />
                    <Input
                        name="Body"
                        isDirty={body.isDirty}
                        error={body.error}
                        value={body.value}
                        onChange={body.onChange}
                        onBlur={body.onBlur}
                        type="textarea"
                        rows={5}
                    />
                    <Button disabled={!!(title.error || body.error) || loading} type="submit">
                        Publish
                    </Button>
                </Box>
            </Form>
        </Box>
    );
}
