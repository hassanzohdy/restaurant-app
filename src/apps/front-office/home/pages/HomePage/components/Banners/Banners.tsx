import { Banner } from "apps/front-office/design-system/utils/types";

export type BannersProps = {
  banners: Banner[];
};

export default function Banners({ banners }: BannersProps) {
  return (
    <>
      <div className="bg-red-50 py-20 ">
        <div className="  flex flex-col gap-4 md:flex-row md:container md:mx-auto justify-center ">
          {banners.map((banner, index) => {
            return (
              <div
                key={index}
                className="w-full md:w-1\3 relative bg-black rounded-2xl overflow-hidden">
                <div className="h-80 relative">
                  <div className=" bg-main h-full absolute w-full"></div>
                  <img
                    src={banner.image.url}
                    alt="offer"
                    className="h-full w-full object-cover opacity-[.5] "
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
