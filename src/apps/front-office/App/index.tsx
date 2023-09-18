import React from "react";
import { MantineProvider } from "@mantine/core";

export type AppProps = {
  children: React.ReactNode;
};

export default function App({ children }: AppProps) {
  return (
    <>
      <MantineProvider
        // theme={{ colorScheme: "dark" }}
        withGlobalStyles
        withNormalizeCSS>
        {children}
      </MantineProvider>
    </>
  );
}
