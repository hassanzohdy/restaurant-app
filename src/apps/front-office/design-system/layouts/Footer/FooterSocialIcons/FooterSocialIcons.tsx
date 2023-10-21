import { Link } from "@mongez/react-router";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandX,
  IconBrandYoutube,
} from "@tabler/icons-react";

const socialLinks = [
  { name: "facebook", href: "#", icon: <IconBrandFacebook size="20" /> },
  { name: "twitter", href: "#", icon: <IconBrandX size="20" /> },
  { name: "youtube", href: "#", icon: <IconBrandYoutube size="20" /> },
  { name: "instagram", href: "#", icon: <IconBrandInstagram  size="20" /> },
];

export default function FooterSocialIcons() {
  return (
    <>
      <ul className="footer-social-icons flex justify-center mt-[20px]">
        {socialLinks.map((item, index) => (
          <li key={index} className="mr-[10px] last-of-type:mr-0">
            <Link to={item.href} className="flex items-center justify-center  w-[36px] h-[36px] rounded-full bg-white text-dark hover:bg-[#ffc222] duration-700 transition-all ease-in-out max-lg:px-[5px] max-lg:text-[13px]">
              {item.icon}
              <span className="sr-only">item.name</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
