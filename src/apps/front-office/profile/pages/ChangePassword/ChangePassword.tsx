import { trans } from "@mongez/localization";
import { Form } from "@mongez/react-form";
import { SubmitButton } from "apps/front-office/design-system/components/Button";
import { PasswordInputV2 } from "apps/front-office/design-system/components/Form/PasswordInput";
import { memo } from "react";
import useAccount from "../../hook/use-account";

function _ChangePassword() {
  const { changePassword } = useAccount();

  return (
    <Form onSubmit={({ values }) => changePassword(values)}>
      <div className="grid md:grid-cols-2  gap-3">
        <PasswordInputV2
          label={trans("currentPassword")}
          name="currentPassword"
          minLength={8}
          required
        />
        <PasswordInputV2
          label={trans("password")}
          name="password"
          minLength={8}
          required
        />
        <div className="col-span-2 w-1/2 mx-auto">
          <PasswordInputV2
            label={trans("confirmPassword")}
            name="confirmPassword"
            minLength={8}
            required
          />
        </div>
      </div>
      <div className="w-1/5 mx-auto mt-5">
        <SubmitButton>{trans("changePassword")}</SubmitButton>
      </div>
    </Form>
  );
}

const UpdateProfile = memo(_ChangePassword);
export default UpdateProfile;
