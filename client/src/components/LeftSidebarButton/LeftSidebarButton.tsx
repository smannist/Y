import cn from "@/utils/cn";
import { BASE_STYLES, VARIANTS } from "./consts";

import type { LeftSidebarButtonProps } from "./types";

const LeftSidebarButton = ({ variant, onClick }: LeftSidebarButtonProps) => {
  const btnVariants = VARIANTS[variant];

  return (
    <button
      onClick={onClick}
      className={cn(BASE_STYLES, btnVariants.styles)}
      type="button"
    >
      {btnVariants.label}
    </button>
  );
};

export default LeftSidebarButton;
