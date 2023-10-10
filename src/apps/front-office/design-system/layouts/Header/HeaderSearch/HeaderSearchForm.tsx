import { headerSearchAtom } from "apps/front-office/design-system/atoms/header-search-atom";
import { IconX } from '@tabler/icons-react';
import { trans } from "@mongez/localization";

export default function HeaderSearchForm() {
  const opened = headerSearchAtom.use("opened");
  
  return (
    <>
      <div className= {`search-wrapper flex items-center justify-between ${opened ? 'show' : 'hide'}`}>
        <form>
          <input type="text" placeholder={trans('searchProducts')} />
        </form>
        <button onClick={headerSearchAtom.close} className="close"><IconX/></button>
      </div>
    </>
  );
}
