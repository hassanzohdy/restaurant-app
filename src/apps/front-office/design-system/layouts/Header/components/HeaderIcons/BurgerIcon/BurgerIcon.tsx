import useToggleState from "apps/front-office/design-system/layouts/Header/Hooks/HeaderStateHook";
export default function BurgerIcon() {
  const { toggleState } = useToggleState();
  return (
    <div
      className="lg:hidden  flex gap-[5px] flex-col cursor-pointer"
      onClick={() => toggleState("burgerIcon")}>
      <div className="w-5 h-[2px] bg-black"></div>
      <div className="w-3 h-[2px] bg-black"></div>
      <div className="w-5 h-[2px] bg-black"></div>
    </div>
  );
}
