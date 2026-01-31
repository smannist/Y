// this will be gone later, so will cache
import type { QueryFunction } from "@tanstack/react-query";
import type { TimelinePostData } from "@/components/TimelinePost/types";

export const mockPostsQueryKey = (url: string) => ["mock-posts", url] as const;

export const mockPostsQueryFn =
  (url: string, cacheTimeMs = 0): QueryFunction<TimelinePostData[]> =>
  async () => {
    const cacheKey = `mock-posts:${url}`;
    if (cacheTimeMs > 0 && typeof window !== "undefined") {
      try {
        const cached = localStorage.getItem(cacheKey);
        if (cached) {
          const parsed = JSON.parse(cached) as {
            timestamp: number;
            data: TimelinePostData[];
          };
          if (
            parsed &&
            Array.isArray(parsed.data) &&
            Date.now() - parsed.timestamp < cacheTimeMs
          ) {
            return parsed.data;
          }
        }
      } catch {
        localStorage.removeItem(cacheKey);
      }
    }

    const mockPostsResponse = await fetch(url);
    if (!mockPostsResponse.ok) {
      throw new Error(
        `Failed to fetch mock posts: ${mockPostsResponse.status} ${mockPostsResponse.statusText}`,
      );
    }
    const data = (await mockPostsResponse.json()) as TimelinePostData[];
    if (cacheTimeMs > 0 && typeof window !== "undefined") {
      try {
        localStorage.setItem(
          cacheKey,
          JSON.stringify({ timestamp: Date.now(), data }),
        );
      } catch {
        // Ignore write failures (storage quota, privacy mode, etc).
      }
    }
    return data;
  };
