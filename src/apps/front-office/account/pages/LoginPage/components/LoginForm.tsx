import { Link } from "@mongez/react-router";
import { useState } from "react";

interface dataStateTypes {
  email: string;
  password: string;
}

interface validationStateTypes {
  emailIsValid: boolean;
  passwordIsValid: boolean;
}

interface errorsMsgStateTypes {
  emailErrorMsg: string;
  passwordErrorMsg: string;
}

const LoginForm = () => {
  const [data, setData] = useState<dataStateTypes>({
    email: "",
    password: "",
  });
  const [validation, setValidation] = useState<validationStateTypes>({
    emailIsValid: true,
    passwordIsValid: true,
  });
  const [errorMsgs, setErrorMsgs] = useState<errorsMsgStateTypes>({
    emailErrorMsg: "",
    passwordErrorMsg: "",
  });
  const { email, password } = data;
  const { emailIsValid, passwordIsValid } = validation;
  const { emailErrorMsg, passwordErrorMsg } = errorMsgs;

  const changeHandler = e => {
    const { name, value } = e.target;
    setData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
    if (value.length >= 5) {
      setValidation(prev => ({ ...prev, [name + "IsValid"]: true }));
      setErrorMsgs(prev => ({ ...prev, [name + "ErrorMsg"]: "unVaild input" }));
    } else {
      setValidation(prev => ({ ...prev, [name + "IsValid"]: false }));
      setErrorMsgs(prev => ({ ...prev, [name + "ErrorMsg"]: "unVaild input" }));
    }
  };

  const formSubmitHandler = e => {
    e.preventDefault();
    if (!email || !password || !emailIsValid || !passwordIsValid) {
      return;
    }

    setData({
      email: "",
      password: "",
    });
  };

  return (
    <div className="flex justify-center items-center h-[700px]">
      <div>
        <form
          onSubmit={formSubmitHandler}
          className="form flex justify-center items-center p-[50px] text-left w-[350px] transition-all bg-[#f6f6f6] sm:w-[400px]">
          <div className="form-container">
            <div className="form-head flex items-center space-x-1">
              <h2 className="form-head-title  text-[#333] text-[20px] mb-[10px]">
                Login
              </h2>
            </div>
            <p className="input-control mb-[20px]">
              <label className="mb-[100.5px] font-[200] text-[#1e1d23]">
                Username or email address
                <span className="required text-[#e2401c]">*</span>
              </label>
              <input
                type="text"
                value={email}
                name="email"
                onChange={changeHandler}
                className={`rounded-[10px] mt-[7px] p-[10px]  bg-white text-[#808080] h-[40px] w-[100%] border-solid border-[#e5e5e5] border-[1px] outline-none hover:border-[#ffc222]
          focus:border-[#ffc222] ${!emailIsValid ? "border-[red]" : ""}`}
              />
              {!emailIsValid && (
                <p className="text-[#ff6b6b]">{emailErrorMsg}</p>
              )}
            </p>
            <p className="input-control">
              <label className="text-[#1e1d23] font-[200] space-x-10">
                Password
                <span className="required text-[#e2401c]">*</span>
              </label>
              <input
                type="text"
                value={password}
                name="password"
                onChange={changeHandler}
                className={`rounded-[10px] mt-[7px] p-[10px] bg-white text-[#808080] h-[40px] w-[100%] border-solid border-[#e5e5e5] border-[1px] outline-none hover:border-[#ffc222]
          focus:border-[#ffc222] ${!passwordIsValid ? "border-[red]" : ""}`}
              />
              {!passwordIsValid && (
                <p className="text-[#ff6b6b]">{passwordErrorMsg}</p>
              )}
            </p>

            <button className=" transition rounded-lg hover:bg-[#eeac00] hover:text-white w-[106%] h-[14px] text-center justify-center items-center flex py-[25px] px-[45px] border-none mt-[19px] bg-[#ffc222] text-[#1e1d23] font-[700] text-[20px]">
              Log in
            </button>
          </div>
        </form>
        <div className="forget-password mt-[20px] flex justify-between items-center">
          <div className="checkbox flex space-x-1">
            <input type="checkbox" />
            <p className="text-[#808080]">Remember me</p>
          </div>
          <div className="lost-password">
            <Link to="/" className="text-[#808080] decoration-dotted">
              Lost your password?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
