import { Button } from "apps/front-office/design-system/components/Button";
import SectionHeading from "apps/front-office/design-system/components/SectionHeading";
import { useState } from "react";
import DescriptionPart from "./DescriptionPart";
import ReviewsPart from "./ReviewsPart";

type Props = {
  description: string;
  ingredients: string[];
};

type variant = "description" | "reviews";

const DescriptionAndReiews = ({ description, ingredients }: Props) => {
  const [section, setSection] = useState<variant>("description");

  const sectionToggler = (value: variant) => {
    setSection(value);
  };

  return (
    <section>
      <div className="flex gap-6 items-center justify-center flex-wrap">
        <Button
          onClick={() => sectionToggler("description")}
          className={`${
            section === "description"
              ? "bg-primary-orange-400"
              : "bg-transparent"
          } text-2xl capitalize py-4 px-10 hover:bg-primary-orange-400`}>
          description
        </Button>
        <Button
          onClick={() => sectionToggler("reviews")}
          className={`${
            section === "reviews" ? "bg-primary-orange-400" : "bg-transparent"
          } text-2xl capitalize px-10 hover:bg-primary-orange-400`}>
          reviews
        </Button>
      </div>
      <div className="container py-10">
        {section === "description" ? (
          <DescriptionPart
            description={description}
            ingredients={ingredients}
          />
        ) : (
          <ReviewsPart />
        )}
      </div>

      <SectionHeading>related products</SectionHeading>
    </section>
  );
};

export default DescriptionAndReiews;
