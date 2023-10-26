import "@mantine/carousel/styles.css";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import React from "react";

export type AppProps = {
  children: React.ReactNode;
};

export default function App({ children }: AppProps) {
  return (
    <>
      <MantineProvider>{children}</MantineProvider>
    </>
  );
}
