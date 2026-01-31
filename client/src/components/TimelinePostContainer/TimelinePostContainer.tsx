import { useQuery } from "@tanstack/react-query";
import { mockPostsQueryFn, mockPostsQueryKey } from "@/queries/mockPosts.query";

import cn from "@/utils/cn";
import TimelinePost from "@/components/TimelinePost";

import {
  BASE_CONTAINER_STYLES,
  BASE_HEADER_STYLES,
  TIMELINE_CONTAINER_STYLES,
  TIMELINE_SCROLL_AREA_STYLES,
  CACHE_TIME,
} from "./consts";

const TimelinePostContainer = () => {
  const mockPostsUrl = import.meta.env.DEV
    ? "/api/mock-posts"
    : `${(import.meta.env.VITE_API_BASE_URL ?? "").replace(/\/+$/, "")}/api/mock-posts`;

  const {
    data = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: mockPostsQueryKey(mockPostsUrl),
    queryFn: mockPostsQueryFn(mockPostsUrl, CACHE_TIME),
    // use local cache for now not really needed but really for testing purposes
    staleTime: CACHE_TIME,
    gcTime: CACHE_TIME,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
  });

  return (
    <div className={BASE_CONTAINER_STYLES}>
      <div className={TIMELINE_CONTAINER_STYLES}>
        <h1 className={BASE_HEADER_STYLES}>Latest Yaps</h1>
        <div
          className={cn(
            "divide-y divide-yapper-border",
            TIMELINE_SCROLL_AREA_STYLES,
          )}
        >
          {isError && (
            <div className="p-4 text-yapper-text transition-colors">
              <div className="font-semibold">Failed to load posts.</div>
              <div className="mt-2 text-sm text-yapper-text/80">
                {error.message}
              </div>
            </div>
          )}
          {!isLoading &&
            !isError &&
            data.map((post) => <TimelinePost key={post.id} post={post} />)}
        </div>
      </div>
    </div>
  );
};

export default TimelinePostContainer;
