export type OverLayProps = {
  atom;
  opened: boolean;
};
export default function OverLay({ atom, opened }: OverLayProps) {
  return (
    <>
      <div
        className={`overlay ${opened ? "show" : "hide"} z-40`}
        onClick={() => atom.change("opened", false)}></div>
    </>
  );
}
