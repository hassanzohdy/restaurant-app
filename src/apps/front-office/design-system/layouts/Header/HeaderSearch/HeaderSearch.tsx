import { headerSearchAtom } from "apps/front-office/design-system/atoms/header-search-atom";
import HeaderSearchForm from "apps/front-office/design-system/layouts/Header/HeaderSearch/HeaderSearchForm";
import {IconSearch} from '@tabler/icons-react';

export default function HeaderSearch() {
  return (
    <>
    <div className="header-search">
        <span className="icon flex items-center justify-center" onClick={headerSearchAtom.open} ><IconSearch/></span>
        <HeaderSearchForm />
    </div>
    </>
  );
}
