import Stars from "apps/front-office/design-system/components/Stars";
import Pizza from "assets/images/menuItems/pizza.png";

export default function BestDealItem() {
  return (
    <div className="flex flex-row mb-6 border-2 rounded-2xl">
      <div className="basis-1/3 p-2">
        <div className="bg-gray-100 h-full rounded-2xl">
          <img src={Pizza}></img>
        </div>
      </div>
      <div className="basis-2/3 p-5">
        <Stars ratings={4} />
        <p className="font-bold mt-1 ">Free Palestine</p>
        <p className="font-bold mt-2 text-amber-400">18.30 EGP</p>
      </div>
    </div>
  );
}

export function BestDealItemList() {
  const dumItems = Array.from(Array(5).keys());
  return (
    <>
      <p className="font-bold">Best Deals</p>

      <div className="flex flex-col mt-3 ">
        {dumItems.map(data => {
          return <BestDealItem key={data} />;
        })}
      </div>
    </>
  );
}
