import { bannerData } from "./data/BannersData";

export default function Banners() {
  return (
    <>
      <div className="bg-red-50 py-20 ">
        <div className="  flex flex-col gap-4 md:flex-row md:container md:mx-auto justify-center ">
          {bannerData.map(banner => {
            return (
              <div
                key={banner.id}
                className="w-full md:w-1\3 relative bg-black rounded-2xl overflow-hidden">
                <div className="h-80 relative">
                  <div className=" bg-main h-full absolute w-full"></div>
                  <img
                    src={banner.img}
                    alt={banner.title}
                    className="h-full w-full object-cover opacity-[.5] "
                  />
                </div>
                <h3 className="flex items-center justify-center text-[36px] text-primary-main font-bold font-norican w-full h-full absolute top-0">
                  {banner.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
