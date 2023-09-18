import { headerSearchAtom } from "apps/front-office/design-system/atoms/header-search-atom";

export default function HeaderSearchForm() {
  const opened = headerSearchAtom.use("opened");

  return (
    <form
      style={{
        display: opened ? "block" : "none",
      }}>
      <input type="text" />
      <button onClick={headerSearchAtom.close}>Close</button>
    </form>
  );
}
