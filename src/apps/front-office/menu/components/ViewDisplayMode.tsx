import { menuDisplayModeAtom } from "apps/front-office/menu/atoms/menu-display-mode-atom";
import { BsGrid, BsGridFill, BsList } from "react-icons/bs";

export default function ViewDisplayMode() {
  const displayMode = menuDisplayModeAtom.useValue();

  return (
    <>
      <p className="float-left text-gray-400 pl-9"> Showing 6 of 10 results</p>
      <div className="flex flex-row justify-end">
        <button onClick={() => menuDisplayModeAtom.update("grid")}>
          {displayMode === "grid" ? (
            <BsGridFill className="text-xl mt-0.5 mr-3" />
          ) : (
            <BsGrid className="text-xl mt-0.5 mr-3 text-gray-500" />
          )}
        </button>
        <button onClick={() => menuDisplayModeAtom.update("list")}>
          {displayMode === "list" ? (
            <BsList className="text-2xl font-black" />
          ) : (
            <BsList className="text-2xl text-gray-500" />
          )}
        </button>
      </div>
    </>
  );
}
