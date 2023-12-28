import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import FooterSocialIcons from "../FooterSocialIcons";

export default function FooterInformation() {
  return (
    <>
      <div className="max-lg:mb-[20px]">
        <h3 className="heading text-xl text-[20px] font-bold uppercase text-white mb-[20px] mx-lg:text-[18px]">
          {trans("address")}
        </h3>
        <p className="w-[85%] m-auto text-[15px] text-[#808080] leading-7 max-lg:w-full">
          570 8th Ave, <br />
          New York, NY 10018 <br />
          United States
        </p>
      </div>
      <div className="max-lg:mb-[20px]">
        <h3 className="heading text-xl text-[20px] font-bold uppercase text-white mb-[20px] mx-lg:text-[18px]">
          {trans("bookTable")}
        </h3>
        <p className="w-[85%] m-auto text-[15px] text-[#808080] leading-7 max-lg:w-full">
          Dogfood och Sliders foodtruck. Under Om oss kan ni läsa
        </p>
        <Link tel="(850) 435-4155" className="block mt-4 text-[#ffc222]">
          (850) 435-4155
        </Link>
      </div>
      <div className="max-lg:mb-[20px]">
        <h3 className="heading text-xl text-[20px] font-bold uppercase text-white mb-[20px] mx-lg:text-[18px]">
          {trans("openingHours")}
        </h3>
        <ul>
          <li className="leading-7">
            <span className="text-[#808080]">Monday – Friday : </span> 8am – 4pm
          </li>
          <li className="leading-7">
            <span className="text-[#808080]">Saturday : </span> 9am – 5pm
          </li>
        </ul>
        <FooterSocialIcons />
      </div>
    </>
  );
}
