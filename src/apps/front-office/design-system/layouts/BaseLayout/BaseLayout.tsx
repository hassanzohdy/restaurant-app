import "@mantine/core/styles.css";
import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import { ToggleGroupAtom, burgerAtom } from "../Header/atoms/HeaderAtoms";
import ActiveBar from "../Header/components/ActiveBar";
import BurgerMenu from "../Header/components/HeaderIcons/BurgerIcon/BurgerMenu";
import ChartMenu from "../Header/components/HeaderIcons/HeaderCart/CartMenu";
import OverLay from "../OverLay";

export type BaseLayoutProps = {
  children: React.ReactNode;
};

/**
 * Base layout can be used to wrap all pages
 */
export default function BaseLayout({ children }: BaseLayoutProps) {
  const burgerIconOpened = burgerAtom.use("opened");
  const [toggleCart] = ToggleGroupAtom.useState();

  return (
    <div className="relative">
      <Header />
      <ChartMenu />
      <BurgerMenu />
      <main>{children}</main>
      <Footer />
      <ActiveBar />
      <OverLay atom={burgerAtom} opened={burgerIconOpened} />
      <OverLay atom={null} opened={toggleCart.cartIcon} />
    </div>
  );
}
