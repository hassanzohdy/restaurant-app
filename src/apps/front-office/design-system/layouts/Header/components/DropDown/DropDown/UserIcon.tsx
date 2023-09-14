import { Link } from "@mongez/react-router";
import URLS from "apps/front-office/utils/urls";
import { useState } from "react";
import { BiUser } from "react-icons/bi";

export default function UserIcon() {
  const [user, setUser] = useState<boolean>(false);
  const ToggleUser = () => {
    setUser(prev => !prev);
  };
  return (
    <div className="relative">
      <div
        onClick={() => ToggleUser()}
        className="border  border-border cursor-pointer rounded-full p-3 text-xl hover:bg-primary_hover">
        <BiUser />
      </div>
      <div
        className={`absolute  top-[50px] border-primary border-t overflow-hidden duration-200 -right-[0px] shadow-list transition-all bg-white ${
          user ? "w-[280px] h-[356.469px] p-5" : "h-0 w-0 p-0"
        }`}>
        <div className="h-[48px]">
          <span className="text-[18px] text-[#333]">Sign in</span>
          <Link
            to={URLS.auth.register}
            className="text-primary text-[14px] hover:underline ml-2">
            Create an Account
          </Link>
        </div>
        <form>
          <label
            htmlFor="email"
            className="mb-[.5rem] text-[14px] leading-[1.5] text-body font-normal">
            Username or email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            className="rounded-md text-body p-[10px] w-full border-border border border-solid outline-none"
            id="email"
            placeholder="Username"
          />
          <label
            htmlFor="password"
            className="mb-[.5rem] text-[14px] leading-[1.5] text-body font-normal">
            Password <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            id="password"
            placeholder="password"
            className="rounded-md text-body p-[10px] w-full border-border border border-solid outline-none"
          />
          <div>
            <button className="bg-primary text-black font-bold w-full py-2 rounded-lg text-sm mt-5">
              LOGIN
            </button>
          </div>
        </form>
        <div className="mt-12">
          <Link
            to={URLS.auth.resetPassword}
            className="text-primary text-[14px] hover:underline ">
            Lost your password?
          </Link>
        </div>
      </div>
    </div>
  );
}
