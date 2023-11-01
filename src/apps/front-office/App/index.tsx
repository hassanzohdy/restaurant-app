import { useOnce } from "@mongez/react-hooks";
import React, { useState } from "react";
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

  return <>{children}</>;
}
