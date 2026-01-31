// this will be gone later, so will cache
import type { QueryFunction } from "@tanstack/react-query";
import type { TimelinePostData } from "@/components/TimelinePost/types";

export const postsQueryKey = (url: string) => ["posts", url] as const;

// use local cache for now, dont really need it but just testing -> delete later.
export const postsQueryFn =
  (url: string, cacheTimeMs = 0): QueryFunction<TimelinePostData[]> =>
  async () => {
    const cacheKey = `posts:${url}`;
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

    const postsResponse = await fetch(url);
    if (!postsResponse.ok) {
      throw new Error(
        `Failed to fetch posts: ${postsResponse.status} ${postsResponse.statusText}`,
      );
    }

    const data = (await postsResponse.json()) as TimelinePostData[];
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
