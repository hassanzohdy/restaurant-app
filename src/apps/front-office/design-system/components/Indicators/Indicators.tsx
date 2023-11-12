import { Link } from "@mongez/react-router";
import URLS from "apps/front-office/utils/urls";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Loader() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin">
        <AiOutlineLoading3Quarters size={50} className="text-primary-main" />
      </div>
    </div>
  );
}

export function Error({ error }: { error: React.ReactNode }) {
  return (
    <div className="flex flex-col justify-center items-center gap-5 h-screen">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-bold md:text-4xl text-bodyTextColor">
          Oops, Something went wrong!
        </h1>
        <div className="font-bold text-xl text-red-400">{error}</div>
      </div>
      <Link
        href={URLS.home}
        className="inline-block bg-primary-main hover:bg-primary-hover hover:text-white transition-colors rounded-xl font-medium py-4 px-6">
        Back to home
      </Link>
    </div>
  );
}
