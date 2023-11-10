import { AxiosResponse } from "axios";

export function responseMockup<T = any>(
  data: T,
  delay = 2000,
): Promise<AxiosResponse<T>> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        data,
      } as AxiosResponse<T>);
    }, delay);
  });
}
