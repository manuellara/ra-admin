import { useEffect } from "react";
import MyAdmin from "./admin";
import { supabaseClient } from "./utils/supabaseClient";

const App = () => {
  useEffect(() => {
    supabaseClient.auth.onAuthStateChange((event, session) => {
      if (event === "TOKEN_REFRESHED") console.log("TOKEN_REFRESHED", session);
    });
  }, []);

  return <MyAdmin />;
};

export default App;
