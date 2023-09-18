import { Button } from "@mantine/core";
import { trans } from "@mongez/localization";

function Buttons() {
  return (
    <Button className="footerEmailButton" color="yellow.5" uppercase>
      {trans("subscribe")}
    </Button>
  );
}

export default Buttons;
