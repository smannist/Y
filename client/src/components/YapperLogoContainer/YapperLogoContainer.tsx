import cn from "../../utils/cn";
import { BASE_STYLES, LOGO_SIZE_STYLES } from "./consts";

import type { YapperLogoContainerProps } from "./types";

const YapperLogoContainer = ({ size }: YapperLogoContainerProps) => {
  return (
    <div
      role="img"
      aria-label="Yapper"
      className={cn(BASE_STYLES, LOGO_SIZE_STYLES[size])}
    />
  );
};

export default YapperLogoContainer;
