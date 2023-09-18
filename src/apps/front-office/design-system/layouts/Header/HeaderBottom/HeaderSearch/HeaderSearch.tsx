import { headerSearchAtom } from "apps/front-office/design-system/atoms/header-search-atom";
import HeaderSearchForm from "apps/front-office/design-system/layouts/Header/HeaderBottom/HeaderSearch/HeaderSearchForm";

export default function HeaderSearch() {
  return (
    <>
      <button onClick={headerSearchAtom.open}>Search Icon</button>
      <HeaderSearchForm />
    </>
  );
}
