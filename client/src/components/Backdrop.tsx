import cn from "../utils/cn";

import type { JSX } from "react";

type BackdropProps = {
  open: boolean;
  onDismiss: () => void;
};

const BASE_STYLES =
  "fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 md:hidden";

const BACKDROP_VISIBILITY: Record<"active" | "inactive", string> = {
  active: "opacity-100",
  inactive: "opacity-0 pointer-events-none",
};

const Backdrop = ({ open, onDismiss }: BackdropProps): JSX.Element => {
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
