import AccordionItem from "./components/AccordionItem";

export type AccordionProps = {
  accordionItems: { heading: string; details: string }[];
};
export default function Accordion({ accordionItems }: AccordionProps) {
  return (
    <>
      <div className="accordion">
        {accordionItems.map((item, index) => (
          <AccordionItem key={index} item={item} />
        ))}
      </div>
    </>
  );
}
