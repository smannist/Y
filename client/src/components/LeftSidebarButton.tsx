import cn from "../utils/cn";

import type { JSX } from "react";

type LeftSidebarButtonProps = {
  variant: "create" | "signIn";
  onClick: () => void;
};

const BASE_STYLES =
  "w-full py-3 rounded-full font-semibold cursor-pointer transition-colors transition-opacity";

const LABELS: Record<LeftSidebarButtonProps["variant"], string> = {
  create: "Create account",
  signIn: "Sign in",
};

const VARIANT_STYLES: Record<LeftSidebarButtonProps["variant"], string> = {
  create:
    "bg-gradient-to-r from-yapper-peach to-yapper-pink text-white hover:opacity-90",
  signIn:
    "border-2 border-yapper-pink text-yapper-text hover:bg-yapper-pink/10",
};

const LeftSidebarButton = ({
  variant,
  onClick,
}: LeftSidebarButtonProps): JSX.Element => {
  return (
    <button
      onClick={onClick}
      className={cn(BASE_STYLES, VARIANT_STYLES[variant])}
      type="button"
    >
      {LABELS[variant]}
    </button>
  );
};

export default LeftSidebarButton;
