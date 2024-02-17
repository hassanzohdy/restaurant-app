import { setHelmetConfigurations } from "@mongez/react-helmet";
import { settingsAtom } from "apps/general/atoms/settings-atom";
import React from "react";
import { ToastContainer } from "react-toastify";
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
  const settings = settingsAtom.use("general");

  setHelmetConfigurations({
    appName: settings.appName,
  });

  return (
    <div className="relative flex flex-col min-h-screen">
      <Header />
      <BurgerMenu />
      <main className="flex-1">{children}</main>
      <Footer />
      <ActiveBar />
      <ToastContainer stacked closeOnClick draggable />
    </div>
  );
}
