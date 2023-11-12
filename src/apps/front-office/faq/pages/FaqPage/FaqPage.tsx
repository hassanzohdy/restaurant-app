import { trans } from "@mongez/localization";
import Accordion from "apps/front-office/design-system/components/Accordion";
import Breadcrumb from "apps/front-office/design-system/layouts/Breadcrumb";
import React from "react";

const data = [
  {
    id: "1",
    heading: "How does this work?",
    details:
      "Simply put, we deliver your favorite menu from fast-food restaurant of choice. Our platform enables you to enter your postcode and select a nearby restaurant of choice e.g McDonalds, KFC, …Wagamama e.t.c for delivery. Within each of these restaurants you will find their menus which you can add to basket, choose your payment method (PayPal or Credit / Debit Card) and submit. There you go, your order is sent to the selected restaurant or the nearby delivery driver where applicable.",
  },
  {
    id: "2",
    heading: "Can I order from different restaurant at the same time?",
    details:
      "Simply put, we deliver your favorite menu from fast-food restaurant of choice. Our platform enables you to enter your postcode and select a nearby restaurant of choice e.g McDonalds, KFC, …Wagamama e.t.c for delivery. Within each of these restaurants you will find their menus which you can add to basket, choose your payment method (PayPal or Credit / Debit Card) and submit. There you go, your order is sent to the selected restaurant or the nearby delivery driver where applicable.",
  },
  {
    id: "3",
    heading: "Are your menu prices the same as those at the restaurant?",
    details:
      "Simply put, we deliver your favorite menu from fast-food restaurant of choice. Our platform enables you to enter your postcode and select a nearby restaurant of choice e.g McDonalds, KFC, …Wagamama e.t.c for delivery. Within each of these restaurants you will find their menus which you can add to basket, choose your payment method (PayPal or Credit / Debit Card) and submit. There you go, your order is sent to the selected restaurant or the nearby delivery driver where applicable.",
  },
  {
    id: "4",
    heading: "Some menus are missing on a restaurant page?",
    details:
      "Simply put, we deliver your favorite menu from fast-food restaurant of choice. Our platform enables you to enter your postcode and select a nearby restaurant of choice e.g McDonalds, KFC, …Wagamama e.t.c for delivery. Within each of these restaurants you will find their menus which you can add to basket, choose your payment method (PayPal or Credit / Debit Card) and submit. There you go, your order is sent to the selected restaurant or the nearby delivery driver where applicable.",
  },
  {
    id: "5",
    heading:
      "Is the sugar used in your dough refined through animal bone char?",
    details:
      "Simply put, we deliver your favorite menu from fast-food restaurant of choice. Our platform enables you to enter your postcode and select a nearby restaurant of choice e.g McDonalds, KFC, …Wagamama e.t.c for delivery. Within each of these restaurants you will find their menus which you can add to basket, choose your payment method (PayPal or Credit / Debit Card) and submit. There you go, your order is sent to the selected restaurant or the nearby delivery driver where applicable.",
  },
  {
    id: "6",
    heading: "Does your pizza contain peanuts or peanut oil?",
    details:
      "Simply put, we deliver your favorite menu from fast-food restaurant of choice. Our platform enables you to enter your postcode and select a nearby restaurant of choice e.g McDonalds, KFC, …Wagamama e.t.c for delivery. Within each of these restaurants you will find their menus which you can add to basket, choose your payment method (PayPal or Credit / Debit Card) and submit. There you go, your order is sent to the selected restaurant or the nearby delivery driver where applicable.",
  },
];

function _FaqPage() {
  // /faq
  return (
    <>
      <Breadcrumb title={trans("faq")} navItems={[{ name: "faq" }]} />
      <div className="faq py-[100px] max-lg:py-[80px] max-sm:py-[70px]">
        <div className="container">
          <div className="max-w-[850px] m-auto">
            <Accordion accordionItems={data} />
          </div>
        </div>
      </div>
    </>
  );
}

const FaqPage = React.memo(_FaqPage);
export default FaqPage;
