import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import URLS from "apps/front-office/utils/urls";
import { Form } from "@mongez/react-form";
import styles from "./register.module.scss";
import TextInput from "./TextInput";

export default function Register() {
  return (
    <>
      <div
        className={`${styles.register} container box-border w-10/12 sm:w-3/5 md:max-w-md h-auto my-12   shadow flex gap-5 place-items-center flex-col p-4 rounded-md`}>
        <h2 className="text-heading text-2xl font-bold pb-6">
          {trans("createAccount")}
        </h2>
        <button className="bg-slate-200 w-16 h-12 grid place-items-center rounded-md">
          <Link to={`${URLS.home}`} target="_blank">
            <img
              src="/src/shared/assets/images/google.svg"
              alt="google signup icon"
            />
          </Link>
        </button>

        <div
          className={`${styles.hr} opacity-40 text-sm flex items-center mt-1`}>
          {trans("doViaEmail")}
        </div>

        <form
          className="form grid grid-cols-1 sm:grid-cols-2 gap-4"
          onSubmit={values => {
            console.log(values);
          }}>
          <TextInput
            type="text"
            id="fname"
            placeholder={trans("firstName")}
            name="user.firstName"
          />
          <TextInput
            type="text"
            id="lname"
            placeholder={trans("lastName")}
            name="user.lastName"
          />
          <TextInput
            type="tel"
            id="phone"
            placeholder={trans("phoneNumber")}
            name="user.phoneNumber"
          />
          <TextInput
            type="text"
            id="email"
            placeholder={trans("emailAddress")}
            name="user.emailAddress"
          />
          <TextInput
            type="password"
            id="password"
            placeholder={trans("password")}
            name="user.passowrd"
          />
          <TextInput
            type="password"
            id="confirmPassword"
            placeholder={trans("confirmPassword")}
            name="user.confirmPassword"
          />

          <button className="bg-secondary w-full hover:bg-green-700 text-white font-bold mt-1 mb-4 py-2 px-4 rounded sm:col-span-2">
            <Link to={`${URLS.home}`} type="submit">
              {trans("createAccount")}
            </Link>
          </button>
        </form>

        <p>
          {trans("signInAlready")}{" "}
          <Link to={`${URLS.auth.login}`} className="text-secondary font-bold">
            {trans("login")}
          </Link>
        </p>
      </div>
    </>
  );
}
