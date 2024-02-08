import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import { useOnce } from "@mongez/react-hooks";
import { isEmpty } from "@mongez/supportive-is";
import { getMe } from "apps/front-office/account/service/auth";
import Breadcrumb from "apps/front-office/design-system/layouts/Breadcrumb";
import { settingsAtom } from "apps/general/atoms/settings-atom";
import React from "react";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { MdLocationOn } from "react-icons/md";
import ContactUsForm from "../../components/ContactUsForm";

function _ContactUsPage() {
  const { address, email, phoneNumber, locationUrl } =
    settingsAtom.use("contact") || {};

  useOnce(() => {
    if (isEmpty(address)) {
      getMe();
    }
  });

  return (
    <>
      <Helmet title={trans("contactUs")} />
      <Breadcrumb
        navItems={[{ name: trans("contactUs") }]}
        title={trans("contactUs")}
      />
      <section className="container py-20">
        <div>
          <h2 className="font-bold text-2xl lg:text-4xl">
            {trans("callUsOrVisit")}
          </h2>
        </div>

        <div className="mt-10 flex flex-col md:flex-row items-center text-center md:text-start justify-between md:items-start gap-10">
          <div className="space-y-5 flex-1">
            <HiOutlineDevicePhoneMobile
              size={50}
              className="text-primary-main mx-auto md:mx-0"
            />
            <span className="inline-block font-semibold text-lg capitalize">
              {trans("phone")}:
            </span>
            <div className="text-primary-text flex-col flex gap-2">
              {phoneNumber}
            </div>
          </div>

          <div className="space-y-5 flex-1">
            <MdLocationOn
              size={50}
              className="text-primary-main mx-auto md:mx-0"
            />
            <span className="inline-block font-semibold text-lg capitalize">
              {trans("address")}:
            </span>
            <div className="text-primary-text whitespace-break-spaces flex-col flex gap-2">
              {address}
            </div>
          </div>

          <div className="space-y-5 flex-1">
            <HiOutlineDevicePhoneMobile
              size={50}
              className="text-primary-main mx-auto md:mx-0"
            />
            <span className="inline-block font-semibold text-lg capitalize">
              {trans("email")}:
            </span>
            <div className="text-primary-text flex-col flex gap-2">
              <div className="text-primary-text flex-col flex gap-2">
                {email}
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg flex-col sm:flex-row flex gap-6 border overflow-hidden mt-20">
          <iframe
            src={locationUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="flex-1 col-auto"></iframe>
          <ContactUsForm />
        </div>
      </section>
    </>
  );
}

const ContactUsPage = React.memo(_ContactUsPage);
export default ContactUsPage;
