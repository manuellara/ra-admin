import React from "react";
import { fetchUtils, Admin, Resource, ListGuesser } from "react-admin";
import postgrestRestProvider from "@promitheus/ra-data-postgrest";

const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: "application/json" });
  }
  
  // set the anon key header
  options.headers.set("apikey", `${process.env.REACT_APP_ANON_KEY}`);

  return fetchUtils.fetchJson(url, options);
};

const dataProvider = postgrestRestProvider(`${process.env.REACT_APP_SUPABASE_URL}`, httpClient);

const App = () => {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="posts" list={ListGuesser} />
      <Resource name="comments" list={ListGuesser} />
    </Admin>
  );
};

export default App;
