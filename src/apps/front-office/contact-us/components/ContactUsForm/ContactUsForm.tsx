import { trans } from "@mongez/localization";
import { Form, FormSubmitOptions } from "@mongez/react-form";
import { Button } from "apps/front-office/design-system/components/Button";
import EmailInput from "apps/front-office/design-system/components/Form/EmailInput";
import TextInput from "apps/front-office/design-system/components/Form/TextInput";
import TextareaInput from "apps/front-office/design-system/components/Form/TextareaInput";
import { Body, sendContactUsMessage } from "../../services/contact-us-service";

export default function ContactUsForm() {
  const handleSubmit = ({ values }: FormSubmitOptions) => {
    console.log(values);

    sendContactUsMessage(values as Body).then(res => {
      console.log(res);
    });
  };

  return (
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
          name="name"
          placeholder={trans("name")}
          containerStyle="flex-1 min-w-[200px]"
          required
        />
        <EmailInput
          name="email"
          placeholder={trans("emailAddress")}
          containerStyle="flex-1 min-w-[200px]"
          required
        />
        <TextInput
          name="subject"
          placeholder={trans("subject")}
          containerStyle="flex-1 min-w-[200px]"
          required
        />
        <TextareaInput name="message" placeholder={trans("message")} required />
        <Button className="w-fit bg-primary-main py-4 px-8 hover:bg-primary-hover">
          {trans("submit")}
        </Button>
      </div>
    </Form>
  );
}
