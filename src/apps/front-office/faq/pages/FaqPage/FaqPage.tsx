import { trans } from "@mongez/localization";
import { useOnce } from "@mongez/react-hooks";
import Accordion from "apps/front-office/design-system/components/Accordion";
import Breadcrumb from "apps/front-office/design-system/layouts/Breadcrumb";
import React, { useState } from "react";
import { getFaqsList } from "../../services/faq-service";
import Loader, { Error } from "apps/front-office/design-system/components/Indicators/Indicators";
import { FaqType } from "../../utils/types";


function _FaqPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [faq, setFaq] = useState<FaqType[]>([]);
  const [error, setError] = useState<any>(null);

  useOnce(() => {
    getFaqsList().then(response => {
      setFaq(response.data.questions)
    }).catch(error => {
      setError(error.response?.data?.error || error.message || trans("somethingWentWrong") )
    }).finally(() => setIsLoading(false))
  })

  if(isLoading) {
    return <Loader/>
  }

  if(error) {
    return <Error error={error}/>
  }

  return (
    <>
      <Breadcrumb title={trans("faq")} navItems={[{ name: "faq" }]} />
      <div className="faq py-[70px]">
        <div className="container">
          <div className="max-w-[850px] m-auto">
          <h3 className="block text-[40px] font-bold capitalize text-bodyTextColor mb-8 leading-tight max-md:text-[32px]">{trans("frequentlyAskedQuestions")}</h3>
            <Accordion accordionItems={faq} />
          </div>
        </div>
      </div>
    </>
  );
}

const FaqPage = React.memo(_FaqPage);
export default FaqPage;
