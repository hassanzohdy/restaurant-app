import { MdFavorite } from "react-icons/md";

function ShopItem() {
  return (
    <div className="h-full  border-2 rounded-2xl">
      <div className="h-96 p-2">
        <div className="itemImage flex flex-col h-64 p-2 bg-slate-100">
          <div className="h-24">
            <MdFavorite className="float-right text-2xl" />
          </div>
          <div className="h-72"></div>
        </div>
      </div>
    </div>
  );
}
export default ShopItem;
