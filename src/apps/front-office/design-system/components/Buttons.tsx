import { trans } from "@mongez/localization";

function Buttons() {
  return (
    <button className="text-black font-bold h-[2.6rem] mr-[38px] transition-all duration-300 hover:text-white">
      {trans("subscribe")}
    </button>
  );
}

export default Buttons;
