import { trans } from "@mongez/localization";
import { TokenResponse, useGoogleLogin } from "@react-oauth/google";
import { loginByGoogle } from "apps/front-office/account/service/auth";
import { googleIcon } from "shared/assets";
import { toastError, toastSuccess } from "shared/hooks/useToastMessage";

export default function GoogleCreateAccountButton() {
  const handleOnSuccess = (tokenResponse: TokenResponse) => {
    loginByGoogle(tokenResponse.access_token)
      .then(res => {
        toastSuccess(trans("successfullyLogin"));
        // location.reload();
        console.log(res);
      })
      .catch(({ error }) => {
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
      <img src={googleIcon} alt="Create Account with google" />
      <p>Create Account with google</p>
    </button>
  );
}
