import { useOnce } from "@mongez/react-hooks";
import { GoogleOAuthProvider } from "@react-oauth/google";
import React, { useState } from "react";
import { googleClientId } from "shared/flags";
import { getGuestToken } from "../account/service/auth";
import user from "../account/user";

export type AppProps = {
  children: React.ReactNode;
};

export default function App({ children }: AppProps) {
  const [isLoading, setLoading] = useState(!user.isLoggedIn());
  useOnce(() => {
    if (!user.isLoggedIn()) {
      getGuestToken().then(response => {
        user.login(response.data.user);
        setLoading(false);
      });
    }
  });

  if (isLoading) return null;

  console.log(googleClientId);

  return (
    <GoogleOAuthProvider
      clientId={
        "1070460388955-pbjmtnvvcren76ejmng4qm0ke42ccb74.apps.googleusercontent.com"
      }>
      {children}
    </GoogleOAuthProvider>
  );
}
