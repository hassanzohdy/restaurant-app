import { accordionAtom } from "apps/front-office/design-system/atoms/accordion-atom";
import { BiMinus, BiPlus } from "react-icons/bi";

export type AccordionItemProps = {
  item: { heading: string; details: string };
};

export default function AccordionItem({ item }: AccordionItemProps) {
  const opened = accordionAtom.use("opened");
  return (
    <div className="accordion-item mb-2 last:mb-0">
      <h2
        onClick={() => accordionAtom.change("opened", !opened)}
        className={`accordion-header flex items-center justify-between ${
          opened ? "bg-primary-main" : "bg-[#fbf7e8]"
        } min-h-[58px] px-6 py-3 text-[18px] capitalize font-semibold rounded-md border border-[#eee] cursor-pointer duration-700 transition-all ease-in-out max-md:p-4 max-md:text-[16px]`}>
        {item.heading}
        <span className="ml-2 mt-2 mb-auto max-md:mt-1">
          {opened ? (
            <BiMinus size="18" stroke="3" />
          ) : (
            <BiPlus size="18" stroke="3" />
          )}
        </span>
      </h2>
      <div hidden={!opened} className={`accordion-collapse`}>
        <div className="accordion-body p-6 max-md:p-4">
          <p className="text-[16px] leading-loose text-primary-text max-sm:text-[14px]">
            {item.details}
          </p>
        </div>
      </div>
    </div>
  );
}
