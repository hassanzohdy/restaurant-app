import { MantineProvider } from "@mantine/core";
import { useOnce } from "@mongez/react-hooks";
import { getGuestToken } from "apps/front-office/account/service/auth";
import user from "apps/front-office/account/user";
import React, { useState } from "react";

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

  return (
    <>
      <MantineProvider>{children}</MantineProvider>
    </>
  );
}
