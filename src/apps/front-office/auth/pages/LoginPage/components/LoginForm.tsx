import { trans } from "@mongez/localization";
import { Form, FormSubmitOptions } from "@mongez/react-form";
import { SubmitButton } from "apps/front-office/design-system/components/Button";
import { EmailInputV2 } from "apps/front-office/design-system/components/Form/EmailInput";
import { PasswordInputV2 } from "apps/front-office/design-system/components/Form/PasswordInput";
import "react-toastify/dist/ReactToastify.css";

interface LoginFormProps {
  submitLogin: ({ values, form }: FormSubmitOptions) => void;
}

export default function LoginForm({ submitLogin }: LoginFormProps) {
  return (
    <>
      <Form onSubmit={submitLogin} className="w-full flex flex-col gap-5">
        <h2 className="text-[#333] text-4xl text-center mb-[10px] font-bold">
          {trans("login")}
        </h2>

        <EmailInputV2
          name="email"
          label={trans("emailAddress")}
          autoFocus
          required
        />

        <PasswordInputV2
          name="password"
          label={trans("passwordLabel")}
          required
        />

        <SubmitButton>{trans("login")}</SubmitButton>
      </Form>
    </>
  );
}
