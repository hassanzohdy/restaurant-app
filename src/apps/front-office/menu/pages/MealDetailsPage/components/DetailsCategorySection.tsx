import { trans } from "@mongez/localization";
import { Link, getHash } from "@mongez/react-router";
import { ReactNode } from "react";
import { AiFillFacebook, AiFillTwitterCircle } from "react-icons/ai";
import { BiLogoPinterestAlt } from "react-icons/bi";

const socialLinks: { href: string; icon: ReactNode }[] = [
  {
    href: "https://www.facebook.com/dialog/share?href=",
    icon: <AiFillFacebook />,
  },
  {
    href: "https://twitter.com/intent/tweet?text=",
    icon: <AiFillTwitterCircle />,
  },
  {
    href: "https://www.pinterest.com/pin-builder/?description=",
    icon: <BiLogoPinterestAlt />,
  },
];

export const DetailsCategorySection = () => {
  const hashedUrl = getHash();

  return (
    <div className="space-y-4 text-sm border-b pb-6">
      <div className="first-letter:uppercase flex items-center gap-2 text-primary-text">
        {trans("share")}:
        {socialLinks.map((link, index) => (
          <Link
            key={index}
            className="hover:text-primary-main"
            to={link.href + hashedUrl}>
            {link.icon}
          </Link>
        ))}
      </div>
    </div>
  );
};
