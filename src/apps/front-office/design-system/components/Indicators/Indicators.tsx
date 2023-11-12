export default function Loader() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
    </div>
  );
}

// TODO: Make a nice error display component
export function Error({ error }: { error: React.ReactNode }) {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="font-bold text-xl text-red-500">{error}</div>
    </div>
  );
}
