import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import Breadcrumb from "apps/front-office/design-system/layouts/Breadcrumb";
import React from "react";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { MdLocationOn } from "react-icons/md";
import ContactUsForm from "../../components/ContactUsForm";

function _ContactUsPage() {
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
          <p className="text-primary-text mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="mt-10 flex justify-between items-start gap-10">
          <div className="space-y-5 flex-1">
            <HiOutlineDevicePhoneMobile
              size={50}
              className="text-primary-main"
            />
            <span className="inline-block font-semibold text-lg capitalize">
              {trans("phone")}:
            </span>
            <div className="text-primary-text flex-col flex gap-2">
              + 44 123 456 78 90 <br />+ 844 123 444 77 88
            </div>
          </div>

          <div className="space-y-5 flex-1">
            <MdLocationOn size={50} className="text-primary-main" />
            <span className="inline-block font-semibold text-lg capitalize">
              {trans("address")}:
            </span>
            <div className="text-primary-text flex-col flex gap-2">
              Box 565, Pinney&apos;s Beach, Charlestown,
              <br /> Nevis, West Indies, Caribbean
            </div>
          </div>

          <div className="space-y-5 flex-1">
            <HiOutlineDevicePhoneMobile
              size={50}
              className="text-primary-main"
            />
            <span className="inline-block font-semibold text-lg capitalize">
              {trans("email")}:
            </span>
            <div className="text-primary-text flex-col flex gap-2">
              <div className="text-primary-text flex-col flex gap-2">
                contact@example.com <br />
                info@example.com
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg flex-col sm:flex-row flex gap-6 border overflow-hidden mt-20">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55251.37451031098!2d31.258464350000004!3d30.059488450000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2sCairo%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1700848582913!5m2!1sen!2seg"
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
