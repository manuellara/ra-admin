import React from 'react'
import { List, Datagrid, TextField, Filter, SearchInput } from 'react-admin'

const CommentList = (props) => {
    return (
        <List {...props} filters={<CommentFilter />} title="List of Comments">
            <Datagrid rowClick='edit'>
                <TextField source='id' label='ID' />
                <TextField source='name' label='Title' />
                <TextField source='body' label='Body' />
                <TextField source='postId' label='Post ID' />
            </Datagrid>
        </List>
    )
}

const CommentFilter = (props) => {
    return (
        <Filter {...props}>
            <SearchInput placeholder='Search by Comment ID' source='id' resettable alwaysOn />
        </Filter>
    )
}

export default CommentList