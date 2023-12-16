import { trans } from "@mongez/localization";

export default function OrderNotes() {
  return (
    <div className="w-full gap-3">
      <h3 className="font-bold text-[1.6em] clear-both">
        {trans("orderNotes2")}
      </h3>
      <div className="border rounded-xl p-3 w-full">
        <div>
          <textarea
            name="orderNotes"
            id="orderNotes"
            className="w-full h-full outline-none mt-1 block p-2 bg-white border border-border rounded-md text-base placeholder-slate-400 focus:outline-none focus:border-primary-main "
            placeholder={trans("enterYourNotes")}
          />
        </div>
      </div>
    </div>
  );
}
