import { useOnce } from "@mongez/react-hooks";
import React, { useState } from "react";
import { getGuestToken } from "../auth/service/auth";
import user from "../auth/user";

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
