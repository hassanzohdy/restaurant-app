import { Link } from "@mongez/react-router";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiFacebook, FiYoutube } from "react-icons/fi";

const socialLinks = [
  { name: "facebook", href: "#", icon: <FiFacebook size="20" /> },
  { name: "twitter", href: "#", icon: <FaXTwitter size="20" /> },
  { name: "youtube", href: "#", icon: <FiYoutube size="20" /> },
  { name: "instagram", href: "#", icon: <FaInstagram size="20" /> },
];

export default function FooterSocialIcons() {
  return (
    <>
      <ul className="footer-social-icons flex justify-center mt-[20px] gap-2">
        {socialLinks.map((item, index) => (
          <li key={index}>
            <Link
              to={item.href}
              className="flex items-center justify-center  w-[36px] h-[36px] rounded-full bg-white text-dark hover:bg-[#ffc222] duration-700 transition-all ease-in-out max-lg:px-[5px] max-lg:text-[13px]">
              {item.icon}
              <span className="sr-only">item.name</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
