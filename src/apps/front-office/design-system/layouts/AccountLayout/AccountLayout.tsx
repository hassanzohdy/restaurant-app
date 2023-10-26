import { Link } from "@mongez/react-router";
import BaseLayout from "apps/front-office/design-system/layouts/BaseLayout";
import URLS from "apps/front-office/utils/urls";

export type AccountLayoutProps = {
  children: React.ReactNode;
};
export default function AccountLayout(props: AccountLayoutProps) {
  return (
    <BaseLayout>
      <div>
        <aside>
          <Link to={URLS.account.profile}>Dashboard</Link>
          <Link to={URLS.account.updateProfile}>Update Profile</Link>
          <Link to={URLS.account.changePassword}>Change Password</Link>
        </aside>
        <section>{props.children}</section>
      </div>
    </BaseLayout>
  );
}
