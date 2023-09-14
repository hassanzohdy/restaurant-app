import { scrollAtom } from "./atoms";
import BurgerIcon from "./components/BurgerIcon";
import HeaderContact from "./components/HeaderContact";
import HeaderIcons from "./components/HeaderIcons";
import HeaderLogo from "./components/HeaderLogo";
import HeaderMenus from "./components/HeaderMenus";
import HeaderPhone from "./components/HeaderPhone";

export default function Header() {
  const scrollTop = scrollAtom.useValue();

  const handleScroll = () => scrollAtom.update(window.scrollY);
  window.addEventListener("scroll", handleScroll);
  window.addEventListener("DOMContentLoaded", handleScroll);

  return (
    <header className="bg-white sticky top-0 left-0">
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
