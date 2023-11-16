import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import LoginForm from "apps/front-office/account/pages/LoginPage/components/LoginForm";
import Breadcrumb from "apps/front-office/design-system/layouts/Breadcrumb";
import "./LoginPage.scss";
const LoginPage = () => {
  return (
    <div className="loginPage">
      <Helmet title={trans("login")} />
      <Breadcrumb
        title={trans("login")}
        navItems={[{ name: trans("login") }]}
      />
      <LoginForm />
    </div>
  );
};
export default LoginPage;
