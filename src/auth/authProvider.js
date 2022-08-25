import { supabaseClient } from "../utils/supabaseClient";

const authProvider = {
  // send username and password to the auth server and get back credentials
  login: async ({ username, password }) => {
    await supabaseClient.auth.signIn({
      email: username,
      password: password,
    });

    if (!supabaseClient.auth.session())
      return Promise.reject({ message: "error" });

    if (supabaseClient.auth.session()) return Promise.resolve();
  },

  // when the dataProvider returns an error, check if this is an authentication error
  checkError: (error) => Promise.resolve(error),

  // when the user navigates, make sure that their credentials are still valid
  checkAuth: () => {
    if (supabaseClient.auth.session()) return Promise.resolve();
    
    return Promise.reject({ message: "no user" });
  },

  // remove local credentials and notify the auth server that the user logged out
  logout: async () => {
    await supabaseClient.auth.signOut()

    return Promise.resolve();
  },

  // get the user's profile
  getIdentity: () => {
    return Promise.resolve(supabaseClient.auth.session().user);
  },

  // get the user permissions (optional)
  getPermissions: () => Promise.resolve(""),
};

export default authProvider;
