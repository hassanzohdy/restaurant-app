import { FaqType } from "apps/front-office/faq/utils/types";
import AccordionItem from "./components/AccordionItem";

export type AccordionProps = {
  accordionItems: FaqType[];
};
export default function Accordion({ accordionItems }: AccordionProps) {
  return (
    <>
      <div className="accordion">
        {accordionItems.map(item => (
          <AccordionItem key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}
