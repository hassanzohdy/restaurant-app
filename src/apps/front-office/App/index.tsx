import { MantineProvider } from "@mantine/core";
import React from "react";

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
