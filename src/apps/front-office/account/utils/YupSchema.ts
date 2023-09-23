import { trans } from "@mongez/localization";
import * as yup from "yup";

const schema = yup.object().shape({
  firstName: yup.string().required(trans("firstNameRequired")),
  lastName: yup.string().required(trans("lastNameRequired")),
  phoneNumber: yup
    .string()
    .required(trans("phoneRequired"))
    .matches(/^\d{11}$/, trans("phoneValidate")),
  email: yup
    .string()
    .email(trans("invalidEmail"))
    .required(trans("emailRequired")),
  password: yup
    .string()
    .required(trans("passwordRequired"))
    .min(8, trans("passwordMin"))
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!]).*$/,
      trans("passwordValidate"),
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], trans("cPasswordValidate"))
    .required(trans("cPasswordRequired")),
});

export default schema;
