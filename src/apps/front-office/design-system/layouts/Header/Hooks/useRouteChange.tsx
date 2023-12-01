import { useEvent } from "@mongez/react-hooks";
import { routerEvents } from "@mongez/react-router";

export function useRouteChange(callback: () => void) {
  useEvent(() => {
    const handleRouteChange = () => {
      callback();
    };

    return routerEvents.onNavigating(handleRouteChange);
  });
}
