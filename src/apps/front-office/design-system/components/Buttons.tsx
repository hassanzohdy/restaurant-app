import { Button } from "@mantine/core";
import { trans } from "@mongez/localization";

function Buttons() {
  return (
    <Button
      className="text-black font-bold h-[2.6rem] mr-[38px] transition-all duration-300 hover:text-white"
      color="yellow.5">
      {trans("subscribe")}
    </Button>
  );
}

export default Buttons;
