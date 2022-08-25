import React from 'react'
import { Create, SimpleForm, TextInput, SelectInput, useNotify, useRedirect } from 'react-admin'

const CommentCreate = (props) => {
    const notify = useNotify()
    const redirect = useRedirect()

    const onSuccess = () => {
        notify('New comment created')
        redirect(`/comments`)
    }

    return (
        <Create {...props} title="Create a comment" mutationOptions={{ onSuccess }}>
            <SimpleForm>
                <SelectInput source='id' choices={[{ id: 9, name: 9 }, { id: 10, name: 10 }, { id: 11, name: 11 }]} />
                <TextInput source='name' />
                <TextInput source='body' />
                <SelectInput source='postId' choices={[{ id: 13, name: 13 }, { id: 14, name: 14 }, { id: 15, name: 15 }]} />
            </SimpleForm>
        </Create>
    )
}

export default CommentCreate