import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import FooterCopyRights from "./FooterCopyRights";
import FooterLogo from "./FooterLogo";
import FooterNewsLetter from "./FooterNewsLetter";
import FooterPaymentMethods from "./FooterPaymentMethods";
import FooterSocialIcons from "./FooterSocialIcons";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top text-center">
        <FooterLogo />
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 md:gap-2 lg:gap-4">
            <div>
              <h3 className="heading text-xl uppercase text-white">
                {trans("address")}
              </h3>
              <p>
                570 8th Ave, <br />
                New York, NY 10018 <br />
                United States
              </p>
            </div>
            <div>
              <h3 className="heading text-xl uppercase text-white">
                {trans("bookTable")}
              </h3>
              <p>Dogfood och Sliders foodtruck. Under Om oss kan ni läsa</p>
              <Link tel="(850) 435-4155" className="block mt-4">
                (850) 435-4155
              </Link>
            </div>
            <div>
              <h3 className="heading text-xl uppercase text-white">
                {trans("openingHours")}
              </h3>
              <ul>
                <li>
                  <span>Monday – Friday:</span> 8am – 4pm
                </li>
                <li>
                  <span>Saturday:</span> 9am – 5pm
                </li>
              </ul>
              <FooterSocialIcons />
            </div>
            <div>
              <h3 className="heading text-xl uppercase text-white">
                {trans("newsLetter")}
              </h3>
              <p>
                Subscribe to the weekly newsletter for all the latest updates
              </p>
              <FooterNewsLetter />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container flex items-center justify-between mx-auto px-4">
          <FooterCopyRights />
          <FooterPaymentMethods />
        </div>
      </div>
    </footer>
  );
}
