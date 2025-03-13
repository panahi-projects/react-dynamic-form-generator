import { useState, useEffect } from "react";
import { api } from "@/utils/api";

const useFetch = <T>(endpoint: string) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await api.get<T>(endpoint);
        if (isMounted) {
          if (response.success && response.data !== undefined) {
            setData(response.data);
          } else {
            setData(null);
            setError(response.error || "An unknown error occurred");
          }
        }
      } catch (err: any) {
        if (err.name !== "AbortError" && isMounted) {
          setError("Failed to fetch data.");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [endpoint]);

  return { data, loading, error };
};

export default useFetch;
