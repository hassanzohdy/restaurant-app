import { Link } from "@mongez/react-router";
import { IconBrandFacebook, IconBrandX, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';

export default function FooterSocialIcons() {
  const socialLinks = [
    { name: 'facebook', href: '#',  icon: <IconBrandFacebook/> },
    { name: 'twitter', href: '#', icon: <IconBrandX/>},
    { name: 'youtube', href: '#', icon: <IconBrandYoutube/>},
    { name: 'instagram', href: '#', icon: <IconBrandInstagram/> },
  ]
  return (
    <>
       <ul className="footer-social-icons flex justify-center">
          {socialLinks.map((item) => (
            <li key={item.name}>
              <Link
                key={item.name}
                to={item.href}
                className="flex items-center justify-center"
              >
                {item.icon}
                <span className="sr-only">item.name</span>
              </Link>
            </li>
          ))}
        </ul>
    </>
  );
}


