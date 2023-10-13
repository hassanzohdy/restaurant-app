import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import { isRTL } from "apps/front-office/utils/helpers";
import URLS from "apps/front-office/utils/urls";
import ShopDropImg from "./banner_menu.jpg";

export default function ShopDropDown() {
  return (
    <div
      className={`absolute h-0 flex flex-row justify-between overflow-hidden py-0 px-0  text-[1em]
    rounded-md font-normal leading-[1.5] bg-white shadow-list z-50 
    w-[900px] group-hover:py-[40px] group-hover:px-[60px] group-hover:h-[250px] transition-[height,_padding] 
    duration-500 ${isRTL() ? "top-[60px] -right-32" : "top-[60px] -left-32"}`}>
      <div className="flex flex-row items-center justify-center">
        <div className={isRTL() ? "ml-5" : "mr-5"}>
          <button className="bg-primary text-black font-bold rounded-md py-2 px-7">
            <Link to={URLS.meals}>{trans("shop")}</Link>
          </button>
        </div>
        <div className="flex flex-col justify-between ">
          <h5 className="text-[#999999] mb-5 font-bold text-[14px]">
            {trans("shopList")}
          </h5>
          <ul>
            <li className="py-1">
              <Link className="duration-300 transition-colors text-[#1E1D23]  pt-[2px] font-normal text-[15px] leading-[27px] hover:text-primary-hover">
                {trans("productSidebar")}
              </Link>
            </li>
            <li className="py-1">
              <Link className="text-[#1E1D23]  pt-[2px] font-normal text-[15px] leading-[27px] duration-300 transition-colors hover:text-primary-hover">
                {trans("boughtTogether")}
              </Link>
            </li>
            <li className="py-1">
              <Link className="text-[#1E1D23] duration-300 transition-colors pt-[2px] font-normal text-[15px] leading-[27px] hover:text-primary-hover">
                {trans("productCountdown")}
              </Link>
            </li>
            <li className="py-1">
              <Link className="text-[#1E1D23] duration-300 transition-colors pt-[2px] font-normal text-[15px] leading-[27px] hover:text-primary-hover">
                {trans("groupedProduct")}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="relative w-[400px] h-[150px]  overflow-hidden rounded-xl">
        <img src={ShopDropImg} alt="" className="h-full w-full" />
        <div className="absolute w-full h-full top-0 left-0 text-white py-6 px-5">
          <h2 className="text-[32px] leading-[38px] font-bold mb-[25px]">
            {trans("Sale25")}
          </h2>
          <p className="font-bold">{trans("Delicious")}</p>
          <p className="font-bold">{trans("foodMenu")}</p>
        </div>
      </div>
    </div>
  );
}
