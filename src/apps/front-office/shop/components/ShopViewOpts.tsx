import { BsGridFill, BsList } from "react-icons/bs";

function ShopViewOpts() {
  return (
    <div className="flex flex-row justify-end">
      <div>
        <button>
          <BsGridFill className="text-xl mt-0.5 mr-3" />
        </button>
      </div>{" "}
      <div>
        <button>
          <BsList className="text-2xl text-gray-500	" />
        </button>
      </div>
    </div>
  );
}
export default ShopViewOpts;
