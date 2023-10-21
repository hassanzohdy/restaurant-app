import { IconQuote, IconStar, IconStarFilled } from "@tabler/icons-react";
import Stars from "apps/front-office/design-system/components/Stars";

export type AboutUsTestimonialsItemProps = {
  itemDetails: {
    name: string;
    job: string;
    feedback: string;
    image: string;
    ratings: number
    
  };
};
export default function AboutUsTestimonialsItem({
  itemDetails,
}: AboutUsTestimonialsItemProps) {
  return (
    <div className="testimonial-item text-center w-[74%] m-auto overflow-hidden max-xl:w-[85%] max-lg:w-[100%]">
      <div className="image  w-[115px] h-[115px] m-auto mb-8 relative max-sm:mb-7">
        <img className="rounded-full" src={itemDetails.image} alt="" />
        <i className=" flex items-center justify-center w-[35px] h-[35px] rounded-full rotate-180 absolute right-[-4px] bottom-[4px] bg-[#00a149]">
          <IconQuote size="20" />
        </i>
      </div>
      <div className="flex justify-center">
        <Stars ratings={itemDetails.ratings} />
      </div>
      <p className="m-auto mb-5 text-[30px] leading-normal max-xl:text-[28px] max-sm:text-[22px] max-sm:mb-3">
        {itemDetails.feedback}
      </p>
      <h2 className="text-[18px] uppercase font-bold max-lg:text-[16px]">
        {itemDetails.name}
      </h2>
      <h3 className="text-[15px] capitalize">{itemDetails.job}</h3>
    </div>
  );
}
