import { trans } from "@mongez/localization";
import { Form } from "@mongez/react-form";
import { OptInput } from "apps/front-office/account/components/OptInput";
import { useCreateAccountVerifyCode } from "apps/front-office/account/hooks";
import { SubmitButton } from "apps/front-office/design-system/components/Button";
import { BsEnvelopeCheck } from "react-icons/bs";

export type OtpFormProps = {
  otpEmail: string;
};
export default function OtpForm({ otpEmail }: OtpFormProps) {
  const verifyCodeSubmit = useCreateAccountVerifyCode(otpEmail);

  return (
    <>
      <div className="flex flex-col items-center mb-5 ">
        <BsEnvelopeCheck className="text-green-500 text-6xl mb-5" />
        <h1 className="text-4xl font-bold mb-10">{trans("verifyYourEmail")}</h1>
        <p className="px-6 text-center text-gray-600">
          {trans("enterVerificationCode")}
          {'"'}
          {otpEmail}
          {'"'}.
        </p>
        <p className="text-gray-600">{trans("codeValidFor30Minutes")}</p>
      </div>

      <Form onSubmit={verifyCodeSubmit} className="px-10">
        <OptInput
          name="code"
          label="Verification code"
          required
          className="border-border border mb-3"
        />
        <SubmitButton>{trans("continue")}</SubmitButton>
      </Form>
    </>
  );
}
