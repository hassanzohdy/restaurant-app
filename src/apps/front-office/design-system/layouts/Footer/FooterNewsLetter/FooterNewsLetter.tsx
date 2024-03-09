import { trans } from "@mongez/localization";

export default function FooterNewsLetter() {
  return (
    <>
      <div>
        <h3 className="heading text-xl text-[20px] font-bold uppercase text-white mb-[20px] mx-lg:text-[18px]">
          {trans("newsletter")}
        </h3>
        <p className="w-[85%] m-auto text-[15px] text-primary-text leading-7 max-lg:w-full">
          {trans("newsletterText")}
        </p>
        <div className="newsletter mt-[20px]">
          <div>
            <div className="form-group flex justify-between h-[54px] m-auto p-[5px] border border-[#262626] rounded max-lg:max-w-[320px] max-sm:max-w-[290px]">
              <input
                type="email"
                name="email"
                id="email"
                className="block max-w-[60%] border-0 bg-transparent px-[15px] text-white placeholder:text-primary-text capitalize focus:outline-none focus:ring-0 sm:text-sm sm:leading-6 max-2xl:px-[8px] max-xl:text-[13px] max-lg:max-w-auto max-lg:px-[15px] max-lg:text-[14px] "
                placeholder={trans("yourEmail")}
              />
              <button
                type="submit"
                className="rounded uppercase font-semibold px-[15px] text-[#1e1d23] bg-primary-main hover:bg-primary-hover hover:text-white duration-700 transition-all ease-in-out max-2xl:px-[8px] max-xl:px-[5px] max-xl:text-[13px] max-lg:px-[15px] max-lg:text-[14px]">
                {trans("subscribe")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
