import cn from "@/utils/cn";
import { BASE_STYLES, BACKDROP_VISIBILITY } from "./consts";

import type { BackdropProps } from "./types";

const Backdrop = ({ open, onDismiss }: BackdropProps) => {
  const isActive = open ? "active" : "inactive";

  return (
    <div
      className={cn(BASE_STYLES, BACKDROP_VISIBILITY[isActive])}
      onClick={onDismiss}
      aria-hidden={!open}
    />
  );
};

export default Backdrop;
