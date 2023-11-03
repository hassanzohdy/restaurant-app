import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import Breadcrumb from "apps/front-office/design-system/layouts/Breadcrumb";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Helmet title={trans("privacyPolicy")} />
      <Breadcrumb
        title={trans("privacyPolicy")}
        navItems={[{ name: trans("privacyPolicy") }]}
      />
      <div className="privacy-policy py-[100px] max-lg:py-[80px] max-sm:py-[70px]">
        <div className="container">
          <h2 className="text-[28px] font-semibold leading-tight mb-2 max-sm:text-[22px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h2>
          <p className="text-[18px] leading-relaxed mb-1 max-sm:text-[16px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam soluta
            libero cupiditate nemo nihil dolores, temporibus quos asperiores,
            expedita ad assumenda commodi non in iste modi quibusdam labore sunt
            vero.
          </p>
          <p className="text-[18px] leading-relaxed mb-5 max-sm:text-[16px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
            placeat ipsam maiores nesciunt veritatis expedita ea fuga laborum?
            In corporis totam consectetur quos quo! Magni laboriosam pariatur
            blanditiis? Quidem, sequi? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ratione nesciunt error animi suscipit vitae in et.
            Ab ut a corrupti laboriosam cumque nobis ipsam dignissimos, atque
            provident totam laborum illum. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Voluptatibus dolor sapiente aspernatur
            explicabo natus rem cupiditate cum enim repellat maiores, voluptates
            sit, iste fugit sequi ab odit quaerat. Officia, dolorum.
          </p>
          <h2 className="text-[28px] font-semibold mb-2 leading-tight max-sm:text-[22px]">
            Minima placeat ipsam maiores nesciunt veritatis expedita ea fuga
            laborum?{" "}
          </h2>
          <p className="text-[18px] leading-relaxed mb-1 max-sm:text-[16px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
            placeat ipsam maiores nesciunt veritatis expedita ea fuga laborum?
            In corporis totam consectetur quos quo! Magni laboriosam pariatur
            blanditiis? Quidem, sequi? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ratione nesciunt error animi suscipit vitae in et.
            Ab ut a corrupti laboriosam cumque nobis ipsam dignissimos, atque
            provident totam laborum illum. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Voluptatibus dolor sapiente aspernatur
            explicabo natus rem cupiditate cum enim repellat maiores, voluptates
            sit, iste fugit sequi ab odit quaerat. Officia, dolorum.
          </p>
          <p className="text-[18px] leading-relaxed mb-5 max-sm:text-[16px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            corporis perspiciatis incidunt, saepe quasi assumenda quo amet, nemo
            quos voluptate necessitatibus officia nihil impedit ducimus ipsum
            quidem error commodi non!
          </p>
          <ul>
            <li className="flex relative pl-[15px] mb-2 before before:block before:w-[8px] before:h-[8px] before:rounded-full before:bg-secondary before:absolute before:top-[9px] before:left-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </li>
            <li className="flex relative pl-[15px] mb-2 before before:block before:w-[8px] before:h-[8px] before:rounded-full before:bg-secondary before:absolute before:top-[9px] before:left-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab autem
              impedit ea perspiciatis libero, aperiam illum illo accusantium
              animi necessitatibus itaque ipsam nobis consectetur, eligendi
              corrupti consequatur adipisci vero beatae!
            </li>
            <li className="flex relative pl-[15px] mb-2 before before:block before:w-[8px] before:h-[8px] before:rounded-full before:bg-secondary before:absolute before:top-[9px] before:left-0">
              A, reprehenderit, vero soluta aperiam vitae, cum quasi alias
              magnam quod natus quia. Modi maxime cumque optio eos reiciendis
              quam! Nisi, soluta.
            </li>
            <li className="flex relative pl-[15px] mb-2 before before:block before:w-[8px] before:h-[8px] before:rounded-full before:bg-secondary before:absolute before:top-[9px] before:left-0">
              In corporis totam consectetur quos quo! Magni laboriosam pariatur
              blanditiis? Quidem, sequi?
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
