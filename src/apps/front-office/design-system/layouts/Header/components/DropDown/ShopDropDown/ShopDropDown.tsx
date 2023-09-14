import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import URLS from "apps/front-office/utils/urls";
import ShopDropImg from "./banner_menu.jpg";

export default function ShopDropDown() {
  return (
    <div
      className="absolute h-0 flex flex-row justify-between overflow-hidden py-0 px-0 top-[60px] -left-32 text-[1em]
    rounded-md font-normal leading-[1.5] bg-background shadow-list z-50 
    w-[900px] group-hover:py-[40px] group-hover:px-[60px] group-hover:h-[250px] transition-[height,_padding] 
    duration-500">
      <div className="flex flex-row items-center justify-center">
        <div className="mr-10">
          <button className="bg-primary text-black font-bold rounded-md py-2 px-7">
            <Link to={URLS.meals}>{trans("Shop")}</Link>
          </button>
        </div>
        <div className="flex flex-col justify-between ">
          <h5 className="text-[#999999] mb-5 font-bold text-[14px]">
            {trans("SHOP LIST")}
          </h5>
          <ul>
            <li className="py-1">
              <Link className="duration-300 transition-colors text-[#1E1D23]  pt-[2px] font-normal text-[15px] leading-[27px] hover:text-primary_hover">
                {trans("Product Sidebar")}
              </Link>
            </li>
            <li className="py-1">
              <Link className="text-[#1E1D23]  pt-[2px] font-normal text-[15px] leading-[27px] duration-300 transition-colors hover:text-primary_hover">
                {trans("Bought Together")}
              </Link>
            </li>
            <li className="py-1">
              <Link className="text-[#1E1D23] duration-300 transition-colors pt-[2px] font-normal text-[15px] leading-[27px] hover:text-primary_hover">
                {trans("Product Countdown")}
              </Link>
            </li>
            <li className="py-1">
              <Link className="text-[#1E1D23] duration-300 transition-colors pt-[2px] font-normal text-[15px] leading-[27px] hover:text-primary_hover">
                {trans("Grouped Product")}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="relative w-[400px] h-[150px]  overflow-hidden rounded-xl">
        <img src={ShopDropImg} alt="" className="h-full w-full" />
        <div className="absolute w-full h-full top-0 left-0 text-white py-6 px-5">
          <h2 className="text-[32px] leading-[38px] font-bold mb-[25px]">
            {trans("Sale 25%")}
          </h2>
          <p className="font-bold">{trans("Delicious")}</p>
          <p className="font-bold">{trans("Food Menu")}</p>
        </div>
      </div>
    </div>
  );
}
