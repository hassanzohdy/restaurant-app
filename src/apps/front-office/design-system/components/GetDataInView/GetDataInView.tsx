import { AxiosResponse } from "axios";
import { useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export type GetDataInViewProps = {
  callback: () => Promise<AxiosResponse<any, any>>;
};
export default function GetDataInView({ callback }: GetDataInViewProps) {
  const { ref, inView } = useInView({ triggerOnce: true });

  const [data, setData] = useState<any>();
  const [isLoaded, setIsLoaded] = useState(false);

  console.log("I'm here");

  const loadData = useCallback(() => {
    console.log("in load data");
    callback()
      .then(response => {
        setData(response.data);
      })
      .catch(err => console.log(err))
      .finally(() => {
        setIsLoaded(true);
      });
  }, [callback]);

  useEffect(() => {
    if (inView) {
      loadData();
    }
  }, [inView, loadData]);

  return { inView, data, ref, isLoaded };
}
