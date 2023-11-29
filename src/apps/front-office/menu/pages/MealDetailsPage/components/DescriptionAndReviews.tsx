import { trans } from "@mongez/localization";
import { Button } from "apps/front-office/design-system/components/Button";
import { cn } from "apps/front-office/design-system/utils/cn";
import { useState } from "react";
import DescriptionSection from "./DescriptionSection";
import IngredientsSection from "./IngredientsSection";
import ReviewsSection from "./reviews/ReviewsSection";

type variant = "description" | "reviews" | "ingredients";

function getSection(section: variant) {
  switch (section) {
    case "description": {
      return <DescriptionSection />;
    }
    case "reviews": {
      return <ReviewsSection />;
    }
    case "ingredients": {
      return <IngredientsSection />;
    }
  }
}

export default function DescriptionAndReviews() {
  const [section, setSection] = useState<variant>("description");

  return (
    <section>
      <div className="flex gap-6 items-center justify-center flex-wrap">
        <Button
          onClick={() => setSection("description")}
          className={cn(
            "text-2xl capitalize py-4 px-10 hover:bg-primary-main font-bold",
            section === "description" ? "bg-primary-main" : "bg-transparent",
          )}>
          {trans("description")}
        </Button>
        <Button
          onClick={() => setSection("reviews")}
          className={cn(
            "text-2xl capitalize py-4 px-10 hover:bg-primary-main font-bold",
            section === "reviews" ? "bg-primary-main" : "bg-transparent",
          )}>
          {trans("reviews")}
        </Button>
        <Button
          onClick={() => setSection("ingredients")}
          className={cn(
            "text-2xl capitalize py-4 px-10 hover:bg-primary-main font-bold",
            section === "ingredients" ? "bg-primary-main" : "bg-transparent",
          )}>
          {trans("ingredients")}
        </Button>
      </div>
      <div className="container py-10">{getSection(section)}</div>
    </section>
  );
}
