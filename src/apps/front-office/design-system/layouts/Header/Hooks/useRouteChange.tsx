import { routerEvents } from "@mongez/react-router";
import { useEffect } from "react";

export function useRouteChange(callback: () => void) {
  useEffect(() => {
    const handleRouteChange = () => {
      callback();
    };

    const routeChangeSubscription =
      routerEvents.onNavigating(handleRouteChange);

    return () => {
      routeChangeSubscription.unsubscribe();
    };
  }, [callback]);
}
