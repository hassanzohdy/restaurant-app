import { trans } from "@mongez/localization";
import { TokenResponse, useGoogleLogin } from "@react-oauth/google";
import { loginByGoogle } from "apps/front-office/account/service/auth";
import { googleIcon } from "shared/assets";
import { toastError, toastSuccess } from "shared/hooks/useToastMessage";

export default function GoogleLoginButton() {
  const handleOnSuccess = (tokenResponse: TokenResponse) => {
    loginByGoogle(tokenResponse.access_token)
      .then(() => {
        toastSuccess(trans("successfullyLogin"));
        location.reload();
      })
      .catch(({ response }) => {
        const error = response.data?.message;

        toastError(error || trans("somethingWentWrong"));
      });
  };

  const login = useGoogleLogin({
    onSuccess: tokenResponse => handleOnSuccess(tokenResponse),
  });

  return (
    <button
      onClick={() => login()}
      className="flex flex-row items-center gap-2 border w-fit border-gray-300 py-1 px-2 rounded-md shadow-md">
      <img src={googleIcon} alt="login with google" />
      <p>Login with Google</p>
    </button>
  );
}
