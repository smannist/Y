import cn from "@/utils/cn";

import { BASE_CONTAINER_STYLES, BASE_HEADER_STYLES } from "./consts";

const MainContentCenter = () => {
  return (
    <div className={cn(BASE_CONTAINER_STYLES)}>
      <h1 className={cn(BASE_HEADER_STYLES)}>
        Yapper is coming to you soon...
      </h1>
    </div>
  );
};

export default MainContentCenter;
