import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import { settingsAtom } from "apps/general/atoms/settings-atom";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiFacebook, FiYoutube } from "react-icons/fi";

const socialIcons = {
  facebook: <FiFacebook size="20" />,
  youtube: <FiYoutube size="20" />,
  twitter: <FaXTwitter size="20" />,
  instagram: <FaInstagram size="20" />,
};

export default function FooterSocialIcons() {
  const social = settingsAtom.use("social") || {};
  return (
    <>
      <ul className="footer-social-icons flex justify-center mt-[20px] gap-2">
        {Object.keys(social).map((socialMedia, index) => (
          <li key={index}>
            <Link
              to={social[socialMedia]}
              newTab
              className="flex items-center justify-center  w-[36px] h-[36px] rounded-full bg-white text-dark hover:bg-[#ffc222] duration-700 transition-all ease-in-out max-lg:px-[5px] max-lg:text-[13px]">
              {socialIcons[socialMedia]}
              <span className="sr-only">{trans(socialMedia)}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
