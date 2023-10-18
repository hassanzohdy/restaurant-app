import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import FooterSocialIcons from "../FooterSocialIcons";

export default function FooterInformation() {
  return (
    <>
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
    </>
  );
}
