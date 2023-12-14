import { AxiosInstance } from "axios";
import { useEffect, useState } from "react";

type ConfigType = {
  axiosInstance: AxiosInstance;
  method: string;
  url: string;
  requestConfig?: Object;
};

const useAxiosFunction = () => {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [controller, setController] = useState<AbortController>();

  const axiosFetch = async (config: ConfigType): Promise<void> => {
    const { axiosInstance, method, url, requestConfig } = config;
    try {
      setLoading(true);
      const ctrl = new AbortController();
      setController(ctrl);
      const res = await axiosInstance({
        method,
        url,
        ...requestConfig,
        signal: AbortSignal.timeout(5000),
      });
      console.log(res);
      setResponse(res.data);
    } catch (err: any) {
      console.log(err.message);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log();
    return () => controller && controller.abort();
  }, [controller]);

  return [response, error, loading, axiosFetch] as const;
  };

export default useAxiosFunction;
