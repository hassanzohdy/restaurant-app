import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import { ToggleAtom } from "../Header/atoms/HeaderAtoms";
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
  const handleURLChange = () => {
    // Handle URL changes here
    console.log("URL has changed:", window.location.href);

    // Example: Reset the state when the URL changes
    ToggleAtom.update(oldValue => {
      return {
        ...oldValue,
        headerSearch: false,
        langSwitch: false,
        userIcon: false,
        cartIcon: false,
        burgerIcon: false,
      };
    });
  };

  // Add an event listener for the 'popstate' event
  window.addEventListener("popstate", handleURLChange);

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
