import React from "react"
import { fetchUtils, Admin, Resource } from "react-admin"
import postgrestRestProvider from "@promitheus/ra-data-postgrest"
import PostList from "../components/PostList"
import CommentList from "../components/CommentList"
import CommentEdit from "../components/CommentEdit"
import CommentCreate from "../components/CommentCreate"

const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: "application/json" })
  }

  // set the anon key header
  options.headers.set("apikey", `${process.env.REACT_APP_ANON_KEY}`)

  return fetchUtils.fetchJson(url, options)
}

const dataProvider = postgrestRestProvider(`${process.env.REACT_APP_SUPABASE_URL}`, httpClient)

const App = () => {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="posts" list={PostList} />
      <Resource name="comments" list={CommentList} edit={CommentEdit} create={CommentCreate} />
    </Admin>
  )
}

export default App;
