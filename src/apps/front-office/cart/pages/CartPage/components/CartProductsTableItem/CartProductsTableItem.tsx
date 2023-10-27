import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import { IconX } from "@tabler/icons-react";

export type CartProductsTableItemProps = {
  productDetails: {
    id: string;
    name: string;
    thumbnail: string;
    price: string;
    subtotal: string;
  };
};
export default function CartProductsTableItem({
  productDetails,
}: CartProductsTableItemProps) {
  return (
    <tr className="border-b max-sm:block max-sm:pl-[100px] max-sm:relative">
      <td className="product-remove w-[5%] px-3 py-5 pl-0 max-sm:absolute max-sm:w-auto max-sm:right-1 max-sm:top-6 max-sm:p-0">
        <IconX className="w-[15px] h-[15px] p-[2px] border rounded-full text-[#b3b3b3] border-[#b3b3b3] cursor-pointer hover:text-[#f00] hover:border-[#f00] duration-700 transition-all ease-in-out" />
      </td>
      <td className="product-thumbnail w-[17%] py-3 px-6 h-[140px] max-sm:absolute max-sm:w-auto max-sm:left-1 max-sm:top-6 max-sm:p-0">
        <Link to="#">
          <img className="max-w-[90px]" src={productDetails.thumbnail} alt="" />
        </Link>
      </td>
      <td className="product-name w-[30%] px-3 py-5 max-sm:block max-sm:w-full max-sm:pl-0 max-sm:px-2 max-sm:pr-5 max-sm:border-b">
        <Link
          to="#"
          className="hover:text-primary-hover duration-700 transition-all ease-in-out">
          {productDetails.name}
        </Link>
      </td>
      <td className="product-price w-[16%] px-3 py-5 max-sm:flex max-sm:justify-between max-sm:items-center max-sm:w-full max-sm:px-0 max-sm:py-3 max-sm:border-b">
        <label className="hidden max-sm:block text-[12px] text-[#1e1d23] font-normal">
          {trans("price")}
        </label>
        <span>{productDetails.price}</span>
      </td>
      <td className="product-quantity w-[16%] px-3 py-5 max-sm:flex max-sm:justify-between max-sm:items-center max-sm:w-full max-sm:px-0 max-sm:py-3 max-sm:border-b">
        <label className="hidden max-sm:block text-[12px] text-[#1e1d23] font-normal">
          {trans("quantity")}
        </label>
        <div className="quantity">
          <input
            type="number"
            name="product-quantity"
            id={`quantity${productDetails.id}`}
            className="w-[55px] h-[40px] p-3 border rounded-md"
          />
        </div>
      </td>
      <td className="product-subtotal w-[16%] px-3 py-5 max-sm:flex max-sm:justify-between max-sm:items-center max-sm:w-full max-sm:px-0 max-sm:py-3">
        <label className="hidden max-sm:block text-[12px] text-[#1e1d23] font-normal">
          {trans("subtotal")}
        </label>
        <span>{productDetails.subtotal}</span>
      </td>
    </tr>
  );
}
