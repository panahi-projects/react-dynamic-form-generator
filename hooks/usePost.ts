import { useState, useCallback } from "react";
import { api } from "@/utils/api";

const usePost = <T, R>(endpoint: string) => {
  const [data, setData] = useState<R | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const postData = useCallback(
    async (body: T) => {
      setLoading(true);
      setError(null);

      try {
        const response = await api.post<R>(endpoint, body);
        if (response.success && response.data !== undefined) {
          setData(response.data);
          setError(null);
        } else {
          setData(null);
          if (response.error) {
            setError(response.error);
          }
        }
      } catch (err: any) {
        setError(err.message || "Failed to submit data.");
      } finally {
        setLoading(false);
      }
    },
    [endpoint]
  );

  return { data, loading, error, postData };
};

export default usePost;
