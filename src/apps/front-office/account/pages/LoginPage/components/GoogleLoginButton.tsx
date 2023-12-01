import { trans } from "@mongez/localization";
import { TokenResponse, useGoogleLogin } from "@react-oauth/google";
import { showToastMessage } from "apps/front-office/account/hooks/useToastMessage";
import { loginByGoogle } from "apps/front-office/account/service/auth";
import { useEffect } from "react";

export default function GoogleLoginButton() {
  useEffect(() => {}, []);

  const handleOnSuccess = (tokenResponse: TokenResponse) => {
    console.log(tokenResponse);
    loginByGoogle(tokenResponse.access_token)
      .then(response => {
        console.log(response);
        // user.login(response.data.user);
      })
      .catch(({ response }) => {
        console.log(response);
        const error = response.data?.message;

        showToastMessage({
          message: error || trans("somethingWentWrong"),
          type: "error",
        });
      });
  };

  const login = useGoogleLogin({
    onSuccess: tokenResponse => handleOnSuccess(tokenResponse),
  });

  return (
    <div className="div-button">
      <button onClick={() => login()}>google</button>
    </div>
  );
}
