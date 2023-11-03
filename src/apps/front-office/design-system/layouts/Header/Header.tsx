import { useEffect } from "react";
import { scrollAtom } from "./atoms/HeaderAtoms";
import HeaderContact from "./components/HeaderContact";
import HeaderIcons from "./components/HeaderIcons";
import BurgerIcon from "./components/HeaderIcons/BurgerIcon";
import HeaderLogo from "./components/HeaderLogo";
import HeaderMenus from "./components/HeaderMenus";
import HeaderPhone from "./components/HeaderPhone";

export default function Header() {
  const scrollTop = scrollAtom.useValue();

  useEffect(() => {
    const handleScroll = () => scrollAtom.update(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("DOMContentLoaded", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("DOMContentLoaded", handleScroll);
    };
  }, []);

  return (
    <header
      className={
        "bg-white sticky top-0 w-full z-50 " + (scrollTop && "shadow-header")
      }>
      <nav
        className={`flex flex-row items-center justify-between relative transition-all container ${
          scrollTop != 0 ? "h-[70px]" : "h-[90px]"
        }`}>
        <BurgerIcon /> {/* for small screens*/}
        <HeaderLogo />
        <HeaderMenus />
        <HeaderContact />
        <HeaderIcons />
        <HeaderPhone /> {/*for small screens */}
      </nav>
    </header>
  );
}
