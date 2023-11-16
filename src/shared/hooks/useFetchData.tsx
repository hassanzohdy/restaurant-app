import { trans } from "@mongez/localization";
import { useOnce } from "@mongez/react-hooks";
import { useState } from "react";
import endpoint from "shared/endpoint";

export default function useFetchData(
  route: string,
  id?: number | string,
  paramsList?: { name: string; value: string | number }[],
) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<any>(null);
  const [data, setData] = useState<any>({});

  const params = paramsList
    ? paramsList.map(params => `${params.name}=${params.value}`).join("")
    : "";

  useOnce(() => {
    endpoint
      .get(`/${route}/${id}?${params}`)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        setError(
          error?.response?.data?.error ||
            error?.message ||
            trans("somethingWentWrong"),
        );
      })
      .finally(() => {
        setIsLoading(false);
      });

    const lastRequest = endpoint.getLastRequest();

    return () => {
      lastRequest?.abort();
    };
  });

  return { isLoading, error, data };
}
