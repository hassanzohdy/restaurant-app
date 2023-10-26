import { trans } from "@mongez/localization";
import CommonTitle from "apps/front-office/design-system/components/CommonTitle";
import chef1 from "assets/images/about-us/chef-1.jpg";
import chef2 from "assets/images/about-us/chef-2.jpg";
import chef3 from "assets/images/about-us/chef-3.jpg";
import AboutUsChefsItem from "./AboutUsChefsItem";

export default function AboutUsChefs() {
  const chefs = [
    {
      name: "William Smith",
      position: "Chef",
      details: "Everything We Pizza, We Pizza With Love. Designer Fast food.",
      image: chef1,
      socialLinks: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      name: "John Doe",
      position: "Manager",
      details: "Everything We Pizza, We Pizza With Love. Designer Fast food.",
      image: chef2,
      socialLinks: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      name: "Brad L.",
      position: "Chef",
      details: "Everything We Pizza, We Pizza With Love. Designer Fast food.",
      image: chef3,
      socialLinks: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
      },
    },
  ];

  return (
    <>
      <section className="about-us-chefs py-[100px] max-lg:py-[80px] max-sm:py-[70px]">
        <div className="container">
          <div className="text-center mb-10">
            <CommonTitle className="text-[25px] text-primary-main capitalize mb-1">
              {trans("alwaysQuality")}
            </CommonTitle>
            <h2 className="text-[42px] font-bold capitalize leading-none max-lg:text-[36px] max-sm:text-[30px]">
              {trans("ourTalentedChefs")}
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 lg:gap-8 sm:gap-4">
            {chefs.map((item, index) => (
              <AboutUsChefsItem chefInfo={item} key={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
