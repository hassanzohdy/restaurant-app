import { useEffect } from "react";
import { scrollAtom } from "./atoms";
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
    <header className="bg-white fixed w-full top-0 left-0">
      <nav
        className={`flex py flex-row items-center justify-between relative transition-all container ${
          scrollTop != 0 ? "h-[50px]" : "h-[120px]"
        }`}>
        <BurgerIcon /> {/* for small screens */}
        <HeaderLogo />
        <HeaderMenus />
        <HeaderContact />
        <HeaderIcons />
        <HeaderPhone /> {/* for small screens */}
      </nav>
    </header>
  );
}
