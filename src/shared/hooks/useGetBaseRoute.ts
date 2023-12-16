export default function useGetBaseRoute(url) {
  const match = /^\/([^/]*)/.exec(url);
  return match ? match[0] : "/";
}
