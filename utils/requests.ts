export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
}

class ApiFactory {
  private baseUrl: string;
  private controllers: Map<string, AbortController>;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
    this.controllers = new Map();
  }

  private async request<T>(
    endpoint: string,
    method: "GET" | "POST" | "PUT" | "DELETE",
    body?: any,
    customHeaders?: HeadersInit
  ): Promise<ApiResponse<T>> {
    const url = `${this.baseUrl}${endpoint}`;

    // Abort previous request if exists
    if (this.controllers.has(url)) {
      this.controllers.get(url)?.abort();
    }

    const controller = new AbortController();
    this.controllers.set(url, controller);

    const headers: HeadersInit = {
      "Content-Type": "application/json",
      ...customHeaders,
    };

    const options: RequestInit = {
      method,
      headers,
      signal: controller.signal,
    };

    if (body) {
      options.body = JSON.stringify(body);
    }

    try {
      const response = await fetch(url, options);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      return { success: true, data };
    } catch (error: any) {
      if (error.name === "AbortError") {
        console.warn(`Request aborted: ${url}`);
        return { success: false, error: "Request aborted" };
      }
      return { success: false, error: error.message || "Network error" };
    } finally {
      this.controllers.delete(url);
    }
  }

  get<T>(endpoint: string, customHeaders?: HeadersInit) {
    return this.request<T>(endpoint, "GET", undefined, customHeaders);
  }

  post<T>(endpoint: string, body: any, customHeaders?: HeadersInit) {
    return this.request<T>(endpoint, "POST", body, customHeaders);
  }

  put<T>(endpoint: string, body: any, customHeaders?: HeadersInit) {
    return this.request<T>(endpoint, "PUT", body, customHeaders);
  }

  delete<T>(endpoint: string, customHeaders?: HeadersInit) {
    return this.request<T>(endpoint, "DELETE", undefined, customHeaders);
  }
}

export const api = new ApiFactory(
  process.env.NEXT_PUBLIC_API_BASE_URL || "https://assignment.devotel.io"
);
