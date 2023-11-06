import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import ActiveBar from "../Header/components/ActiveBar";
import BurgerMenu from "../Header/components/HeaderIcons/BurgerIcon/BurgerMenu";
import ChartMenu from "../Header/components/HeaderIcons/HeaderCart/CartMenu";

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
      <ChartMenu />
      <BurgerMenu />
      <main>{children}</main>
      <Footer />
      <ActiveBar />
    </div>
  );
}
