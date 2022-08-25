import React from 'react'
import { Edit, SimpleForm, TextInput } from 'react-admin'

const CommentEdit = (props) => {
  return (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source='id' />
            <TextInput source='name' />
            <TextInput source='body' />
            <TextInput disabled source='postId' />
        </SimpleForm>
    </Edit>
  )
}

export default CommentEdit