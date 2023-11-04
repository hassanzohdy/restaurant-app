import { BsGrid, BsGridFill, BsList } from "react-icons/bs";

type MenuViewOptsProps = {
  isGridViewOpt: boolean;
  onGridClick: React.MouseEventHandler<HTMLButtonElement>;
  onListClick: React.MouseEventHandler<HTMLButtonElement>;
};
function MenuViewOpts(props: MenuViewOptsProps) {
  return (
    <>
      <p className="float-left text-gray-400 pl-12"> Showing 6 of 10 results</p>
      <div className="flex flex-row justify-end">
        <div>
          <button onClick={props.onGridClick}>
            {props.isGridViewOpt ? (
              <BsGridFill className="text-xl mt-0.5 mr-3" />
            ) : (
              <BsGrid className="text-xl mt-0.5 mr-3 text-gray-500" />
            )}
          </button>
        </div>{" "}
        <div>
          <button onClick={props.onListClick}>
            {props.isGridViewOpt ? (
              <BsList className="text-2xl text-gray-500" />
            ) : (
              <BsList className="text-2xl font-black	" />
            )}
          </button>
        </div>
      </div>
    </>
  );
}
export default MenuViewOpts;
