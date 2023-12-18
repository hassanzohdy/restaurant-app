import { trans } from "@mongez/localization";
import { Form } from "@mongez/react-form";
import { Button } from "apps/front-office/design-system/components/Button";
import TextInputV2 from "apps/front-office/design-system/components/Form/TextInputV2";
import { cn } from "apps/front-office/design-system/utils/cn";

export default function CouponCode() {
  return (
    <div className="mb-3">
      <Form className={cn("grid grid-rows-[1fr] transition-all duration-500")}>
        <div className="overflow-hidden flex flex-row gap-3 items-center">
          <TextInputV2
            placeholder={trans("enterYourCouponCode")}
            className="flex-1"
          />
          <Button className="bg-primary-main text-[0.9em] transition-colors font-bold py-1 px-3 h-[80%] rounded-md hover:bg-primary-hover w-fit capitalize ">
            {trans("apply")}
          </Button>
        </div>
      </Form>
    </div>
  );
}
