import { trans } from "@mongez/localization";

export default function FooterNewsLetter() {
  return (
    <>
      <div>
        <h3 className="heading text-xl uppercase text-white">
          {trans("newsLetter")}
        </h3>
        <p>Subscribe to the weekly newsletter for all the latest updates</p>
        <div className="newsletter">
          <form>
            <div className="form-group flex justify-between">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="useremail"
                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder={trans("yourEmail")}
              />
              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                {trans("subscribe")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
