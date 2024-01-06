import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import { settingsAtom } from "apps/general/atoms/settings-atom";
import FooterSocialIcons from "../FooterSocialIcons";

const parseWorkingDays = (workingDays: string) => {
  // first, split the string by \n
  // then split each line with colon (:) to get the working days in the first index, and the working hours in the second index
  return String(workingDays)
    .split("\n")
    .map(day => {
      const [workingDay, workingHours] = day.split(":");

      return {
        days: workingDay,
        time: workingHours,
      };
    });
};

export default function FooterInformation() {
  const { address, phoneNumber, workingDays } =
    settingsAtom.use("contact") || {};

  const workingDaysList = parseWorkingDays(workingDays);

  return (
    <>
      <div className="max-lg:mb-[20px]">
        <h3 className="heading text-xl text-[20px] font-bold uppercase text-white mb-[20px] mx-lg:text-[18px]">
          {trans("address")}
        </h3>
        <p className="w-[85%] whitespace-break-spaces m-auto text-[15px] text-[#808080] leading-7 max-lg:w-full">
          {address}
        </p>
      </div>
      <div className="max-lg:mb-[20px]">
        <h3 className="heading text-xl text-[20px] font-bold uppercase text-white mb-[20px] mx-lg:text-[18px]">
          {trans("bookTable")}
        </h3>
        <p className="w-[85%] m-auto text-[15px] text-[#808080] leading-7 max-lg:w-full">
          {trans("bookTableDescription")}
        </p>
        <Link tel={phoneNumber} className="block mt-4 text-[#ffc222]">
          {phoneNumber}
        </Link>
      </div>
      <div className="max-lg:mb-[20px]">
        <h3 className="heading text-xl text-[20px] font-bold uppercase text-white mb-[20px] mx-lg:text-[18px]">
          {trans("openingHours")}
        </h3>
        <ul>
          {workingDaysList.map((workingDay, index) => (
            <li key={index} className="leading-7">
              <span className="text-[#808080]">{workingDay.days} : </span>{" "}
              {workingDay.time}
            </li>
          ))}
        </ul>
        <FooterSocialIcons />
      </div>
    </>
  );
}
