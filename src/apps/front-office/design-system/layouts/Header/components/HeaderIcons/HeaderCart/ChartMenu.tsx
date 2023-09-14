import { trans } from "@mongez/localization";
const ChartMenu = () => {
  return (
    <div className="absolute">
      <div>
        <div>{trans("SHOPPING CART")}</div>
        <div>{trans("CLOSE")}</div>
      </div>
      <div></div>
    </div>
  );
};

export default ChartMenu;
