import { MantineProvider } from "@mantine/core";
import React from "react";

export type AppProps = {
  children: React.ReactNode;
};

export default function App({ children }: AppProps) {
  // const [isLoading, setLoading] = useState(!user.isLoggedIn());
  // useOnce(() => {
  //   if (!user.isLoggedIn()) {
  //     getGuestToken().then(response => {
  //       user.login(response.data.user);
  //       setLoading(false);
  //     });
  //   }
  // });

  // if (isLoading) return null;

  return (
    <>
      <MantineProvider>{children}</MantineProvider>
    </>
  );
}
