import { bannerData } from "./data/BannersData";

export default function Banners() {
  return (
    <>
      <div className="bg-red-50 py-20 ">
        <div className="  flex flex-col gap-4 md:flex-row md:container md:mx-auto justify-center  ">
          {bannerData.map(banner => {
            return (
              <div
                key={banner.id}
                className="w-full md:w-1\3 relative bg-black ">
                <div className="h-80 relative">
                  <div className=" bg-black h-full absolute w-full opacity-[.4]"></div>
                  <img
                    src={banner.img}
                    alt={banner.title}
                    className="h-full w-full md:rounded-md  "
                  />
                </div>

                <p className="text-white hover:text-primary-hover text-2xl px-8 font-bold absolute top-24 text-center  transition-all duration-200 cursor-pointer">
                  {banner.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
