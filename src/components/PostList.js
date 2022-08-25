import React from 'react'
import { List, Datagrid, TextField, Filter, SearchInput } from 'react-admin'

const PostList = (props) => {
    return (
        <List {...props} filters={<PostFilter />} title="List of Posts">
            <Datagrid>
                <TextField source='id' label='ID' />
                <TextField source='title' label='Title' />
                <TextField source='body' label='Body' />
            </Datagrid>
        </List>
    )
}

const PostFilter = (props) => {
    return (
        <Filter {...props}>
            <SearchInput placeholder='Search by Post ID' source='id' resettable alwaysOn />
        </Filter>
    )
}

export default PostList