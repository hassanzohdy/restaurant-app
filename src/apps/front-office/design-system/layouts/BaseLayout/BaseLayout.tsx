import { Flex } from "@mantine/core";
import Footer from "../Footer";
import BaseHeader from "../Header";

export type BaseLayoutProps = {
  children: React.ReactNode;
};

/**
 * Base layout can be used to wrap all pages
 */
export default function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <>
      <Flex direction="column" justify="space-between" h={"100vh"}>
        <BaseHeader />
        <main style={{ flex: "1" }}>{children}</main>
        <Footer />
      </Flex>
    </>
  );
}
