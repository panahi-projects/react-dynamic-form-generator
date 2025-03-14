import { useState, useCallback, useEffect } from "react";
import { api } from "@/utils/api";

const useFetch = <T>(endpoint: string, fetchOnMount: boolean = true) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await api.get<T>(endpoint);
      if (response.success && response.data !== undefined) {
        setData(response.data);
        setError(null); // Ensure no lingering error
      } else {
        setData(null);
        if (response.error) {
          setError(response.error);
        }
      }
    } catch (err: any) {
      if (err.name !== "AbortError") {
        setError(err.message || "Failed to fetch data.");
      }
    } finally {
      setLoading(false);
    }
  }, [endpoint]);

  useEffect(() => {
    let isMounted = true; // Track component mount state

    if (fetchOnMount) {
      fetchData().then(() => {
        if (!isMounted) return; // Avoid setting state if unmounted
      });
    } else {
      setLoading(false);
    }

    return () => {
      isMounted = false;
    };
  }, [fetchOnMount, fetchData]);

  return { data, loading, error, refetch: fetchData };
};

export default useFetch;
