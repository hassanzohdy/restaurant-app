<<<<<<< HEAD
=======
import { trans } from "@mongez/localization";
>>>>>>> 0b183458ece57a90c4bed59c1afdb79e3383860f
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
<<<<<<< HEAD
      <p className="first-letter:uppercase text-primary-text">
        category:{" "}
=======
      <p className="text-primary-text">
        {trans("category")}:
>>>>>>> 0b183458ece57a90c4bed59c1afdb79e3383860f
        <span className="inline-block font-semibold capitalize">
          {category}
        </span>
      </p>
      <div className="first-letter:uppercase flex items-center gap-2 text-primary-text">
<<<<<<< HEAD
        Share:{" "}
=======
        {trans("share")}:
>>>>>>> 0b183458ece57a90c4bed59c1afdb79e3383860f
        {socialLinks.map((link, idx) => (
          <Link key={idx} className="hover:text-primary-main" to={link.href}>
            {link.icon}
          </Link>
        ))}
      </div>
    </div>
  );
};
