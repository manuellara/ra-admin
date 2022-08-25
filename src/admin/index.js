import React from "react";
import { fetchUtils, Admin, Resource } from "react-admin";
import postgrestRestProvider from "@promitheus/ra-data-postgrest";
import PostList from "../components/PostList";
import CommentList from "../components/CommentList";
import CommentEdit from "../components/CommentEdit";
import CommentCreate from "../components/CommentCreate";
import authProvider from "../auth/authProvider";
import { supabaseClient } from "../utils/supabaseClient";

const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: "application/json" });
  }

  // set the anon key header
  options.headers.set("apikey", `${process.env.REACT_APP_ANON_KEY}`);

  // set the jwt authorization header
  if (supabaseClient.auth.session()) options.headers.set("Authorization", `Bearer ${supabaseClient.auth.session().access_token}`)

  return fetchUtils.fetchJson(url, options);
};

const dataProvider = postgrestRestProvider(
  `${process.env.REACT_APP_SUPABASE_URL}/rest/v1/`,
  httpClient
);

const App = () => {
  return (
    <Admin dataProvider={dataProvider} authProvider={authProvider}>
      <Resource name="posts" list={PostList} />
      <Resource
        name="comments"
        list={CommentList}
        edit={CommentEdit}
        create={CommentCreate}
      />
    </Admin>
  );
};

export default App;
