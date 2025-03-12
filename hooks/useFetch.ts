import { useState, useEffect } from "react";
import { api } from "@/utils/api"; // Your centralized API factory

const useFetch = <T>(endpoint: string) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await api.get<T>(endpoint); // ✅ No need to pass { signal }

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
    };

    fetchData();

    return () => {
      controller.abort(); // ✅ Abort request on unmount
      setError(null); // ✅ Clear error state to prevent displaying "Request Aborted"
    };
  }, [endpoint]);

  return { data, loading, error };
};

export default useFetch;
