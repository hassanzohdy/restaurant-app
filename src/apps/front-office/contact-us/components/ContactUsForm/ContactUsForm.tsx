import { trans } from "@mongez/localization";
import { Form, FormSubmitOptions } from "@mongez/react-form";
import { Button } from "apps/front-office/design-system/components/Button";
import EmailInput from "apps/front-office/design-system/components/Form/EmailInput";
import TextInput from "apps/front-office/design-system/components/Form/TextInput";
import TextareaInput from "apps/front-office/design-system/components/Form/TextareaInput";
import { useEffect, useState } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { toast } from "react-toastify";
import { Body, sendContactUsMessage } from "../../services/contact-us-service";

type Error = {
  key: string;
  error: string;
};

export default function ContactUsForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [isMessageSent, setIsMessageSent] = useState(false);
  const [errors, setErrors] = useState<string | Error[]>("");

  const handleSubmit = ({ values, form }: FormSubmitOptions) => {
    setIsLoading(true);

    sendContactUsMessage(values as Body)
      .then(() => {
        toast.success(trans("messageSent"));
        setIsMessageSent(true);
        form.reset();
      })
      .catch(({ response }) => {
        const error = response.data?.message || response.data?.messages;
        setErrors(error);
        toast.error(trans("somethingWentWrong"));
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    setErrors("");
  }, []);

  return isMessageSent ? (
    <div className="flex-1 gap-6 h-[612px] flex-col p-6 lg:py-10 lg:px-14 flex items-center justify-center">
      <FaRegCheckCircle size={60} fill="#26ca26" />
      <div className="mt-2 text-2xl md:text-4xl font-semibold capitalize text-center">
        {trans("messageSent")}
      </div>
      <div className="text-[#979797] text-lg">{trans("weWillContactYou")}</div>
    </div>
  ) : (
    <Form
      onSubmit={handleSubmit}
      className="flex-1 flex flex-col gap-6 lg:gap-10 p-6 lg:py-10 lg:px-14">
      <div>
        <div className="text-2xl lg:text-4xl font-bold">
          {trans("sendUsMessage")}
        </div>
        <div className="text-primary-text mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <TextInput
          disabled={isLoading}
          name="name"
          placeholder={trans("name")}
          containerStyle="flex-1 min-w-[200px]"
          required
        />
        <EmailInput
          disabled={isLoading}
          name="email"
          placeholder={trans("emailAddress")}
          containerStyle="flex-1 min-w-[200px]"
          required
        />
        <TextInput
          disabled={isLoading}
          name="subject"
          placeholder={trans("subject")}
          containerStyle="flex-1 min-w-[200px]"
          required
        />
        <TextareaInput
          disabled={isLoading}
          name="message"
          placeholder={trans("message")}
          required
        />
        {errors &&
          (typeof errors === "string" ? (
            <span className="text-red-500 text-sm">{errors}</span>
          ) : (
            <div>
              {errors.map((error, index) => (
                <div key={index} className="text-red-500 text-sm">
                  {error.error}
                </div>
              ))}
            </div>
          ))}
        <Button
          disabled={isLoading}
          className="w-fit disabled:opacity-60 disabled:hover:bg-primary-main disabled:cursor-not-allowed bg-primary-main py-4 px-8 hover:bg-primary-hover">
          {trans(isLoading ? "submitting" : "submit")}
        </Button>
      </div>
    </Form>
  );
}
