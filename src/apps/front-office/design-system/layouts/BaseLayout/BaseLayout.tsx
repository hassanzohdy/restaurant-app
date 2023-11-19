import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import ActiveBar from "../Header/components/ActiveBar";
import BurgerMenu from "../Header/components/HeaderIcons/BurgerIcon/BurgerMenu";

export type BaseLayoutProps = {
  children: React.ReactNode;
};

/**
 * Base layout can be used to wrap all pages
 */
export default function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <div className="relative">
      <Header />
      <BurgerMenu />
      <main>{children}</main>
      <Footer />
      <ActiveBar />
    </div>
  );
}
