import { trans } from "@mongez/localization";
import { Form } from "@mongez/react-form";
import SubscriptionInput from "../SubscriptionInput";

export default function FooterNewsLetter() {
  const handleSubmit = (e: any) => {
    console.log(e);
  };

  return (
    <>
      <div>
        <h3 className="heading text-xl text-[20px] font-bold uppercase text-white mb-[20px] mx-lg:text-[18px]">
          {trans("newsLetter")}
        </h3>
        <p className="w-[85%] m-auto text-[15px] text-primary-text leading-7 max-lg:w-full">
          Subscribe to the weekly newsletter for all the latest updates
        </p>
        <div className="newsletter mt-[20px]">
          <Form onSubmit={handleSubmit}>
            <div className="form-group flex justify-between h-[54px] m-auto p-[5px] border border-[#262626] rounded max-lg:max-w-[320px] max-sm:max-w-[290px]">
              <SubscriptionInput required />
              <button
                type="submit"
                className="rounded uppercase font-semibold px-[15px] text-[#1e1d23] bg-primary-main hover:bg-primary-hover hover:text-white duration-700 transition-all ease-in-out max-2xl:px-[8px] max-xl:px-[5px] max-xl:text-[13px] max-lg:px-[15px] max-lg:text-[14px]">
                {trans("subscribe")}
              </button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}
