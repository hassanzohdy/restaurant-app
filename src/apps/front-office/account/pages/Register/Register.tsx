import { yupResolver } from "@hookform/resolvers/yup";
import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import URLS from "apps/front-office/utils/urls";
import { useForm } from "react-hook-form";
import YupSchema from "../../utils/YupSchema";
import styles from "./register.module.scss";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(YupSchema),
    mode: "all",
  });

  const onSubmit = (formData: object) => {
    console.log(formData);
  };

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
          onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label
              className="block text-black font-medium text-base mb-2"
              htmlFor="fname">
              {trans("firstName")}
            </label>
            <input
              type="text"
              id="fname"
              placeholder={trans("firstName")}
              {...register("firstName")}
            />
            <span>{errors.firstName?.message}</span>
          </div>
          <div>
            <label
              className="block text-black font-medium text-base mb-2"
              htmlFor="lname">
              {trans("lastName")}
            </label>
            <input
              type="text"
              id="lname"
              placeholder={trans("lastName")}
              {...register("lastName")}
            />
            <span>{errors.lastName?.message}</span>
          </div>
          <div>
            <label
              className="block text-black font-medium text-base mb-2"
              htmlFor="phone">
              {trans("phoneNumber")}
            </label>
            <input
              type="tel"
              id="phone"
              placeholder={trans("phoneNumber")}
              {...register("phoneNumber")}
            />
            <span>{errors.phoneNumber?.message}</span>
          </div>
          <div>
            <label
              className="block text-black font-medium text-base mb-2"
              htmlFor="email">
              {trans("emailAddress")}
            </label>
            <input
              type="text"
              id="email"
              placeholder={trans("emailAddress")}
              {...register("email")}
            />
            <span>{errors.email?.message}</span>
          </div>
          <div>
            <label
              className="block text-black font-medium text-base mb-2"
              htmlFor="password">
              {trans("password")}
            </label>
            <input
              type="password"
              id="password"
              placeholder={trans("password")}
              {...register("password")}
            />
            <span>{errors.password?.message}</span>
          </div>
          <div>
            <label
              className="block text-black font-medium text-base mb-2"
              htmlFor="confirmPassword">
              {trans("confirmPassword")}
            </label>
            <input
              type="password"
              id="confirmPassword"
              placeholder={trans("confirmPassword")}
              {...register("confirmPassword")}
            />
            <span>{errors.confirmPassword?.message}</span>
          </div>
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
