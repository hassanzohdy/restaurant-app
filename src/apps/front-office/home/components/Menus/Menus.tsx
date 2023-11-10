import { RevealOnScroll } from "./RevealOnScroll";
import { menusData } from "./data/MenusData";
import style from "./menus.module.scss";

export default function Menus() {
  return (
    <>
      <div className="flex justify-center relative">
        {" "}
        <button
          type="button"
          className="inline-block absolute -top-4 rounded bg-primary-main px-8 pb-3 pt-3 text-xs font-medium uppercase leading-normal text-black hover:text-white shadow-[0_4px_9px_-4px_#e4a11b] transition duration-150 ease-in-out hover:bg-primary-hover hover:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] focus:bg-warning-600 focus:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] focus:outline-none focus:ring-0 active:bg-warning-700 active:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(228,161,27,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.2),0_4px_18px_0_rgba(228,161,27,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.2),0_4px_18px_0_rgba(228,161,27,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.2),0_4px_18px_0_rgba(228,161,27,0.1)]">
          MENUS
        </button>
      </div>
      <RevealOnScroll>
        <div className="flex justify-center gap-y-8 align-middle flex-wrap space-x-14 md:space-y-0 mt-20 mb-20">
          {menusData.map(menu => {
            return (
              <div className="flex flex-col w-40 lg:w-fit" key={menu.id}>
                <div className={`w-30 h-20 ${style.animate} `}>
                  <img
                    src={menu.img}
                    alt={menu.title}
                    className="w-full h-full"
                  />
                </div>
                <p className="text-center  cursor-pointer transition text-sm font-bold hover:text-primary-hover duration-300">
                  {menu.title}
                </p>
              </div>
            );
          })}
        </div>
      </RevealOnScroll>
    </>
  );
}
