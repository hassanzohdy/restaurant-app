import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import BaseLayout from "apps/front-office/design-system/layouts/BaseLayout";
import Breadcrumb from "apps/front-office/design-system/layouts/Breadcrumb";
import UpdateProfileAside from "./UpdateProfileAside";

export type UpdateProfileLayoutProps = {
  children: React.ReactNode;
};

export default function UpdateProfileLayout({
  children,
}: UpdateProfileLayoutProps) {
  return (
    <BaseLayout>
      <Helmet title={trans("updateProfile")} />
      <Breadcrumb
        title={trans("updateProfile")}
        navItems={[{ name: trans("profile") }]}
      />
      <div className="flex container py-9 flex-col md:flex-row">
        <UpdateProfileAside />
        <section className="md:ltr:border-l-4 md:rtl:border-r-4 md:border-t-0 border-t-4 z-10 md:rtl:mr-[-6px] md:ltr:ml-[-4px] md:mt-0 mt-[-4px] w-full p-5">
          {children}
        </section>
      </div>
    </BaseLayout>
  );
}
