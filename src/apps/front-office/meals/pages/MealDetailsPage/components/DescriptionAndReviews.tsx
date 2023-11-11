import { trans } from "@mongez/localization";
import { Button } from "apps/front-office/design-system/components/Button";
import SectionHeading from "apps/front-office/design-system/components/SectionHeading";
import { cn } from "apps/front-office/design-system/utils/cn";
import { useState } from "react";
import DescriptionSection from "./DescriptionSection";
import ReviewsSection from "./ReviewsSection";

type Props = {
  description: string;
  ingredients: string[];
};

type variant = "description" | "reviews";

function getSection(section: string, data?: any) {
  switch (section) {
    case "description": {
      return (
        <DescriptionSection
          description={data.description}
          ingredients={data.ingredients}
        />
      );
    }
    case "reviews": {
      return <ReviewsSection />;
    }
  }
}

const DescriptionAndReviews = ({ description, ingredients }: Props) => {
  const [section, setSection] = useState<variant>("description");

  return (
    <section>
      <div className="flex gap-6 items-center justify-center flex-wrap">
        <Button
          onClick={() => setSection("description")}
          className={cn(
            "text-2xl capitalize py-4 px-10 hover:bg-primary-main",
            section === "description" ? "bg-primary-main" : "bg-transparent",
          )}>
          {trans("description")}
        </Button>
        <Button
          onClick={() => setSection("reviews")}
          className={cn(
            "text-2xl capitalize py-4 px-10 hover:bg-primary-main",
            section === "reviews" ? "bg-primary-main" : "bg-transparent",
          )}>
          {trans("reviews")}
        </Button>
      </div>
      <div className="container py-10">
        {getSection(section, {
          description,
          ingredients,
        })}
      </div>
      <SectionHeading>{trans("relatedProducts")}</SectionHeading>
    </section>
  );
};

export default DescriptionAndReviews;
