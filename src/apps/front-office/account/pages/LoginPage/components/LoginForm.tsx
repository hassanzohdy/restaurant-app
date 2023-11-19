import { trans } from "@mongez/localization";
import { Form, FormSubmitOptions } from "@mongez/react-form";
import { Link, navigateBack } from "@mongez/react-router";
import { login } from "apps/front-office/account/service/auth";
import user from "apps/front-office/account/user";
import { SubmitButton } from "apps/front-office/design-system/components/Button";
import { PasswordInputV2 } from "apps/front-office/design-system/components/Form/PasswordInput";
import TextInputV2 from "apps/front-office/design-system/components/Form/TextInputV2";
import URLS from "apps/front-office/utils/urls";
import {} from "../../../../utils/locales";

const LoginForm = () => {
  const submitLogin = ({ values }: FormSubmitOptions) => {
    login(values)
      .then(response => {
        user.login(response.data.user);
        navigateBack();
        // TODO: Display toast success
      })
      .catch(() => {
        // TODO: Handle error
      });
  };
  return (
    <div className="flex flex-col container w-fit justify-center items-center my-[90px]">
      <Form
        className="form flex justify-center p-[40px] flex-col text-left transition-all bg-[#f6f6f6] sm:w-[500px] w-[350px] gap-5"
        onSubmit={submitLogin}>
        <h2 className="text-[#333] text-[20px] mb-[10px] font-bold">
          {trans("login")}
        </h2>

        <TextInputV2 name="email" label={trans("email")} autoFocus required />

        <PasswordInputV2
          name="password"
          label={trans("passwordLabel")}
          required
        />

        <SubmitButton>{trans("login")}</SubmitButton>
      </Form>
      <div className="mt-[20px] w-full flex justify-between items-center">
        <Link
          to={URLS.auth.register}
          className="text-[#808080] hover:text-[#535353] focus:text-[#535353] decoration-dotted">
          {trans("createAnAccount")}
        </Link>
        <Link
          to={URLS.home}
          className="text-[#808080] hover:text-[#535353] focus:text-[#535353] decoration-dotted">
          {trans("lostPassword")}
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
