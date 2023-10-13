import { Link } from "@mongez/react-router";
import { ReactNode } from "react";
import { AiFillFacebook, AiFillTwitterCircle } from "react-icons/ai";
import {
  BiLogoGmail,
  BiLogoGooglePlusCircle,
  BiLogoPinterestAlt,
} from "react-icons/bi";

type Props = {
  category: string;
};

export const DetailsCategorySection = ({ category }: Props) => {
  const socialLinks: { href: string; icon: ReactNode }[] = [
    { href: "#", icon: <AiFillFacebook /> },
    { href: "#", icon: <AiFillTwitterCircle /> },
    { href: "#", icon: <BiLogoGooglePlusCircle /> },
    { href: "#", icon: <BiLogoPinterestAlt /> },
    { href: "#", icon: <BiLogoGmail /> },
  ];

  return (
    <div className="space-y-4 text-sm border-b pb-6">
      <p className="first-letter:uppercase text-primary-text">
        category:{" "}
        <span className="inline-block font-semibold capitalize">
          {category}
        </span>
      </p>
      <div className="first-letter:uppercase flex items-center gap-2 text-primary-text">
        Share:{" "}
        {socialLinks.map((link, idx) => (
          <Link key={idx} className="hover:text-primary-main" to={link.href}>
            {link.icon}
          </Link>
        ))}
      </div>
    </div>
  );
};
