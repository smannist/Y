import cn from "../utils/cn";

import type { JSX } from "react";

const BASE_CONTAINER_STYLES =
  "flex items-center justify-center min-h-screen px-4 pt-20 md:pl-78 md:pr-6 md:pt-6";

const BASE_HEADER_STYLES =
  "font-bold text-small text-yapper-text transition-colors";

const MainContentCenter = (): JSX.Element => {
  return (
    <div className={cn(BASE_CONTAINER_STYLES)}>
      <h1 className={cn(BASE_HEADER_STYLES)}>
        Yapper is coming to you soon...
      </h1>
    </div>
  );
};

export default MainContentCenter;
