import { trans } from "@mongez/localization";
import { Form, FormSubmitOptions } from "@mongez/react-form";
import { Link, navigateBack } from "@mongez/react-router";
import { showToastMessage } from "apps/front-office/account/hooks/useToastMessage";
import { login } from "apps/front-office/account/service/auth";
import user from "apps/front-office/account/user";
import { SubmitButton } from "apps/front-office/design-system/components/Button";
import { EmailInputV2 } from "apps/front-office/design-system/components/Form/EmailInput";
import { PasswordInputV2 } from "apps/front-office/design-system/components/Form/PasswordInput";
import { wishListAtom } from "apps/front-office/design-system/layouts/Header/atoms/header-atoms";
import { getWishlistsList } from "apps/front-office/menu/services/wishlist-service";
import URLS from "apps/front-office/utils/urls";
import "react-toastify/dist/ReactToastify.css";

const LoginForm = () => {
  const submitLogin = ({ values, form }: FormSubmitOptions) => {
    login(values)
      .then(response => {
        user.login(response.data.user);
        navigateBack();
        showToastMessage({ message: trans("successfullyLogin") });
        getWishlistsList().then(response => {
          wishListAtom.update(response.data.wishlist.meals.length);
        });
      })
      .catch(error => {
        form.submitting(false);
        showToastMessage({
          message: error.message,
          type: "error",
          position: "TOP_LEFT",
        });
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
      <div className="mt-[20px] w-full flex justify-between items-center">
        <Link
          to={URLS.auth.register}
          className="text-[#808080] hover:text-[#535353] focus:text-[#535353] decoration-dotted">
          {trans("createAnAccount")}
        </Link>
        <Link
          to={URLS.auth.forgotPassword}
          className="text-[#808080] hover:text-[#535353] focus:text-[#535353] decoration-dotted">
          {trans("lostPassword")}
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
