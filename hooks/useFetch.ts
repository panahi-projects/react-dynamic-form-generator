import { useEffect, useState } from "react";
import { api } from "@/utils/requests";

interface FetchResult<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

/**
 * Custom hook for fetching data from an API endpoint.
 * @param endpoint API endpoint (e.g., "/users")
 * @param dependencies Optional dependencies to refetch data when changed
 */
export function useFetch<T>(
  endpoint: string,
  dependencies: any[] = []
): FetchResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      const response = await api.get<T>(endpoint);

      if (response.success && response.data !== undefined) {
        setData(response.data);
      } else {
        setData(null);
        setError(response.error || "An unknown error occurred");
      }

      setLoading(false);
    };

    fetchData();
  }, [endpoint, ...dependencies]);

  return { data, loading, error };
}
