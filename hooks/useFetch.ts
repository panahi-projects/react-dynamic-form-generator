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
      } else {
        setData(null);
        setError(response.error || "An unknown error occurred");
      }
    } catch (err: any) {
      if (err.name !== "AbortError") {
        setError("Failed to fetch data.");
      }
    } finally {
      setLoading(false);
    }
  }, [endpoint]);

  useEffect(() => {
    if (fetchOnMount) {
      fetchData();
    } else {
      // If fetchOnMount is false, set loading to false immediately
      setLoading(false);
    }
  }, [fetchOnMount, fetchData]);

  return { data, loading, error, refetch: fetchData };
};

export default useFetch;
