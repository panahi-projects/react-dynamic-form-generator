import { useState, useEffect } from "react";
import { api } from "@/utils/requests"; // Your centralized API factory

const useFetch = <T>(endpoint: string) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const fetchData = async () => {
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
          // Only set error if it’s NOT an aborted request
          setError("Failed to fetch data.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Cleanup function to abort the request when component unmounts
    return () => controller.abort();
  }, [endpoint]);

  return { data, loading, error };
};

export default useFetch;
